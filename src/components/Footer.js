import React from 'react'
import InstagramFeed from './InstagramFeed'
import FormFooter from './FormFooter'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container">
        <div className="split">
          <FormFooter />
          <span>
            © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
            <a href="https://thriveweb.com.au/">Thrive</a>.
          </span>
        </div>
      </div>
    </footer>
  </div>
)
