import React, { Component } from 'react';
import axios from 'axios';

import './productList.css';

const baseUrl = 'http://localhost:4000/product';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios.get(baseUrl)
            .then(res => {
                console.log(res);
                this.setState({
                    products: res.data
                })
            })
            .catch(err => {
                console.log(err);
                throw err;
            })
    }

    upvoteDownvoteProduct = (itemId, isLikeClicked) => {
        if (isLikeClicked) {
            axios.post(baseUrl + '/upvote/' + itemId)
                .then(res => {
                    console.log(res);
                    alert('Product liked successfully');
                    this.getData();
                })
                .catch(err => {
                    console.log(err);
                    throw err;
                })
        } else {
            axios.post(baseUrl + '/downvote/' + itemId)
                .then(res => {
                    console.log(res);
                    alert('Product unliked successfully');
                    this.getData();
                })
                .catch(err => {
                    console.log(err);
                    throw err;
                })
        }
    }
    render() {
        const { products } = this.state;
        return (
            <div className="productList-container">
                {products.map(item => {
                    return (
                        <div key={item._id} className="list-container">
                            <h4 className="title">{item.title}</h4>
                            <div className="like-container">
                                <div className="list-item like">
                                    <span>{item.likes}</span>
                                    <i
                                        className="fa fa-thumbs-up"
                                        style={{ fontSize: "30px", color: "blue" }}
                                        onClick={() => this.upvoteDownvoteProduct(item._id, true)}></i>
                                </div>
                                <div className="list-item dislike">
                                    <span>{item.dislikes}</span>
                                    <i
                                        className="fa fa-thumbs-down"
                                        style={{ fontSize: "30px", color: "red" }}
                                        onClick={() => this.upvoteDownvoteProduct(item._id, false)}></i>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}