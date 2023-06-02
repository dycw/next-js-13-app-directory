import styles from "@/app/layout.module.css";
import "@/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <div className={styles.header}>From layout</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
