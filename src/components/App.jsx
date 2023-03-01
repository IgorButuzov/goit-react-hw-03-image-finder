import React from 'react';

import Searchbar from "components/Searchbar/Searchbar";

import css from 'components/Searchbar/Searchbar.module.css'

class App extends React.Component {
state = {
  BASE_URL: 'https://pixabay.com/api/',
  KEY: '32625337-c016256a0573a5e098b27062e',
  page: 1,
  inputValue: '',
  totalPages: undefined,
  imgs: [],
}

componentDidMount() {
  const { BASE_URL, KEY, inputValue, page } = this.state;
  fetch(
    `${BASE_URL}?key=${KEY}&q=${inputValue}&image_type=photo&orientation=horisontal&safesearch=true&page=${page}&per_page=12`)
  .then(resp => resp.json())
  .then(({hits}) => this.setState({imgs: hits}));
}
componentDidUpdate(prevProps, prevState){
  if (prevState.inputValue !== this.state.inputValue) {
    const { BASE_URL, KEY, inputValue, page } = this.state;
  fetch(
    `${BASE_URL}?key=${KEY}&q=${inputValue}&image_type=photo&orientation=horisontal&safesearch=true&page=${page}&per_page=12`)
  .then(resp => resp.json())
  .then(({hits}) => this.setState({imgs: hits}));
  }
}
handleSubmit = inputValue =>{
    this.setState({inputValue})
  }
  
render() {
  const gallery = this.state.imgs;  
  return (
    <div>
    <Searchbar
    onSubmit={this.handleSubmit}/>
    
     {/* <ImageGallery/> */}
      { <ul className={css.galleryBox}>
        {gallery.map(img =>{
          return(
              <li key={img.id}>
              <img src={img.previewURL} alt="" />
              </li>
          )
        })}
        </ul>
      }
     {/* <ImageGalleryItem/> */}

     {/* <Loader/> */}

     {/* <Button/> */}

     {/* <Modal/> */}
    </div>
  );
    }
};

export default App;