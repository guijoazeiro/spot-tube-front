"use client";

import { useState } from "react";

export default function CreatePlaylist() {
  const [youtubeID, setYoutubeID] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const playlist = {
      youtubeID,
      name,
    };
    try {
      const response = await fetch("http://localhost:3000/playlist/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playlist),
      });

      console.log(response)

      if (response.ok) {
        alert("Playlist created successfully!");
      } else {
        const errorData = await response.json();
        alert(`Failed to create playlist: ${errorData.message}`);
      }
    } catch (error: any) {
      alert(`Failed to create playlist: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center">
      <div className="bg-black p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Create Playlist</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="youtubeID"
              className="block text-sm font-medium text-gray-700"
            >
              YouTube Playlist URL
            </label>
            <input
              type="text"
              id="youtubeID"
              value={youtubeID}
              onChange={(e) => setYoutubeID(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Playlist Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Playlist
          </button>
        </form>
      </div>
    </div>
  );
}
