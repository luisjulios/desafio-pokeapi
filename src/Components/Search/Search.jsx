import "./Search.css"
import { useState } from "react"


const Search = ({onSearch}) => {
  const [search, setSearch] = useState('')

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null)
    }
  }
  const onClick = async (e) => {
    onSearch(search);
  }

  return (
    <div className="search">
        <input type="text" placeholder="Buscar..." onChange={onChange} className="inputSearch"/>
        <button onClick={onClick} className="inputButton">Buscar</button>
    </div>
  )
}

export default Search
