import { useEffect, useState } from "react";
import LayoutSelector from "./components/LayoutSelector";
import IframePreview from "./components/IframePreview";
import CodeEditor from "./components/CodeEditor";
import "./App.css";
import DesktopNotice from "./components/DesktopNotice";

function App() {
  const [layoutId, setLayoutId] = useState("01");
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.BASE_URL;
      const html = await fetch(`${base}layouts/${layoutId}/index.html`).then(
        (res) => res.text()
      );
      const css = await fetch(`${base}layouts/${layoutId}/style.css`).then(
        (res) => res.text()
      );
      setHtmlCode(html);
      setCssCode(css);
    };
    load();
  }, [layoutId]);

  return (
    <div>
      <DesktopNotice />
      <div className="app-container">
        <h1 className="app-title">Layout Playground</h1>

        <LayoutSelector selected={layoutId} onChange={setLayoutId} />

        <div className="viewport-controls">
          <span>Viewport: </span>
          <button onClick={() => setViewport("desktop")}>Desktop</button>
          <button onClick={() => setViewport("tablet")}>Tablet</button>
          <button onClick={() => setViewport("mobile")}>Mobile</button>
        </div>

        <div className="iframe-container">
          <IframePreview html={htmlCode} css={cssCode} size={viewport} layoutId={layoutId}/>
        </div>

        <CodeEditor
          html={htmlCode}
          css={cssCode}
          onHtmlChange={setHtmlCode}
          onCssChange={setCssCode}
        />
      </div>
    </div>
  );
}

export default App;
