import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { img_300, imgUnavailable } from '../utils';
import { CardActionArea } from '@mui/material';
import { DetailModal } from './DetailModal';
import { useState } from 'react';

export const SingleContent=({id,poster_path,title,name,first_air_date,release_date,media_type,vote_average,type}) => {
  
  const [open, setOpen] = useState(false);

  return (
    <>
    <Card sx={{ width: 250 }}>
        <CardActionArea onClick={()=>setOpen(true)}>
        <CardMedia
        sx={{ height: 140, margin: "10px" }}
        image={poster_path ? img_300+poster_path : imgUnavailable}
        title={title||name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title||name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', display:'flex', justifyContent:"space-between" }}>
            <span>{media_type}</span><span>{first_air_date || release_date}</span>
        </Typography>
        <span style={{position:'absolute',top:"0",right:"0", border:"2px solid rgb(11, 87, 162)", borderRadius:"100%", padding:"5px", fontWeight:"bold", color:"rgb(11, 87, 162)", backgroundColor:"gray", margin:"5px"}} >{vote_average.toFixed(1)}</span>
      </CardContent>
        </CardActionArea>
    </Card>
    {open && <DetailModal open={open} setOpen={setOpen} id={id} media_type={media_type||type} />}
    </>
  );
}
