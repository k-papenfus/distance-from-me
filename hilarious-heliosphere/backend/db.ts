import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.DB_URL as string,
  authToken: process.env.AUTH_TOKEN,
});
// async function getUsers() {
//   const query = await client.execute("SELECT * from users");
//   console.log(query);
// }
export const getUsers = async (name: string) => {
  const query = await client.execute({
    sql: "SELECT * from users where name = ?",
    args: [name],
  });
  return query;
};
