import type { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} • Made in Canada</p>
    </footer>
  );
}
