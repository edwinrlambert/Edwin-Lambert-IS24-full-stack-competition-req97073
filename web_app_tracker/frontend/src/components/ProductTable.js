import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://127.0.0.1:8000/api/get-json-data/");
                setData(result.data);
            } catch (error) {
            }
        };
        fetchData();
    }, []);

    const handleEditProduct = () => {
        window.location.href = 'http://127.0.0.1:8000/edit-product';
    };

    return (
        <>
            {/* Listing the web application in a table. */}
            <div className="product-list-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Product Owner</th>
                            <th>Developers</th>
                            <th>Scrum Master</th>
                            <th>Start Date</th>
                            <th>Methodology</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.productId}</td>
                                <td>{row.productName}</td>
                                <td>{row.productOwnerName}</td>
                                <td>{row.Developers.join(', ')}</td>
                                <td>{row.scrumMasterName}</td>
                                <td>{row.startDate}</td>
                                <td>{row.methodology}</td>
                                <td>
                                    <div className="button-container"></div>
                                    <button className="edit-table-row">Edit</button>
                                    <button className="delete-table-row">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default ProductTable;