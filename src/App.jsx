export default function App() {
  return (
    <div className="page">
      <header className="card">
        <div>
          <h1>Frontend Cloud</h1>
          <p className="muted">
            Vite + React static site, deployed to EC2 via GitHub Actions.
          </p>
        </div>
        <div className="badge">Nginx :3000</div>
      </header>

      <main className="grid">
        <section className="card">
          <h2>What’s deployed</h2>
          <ul>
            <li>Static files from <code>dist/</code></li>
            <li>Nginx serving on port <code>3000</code></li>
            <li>Automated deploy on pushes to <code>main</code></li>
          </ul>
        </section>

        <section className="card">
          <h2>Health</h2>
          <p>
            If you can see this page from your EC2 public IP (or domain) on port{" "}
            <code>3000</code>, the pipeline is working.
          </p>
        </section>
      </main>

      <footer className="footer muted">
        <span>Built with Vite.</span>
      </footer>
    </div>
  );
}

