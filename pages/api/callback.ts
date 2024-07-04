import { SpotifyToken } from "../../types";
import { NextApiRequest, NextApiResponse } from "next";



const callback = async (req: NextApiRequest, res: NextApiResponse) => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const redirect_uri = process.env.REDIRECT_URI;

  if (!client_id || !client_secret || !redirect_uri) {
    res
      .status(500)
      .json({ error: "Missing client_id or client_secret or redirect_uri" });
  }

  const { code, state } = req.query;
  if (!state) {
    res.status(500).json({ error: "Missing state" });
  }

  const params = new URLSearchParams();
  params.append("code", code as string);
  params.append("redirect_uri", redirect_uri as string);
  params.append("grant_type", "authorization_code");

  const authorizatonHeader =
    "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64");

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: authorizatonHeader,
      },
      body: params.toString(),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data: SpotifyToken = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch access token" });
  }
};

export default callback;
