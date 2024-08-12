import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header>
      <h1>View home</h1>
      <Link href="/page-one">
          Go to page One    
      </Link>
    </header>
  );
}
