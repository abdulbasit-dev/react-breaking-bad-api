import React, {useState} from 'react'

const Search = ({getQuery}) => {
  const [input, setInput] = useState('')

  function handleChange(e) {
    setInput(e)
    getQuery(e)
  }

  return (
    <div className='search'>
      <form>
        <input
          type='text'
          placeholder='Search characters'
          autoFocus
          className='form-control'
          value={input}
          onChange={e => handleChange(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
