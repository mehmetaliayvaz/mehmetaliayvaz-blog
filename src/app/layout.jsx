import "./css/globals.css";
import Header from "@/app/components/Header";

export const metadata = {
  title: "Mehmet Ali Ayvaz",
  description: "Personal Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark min-h-screen">
        <Header className="absolute left-1/2 -translate-x-1/2" />
        <main>{children}</main>
      </body>
    </html>
  );
}
