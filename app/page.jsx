import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div className="bg-gray-600 p-4 m-4 rounded-lg mb-4">
        <Link
          href="https://www.clerk.com"
          className="text-xl text-sky-400 font-bold"
        >
          clerk.com
        </Link>
        <p className="mb-2">
          This is a demo of Clerk authentication. Clerk is more than a "sign-in
          box." Integrate complete user management UIs and APIs, purpose-built
          for React, Next.js, and the Modern Web.
        </p>
      </div>

      <div className="mb-4 bg-gray-600 p-4 m-4 rounded-lg">
        <Link
          href="https://api.github.com/"
          className="text-xl text-sky-400 font-bold"
        >
          api.github.com
        </Link>
        <p className="mb-2">Explore github repositories using Fetch API</p>
      </div>

      <div className="mb-4 bg-gray-600 p-4 m-4 rounded-lg">
        <Link
          href="http://localhost:3000/api/courses"
          className="text-xl text-sky-400 font-bold"
        >
          Backend API
        </Link>
        <p className="mb-2">
          Provide Backend API service that provide extensive courses information
          in web development
        </p>
      </div>

      <div className="mb-4 bg-gray-600 p-4 m-4 rounded-lg">
        <Link
          href="https://tailwindcss.com/"
          className="text-xl text-sky-400 font-bold"
        >
          TailwindCSS
        </Link>
        <p className="mb-2">
          Rapidly build modern websites without ever leaving your HTML
        </p>
      </div>
    </>
  )
}
