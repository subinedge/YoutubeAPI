import React from 'react'

import {Grid} from '@material-ui/core'

import {SearchBar, VideoList, VideoDetail} from './components'

import youtube from './api/youtube'

class App extends React.Component {

  handleSubmit = async (searchString) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyA7EHYWFeUBKxSIiQuvwuL-doLcPTcXX6M',
        q: searchString
      }
    });

    console.log(response.data.items);
  }


  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>


            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>

            <Grid item xs={8}>
              <VideoDetail/>
            </Grid>

            <Grid item xs={4}>
              {/* VIDEO SUGGESTIONS */}
            </Grid>


          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;