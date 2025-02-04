import { SUPPORT_LEVELS } from "./supportLevels";

export const EDITOR_SETTINGS = {
  indentWidth: {
    label: "Indent Width",
    default: 2,
    options: [2, 4, 6, 8],
    supported: SUPPORT_LEVELS.PARTIAL_SUPPORT,
    notes: (
      <>
        Works by re-processing code through{" "}
        <a href="https://prettier.io/docs/en/api.html">Prettier</a> — but is
        there an official CodeMirror way of altering indent width of
        pre-authored code?
      </>
    ),
  },

  indentUnit: {
    label: "Tabs or Spaces",
    default: "  ",
    options: [" ", "  "],
    supported: SUPPORT_LEVELS.PARTIAL_SUPPORT,
    notes: (
      <>
        Not working.{" "}
        <a href="https://codemirror.net/6/docs/ref/#language.indentUnit">
          Docs?
        </a>
        . What do you pass and where? Can it be dispatched?
      </>
    ),
  },

  lineNumbers: {
    label: "Line Numbers",
    default: true,
    options: [true, false],
    supported: SUPPORT_LEVELS.SUPPORTED,
    notes: (
      <>
        <a href="https://codemirror.net/6/docs/ref/#gutter.lineNumbers">
          Officially supported
        </a>
      </>
    ),
  },

  lineWrapping: {
    label: "Line Wrapping",
    default: true,
    options: ["true", "false"],
    supported: SUPPORT_LEVELS.NOT_SUPPORTED,
    notes: (
      <>
        Seems{" "}
        <a href="https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping">
          supported
        </a>
        , but unclear exactly how to make it work or dispatch changes. We tried
        passing `pre` and `pre-wrap` as well as true/false.
      </>
    ),
  },

  codeFolding: {
    label: "Code Folding",
    default: true,
    options: [true, false],
    supported: SUPPORT_LEVELS.SUPPORTED,
    notes: (
      <>
        <a href="https://codemirror.net/6/docs/ref/#fold">
          Officially supported.
        </a>
      </>
    ),
  },

  matchBrackets: {
    label: "Match & Close Brackets",
    default: true,
    options: [true, false],
    supported: SUPPORT_LEVELS.SUPPORTED,
    notes: (
      <>
        <a href="https://codemirror.net/6/docs/ref/#matchbrackets">
          Officially supported.
        </a>{" "}
        TODO: CodePen has traditionally paired this concept with{" "}
        <a href="https://codemirror.net/6/docs/ref/#closebrackets">
          Close Brackets
        </a>
        , but they are different plugins in CodeMirror. Should we seperate or
        combine?
      </>
    ),
  },

  /* https://codemirror.net/6/docs/ref/#autocomplete */
  autocomplete: {
    label: "Autocomplete",
    default: true,
    options: [true, false],
    supported: SUPPORT_LEVELS.PARTIAL_SUPPORT,
    notes: (
      <>
        <a href="https://codemirror.net/6/docs/ref/#autocomplete">
          Officially supported
        </a>
        . Need to figure out which languages it works on. Doesn&apos;t seem to
        do simple stuff in JavaScript like `var`, `const`, or `querySelector`.
        Also we need to pipe in authored JavaScript, so autocomplete works on
        user-authored code.
      </>
    ),
  },

  emmet: {
    label: "Emmet",
    default: true,
    options: [true, false],
    supported: SUPPORT_LEVELS.NOT_SUPPORTED,
    notes: (
      <>
        Might be being{" "}
        <a href="https://github.com/emmetio/codemirror-plugin/issues/13">
          worked on
        </a>{" "}
        by Sergey.
      </>
    ),
  },

  fontSize: {
    label: "Font Size",
    default: 12,
    options: [10, 12, 14, 16, 18, 20, 22, 24],
    supported: SUPPORT_LEVELS.PARTIAL_SUPPORT,
    notes: (
      <>
        Does CodeMirror care? Or do we just alter some on-page CSS? It probably
        effects line wrapping so at least we&apos;d need to “refresh” (e.g.{" "}
        <code>requestMeasure</code>?) the editors?
      </>
    ),
  },

  fontFamily: {
    label: "Font",
    default: "Source Code Pro",
    options: [
      "Monaco",
      "Hack",
      "Inconsolata",
      "Source Code Pro",
      "Monoid",
      "Fantasque Sans Mono",
      "Input Mono",
      "DejaVu Sans Mono",
      "FireCode Medium",
      "Operator Mono",
      "Dank Mono",
      "Gintronic",
      "Courier Prime",
      "JetBrains Mono",
      "Recursive",
      "MonoLisa",
      "Codelia",
      "Comic Code",
    ],
    supported: SUPPORT_LEVELS.PARTIAL_SUPPORT,
    notes: (
      <>
        Need to lazy-load the font files and alter some{" "}
        <a href="https://codemirror.net/6/examples/styling/">on-page CSS</a>.
        For some reason, the default CodeMirror 6 styles for .cm-scroller have
        an <code>!important</code> font family declaration.
      </>
    ),
  },

  theme: {
    label: "Syntax Highlighting",
    default: "twilight",
    options: [
      "twilight",
      "oneDark",
      // "Solarized Dark",
      // "Tomorrow Night",
      // "Oceanic Dark",
      // "Panda",
      // "DuoTone Dark",
      // "High Contrast Dark",
      // "Classic",
      // "Solarized Light",
      // "XQ Light",
      // "Oceanic Light",
      // "MDN Like",
      // "DuoTone Light",
      // "High Contrast Light",
    ],
    supported: SUPPORT_LEVELS.PARTIAL_SUPPORT,
    notes:
      "1) Do we have to re-initialize the editor to change the theme or can we dispatch a change for a dynamically imported theme? 2) We have lots of themes to port over.",
  },
};

export const EDITOR_SETTINGS_DEFAULTS = Object.entries(EDITOR_SETTINGS).reduce(
  (obj, [key, value]) => {
    obj[key] = value.default;
    return obj;
  },
  {}
);
