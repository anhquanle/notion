import type { CodeBlockOptions } from "@blocknote/core";
import { createHighlighter } from "./shiki.bundle";

export const CodeBlockCustom = {
  defaultLanguage: "javascript",
  supportedLanguages: {
    text: {
      name: "Plain Text",
      aliases: ["text", "txt", "plain"],
    },
    c: {
      name: "C",
      aliases: ["c"],
    },
    cpp: {
      name: "C++",
      aliases: ["cpp", "c++"],
    },
    css: {
      name: "CSS",
      aliases: ["css"],
    },
    graphql: {
      name: "GraphQL",
      aliases: ["graphql", "gql"],
    },
    html: {
      name: "HTML",
      aliases: ["html"],
    },
    java: {
      name: "Java",
      aliases: ["java"],
    },
    javascript: {
      name: "JavaScript",
      aliases: ["javascript", "js"],
    },
    json: {
      name: "JSON",
      aliases: ["json"],
    },
    jsx: {
      name: "JSX",
      aliases: ["jsx"],
    },
    markdown: {
      name: "Markdown",
      aliases: ["markdown", "md"],
    },
    mdx: {
      name: "MDX",
      aliases: ["mdx"],
    },
    php: {
      name: "PHP",
      aliases: ["php"],
    },
    python: {
      name: "Python",
      aliases: ["python", "py"],
    },
    regexp: {
      name: "RegExp",
      aliases: ["regexp", "regex"],
    },
    scss: {
      name: "SCSS",
      aliases: ["scss"],
    },
    shellscript: {
      name: "Shell",
      aliases: ["shellscript", "bash", "sh", "shell", "zsh"],
    },
    sql: {
      name: "SQL",
      aliases: ["sql"],
    },
    typescript: {
      name: "TypeScript",
      aliases: ["typescript", "ts"],
    },
    vue: {
      name: "Vue",
      aliases: ["vue"],
    },
    xml: {
      name: "XML",
      aliases: ["xml"],
    },
    yaml: {
      name: "YAML",
      aliases: ["yaml", "yml"],
    },
    tsx: {
      name: "TSX",
      aliases: ["tsx", "typescriptreact"],
    },
    csharp: {
      name: "C#",
      aliases: ["c#", "csharp", "cs"],
    },
    ruby: {
      name: "Ruby",
      aliases: ["ruby", "rb"],
    },
    scala: {
      name: "Scala",
      aliases: ["scala"],
    },
    "objective-c": {
      name: "Objective C",
      aliases: ["objective-c", "objc"],
    },
  },
  createHighlighter: () =>
    createHighlighter({
      langs: [],
      themes: ["dracula"],
    }),
} as CodeBlockOptions;
