'use strict';


import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
           
                  <div>
        <nav>
          <ul>
            <li>
              <a href="http://localhost:3000/">Home</a>
            </li>
            <li>
              <a href="http://localhost:3000/favorite">profile</a>
            </li>
           
          </ul>
        </nav>
            </div>
        )
    }
}

export default Header
