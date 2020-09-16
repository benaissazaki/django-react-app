import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from "./redux/store";

describe('<App />', () => {
  it('renders correctly', () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})