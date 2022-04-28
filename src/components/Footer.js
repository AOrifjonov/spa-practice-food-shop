import React from 'react'

export default function Footer() {
  return (
    <footer className="page-footer blue">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="/">More Links</a>
            </div>
        </div>
    </footer>
  )
}
