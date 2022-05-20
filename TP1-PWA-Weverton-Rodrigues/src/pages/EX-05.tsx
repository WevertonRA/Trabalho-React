import { useState, useEffect } from 'react';
import axios from 'axios';

type Repos = {
  id: number,
  full_name: string,
  description: string
}

function EX05() {
  const fruit = []
  const [repositories, setRepositories] = useState<Array<Repos>>([])

  useEffect(() => {
    axios.get('https://api.github.com/users/wevertonRA/repos')
      .then(response => setRepositories(response.data))
  })

  return (
    <ul>
      {repositories.map(repo => {
        return (
          <li key={repo.id}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default EX05
