import React from 'react'
import renderer from 'react-test-renderer'
import Home from './home.component'
test('Product renders correctly', ()=> {
    const component = renderer.create(<Home />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})