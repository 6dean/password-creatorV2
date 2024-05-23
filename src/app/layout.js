import "./globals.css";

export const metadata = {
  title: "Password forge RF",
  description: "Create your own strong password",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
