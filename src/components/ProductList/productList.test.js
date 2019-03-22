import React from 'react'
import renderer from 'react-test-renderer'
import Product from './product.component'
test('Product renders correctly', ()=> {
    const component = renderer.create(<Product />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})