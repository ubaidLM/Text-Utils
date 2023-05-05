import React from 'react'
import Textarea from './Textarea'
function Main() {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">

            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              {/* <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a> */}
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <a href="/"><p>Features in <br /> TextUtils</p></a>
                <p>Upper Case</p>
                <p>Lower Case</p>
                <p>Reverse Text</p>
                <p>Not in Revers</p>
                <p>Clear Text</p>
                <p>Remove <br />WhiSpace</p>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">

                  <span className="d-none d-sm-inline mx-1">loser</span>
                </a>
              </div>
            </div>
          </div>
   <section>
     <Textarea/>
   </section>
          
        </div>
      </div>
    </>
  )
}

export default Main

/* <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><a className="dropdown-item" href="/">New project...</a></li>
                  <li><a className="dropdown-item" href="/">Settings</a></li>
                  <li><a className="dropdown-item" href="/">Profile</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="/">Sign out</a></li>
                </ul>  */


                // dropdown
                // <img src="https://github.com/mdo.pg" alt="hugenerd"
                //  width="30" height="30" className="rounded-circle" />