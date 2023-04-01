import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    }

    const clearInput = () => {
        setSearchTerm("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <div className="searchIcon">
                        {searchTerm.length === 0 ? (
                            <SearchIcon />
                        ) : (
                            <CloseIcon id="clearBtn" onClick={clearInput} />
                        )}
                    </div>
                </div>
            </form>
        </>
    )

}

export default Search;