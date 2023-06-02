import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start",
};

export default async function Start({ params }: { params: { uid: string } }) {
  return (
    <>
      <h1>This is your entered uid: {params.uid}</h1>
      <Link href={"/"}>Go back</Link>
    </>
  );
}
