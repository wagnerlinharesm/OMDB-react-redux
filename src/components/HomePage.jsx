import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchMovies} from '../store/actions/movieSearch.action'
import {order} from '../store/actions/movieSearch.action'
import MovieList from './MovieList';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {ORDER_A_TO_Z} from "../store/actions/actionTypes";
import {ORDER_Z_TO_A} from "../store/actions/actionTypes";
import {ORDER_AVERAGE_HIGH} from "../store/actions/actionTypes";
import {ORDER_AVERAGE_LOW} from "../store/actions/actionTypes";

export class HomePage extends Component {
    constructor(props) {
        super(props);
  
        this.state = { term: '', valueSelected: '' };
    }
    
    render() {

        const handleChange = (event) => {
            this.setState({ valueSelected: event.target.value })
            switch(event.target.value) {
                case 10:
                    this.props.order(ORDER_A_TO_Z);
                    break;
                case 20:
                    this.props.order(ORDER_Z_TO_A);
                    break;
                case 30:
                    this.props.order(ORDER_AVERAGE_HIGH);
                    break;
                case 40:
                    this.props.order(ORDER_AVERAGE_LOW);
                    break;
                default:
                    
            }
             
        };
        return (
            
            <div style={{display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: '0 auto'}}>
            <h1>OMDB Movie Search</h1>
                <div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center' }}>
                <TextField style={{width: '100%'}} id="filled-basic" label="Search Movie Title" variant="filled" value={this.state.term}  onChange={event => this.setState({ term: event.target.value })} />
                <Button
                    style={{maxWidth: '75px', maxHeight: '55px', minWidth: '55px', minHeight: '55px'}}
                    variant="contained" color="primary"
                    onClick={() => this.props.fetchMovies(this.state.term)}
                    >
                    Find
                </Button>
                {
                    this.props.movieList && this.props.movieList.length > 0 ? 
                    (
                        <FormControl  variant="filled" style={{width: '35%', marginLeft: '5px'}} >
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.valueSelected}
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>A - Z</MenuItem>
                        <MenuItem value={20}>Z - A</MenuItem>
                        <MenuItem value={30}>Average Descending</MenuItem>
                        <MenuItem value={40}>Average Ascending</MenuItem>
                        </Select>
                        </FormControl>
                    ) : ''
                }
                </div>
                    <MovieList movies={this.props.movieList}/>                    
                </div>               
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
    movieList: state.movieReducer.result
})
 
const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: term => {
        dispatch(fetchMovies(term));
      },
      order: (orderSelected) => {
          dispatch(order(orderSelected));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
