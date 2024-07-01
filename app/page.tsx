import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Head>
        <title>Spottube</title>
      </Head>
      <div className="text-center">
        <h1 className="text-white text-5xl mb-8">Spottube</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 168 168"
            fill="currentColor"
          >
            <path d="M84 0C37.65 0 0 37.65 0 84s37.65 84 84 84 84-37.65 84-84S130.35 0 84 0zm38.75 120.17c-2.11 3.52-6.63 4.64-10.15 2.53-27.77-16.64-62.79-20.43-103.77-11.08-3.83.89-7.72-1.54-8.61-5.38-.89-3.83 1.54-7.72 5.38-8.61 44.17-10.05 82.7-6.25 113.88 12.14 3.52 2.11 4.64 6.63 2.53 10.15zm14.88-27.69c-2.62 4.38-8.2 5.77-12.57 3.15-31.81-19.06-80.4-24.58-117.94-13.32-4.79 1.46-9.8-1.22-11.26-6.01-1.46-4.79 1.22-9.8 6.01-11.26 42.57-12.8 96.82-6.62 133.77 14.51 4.38 2.62 5.77 8.2 3.15 12.57zm15.4-28.57c-34.67-20.64-92.02-22.48-125.53-12.21-5.73 1.75-11.85-1.54-13.59-7.27-1.75-5.73 1.54-11.85 7.27-13.59 37.71-11.31 100.3-9.15 140.99 13.5 5.13 2.94 6.86 9.46 3.92 14.59-2.94 5.13-9.46 6.85-14.59 3.92z"/>
          </svg>
          Login com Spotify
        </button>
      </div>
    </div>
  );
}
