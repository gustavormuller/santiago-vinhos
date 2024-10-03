import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <Image
        src="/logo-rectangle.png"
        alt="Logo da Santiago Vinhos"
        width={150}
        height={75}
      />
      <h1>Santiago Vinhos</h1>
    </main>
  );
}
