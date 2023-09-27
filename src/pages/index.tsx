import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { Posts } from "@/components/posts";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Blogames - Seu blog de jogos</title>
      </Head>
      <Header />
      <Navigation />
      <Posts />
      <Footer />
    </main>
  );
}
