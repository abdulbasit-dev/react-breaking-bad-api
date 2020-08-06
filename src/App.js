import React from 'react'
import Header from './components/Header'
import './App.css'
import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import CharactersGrid from './components/CharactersGrid'
import Search from './components/Search'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(`https://breakingbadapi.com/api/characters?name=${query}
      `)
      setItems(results.data)
      setIsLoading(false)
    }

    fetchData()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={e => setQuery(e)} />
      <CharactersGrid items={items} isLoading={isLoading} />
    </div>
  )
}

export default App
