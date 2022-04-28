import React, { useState } from 'react'

export default function Search({callBack = Function.prototype}) {
    const [value, setValue] = useState("")

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            callBack(value)
        }
    }


  return (
    <div className='search-section'>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <input 
                type='search'
                id='search-field'
                placeholder='Search'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKey}
            />
            <button className='btn'
                onClick={()=>callBack(value)}
            >
                Search
            </button>
        </div>
    </div>
  )
}
