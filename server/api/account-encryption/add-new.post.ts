import Cryptr from "cryptr";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  const data = { email, password };
  const cryptr = new Cryptr(useRuntimeConfig().encryptionKey);

  const encryptedData = cryptr.encrypt(JSON.stringify(data));
  // console.log("encryptedData", encryptedData);

  const decryptedData = cryptr.decrypt(encryptedData);
  // console.log("decryptedData", decryptedData);

  // console.log("body", body);
  return encryptedData;
});
