import React from 'react';

import css from 'components/Searchbar/Searchbar.module.css'

class Searchbar extends React.Component {
state = {
    inputData: '',
}

onInputChange = e => {
    this.setState({inputData: e.target.value})
    
    
};

onSearchClick = this.props.onSubmit

// resetInput() {
//     this.setState({inputData: ''})
//   };

render() {
    const {inputData} = this.state;
    
    return (
        <header className={css.searchbar} onSubmit={this.onSearchClick}>
        <form className={css.form} >
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>
      
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputData}
            onChange={this.onInputChange}
          />
        </form>
      </header>
    )
}
}

export default Searchbar;