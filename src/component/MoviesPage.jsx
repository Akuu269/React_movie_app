import React, { Component } from 'react'
import { getMovies } from './temp/MoviesService'
import Pagination from './Pagination'
import List from './List'
import {Link} from 'react-router-dom'
export default class MoviesPage extends Component {
    state = {
      
       // movies : getMovies() ,
        movies : [] ,
        currSearchText : "" ,
        limit : 4,
        genres : [{id : 1 , name : "All Genres"}],
        currentPage : 1 , 
        cGenres : "All Genres"        
    }
    deleteEntry = (id) => {
        let filterMovies = this.state.movies.filter((movieobj) =>{
            return movieobj._id != id;
        })
        this.setState({
            movies : filterMovies
        })
    }
    setCurrentText = (e) => {
        let task = e.target.value;
        // filter
        this.setState({
            currSearchText : task,
            
        })
    }
    sortByRating = (e) =>{
        let className = e.target.className;
        let sortedMovies;
        let{movies} = this.state;
        if(className == "fas fa-sort-up"){
            sortedMovies = movies.sort((movieobjA , movieobjB) => {
                return movieobjA.dailyRentalRate - movieobjB.dailyRentalRate;
            });
        }else{
            sortedMovies = movies.sort((movieobjA , movieobjB) =>{
                return movieobjB.dailyRentalRate - movieobjA.dailyRentalRate;
            } );
        }
        this.setState({
            movies : sortedMovies
        })
    }
    sortByStock = (e) => {
        let className = e.target.className.trim();
        let sortedMovies;
        let{movies} = this.state;
        if(className == "fas fa-sort-up"){
            sortedMovies = movies.sort((movieobjA , movieobjB) => {
                return movieobjA.numberInStock - movieobjB.numberInStock;

            })
        }else{
            sortedMovies = movies.sort((movieobjA , movieobjB) => {
                return movieobjB.numberInStock - movieobjA.numberInStock;
            });
        }
        this.setState({
            movies : sortedMovies
        })
    }
    changelimit = (e) => {
        let currLimit = e.target.value;
        if(currLimit < 1)
            return;
        this.setState({
            limit : currLimit
        })

    }
    changeCurrentPage = (pageNumber) => {
        this.setState({
            currentPage : pageNumber
        })
    }
    groupByGenres = (name) => {
        this.setState({
            cGenres : name,
            currSearchText : ""

        })
    }
    async componentDidMount(){
        let response = await fetch("https://react-backend101.herokuapp.com/movies");
        let jsonMovies = await response.json()
        this.setState({
            movies : jsonMovies.movies
        })
        response = await fetch("https://react-backend101.herokuapp.com/genres");
        let jsonGenres = await response.json()
        this.setState({
            genres : [...this.state.genres , ...jsonGenres.genres]   // split 
        });

    }
    render() {
        let { movies , currSearchText , limit , currentPage , genres , cGenres} = this.state;
        // Filter On the based of Genres 
        let filteredArr = movies;
        if(cGenres != "All Genres"){
            filteredArr = filteredArr.filter((movieobj) => {
                return movieobj.genre.name == cGenres;
            })
        }
        //  Filter On the base of Search Term
        if(currSearchText != ""){
            filteredArr = filteredArr.filter((movieobj) => {
                let title = movieobj.title.trim().toLowerCase();
                return title.includes(currSearchText.toLowerCase());
           

            })
        }
         // paginate
        // no of pages
        let numberofPage = Math.ceil(filteredArr.length / limit);

         // impliment
        // si >- sartingindx>- (pagenumber - 1) * limit
        // eidx >- endingindx >- si + limit
        let si = (currentPage -1 )*limit;
        let eidx = si + limit;
        filteredArr = filteredArr.slice(si , eidx);
        return (
        
            <div className = "row" >     {/* page devided into 12 vertical row 
                {/* col-3 means 12 out of 3 part and col-9 means 9 out of 12 part */}
                 <div className="col-3">
                     <List
                     genres ={genres}
                     groupByGenres = {this.groupByGenres}
                     ></List>
                 </div>
                 <div className="col-9">
                     <button className = "btn btn-primary">
                         <Link to = "/new" className = "text-light">New</Link>
                     </button>
                      {/* In bootstrap , seach the table >- and copy the code of table class */}
            
            <input type = "search" value = {currSearchText} onChange = {this.setCurrentText}></input>
            <input type = "number" className = "col-1"
            placeholder = "no of elements/page"
            value = {limit}
            onChange = {this.changelimit}>
                
            </input>
                <table className="table">
                <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock
                  <i className = "fas fa-sort-up" onClick = {this.sortByStock}></i>
                  <i className = "fas fa-sort-down" onClick = {this.sortByStock}></i>
                      </th>
                  <th scope = "col">Rating
                  <i className = "fas fa-sort-up" onClick = {this.sortByRating}></i>
                  <i className = "fas fa-sort-down" onClick = {this.sortByRating}></i>
                    </th>
                </tr>
              </thead>

                <tbody>
                {filteredArr.map((movieobj) =>{
                    return(<tr scope= "row" key = {movieobj._id}>
                        <td>{movieobj.title}</td> 
                        <td>{movieobj.genre.name}</td> 
                        <td>{movieobj.numberInStock}</td>
                        <td>{movieobj.dailyRentalRate}</td>
                        <td>
                        <button className = "btn btn-danger text-white" onClick = {() => {
                            this.deleteEntry(movieobj._id);
                        }}>Delete</button>
                        </td>
                        
                    </tr>)
                    
                })}
              </tbody>

                </table>
                <Pagination
                numberofPage = {numberofPage} 
                currentPage ={currentPage} 
                changeCurrentPage = {this.changeCurrentPage}
                ></Pagination>               
                 </div>
            </div>

        )
    }
    }
      

