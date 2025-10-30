import React from 'react'
import Header from './components/Header'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <section className="hero">
          <h2>Welcome to AuraCycle</h2>
          <p>Track and visualize your energy, mood, and sleep cycles.</p>
          <div className="cta-row">
            <button className="primary">Get started</button>
            <button className="ghost">Learn more</button>
          </div>
        </section>

        <section className="features">
          <article>
            <h3>Track</h3>
            <p>Quickly log your daily state and activities.</p>
          </article>
          <article>
            <h3>Visualize</h3>
            <p>Beautiful charts to see your cycles over time.</p>
          </article>
          <article>
            <h3>Improve</h3>
            <p>Insights and suggestions to optimize your routines.</p>
          </article>
        </section>
      </main>
    </div>
  )
}
