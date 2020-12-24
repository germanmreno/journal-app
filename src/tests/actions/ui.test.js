import { removeError, setError, uiFinishLoading, uiStartLoading } from '../../actions/ui';
import { types } from '../../types/types';

describe('Pruebas en ui-actions', () => {
    test('Todas las acciones deben de funcionar', () => {
        const action = setError('Error');

        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Error',
        });

        const removeErrorAction = removeError();
        const startLoadingAction = uiStartLoading();
        const finishLoadingAction = uiFinishLoading();

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError,
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading,
        });

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading,
        });
    });
});
