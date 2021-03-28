import React, { Component } from 'react';

const NavBar = ( { navbars } ) => {

    // console.log(this.props);
    // const { navbars } = props;
    const navbarList = navbars.map(navbar => {
        return (
            <div className="navbar" key={navbar.id}>
                <p>-----------------------</p>
                <div>Name: {navbar.name}</div>
                <div>Age: {navbar.age}</div>
                <div>Belt: {navbar.belt}</div>

            </div>
        )
    })
    return (
        <div className="navbar-list">
            { navbarList}
        </div>
    )

}

export default NavBar;