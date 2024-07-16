import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur votre nouveau projet Next.js</h1>
        <p className="mb-8">Ceci est une page d'accueil simplifiée utilisant DaisyUI.</p>
        <button className="btn btn-primary mb-4">Bouton Principal</button>
        <button className="btn btn-secondary mb-4">Bouton Secondaire</button>
        <button className="btn btn-accent mb-4">Bouton Accent</button>
        <Link href="/login" legacyBehavior>
          <a className="btn btn-primary">Se connecter</a>
        </Link>
      </div>
    </main>
  );
}
