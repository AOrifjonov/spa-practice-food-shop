import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function ContentsItem({
    idCategory,
    strCategory
}) {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
  return (
    <div 
        onDoubleClick={()=> navigate(`/category/${strCategory}`)} 
        onMouseLeave={()=> setShow(false)} 
        onMouseEnter={()=> setShow(true)} className='contents-card'
    >
        <div>
            {idCategory}. {strCategory}
        </div>
        {show && 
            <Link 
                to={`/category/${strCategory}`}>
                    <i className='material-icons opener-icons'>
                    adjust
                </i>
            </Link> 
        }
    </div>
  )
}
