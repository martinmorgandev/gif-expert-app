import React from 'react'

export function GifItem({title, url}) {
  return (
    <div >
        <img src={url} alt={title} />
        <p className='item'>{title}</p>
    </div>
  )
}
