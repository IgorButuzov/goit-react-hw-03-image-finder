import React from 'react';

import Searchbar from "components/Searchbar/Searchbar";

class App extends React.Component {


  handleSubmit = e =>{
    e.preventDefault();
    
  }

  render() {
    return (
    <div>
    <Searchbar
    onSubmit={this.handleSubmit}/>
     {/* <ImageGallery/>
     <ImageGalleryItem/>
     <Loader/>
     <Button/>
     <Modal/> */}
    </div>
  );
    }
};

export default App;