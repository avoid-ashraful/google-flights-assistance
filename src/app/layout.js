// "use client";

// app/layout.js
import './globals.css';
// import Navbar from '../app/components/Navbar';

export const metadata = {
  title: 'Flight Search',
  description: 'Find the best flights with our flight search tool.',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      {/*<Navbar /> /!* Persistent Navigation Bar *!/*/}
      <main>{children}</main> {/* Main content will be rendered here */}
      </body>
      </html>
  );
}
