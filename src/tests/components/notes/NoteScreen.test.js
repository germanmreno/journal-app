import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/note', () => ({
    activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '123abc',
        name: 'Germán',
    },
    ui: {
        loading: false,
        msgError: null,
    },
    notes: {
        active: {
            id: 1234,
            title: 'Hola',
            body: 'Mundo',
            date: 123,
        },
        notes: [],
    },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <NoteScreen />
    </Provider>
);

describe('Pruebas en <NoteScreen />', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mandar la acción de activeNote', () => {
        wrapper.find("input[name='title']").simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo',
            },
        });

        expect(activeNote).toHaveBeenLastCalledWith(1234, {
            title: 'Hola',
            body: 'Mundo',
            id: 1234,
            date: 123,
        });
    });
});
