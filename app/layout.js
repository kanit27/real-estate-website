import { Toaster } from "react-hot-toast";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </LenisProvider>
      </body>
    </html>
  );
}
