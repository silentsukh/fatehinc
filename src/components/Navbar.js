import React from 'react';

export default class Navbar extends React.Component {
   constructor(props) {
      super(props);

   }
   selectMenu() {

   }
   render() {
      return (
      <nav className="navbar navbar-default navbar-toggleable-md navbar-inverse bg-inverse">
         <button className="navbar-toggler navbar-toggler-right" type="button" data-collapse="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <a className="navbar-brand" href="#">Top navbar</a>
         <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
               <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
               </li>
            </ul>
         </div>
      </nav>
      );
   }
}