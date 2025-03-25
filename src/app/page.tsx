import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <Link href="/hello" prefetch={true}>Hello</Link>
  );
}
