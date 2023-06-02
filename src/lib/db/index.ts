import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

// create the connection
const connection = connect({
  host: "aws.connect.psdb.cloud",
  username: "ptlzg8kg2jxzluoyf4mr",
  password: "pscale_pw_Hyad4bUnAcB05jUsj25M6Pr5byoFi9CfuQ0zl7Su4JP",
});

export const db = drizzle(connection);
