import * as React from 'react';
import Chip from '@mui/material/Chip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

export const SingleChip=({id,name,selectedGenres,setSelectedGenres})=> {
    const [selected,setSelected]=useState(null)

    const handleClick=()=>{
        if(selectedGenres.indexOf(id)==-1){
            setSelectedGenres(prev=>[...prev,id])
        }else{
            setSelectedGenres(prev=>prev.filter(item=>item!=id))
        }
        setSelected(!selected)

    }

  return (
      <Chip icon={selected ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/>} label={name} clickable onClick={handleClick} />
  );
}
