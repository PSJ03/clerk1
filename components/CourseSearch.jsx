'use client'

import React, { useState } from 'react'

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/courses/search?query=${query}`)
    const courses = await res.json()
    getSearchResults(courses)
  }

  return (
    <form onSubmit={handleSubmit} className="m-2">
      <input
        type="text"
        placeholder="Search courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-red-100 py-2 px-4 m-2 rounded-lg"
      />
      <button
        type="submit"
        className="p-2 m-2 text-white bg-blue-700 hover:bg-blue-300 rounded-lg"
      >
        Search
      </button>
    </form>
  )
}

export default CourseSearch
