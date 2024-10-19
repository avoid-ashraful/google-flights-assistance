import './globals.css';

export const metadata = {
  title: 'Flight Search',
  description: 'Find the best flights with our flight search tool.',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <main>{children}</main>
      </body>
      </html>
  );
}
