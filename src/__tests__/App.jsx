import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import App from '../App'

const setup = (testProps = {}) => {
  const props = {
    ...testProps,
  }

  const wrapper = shallow(<App {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('App', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
