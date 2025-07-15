import CodeMirror from "@uiw/react-codemirror";
import { htmlLanguage } from "@codemirror/lang-html";
import { cssLanguage } from "@codemirror/lang-css";
import { githubDark } from "@uiw/codemirror-theme-github";
import styles from "./CodeEditor.module.css";

interface Props {
  html: string;
  css: string;
  onHtmlChange: (val: string) => void;
  onCssChange: (val: string) => void;
}

export default function CodeEditor({
  html,
  css,
  onHtmlChange,
  onCssChange,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.editorSection}>
        <div className={styles.editorBlock}>
          <h3 className={styles.heading}>HTML</h3>
          <CodeMirror
            value={html}
            height="300px"
            extensions={[htmlLanguage]}
            theme={githubDark}
            onChange={(val) => onHtmlChange(val)}
          />
        </div>
        <div className={styles.editorBlock}>
          <h3 className={styles.heading}>CSS</h3>
          <CodeMirror
            value={css}
            height="300px"
            extensions={[cssLanguage]}
            theme={githubDark}
            onChange={(val) => onCssChange(val)}
          />
        </div>
      </div>
    </div>
  );
}
