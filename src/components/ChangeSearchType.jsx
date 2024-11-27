import { Button, Stack } from '@mui/material'
import React from 'react'

export const ChangeSearchType = ({typeChange, setTypeChange}) => {

    const handleSearch = () => setTypeChange(!typeChange)

  return (
    <>
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={handleSearch} disabled={typeChange?true:false} >Movies</Button>
            <Button variant="outlined" onClick={handleSearch} disabled={!typeChange?true:false} >Series</Button>
        </Stack>
    </>
  )
}
