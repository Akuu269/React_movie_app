 {/* col-3 means 12 out of 3 part and col-9 means 9 out of 12 part 
                <div className="col-3"></div>
                <div className="col-9">

                    {/* In bootstrap , seach the table >- and copy the code of table class 

                <table className="table">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Rate</th>
                </tr>
              </thead>

                <tbody>
                {movies.map((movieobj) =>{
                    return(<tr scope= "row" key = {movieobj._id}>
                        <td>{movieobj.title}</td> 
                        <td>{movieobj.genre.name}</td> 
                        <td>{movieobj.numberInStock}</td>
                        <td>{movieobj.dailyRentalRate}</td>
                        <button className = "btn btn-danger text-white" onClick = {() => {
                            this.deleteEntry(movieobj._id);
                        }}>Delete</button>
                    </tr>)
                    
                })}
              </tbody>

                </table>
               
                </div>
            </div>
        )
    } */}
