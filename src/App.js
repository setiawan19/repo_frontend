import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="">One Shop</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Categori</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header className="business-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h3 className="display-3 text-center text-white mt-4">Furniture For Youre Dreams House</h3>
                </div>
              </div>
            </div>
          </header>

          <div className="container">

            <div className="row">
              <div className="col-sm-8">
                <h2 className="mt-4">What We Do</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                <p>
                  <a className="btn btn-primary btn-lg" href="">Call to Action &raquo;</a>
                </p>
              </div>
              <div className="col-sm-4">
                <h2 className="mt-4">Contact Us</h2>
                <address>
                  <strong>Start Bootstrap</strong>
                  <br/>3481 Melrose Place
                  <br/>Beverly Hills, CA 90210
                  <br/>
                </address>
                <address>
                  <abbr title="Phone">P:</abbr>
                  (123) 456-7890
                  <br/>
                  <abbr title="Email">E:</abbr>
                  <a href="mailto:#">name@example.com</a>
                </address>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 my-4">
                <div className="card">
                  <img className="card-img-top" src="http://placehold.it/300x200" alt=""/>
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                  </div>
                  <div className="card-footer">
                    <a href="" className="btn btn-primary">Find Out More!</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-4">
                <div className="card">
                  <img className="card-img-top" src="http://placehold.it/300x200" alt=""/>
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
                  </div>
                  <div className="card-footer">
                    <a href="" className="btn btn-primary">Find Out More!</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-4">
                <div className="card">
                  <img className="card-img-top" src="http://placehold.it/300x200" alt=""/>
                  <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                  </div>
                  <div className="card-footer">
                    <a href="" className="btn btn-primary">Find Out More!</a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
            </div>
          </footer>
      </div>
    );
  }
}

export default App;
