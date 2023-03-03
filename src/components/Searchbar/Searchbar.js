import { Component } from 'react';
import styles from 'components/Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    searchData: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ searchData: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchData.trim() === '') {
      toast('Enter a request');
      return;
    }
    this.props.onSubmit(this.state.searchData);
    this.setState({ searchData: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.button_label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchData}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
