import Image from "next/image";
import { db } from "@/lib/db";
import {
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";
import Link from "next/link";
import { Metadata } from "next";

const app_data = mysqlTable("app_data", {
  id: serial("id").notNull().autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }),
  mail: varchar("mail", { length: 255 }),
});

export const metadata: Metadata = {
  title: "info",
};

export default async function Home() {
  const result = await db.select().from(app_data);

  console.log(result);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {result.map((item, index) => {
        return (
          <div key={index}>
            <h1>Name: {item.name}</h1>
            <h2>Mail: {item.mail}</h2>
            <Link href={`/${index}`}>Go to: /{index}</Link>
          </div>
        );
      })}
    </main>
  );
}
