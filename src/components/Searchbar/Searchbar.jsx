import React from 'react';

import css from 'components/Searchbar/Searchbar.module.css'

class Searchbar extends React.Component {
state = {
    inputData: '',
}

onHandleSubmit = e => {
  e.preventDefault();
  if (this.state.inputData.trim() === '') {
    alert('Insert image name');
    return; 
  }
    this.props.onSubmit(this.state.inputData)
    this.setState({inputData: ''})
};

onInputChange = e => {
  this.setState({inputData: e.currentTarget.value})
}

render() {
  console.log(this.state.inputData);
    const {inputData} = this.state;
    
    return (
        <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.onHandleSubmit}>
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