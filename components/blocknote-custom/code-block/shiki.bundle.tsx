/* Generate by @shikijs/codegen */
import type {
  DynamicImportLanguageRegistration,
  DynamicImportThemeRegistration,
  HighlighterGeneric,
} from "@shikijs/types";
import { createdBundledHighlighter } from "@shikijs/core";
import { createJavaScriptRegexEngine } from "@shikijs/engine-javascript";

type BundledLanguage =
  | "typescript"
  | "ts"
  | "javascript"
  | "js"
  | "vue"
  | "c"
  | "cpp"
  | "c++"
  | "graphql"
  | "html"
  | "java"
  | "json"
  | "jsx"
  | "markdown"
  | "md"
  | "mdx"
  | "php"
  | "python"
  | "py"
  | "regexp"
  | "regex"
  | "scss"
  | "shellscript"
  | "bash"
  | "sh"
  | "shell"
  | "zsh"
  | "sql"
  | "xml"
  | "yaml"
  | "yml"
  | "tsx"
  | "typescriptreact"
  | "c#"
  | "csharp"
  | "cs"
  | "ruby"
  | "rb"
  | "scala"
  | "objective-c"
  | "objc";
type BundledTheme =
  | "andromeeda"
  | "aurora-x"
  | "ayu-dark"
  | "catppuccin-frappe"
  | "catppuccin-latte"
  | "catppuccin-macchiato"
  | "catppuccin-mocha"
  | "dark-plus"
  | "dracula"
  | "dracula-soft"
  | "everforest-dark"
  | "everforest-light"
  | "github-dark"
  | "github-dark-default"
  | "github-dark-dimmed"
  | "github-dark-high-contrast"
  | "github-light"
  | "github-light-default"
  | "github-light-high-contrast"
  | "gruvbox-dark-hard"
  | "gruvbox-dark-medium"
  | "gruvbox-dark-soft"
  | "gruvbox-light-hard"
  | "gruvbox-light-medium"
  | "gruvbox-light-soft"
  | "houston"
  | "kanagawa-dragon"
  | "kanagawa-lotus"
  | "kanagawa-wave"
  | "laserwave"
  | "light-plus"
  | "material-theme"
  | "material-theme-darker"
  | "material-theme-lighter"
  | "material-theme-ocean"
  | "material-theme-palenight"
  | "min-dark"
  | "min-light"
  | "monokai"
  | "night-owl"
  | "nord"
  | "one-dark-pro"
  | "one-light"
  | "plastic"
  | "poimandres"
  | "red"
  | "rose-pine"
  | "rose-pine-dawn"
  | "rose-pine-moon"
  | "slack-dark"
  | "slack-ochin"
  | "snazzy-light"
  | "solarized-dark"
  | "solarized-light"
  | "synthwave-84"
  | "tokyo-night"
  | "vesper"
  | "vitesse-black"
  | "vitesse-dark"
  | "vitesse-light";
type Highlighter = HighlighterGeneric<BundledLanguage, BundledTheme>;

const bundledLanguages = {
  c: () => import("@shikijs/langs-precompiled/c"),
  cpp: () => import("@shikijs/langs-precompiled/cpp"),
  "c++": () => import("@shikijs/langs-precompiled/cpp"),
  css: () => import("@shikijs/langs-precompiled/css"),
  glsl: () => import("@shikijs/langs-precompiled/glsl"),
  graphql: () => import("@shikijs/langs-precompiled/graphql"),
  gql: () => import("@shikijs/langs-precompiled/graphql"),
  haml: () => import("@shikijs/langs-precompiled/haml"),
  html: () => import("@shikijs/langs-precompiled/html"),
  java: () => import("@shikijs/langs-precompiled/java"),
  javascript: () => import("@shikijs/langs-precompiled/javascript"),
  js: () => import("@shikijs/langs-precompiled/javascript"),
  json: () => import("@shikijs/langs-precompiled/json"),
  jsonc: () => import("@shikijs/langs-precompiled/jsonc"),
  jsonl: () => import("@shikijs/langs-precompiled/jsonl"),
  jsx: () => import("@shikijs/langs-precompiled/jsx"),
  julia: () => import("@shikijs/langs-precompiled/julia"),
  jl: () => import("@shikijs/langs-precompiled/julia"),
  less: () => import("@shikijs/langs-precompiled/less"),
  markdown: () => import("@shikijs/langs-precompiled/markdown"),
  md: () => import("@shikijs/langs-precompiled/markdown"),
  mdx: () => import("@shikijs/langs-precompiled/mdx"),
  php: () => import("@shikijs/langs-precompiled/php"),
  postcss: () => import("@shikijs/langs-precompiled/postcss"),
  pug: () => import("@shikijs/langs-precompiled/pug"),
  jade: () => import("@shikijs/langs-precompiled/pug"),
  python: () => import("@shikijs/langs-precompiled/python"),
  py: () => import("@shikijs/langs-precompiled/python"),
  r: () => import("@shikijs/langs-precompiled/r"),
  regexp: () => import("@shikijs/langs-precompiled/regexp"),
  regex: () => import("@shikijs/langs-precompiled/regexp"),
  sass: () => import("@shikijs/langs-precompiled/sass"),
  scss: () => import("@shikijs/langs-precompiled/scss"),
  shellscript: () => import("@shikijs/langs-precompiled/shellscript"),
  bash: () => import("@shikijs/langs-precompiled/shellscript"),
  sh: () => import("@shikijs/langs-precompiled/shellscript"),
  shell: () => import("@shikijs/langs-precompiled/shellscript"),
  zsh: () => import("@shikijs/langs-precompiled/shellscript"),
  sql: () => import("@shikijs/langs-precompiled/sql"),
  svelte: () => import("@shikijs/langs-precompiled/svelte"),
  typescript: () => import("@shikijs/langs-precompiled/typescript"),
  ts: () => import("@shikijs/langs-precompiled/typescript"),
  vue: () => import("@shikijs/langs-precompiled/vue"),
  "vue-html": () => import("@shikijs/langs-precompiled/vue-html"),
  wasm: () => import("@shikijs/langs-precompiled/wasm"),
  wgsl: () => import("@shikijs/langs-precompiled/wgsl"),
  xml: () => import("@shikijs/langs-precompiled/xml"),
  yaml: () => import("@shikijs/langs-precompiled/yaml"),
  yml: () => import("@shikijs/langs-precompiled/yaml"),
  tsx: () => import("@shikijs/langs-precompiled/tsx"),
  typescriptreact: () => import("@shikijs/langs-precompiled/tsx"),
  haskell: () => import("@shikijs/langs-precompiled/haskell"),
  hs: () => import("@shikijs/langs-precompiled/haskell"),
  "c#": () => import("@shikijs/langs-precompiled/csharp"),
  csharp: () => import("@shikijs/langs-precompiled/csharp"),
  cs: () => import("@shikijs/langs-precompiled/csharp"),
  latex: () => import("@shikijs/langs-precompiled/latex"),
  lua: () => import("@shikijs/langs-precompiled/lua"),
  mermaid: () => import("@shikijs/langs-precompiled/mermaid"),
  mmd: () => import("@shikijs/langs-precompiled/mermaid"),
  ruby: () => import("@shikijs/langs-precompiled/ruby"),
  rb: () => import("@shikijs/langs-precompiled/ruby"),
  rust: () => import("@shikijs/langs-precompiled/rust"),
  rs: () => import("@shikijs/langs-precompiled/rust"),
  scala: () => import("@shikijs/langs-precompiled/scala"),
  // Swift does not support pre-compilation right now
  swift: () => import("@shikijs/langs/swift"),
  kotlin: () => import("@shikijs/langs-precompiled/kotlin"),
  kt: () => import("@shikijs/langs-precompiled/kotlin"),
  kts: () => import("@shikijs/langs-precompiled/kotlin"),
  "objective-c": () => import("@shikijs/langs-precompiled/objective-c"),
  objc: () => import("@shikijs/langs-precompiled/objective-c"),
} as Record<BundledLanguage, DynamicImportLanguageRegistration>;

const bundledThemes = {
  "light-plus": () => import("@shikijs/themes/light-plus"),
  "dark-plus": () => import("@shikijs/themes/dark-plus"),

  andromeeda: () => import("@shikijs/themes/andromeeda"),
  "aurora-x": () => import("@shikijs/themes/aurora-x"),
  "ayu-dark": () => import("@shikijs/themes/ayu-dark"),

  "catppuccin-frappe": () => import("@shikijs/themes/catppuccin-frappe"),
  "catppuccin-latte": () => import("@shikijs/themes/catppuccin-latte"),
  "catppuccin-macchiato": () => import("@shikijs/themes/catppuccin-macchiato"),
  "catppuccin-mocha": () => import("@shikijs/themes/catppuccin-mocha"),

  dracula: () => import("@shikijs/themes/dracula"),
  "dracula-soft": () => import("@shikijs/themes/dracula-soft"),

  "everforest-dark": () => import("@shikijs/themes/everforest-dark"),
  "everforest-light": () => import("@shikijs/themes/everforest-light"),

  "github-dark": () => import("@shikijs/themes/github-dark"),
  "github-light": () => import("@shikijs/themes/github-light"),
  "github-dark-default": () => import("@shikijs/themes/github-dark-default"),
  "github-light-default": () => import("@shikijs/themes/github-light-default"),
  "github-dark-high-contrast": () => import("@shikijs/themes/github-dark-high-contrast"),
  "github-light-high-contrast": () => import("@shikijs/themes/github-light-high-contrast"),
  "github-dark-dimmed": () => import("@shikijs/themes/github-dark-dimmed"),

  "gruvbox-dark-hard": () => import("@shikijs/themes/gruvbox-dark-hard"),
  "gruvbox-dark-medium": () => import("@shikijs/themes/gruvbox-dark-medium"),
  "gruvbox-dark-soft": () => import("@shikijs/themes/gruvbox-dark-soft"),
  "gruvbox-light-hard": () => import("@shikijs/themes/gruvbox-light-hard"),
  "gruvbox-light-medium": () => import("@shikijs/themes/gruvbox-light-medium"),
  "gruvbox-light-soft": () => import("@shikijs/themes/gruvbox-light-soft"),

  houston: () => import("@shikijs/themes/houston"),
  "kanagawa-dragon": () => import("@shikijs/themes/kanagawa-dragon"),
  "kanagawa-lotus": () => import("@shikijs/themes/kanagawa-lotus"),
  "kanagawa-wave": () => import("@shikijs/themes/kanagawa-wave"),
  laserwave: () => import("@shikijs/themes/laserwave"),

  "material-theme": () => import("@shikijs/themes/material-theme"),
  "material-theme-darker": () => import("@shikijs/themes/material-theme-darker"),
  "material-theme-lighter": () => import("@shikijs/themes/material-theme-lighter"),
  "material-theme-ocean": () => import("@shikijs/themes/material-theme-ocean"),
  "material-theme-palenight": () => import("@shikijs/themes/material-theme-palenight"),

  "min-dark": () => import("@shikijs/themes/min-dark"),
  "min-light": () => import("@shikijs/themes/min-light"),

  monokai: () => import("@shikijs/themes/monokai"),
  "night-owl": () => import("@shikijs/themes/night-owl"),
  nord: () => import("@shikijs/themes/nord"),
  "one-dark-pro": () => import("@shikijs/themes/one-dark-pro"),
  "one-light": () => import("@shikijs/themes/one-light"),
  plastic: () => import("@shikijs/themes/plastic"),
  poimandres: () => import("@shikijs/themes/poimandres"),
  red: () => import("@shikijs/themes/red"),

  "rose-pine": () => import("@shikijs/themes/rose-pine"),
  "rose-pine-dawn": () => import("@shikijs/themes/rose-pine-dawn"),
  "rose-pine-moon": () => import("@shikijs/themes/rose-pine-moon"),

  "slack-dark": () => import("@shikijs/themes/slack-dark"),
  "slack-ochin": () => import("@shikijs/themes/slack-ochin"),
  "snazzy-light": () => import("@shikijs/themes/snazzy-light"),

  "solarized-dark": () => import("@shikijs/themes/solarized-dark"),
  "solarized-light": () => import("@shikijs/themes/solarized-light"),

  "synthwave-84": () => import("@shikijs/themes/synthwave-84"),
  "tokyo-night": () => import("@shikijs/themes/tokyo-night"),
  vesper: () => import("@shikijs/themes/vesper"),

  "vitesse-black": () => import("@shikijs/themes/vitesse-black"),
  "vitesse-dark": () => import("@shikijs/themes/vitesse-dark"),
  "vitesse-light": () => import("@shikijs/themes/vitesse-light"),
} as Record<BundledTheme, DynamicImportThemeRegistration>;

const createHighlighter = /* @__PURE__ */ createdBundledHighlighter<BundledLanguage, BundledTheme>({
  langs: bundledLanguages,
  themes: bundledThemes,
  engine: () => createJavaScriptRegexEngine(),
});

export { bundledLanguages, bundledThemes, createHighlighter };
export type { BundledLanguage, BundledTheme, Highlighter };
