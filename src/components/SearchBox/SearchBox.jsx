import React from 'react';
import css from "./SearchBox.module.css";

const SearchBox = ({searchItem, onChange}) => {

  return (
    <div >
      <h2>Find contacts by name</h2>
      <input className={css.search}
         type = "text" 
         value = {searchItem} 
         onChange ={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBox