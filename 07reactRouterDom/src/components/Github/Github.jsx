import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

  return (
    <div className='bg-gray-600 text-white m-4 p-4 text-3xl'>
        <img src={data.avatar_url} alt="github avatar" />
        <h1>{data.name}</h1>
        <h2>Repos: {data.public_repos}</h2>
        {data.html_url}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/aadityarajv')
    return response.json()
}