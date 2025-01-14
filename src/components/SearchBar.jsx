import { Button, TextField } from '@mui/material'
import React from 'react'

export const SearchBar = ({searchText, setSearchText, setFetchData}) => {

    const handleChange = (event) => {
        setSearchText(event.target.value)
        setFetchData(false)
    }

  return (
    <div>
        <TextField id="searchbar" label="Search for content" variant="outlined" value={searchText} onChange={handleChange} style={{backgroundColor:"white"}} />
    </div>
  )
}
