"use client";

import Image from "next/image";
import music from "../public/music.png";
export default function Home() {
  return (
    <div className="container p-8 mx-auto xl:px-0 flex items-center justify-center min-h-screen">
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex items-center w-full lg:w-1/2 justify-center">
          <div className="max-w-2xl mb-8 text-center">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              Spottube
            </h1>
            <p className="py-5 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
              O Spottube permite transferir playlists do YouTube para o Spotify
              rapidamente. Com uma interface intuitiva, ele economiza seu tempo
              e mantém suas músicas favoritas em um único lugar. Experimente
              agora!
            </p>
  
            <div className="flex justify-center">
              <a
                href="http://localhost:3000/spotify/login"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md"
              >
                Login com Spotify
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={music}
              width="580"
              height="580"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
  
}
