import React from 'react';
import { shallow } from 'enzyme';
import Form from '../index';

describe('<Form/>', () => {
    const wrapper = shallow(
        <Form/>
    );
    it('exists', () => {
        expect(wrapper.length).toBe(1);
    });
});
