import React from 'react'

import {Grid, Paper, Typography} from '@material-ui/core'

const videoItem = ({video, onVideoSelect}) => {
  return(
    <Grid item xs= {12}>
      <Typography style={{marginBottom: '20px'}} variant="h5">{video.snippet.channelTitle}</Typography>
      <Paper style={{display:'flex', alignItems: 'center', cursor: 'pointer'}} onClick={()=> onVideoSelect(video)}>
        <img style={{marginRight: '20px'}} src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        <Typography variant="h6"><b>{video.snippet.title}</b></Typography>
        
      </Paper>
      
    </Grid>
  )
}

export default videoItem;