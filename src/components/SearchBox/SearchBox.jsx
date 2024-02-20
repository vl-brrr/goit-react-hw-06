import { useId } from 'react';
import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  const searchBoxId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={searchBoxId}>
        Find contacts by name{<br />}
        <input
          className={css.input}
          type="text"
          id={searchBoxId}
          name="filter"
          value={value}
          onChange={event => onChange(event.target.value)}
        />
      </label>
    </div>
  );
};
