export interface Language {
	name: string;
	iconName: string;
	className?: string;
}

export const languages: Record<string, Language> = {
	astro: {
		name: "Astro",
		iconName: "astro",
	},
	html: {
		name: "HTML 5",
		iconName: "html",
	},
	javascript: {
		name: "JavaScript",
		iconName: "javascript",
	},
	mongo: {
		name: "MongoDB",
		iconName: "mongo",
	},
	mysql: {
		name: "MySQL",
		className: "bg-[#f6ece1]!",
		iconName: "mysql",
	},
	node: {
		name: "Node.js",
		iconName: "node",
	},
	tailwind: {
		name: "Tailwind CSS",
		iconName: "tailwind",
	},
	php: {
		name: "PHP",
		iconName: "php",
	},
	ts: {
		name: "TypeScript",
		iconName: "typescript",
	},
	git: {
		name: "Git",
		iconName: "git",
	},
	css: {
		name: "CSS",
		iconName: "css",
	},
	vercel: {
		name: "Vercel",
		iconName: "vercel",
	},
	python: {
		name: "Python",
		iconName: "python",
	},
	java: {
		name: "Java",
		iconName: "java",
	},
	mqtt: {
		name: "MQTT",
		iconName: "mqtt",
	},
	cmasmas: {
		name: "C++",
		iconName: "cmasmas",
	},
	cmake: {
		name: "CMake",
		iconName: "cmake",
	},
	docker: {
		name: "Docker",
		iconName: "docker",
	},
	kubernetes: {
		name: "Kubernetes",
		iconName: "kubernetes",
	},
	react: {
		name: "React.js",
		iconName: "react",
	},
	nextjs: {
		name: "Next.js",
		iconName: "next",
	},
	postgres: {
		name: "PostgreSQL",
		iconName: "postgresql",
	},
	graphql: {
		name: "GraphQL",
		iconName: "graphql",
	},
	maven: {
		name: "Maven",
		iconName: "maven",
	},
	gradle: {
		name: "Gradle",
		iconName: "gradle",
	},
};

export const getLanguage = (lang: string): Language => {
	return languages[lang] || languages.html;
}; 