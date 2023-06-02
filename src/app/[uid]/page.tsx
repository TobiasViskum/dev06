import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start",
};

export default async function Start({ uid }: { uid: string }) {
  return <h1>This is your entered uid: {uid}</h1>;
}
