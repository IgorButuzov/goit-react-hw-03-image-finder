import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '32625337-c016256a0573a5e098b27062e';
// let page = 1;
// let inputValue = '';
// let totalPages = undefined;

// async function getImage() {
//   try {
// const response = await axios.get(`${BASE_URL}?
// key=${KEY}&
// q=${inputValue}&
// image_type=photo&
// orientation=horisontal&
// safesearch=true&
// page=${page}&
// per_page=12`);
//       return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };