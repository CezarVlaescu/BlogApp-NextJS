import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvidder } from "./context/ThemeContext";
import ThemeProvider from "./providers/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvidder>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvidder>
      </body>
    </html>
  );
}
