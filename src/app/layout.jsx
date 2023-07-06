import "./css/globals.css";
import Header from "@/app/components/Header";

export const metadata = {
  title: "Mehmet Ali Ayvaz",
  description: "Personal Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="gradient-background min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
