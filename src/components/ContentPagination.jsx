import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const ContentPagination = ({page, setPage, numberOfPage}) => {

    const handleChange=(event,p)=>{
        setPage(p)
    }

  return (
    <Stack spacing={2}>
        <Pagination 
            className='pagination'
            count={numberOfPage} 
            showFirstButton 
            showLastButton
            page={page} 
            onChange={handleChange} 
        />
    </Stack>
  );
}
