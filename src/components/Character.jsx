import React from 'react'

const Character = ({item}) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name: {item.portrayed}</strong>
            </li>
            <li>
              <strong>Nickname: {item.nickname}</strong>
            </li>
            <li>
              <strong>Birthday: {item.birthday}</strong>
            </li>
            <li>
              <strong>Status: {item.status}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Character
