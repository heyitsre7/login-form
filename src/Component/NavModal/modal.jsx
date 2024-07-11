import { useState } from "react";
import './style.css';

function NavModal(){
    const [modal, setModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleShow = () => setModal(true);
    const handleClose = () => setModal(false);
    const handleInputChange = (event) => setInputValue(event.target.value);
    const handleSubmit = () => {
        setDisplayText(inputValue);
        handleClose();
    };

    return(
        <>
        <nav className="navbar">
        <div className="navbar-brand">Navbar</div>
        <button className="button" onClick={handleShow}>Open Form</button>
        </nav>
        
        <div className="container">
            <h1>List</h1>
            <h3>{displayText}</h3>
        </div>

        {modal && (
            <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                <h2>Form Modal</h2>
                <span className="close" onClick={handleClose}>&times;</span>
                </div>
                <div className="modal-body">
                <input
                    type="text"
                    placeholder="Enter some text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                </div>
                <button className="button" onClick={handleSubmit}>Submit</button>
                </div>
            
            </div>
        )}
        </>
    )
}

export default NavModal;