export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <section>{children}</section>
      </body>
    </html>
  );
}
