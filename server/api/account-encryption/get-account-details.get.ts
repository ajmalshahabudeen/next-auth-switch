import Cryptr from "cryptr";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  console.log("query", query);
  const cryptr = new Cryptr(useRuntimeConfig().encryptionKey);

  const  encryptedData  = query.encryptedData as string;
  console.log("encryptedData", encryptedData);

  const decryptedData = cryptr.decrypt(encryptedData);
  console.log("decryptedData", decryptedData);

  return {
    ok: true,
    data: JSON.parse(decryptedData),
  }
});
