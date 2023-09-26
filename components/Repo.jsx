import Link from 'next/link'
import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const username = 'bradtraversy'

async function fetchRepo(name) {
  const url = `https://api.github.com/repos/${username}/${name}`
  const response = await fetch(url)
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name)
  return (
    <div className="flex flex-col bg-gray-200 p-10 rounded-md hover:bg-">
      <h3 className="text-xl font-bold">
        <Link href={repo.html_url}>{repo.name}</Link>
      </h3>
      <p>{repo.description}</p>
      <div className="flex justify-start items-center">
        <span className="flext items-center gap-1">
          <FaStar /> {repo.stargazers_count}&nbsp;&nbsp;&nbsp;
        </span>
        <span className="flext items-center gap-1">
          <FaCodeBranch /> {repo.forks_count}&nbsp;&nbsp;&nbsp;
        </span>
        <span className="flext items-center gap-1">
          <FaEye /> {repo.stargazers_count}
        </span>
      </div>
    </div>
  )
}

export default Repo
