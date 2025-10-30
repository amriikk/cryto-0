import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">AuraCycle</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Sign in</a>
        </nav>
      </div>
    </header>
  )
}
