import React from 'react';
import { LoginPage } from '../../Components/LoginPage';
import { shallow } from 'enzyme';

test('should render LoginPage correctly ', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('chould call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').prop('onClick')();
  expect(startLogin).toHaveBeenCalled();
});
