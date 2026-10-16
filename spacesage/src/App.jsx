
import "./App.css";

function App() {
  return (
    <main className="app">
      <section className="hero">
        <h1 className="hero-title">
          Cosmic Pu<span className="rocket">🚀</span>se 2.0
        </h1>

        <div className="hero-poem">
          <p>Beyond the stars, every signal carries a cost.</p>

          <p>
            Satellites connect the world,
            <br />
            ground stations power the connection.
          </p>

          <p>
            Every signal, every station, every watt—
            <br />
            smarter energy, a better future.
          </p>

          <p className="poem-ending">
            Connect the universe.
            <br />
            Optimize every watt.
          </p>
        </div>
      </section>

      {/* Feature placeholders for future backend integration */}
      <section className="features-section">
        <div className="feature-star">
          <svg viewBox="0 0 200 190" aria-hidden="true">
            <polygon
  points="100,8 124,65 186,70 139,111 153,173 100,141 47,173 61,111 14,70 76,65"
  fill="white"
  stroke="white"
/>
          </svg>
          <span>Visual Inspector</span>
        </div>

        <div className="feature-star">
          <svg viewBox="0 0 200 190" aria-hidden="true">
            <polygon
  points="100,8 124,65 186,70 139,111 153,173 100,141 47,173 61,111 14,70 76,65"
  fill="white"
  stroke="white"
/>
          </svg>
          <span>Energy Advisor</span>
        </div>

        <div className="feature-star">
          <svg viewBox="0 0 200 190" aria-hidden="true">
            <polygon
  points="100,8 124,65 186,70 139,111 153,173 100,141 47,173 61,111 14,70 76,65"
  fill="white"
  stroke="white"
/>
          </svg>
          <span>Network Simulator</span>
        </div>
      </section>
    </main>
  );
}

export default App;
