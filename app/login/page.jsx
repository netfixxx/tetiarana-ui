export default function Login() {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Se connecter</h1>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered w-full"
                placeholder="Entrez votre email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="input input-bordered w-full"
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="btn btn-primary w-full" type="submit">
                Se connecter
              </button>
            </div>
            <p className="text-center mt-4">
              Pas encore de compte? <a href="/signup" className="text-primary">Inscrivez-vous</a>
            </p>
          </form>
        </div>
      </main>
    );
  }
  