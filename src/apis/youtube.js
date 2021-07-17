import axios from 'axios';

const KEY = 'AIzaSyBSjRFopPXB3sijCGuwHf0_gmF6GJ191ZI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
