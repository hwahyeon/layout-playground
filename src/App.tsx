import { useEffect, useState } from "react";
import LayoutSelector from "./components/LayoutSelector";
import IframePreview from "./components/IframePreview";
import CodeEditor from "./components/CodeEditor";
import "./App.css";

function App() {
  const [layoutId, setLayoutId] = useState("01");
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    const load = async () => {
      const html = await fetch(`/layouts/${layoutId}/index.html`).then((res) =>
        res.text()
      );
      const css = await fetch(`/layouts/${layoutId}/style.css`).then((res) =>
        res.text()
      );
      setHtmlCode(html);
      setCssCode(css);
    };
    load();
  }, [layoutId]);

  return (
    <div className="app-container">
      <h1>Layout Playground</h1>

      <LayoutSelector selected={layoutId} onChange={setLayoutId} />

      <div className="viewport-controls">
        <span>Viewport: </span>
        <button onClick={() => setViewport("desktop")}>Desktop</button>
        <button onClick={() => setViewport("tablet")}>Tablet</button>
        <button onClick={() => setViewport("mobile")}>Mobile</button>
      </div>

      <div className="iframe-container">
        <IframePreview html={htmlCode} css={cssCode} size={viewport} />
      </div>

      <CodeEditor
        html={htmlCode}
        css={cssCode}
        onHtmlChange={setHtmlCode}
        onCssChange={setCssCode}
      />
    </div>
  );
}

export default App;
