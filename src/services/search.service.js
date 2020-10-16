import axios from "axios";

const API_URL = "http://www.omdbapi.com/?apikey=7a658b21&&type=movie&";

class SearchMovie {
    getData(inputSearch) {
        
        inputSearch.replace(/\s/g, '+');
        return new Promise((resolve,reject) => {
            axios
            .get(`${API_URL}s=${inputSearch}`)
            .then((response) => {
                if (!response.data.Search) {
                reject('Fail at get OMDB information')
                } 
                if (response.data.Search) {

                    let promisesArray = [];            
    
                    response.data.Search.forEach(element => {
                        promisesArray.push(this.findById(element))
                    });
    
                    Promise.all(promisesArray).then(result => {
                        resolve(result);
                    })
                }
                
                
            });
        })
         
    }

    findById(element) {
        return axios
            .get(`${API_URL}i=${element.imdbID}`)
            .then((response) => {
                
                let additionalData = {
                    "Rated": response.data.Rated,
                    "Released": response.data.Released,
                    "Runtime": response.data.Runtime,
                    "Genre": response.data.Genre,
                    "Director": response.data.Director,
                    "Writer": response.data.Writer,
                    "Actors": response.data.Actors,
                    "Plot": response.data.Plot,
                    "Language": response.data.Language,
                    "Country": response.data.Country,
                    "Awards": response.data.Awards,
                    "Ratings": response.data.Ratings,
                    "Metascore": response.data.Metascore,
                    "imdbRating": response.data.imdbRating,
                    "imdbVotes": response.data.imbVotes,
                    "Production": response.data.Production,
                    "Average": this.getAverageRating(response.data.Ratings)
                }

                element = Object.assign(element, additionalData);

                return element;
        });
    }

    getAverageRating(rating) {
        if (rating) {
            let total = 0;

            for (let i = 0; i < rating.length; i++) {
                switch (rating[i].Source) {
                    case "Rotten Tomatoes":
                        total += parseFloat(rating[i].Value.split('/')[0].replace('%', "") / 10);
                        break;
                    case "Metacritic":
                        total += parseFloat(rating[i].Value.split('/')[0] / 10);
                        break;
                    default:
                        total += parseFloat(rating[i].Value.split('/')[0]);
                    }
            }
            let avg = total / rating.length;
    
            return avg.toFixed(2);
        } else {
            return 'N/A'
        }

    }
    
    sortAtoZ(data) {
        console.log(JSON.stringify(data));
        data.sort((a, b) => {
            if(a.Title < b.Title) { return -1; }
            if(a.Title > b.Title) { return 1; }
            return 0;
        });
        return data;
    }

    sortZtoA(data) {
        console.log(JSON.stringify(data));
        data.sort((a, b) => {
            if(a.Title > b.Title) { return -1; }
            if(a.Title < b.Title) { return 1; }
            return 0;
        });
        return data;
    }

    sortAverageHigh(data) {
        data.sort((a, b) => {
            if(a.Average > b.Average) { return -1; }
            if(a.Average < b.Average) { return 1; }
            return 0;
        });
        return data;
    }

    sortAverageLow(data) {
        console.log(JSON.stringify(data));
        data.sort((a, b) => {
            if(a.Average < b.Average) { return -1; }
            if(a.Average > b.Average) { return 1; }
            return 0;
        });
        return data;
    }
    
}

export default new SearchMovie();