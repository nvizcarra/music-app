import React from 'react';
import './search-bar.css'
import logo from '../logo.svg';

class SearchBar extends React.Component {
    handleChange = e => {
        console.log(e.target.name, e.target.value);
    };
    handleClick = e => {
        e.preventDefault();
        console.log(e.target.name, 'Me hicieron click')
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name);
    }

    render() {
        return (
            <React.Fragment>
                    <div className="row">
                        <div className="col-md-2">
                            <img src={logo} alt="" className="logo-barra"/>
                        </div>
                        <div className="col-md-6">
                            <form className="form-inline" onSubmit={this.handleSubmit} name="Form">
                                <div className="busqueda">
                                    <input
                                        name="InputForm"
                                        type="text"
                                        id="buscar"
                                        placeholder="Busca una banda"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </form>
                        </div>

                    </div>
            </React.Fragment>
        )
    }
}

export default SearchBar;