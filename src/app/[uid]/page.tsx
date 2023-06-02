import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start",
};

export default async function Start({ params }: { params: { uid: string } }) {
  return <h1>This is your entered uid: {params.uid}</h1>;
}
