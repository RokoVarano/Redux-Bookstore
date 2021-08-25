const CREATE_APP = 'START_CREATE_APP';
const SUCCESS_CREATE_APP = 'SUCCESS_CREATE_APP';

const initialState = () => localStorage.getItem('app_id');

const startCreateApp = (id = initialState) => ({
  type: CREATE_APP,
  id,
});

const successCreateApp = () => ({
  type: SUCCESS_CREATE_APP,
});

const createApp = (id) => (dispatch) => {
  dispatch(startCreateApp(id));

  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      response.text()
        .then((text) => {
          dispatch(successCreateApp(text));
          localStorage.setItem('app_id', text);
        });
    });
};

export default createApp;
