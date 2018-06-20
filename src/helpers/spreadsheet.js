import config from '../config';

export function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                range: "Ark 1!A1:G30"
            })
            .then(response => {
                const data = response.result.values;

                callback({data});
            }, response => {
                callback(false, response.result.error);
            });
    });
}