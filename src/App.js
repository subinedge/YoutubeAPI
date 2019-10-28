import React from 'react'

import {Grid} from '@material-ui/core'

import {SearchBar, VideoList, VideoDetail} from './components'

import youtube from './api/youtube'

class App extends React.Component {

  state = {
    videos : [],
    selectedVideo : null
  }

  componentDidMount(){
    this.handleSubmit('ReactJS for expert')
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  handleSubmit = async (searchString) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyA7EHYWFeUBKxSIiQuvwuL-doLcPTcXX6M',
        q: searchString
      }
    });

    console.log(response.data.items);

    
  this.setState({
    videos: response.data.items,
    selectedVideo: response.data.items[0]
  })

  }


  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={5}>


            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>

            <Grid item xs={8}>
              <VideoDetail video = {selectedVideo}/>
            </Grid>

            <Grid item xs={4}>
              <VideoList videos = {videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>


          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;