import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "24px" }}>
        <h1>Portfolio v2</h1>
        <p>Deployed on Vercel. Next step: rebuild old portfolio sections.</p>
      </main>
    </>
  );
}
