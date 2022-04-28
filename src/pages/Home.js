import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import {getAllCategories} from '../api.js';
import CategoryList from '../components/CategoryList.js';
import Loader from '../components/Loader.js';
import Search from '../components/Search'

export default function Home() {
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])
  const {search} =  useLocation()
  const navigate = useNavigate()

  const handleSearch = (str)=> {
    setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    navigate('?search='+str)
  }

  const checkSearch = () => {
    if (search) {
      if (search.split('=')[1]) {
        return search.split('=')[1]
      }
    }
    return ''
  }

  useEffect(()=> {
    const searched = checkSearch()
    getAllCategories().then(data => {
      setCatalog(data.categories)
      setFilteredCatalog(data.categories.filter((item) => (
        item.strCategory.toLowerCase().includes(searched.toLowerCase())
      )))
    })
  })

  return (
    <div>
      <Search callBack={handleSearch} />
      {
        !catalog.length ? <Loader />
        : <CategoryList catalog={filteredCatalog ? filteredCatalog : catalog} />
      }
    </div>
  )
}
