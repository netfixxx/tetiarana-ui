import './globals.css';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto fixed top-4 left-1/2 transform -translate-x-1/2 bg-transparent dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800">
      <Navbar/>
    </div>
  );
}
