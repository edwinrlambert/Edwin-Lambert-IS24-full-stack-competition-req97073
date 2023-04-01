import React, { useState, useEffect } from "react";

// Import Components
import Search from './Search'
import ProductTable from "./ProductTable";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const Home = () => {

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (term) => {
        // Implement your search logic here and set the search results in the state
    };

    const handleAddProduct = () => {
        window.location.href = 'http://127.0.0.1:8000/add-product';
    };

    return (
        <>
            {/* Logo */}
            <span id="logo">WEBAPP HAS A TRACKER</span>
            <span id="logo-subtitle">A BC Gov Project</span>
            <span id="page-author">Designed by Edwin Lambert</span>

            <div className="header">
                <button className="add-table-row" onClick={handleAddProduct}>Add New Product</button>
                <Search onSearch={handleSearch} />
            </div>
            <ProductTable />
        </>
    )

}

export default Home;