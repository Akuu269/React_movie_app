import React, { Component } from 'react'

export default class List extends Component {
    render() {
        // We need input here >-genres
        // 2. fun of >-  groupByGenres
        let {genres , groupByGenres} = this.props;
        return (
            <ul class="list-group">
                     {
                        genres.map((cgObj) => (
                            (<li class="list-group-item" key = {cgObj.id} 
                             onClick = {() => {groupByGenres(cgObj.name)}}>
                                 {cgObj.name}</li>)

                        )) 
                     }
                
                 </ul>
        )
    }
}
