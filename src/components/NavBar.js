/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function NavBar() {
    return (
        <div id="menu">
    
            <input type="checkbox" id="menu-toggle"/>
  
                <ul class="">
                    <li class="">
                        <a class="" href="/">Home</a>
                    </li>

                    <li className="fl">
                        <a class="nav-link" href="/employees/add">Add</a>
                    </li>
                </ul>
            </div>
    );
}