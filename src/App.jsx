import React from 'react'
import Header from './components/Header'
import InfiniteGallery from './components/InfiniteGallery'

const SAMPLE_IMAGES = [
  'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2',
  'https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3',
  'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5',
]

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

        <section style={{ marginTop: 24 }}>
          <h3 style={{ marginBottom: 12 }}>Gallery preview</h3>
          <div style={{ height: 420 }}>
            <InfiniteGallery images={SAMPLE_IMAGES} />
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
