import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        // paginate
        // no of pages
        // 1. we want fun
        //2 . input >-  numberofPage  , currentPage,  changeCurrentPage
        let {numberofPage, currentPage ,changeCurrentPage} = this.props;
        let pageNumberArr = []
        for (let i = 0; i < numberofPage; i++) {
            pageNumberArr.push(i + 1);

        }
            return (
                <nav aria-label="..." className="col-2" >
                        <ul className="pagination ">
                            {
                                pageNumberArr.map((pageNumber) => {
                                    let additional = pageNumber == currentPage ? "page-item active" : "page-item";
                                    return (
                                        <li className="page-item" aria-current="page">
                                        <li className={additional}
                                            aria-current="page" onClick={() => {changeCurrentPage(pageNumber) }}>
                                            <span className="page-link">{pageNumber}</span>
                                        </li>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav> 
            )
        }
    }

