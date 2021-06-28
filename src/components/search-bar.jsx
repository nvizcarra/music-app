import React from 'react';

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
                            logo
                        </div>
                        <div className="col-md-4">
                            <form className="form-inline" onSubmit={this.handleSubmit} name="Form">
                                <div className="form-group mx-sm-3 mb-2">
                                    <input
                                        name="InputForm"
                                        type="text"
                                        className="form-control"
                                        placeholder="Busca una banda"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button
                                    name="Soy el botón"
                                    type="submit"
                                    className="btn btn-primary mb-2"
                                // onClick={this.handleClick}
                                >
                                    Buscar
                                </button>
                            </form>
                        </div>

                    </div>
            </React.Fragment>
        )
    }
}

export default SearchBar;