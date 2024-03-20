import './SearchBox.css';

const SearchBox = ({ filterUsers, setFilterUsers }) => {

    function showFilteredUsers(e) {
        setFilterUsers(e.target.value)
    }

    return (
        <div className="search-bar">
            <label htmlFor="search" className='search-label'>Find contacts by name</label>
            <input
                type="text"
                name="search"
                className='search-input'
                value={filterUsers}
                onChange={showFilteredUsers} />
        </div>
    )
}

export default SearchBox;