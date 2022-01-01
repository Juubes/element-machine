import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>ElementMachine</title>
        <meta
          name="description"
          content="ElementMachine is a web development practise project based on some existing games such as Little Alchemy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-blue-500 flex justify-center">
        <div className="w-3/4 h-3/4 self-center mx-auto bg-red-500"></div>
      </main>

      <footer></footer>
    </div>
  );
}
