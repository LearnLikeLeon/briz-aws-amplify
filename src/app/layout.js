import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Edwige Portfolio",
  description: "Research Analyst / Data Analyst / Analytics Consultant",
  message:
    " Collect, process, analyse and present data from supporting every day business decisions to fueling global change. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
