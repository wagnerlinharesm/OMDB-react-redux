import SearchMovie from "../../services/search.service"


export const fetchMovies = (inputSearch) => {
  SearchMovie.getData(inputSearch).then(response => {
    console.log("request " + JSON.stringify(response));
  
    return {
      type: 'FETCH_MOVIES',
      payload: response
    }
  });

}
