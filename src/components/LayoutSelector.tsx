import { layouts } from "../data/layouts";
import styles from "./LayoutSelector.module.css";

interface Props {
  selected: string;
  onChange: (id: string) => void;
}

export default function LayoutSelector({ selected, onChange }: Props) {
  return (
    <div className={styles.layoutSelector}>
      <label htmlFor="layout-select" className={styles.label}>
        Select Layout
      </label>
      <select
        id="layout-select"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className={styles.select}
      >
        {layouts.map((layout) => (
          <option key={layout.id} value={layout.id}>
            {layout.name} {layout.responsive ? "(Responsive)" : ""}
          </option>
        ))}
      </select>
    </div>
  );
}
