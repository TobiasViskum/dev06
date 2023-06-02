import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

// create the connection
const connection = connect({
  host: "aws.connect.psdb.cloud",
  username: "gd0j4pu858rwl8ajrvrj",
  password: "pscale_pw_gVMRy3WGlUBQ7NsLMx2bfvlthdqXPjLYPXLzb1KlIyr",
});

export const db = drizzle(connection);
// DATABASE_URL='mysql://7twvv3kc36vmvhv1wciv:pscale_pw_qVAfDUC0uQp5jMYN76KwaHJdBbwNA9N0Zu7NqaLMuoV@aws.connect.psdb.cloud/viskum-db?sslaccept=strict'
