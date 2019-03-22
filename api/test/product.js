process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Product = require('../model/product.model');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('Products', () => {
    beforeEach((done) => {
        Product.remove({}, (err) => {
            done();
        });
    });
});
/*
* Test the /GET route
*/
describe('/GET Products', () => {
    it('it should GET all the products', (done) => {
        chai.request(server)
            .get('/product')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
    });
});
/*
* Test the /POST route
*/
describe('/POST upvote', () => {
    it('it should add a new product', (done) => {
        let product = {
            title: "The Lord of the Rings",
            likes: 0,
            dislikes: 0
        }
        chai.request(server)
            .post('/add')
            .send(product)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                done();
            });
    });
});