import translations from "../i18n/translations.json";

type LanguageCode = keyof typeof translations;

const supportedLanguages: LanguageCode[] = ["en", "es", "fr", "de", "da", "zh"];
const languageMeta: Record<LanguageCode, { code: string; locale: string; ogLocale: string }> = {
  en: { code: "EN", locale: "en-GB", ogLocale: "en_GB" },
  es: { code: "ES", locale: "es-ES", ogLocale: "es_ES" },
  fr: { code: "FR", locale: "fr-FR", ogLocale: "fr_FR" },
  de: { code: "DE", locale: "de-DE", ogLocale: "de_DE" },
  da: { code: "DA", locale: "da-DK", ogLocale: "da_DK" },
  zh: { code: "中文", locale: "zh-CN", ogLocale: "zh_CN" },
};

const isSupported = (value: string | null): value is LanguageCode =>
  !!value && supportedLanguages.includes(value as LanguageCode);

const readPath = (source: unknown, path: string): unknown => {
  return path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);
};

const valueFor = (lang: LanguageCode, key: string): string | undefined => {
  const localized = readPath(translations[lang], key);
  const fallback = readPath(translations.en, key);
  const value = localized ?? fallback;
  return typeof value === "string" ? value : undefined;
};

const updateLanguageControls = (lang: LanguageCode) => {
  document.querySelectorAll<HTMLElement>("[data-language-current-code]").forEach((node) => {
    node.textContent = languageMeta[lang].code;
  });

  document.querySelectorAll<HTMLElement>("[data-language-option]").forEach((node) => {
    const active = node.dataset.languageOption === lang;
    node.setAttribute("aria-current", active ? "true" : "false");
    node.querySelector<HTMLElement>("[data-language-active]")?.classList.toggle("opacity-0", !active);
  });
};

const formatDates = (lang: LanguageCode) => {
  document.querySelectorAll<HTMLElement>("[data-i18n-date]").forEach((node) => {
    const dateValue = node.dataset.i18nDate;
    if (!dateValue) return;
    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return;
    node.textContent = new Intl.DateTimeFormat(languageMeta[lang].locale, {
      timeZone: "UTC",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  });
};

const applyLanguage = (lang: LanguageCode, persist = true) => {
  const root = document.documentElement;
  root.lang = languageMeta[lang].locale;
  root.dataset.language = lang;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) return;
    const value = valueFor(lang, key);
    if (value !== undefined) node.textContent = value;
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (!key) return;
    const value = valueFor(lang, key);
    if (value !== undefined) node.innerHTML = value;
  });

  const translatedAttributes: Array<[string, string]> = [
    ["data-i18n-aria-label", "aria-label"],
    ["data-i18n-alt", "alt"],
    ["data-i18n-title", "title"],
    ["data-i18n-content", "content"],
  ];

  translatedAttributes.forEach(([dataAttribute, targetAttribute]) => {
    document.querySelectorAll<HTMLElement>(`[${dataAttribute}]`).forEach((node) => {
      const key = node.getAttribute(dataAttribute);
      if (!key) return;
      const value = valueFor(lang, key);
      if (value !== undefined) node.setAttribute(targetAttribute, value);
    });
  });

  formatDates(lang);
  updateLanguageControls(lang);

  const ogLocale = document.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
  if (ogLocale) ogLocale.content = languageMeta[lang].ogLocale;

  if (persist) localStorage.setItem("portfolio-language", lang);
  root.classList.remove("i18n-pending");

  window.dispatchEvent(new CustomEvent("portfolio:language-changed", { detail: { lang } }));
};

declare global {
  interface Window {
    setPortfolioLanguage?: (lang: string) => void;
    getPortfolioLanguage?: () => string;
  }
}

window.setPortfolioLanguage = (candidate: string) => {
  if (isSupported(candidate)) applyLanguage(candidate, true);
};
window.getPortfolioLanguage = () => document.documentElement.dataset.language || "en";

const stored = localStorage.getItem("portfolio-language");
const initialLanguage: LanguageCode = isSupported(stored) ? stored : "en";
applyLanguage(initialLanguage, false);
