import Link from 'next/link'
import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const username = 'bradtraversy'

async function fetchRepos() {
  const url = `https://api.github.com/users/${username}/repos`

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch(url)
  const repos = await response.json()
  return repos
}

const ReposPage = async () => {
  const repos = await fetchRepos()
  return (
    <div>
      ReposPage
      <h2 className="text-2x1 font-bold mb-4">
        Github repositories of {username}
      </h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="bg-gray-600 m-4 p-4 rounded-md">
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="flex justify-start items-center-4">
                <span className="flex items-center gap-1 pr-3">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1 pr-3">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaEye /> {repo.stargazers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReposPage
