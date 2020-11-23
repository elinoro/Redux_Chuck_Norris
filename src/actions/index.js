import axios from 'axios';

export const getJoke = () =>{
  return(dispatch) => {
    return axios.get('https://api.chucknorris.io/jokes/random')
    .then((response) => {
      dispatch(generate(response.data.value));
    })
  }
}

export function generate(joke){
  return{
    type: 'GET_JOKE',
    joke: joke
  }
}