import styles from "./IframePreview.module.css";

interface Props {
  html: string;
  css: string;
  size: "desktop" | "tablet" | "mobile";
}

export default function IframePreview({ html, css, size }: Props) {
  const sizes = {
    desktop: { width: "1240px", height: "700px" },
    tablet: { width: "768px", height: "1000px" },
    mobile: { width: "375px", height: "800px" },
  };

  const style = sizes[size];

  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
    </html>
  `;

  return (
    <div className={styles.wrapper}>
      <iframe
        title="Live Preview"
        className={styles.iframe}
        style={style}
        srcDoc={srcDoc}
      />
    </div>
  );
}
