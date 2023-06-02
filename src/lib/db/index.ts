import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

// create the connection
const connection = connect({
  host: "aws.connect.psdb.cloud",
  username: "grltapp2myqiz5qa3wiw",
  password: "pscale_pw_dKxcvp0Sbc7fuLii7Pm4gVGIIE0S651BmiF9fsxwjdU",
});

export const db = drizzle(connection);
