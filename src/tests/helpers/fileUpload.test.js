import cloudinary from 'cloudinary';

import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
    cloud_name: 'grmmreno',
    api_key: '118164856578681',
    api_secret: 'CCeRigUriArfFmrmgAYUfZa-jKg',
});

describe('Pruebas en fileUpload', () => {
    test('Debe de cargar un archivo y retornar el URL', async (done) => {
        const resp = await fetch(
            'https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/2017/08/28/dvd/594/puzzles-squirrel.jpg'
        );

        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        //Borrar imagen por ID

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });
    });

    test('Debe de retornar un error', async () => {
        const file = new File([], 'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe(null);
    });
});
