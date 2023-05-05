import React from 'react'
import Picture from './picture'
function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white my-1">

        <div className="container p-1">

          <section className="mb-2">
           <Picture/>
          </section>
          <section className="mb-1">
            <p>
              My Fisrt react Footer Import from Bootstrap
            </p>
          </section>
        </div>
        <div className="text-center pb-3">
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </>
  )
}
export default Footer
