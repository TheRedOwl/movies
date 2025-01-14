import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getData } from '../utils'
import { CircularProgress } from '@mui/material'
import { SingleContent } from "./SingleContent" 
import { useState } from 'react'
import { ContentPagination } from './ContentPagination'

export const Content = ({url,type}) => {

    const [page,setPage]=useState(1)

    const {isLoading,isError,error,data}=useQuery({queryKey:["trendings",url+"&page="+page],queryFn:getData})

    if(isLoading) return <CircularProgress/>
    if(isError) return <div>Error fetching data: {error.message}</div>
    console.log(data.results);
    

  return (
    <div className='content'>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"10px"}}>
        {data.results.map(obj=>
            <SingleContent key={obj.id} {...obj} type={type} />
        )}
      </div>
      <div className='pagination' style={{position:"fixed", bottom:10, backgroundColor:"rgb(25, 118, 210)", borderRadius:"15px", padding:"5px"}}>
      <ContentPagination page={page} setPage={setPage} numberOfPage={data.total_pages} />
      </div>
    </div>
  )
}
