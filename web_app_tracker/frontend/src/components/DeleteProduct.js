import React, { useState, useEffect } from "react";

const AddProduct = () => {
    const [showCard, setShowCard] = useState(false);

    const handleOpenCard = () => {
        setShowCard(true);
    };

    const handleCloseCard = () => {
        setShowCard(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div>
            <button onClick={handleOpenCard}>Open Form</button>
            {showCard && (
                <div className="card-container">
                    <div className="card">
                        <button className="close-button" onClick={handleCloseCard}>
                            X
                        </button>
                        <form className="form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddProduct;