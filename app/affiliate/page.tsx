export default function AffiliatePage() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-2xl font-bold">Affiliate test</h1>
      <p className="mt-2">Hurra – lokal side kjører uten Shopify‑config!</p>

      <a
        href="https://eksempelbutikk.no/produkt/123?affid=hege"
        target="_blank"
        rel="sponsored noopener nofollow"
        className="mt-4 inline">blir dette en link</a>
    </main>
    );
    }