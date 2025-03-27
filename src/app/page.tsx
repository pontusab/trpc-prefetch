import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Link href="/hello" prefetch={true}>Hello</Link>
      <Link href="/promiseprop" prefetch={true}>Promise Prop</Link>
    </div>
  );
}
