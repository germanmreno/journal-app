import { types } from '../../types/types';

describe('Pruebas en types', () => {
    test('types debe ser igual al objeto con las propiedades correctas', () => {
        const typesTest = {
            login: '[Auth] login',
            logout: '[Auth] logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',

            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',

            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Updated note',
            notesFileUrl: '[Notes] Updated image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout cleaning',
        };

        expect(types).toEqual(typesTest);
    });
});
