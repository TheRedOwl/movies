import React from 'react'
import { useState } from 'react';
import { Content } from '../components/Content';
import { ChangeSearchType } from '../components/ChangeSearchType';
import { SearchBar } from '../components/SearchBar';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export const SearchPage = () => {
  const [typeChange, setTypeChange] = useState(true)
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [fetchData, setFetchData] = useState(false)

  const handleClick = () => {
    setFetchData(true)
  }

  const type = typeChange ? "movie" : "tv"

  const urlSearch = `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&query=${searchText}&page=${page}`;

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{paddingTop:"40px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", height:"150px"}}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} setFetchData={setFetchData}/>
        <Button onClick={handleClick}>search</Button>
        <ChangeSearchType setTypeChange={setTypeChange} typeChange={typeChange} />
      </div>
      {fetchData && <Content type={type} url={urlSearch}/> }
    </div>
  )
}
