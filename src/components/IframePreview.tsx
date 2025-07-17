import styles from "./IframePreview.module.css";

interface Props {
  html: string;
  css: string;
  size: "desktop" | "tablet" | "mobile";
  layoutId: string;
}

export default function IframePreview({ html, css, size, layoutId }: Props) {
  const sizes = {
    desktop: { width: "1240px", height: "700px" },
    tablet: { width: "768px", height: "1000px" },
    mobile: { width: "375px", height: "800px" },
  };

  const style = sizes[size];

  const baseHref = `${import.meta.env.BASE_URL}layouts/${layoutId}/`;

  const srcDoc = `
    <html>
      <head>
        <base href="${baseHref}" />
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
