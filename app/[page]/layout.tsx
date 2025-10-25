export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ingen CSS-import her. Ingen provider-kall.
  return <>{children}</>;
}