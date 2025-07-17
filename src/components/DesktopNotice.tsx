import { useEffect, useState } from "react";
import styles from "./DesktopNotice.module.css";

export default function DesktopNotice() {
  const [visible, setVisible] = useState(true);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setVisible(false);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <span>
        This site is best viewed on a <strong>desktop device</strong>.{" "}
        <span className={styles.timer}>({countdown})</span>
      </span>
      <button className={styles.closeBtn} onClick={() => setVisible(false)}>
        Close
      </button>
    </div>
  );
}
