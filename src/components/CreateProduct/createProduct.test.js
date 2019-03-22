import React from 'react'
import renderer from 'react-test-renderer'
import createProduct from './createProduct.component'
test('Product renders correctly', ()=> {
    const component = renderer.create(<createProduct />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})