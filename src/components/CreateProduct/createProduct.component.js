import React, { Component } from 'react';
import Axios from 'axios';

import './createProduct.css';

const baseUrl = "http://localhost:4000/product/";
export default class createProduct extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLike = this.onChangeLike.bind(this);
        this.onChangeDislike = this.onChangeDislike.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: '',
            like: null,
            dislike: null,
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeLike(e) {
        this.setState({
            like: e.target.value
        });
    }
    onChangeDislike(e) {
        this.setState({
            dislike: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const { title, like, dislike } = this.state;
        if (title === '' || like === null || dislike === null) {
            alert('Please fill all the fields to continue');
        } else {
            const obj = {
                title: title,
                likes: like,
                dislikes: dislike
            };
            Axios.post(baseUrl + 'add', obj)
                .then(res => {
                    console.log(res);
                    alert('Record added successfully !!')
                })
                .catch(err => {
                    console.log(err);
                })
            this.setState({
                title: '',
                like: null,
                dislike: null,
            })
        }
    }

    render() {
        const { title, like, dislike } = this.state;
        return (
            <div className="create-container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Product Title </label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Like Count</label>
                        <input type="text"
                            className="form-control"
                            value={like}
                            onChange={this.onChangeLike}
                        />
                    </div>
                    <div className="form-group">
                        <label>Dislike Count </label>
                        <input type="text"
                            className="form-control"
                            value={dislike}
                            onChange={this.onChangeDislike}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" className="btn btn-primary width-100" />
                    </div>
                </form>
            </div>
        )
    }
}