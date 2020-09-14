import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const currentTab = (history,path) => {
    if(history.location.pathname === path) {
        return {
            color : 'black'
        }
    } else {
        return {
            color : 'white'
        }
    }
};

const Navbar = ({
    history
}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-main">
                <div className='container'>
                    <Link style={currentTab(history,'/')} className="nav-link mr-3" to='/'>Home</Link>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link 
                                        style={currentTab(history,'/create/product')} 
                                        className="nav-link" 
                                        to='/create/product'
                                    >Add Product</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link style={currentTab(history,'/cart')} className="nav-link" to='/cart'>Cart</Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);