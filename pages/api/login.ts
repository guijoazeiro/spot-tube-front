import { NextApiRequest, NextApiResponse } from "next";
import querystring from "querystring";

const generateRandomString = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const client_id = process.env.CLIENT_ID;
  const redirect_uri = process.env.REDIRECT_URI;
  const scope = " playlist-modify-public playlist-read-private";

  if (!client_id || !redirect_uri) {
    res.status(500).json({ error: "Missing client_id or redirect_uri" });
  }

  const state = generateRandomString(16);
  const url = `https://accounts.spotify.com/authorize?${querystring.stringify({
    response_type: "code",
    client_id,
    scope,
    redirect_uri,
    state,
  })}`;
  res.redirect(url);
};

export default login;
