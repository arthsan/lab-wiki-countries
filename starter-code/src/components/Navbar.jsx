import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>
        <div>
          <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
              <Link class="navbar-brand" to="/">WikiCountries</Link>
            </div>
          </nav>
        </div>
      </div>
  )
}

export default navbar;