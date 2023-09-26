import Repo from '@/components/Repo'
import RepoDirs from '@/components/Repodirs'
import Link from 'next/link'
import React from 'react'

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="flex flex-col justify-start items-start max-w-lg">
      <Link
        href="/repos"
        className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Back to Repositories
      </Link>

      <Repo name={name} />
      <RepoDirs name={name} />
    </div>
  )
}

export default RepoPage
