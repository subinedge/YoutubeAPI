import React from 'react'
import{Paper, Typography} from '@material-ui/core'

const videoDetail = ({video}) => {
  if(!video) return <div>Loading...</div>

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return(
    <React.Fragment>
      <Paper elevation = {6} style={{height:'25%'}}>
        <iframe src={videoSrc} frameBorder="0" height="100%" width="100%" title="video player"></iframe>
      </Paper>

      <Paper elevation = {6} style={{padding:'15px'}}>
        <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
        {/* <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography> */}
        <Paper>
          <Typography variant="subtitle1">{video.snippet.description}</Typography>
        </Paper>
        
      </Paper>
    </React.Fragment>
  )
}

export default videoDetail;