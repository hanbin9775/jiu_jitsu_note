export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <section>1</section>
        <section>{children}</section>
      </body>
    </html>
  );
}
