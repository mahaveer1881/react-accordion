import { Toaster } from 'sonner';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div
      style={{ background: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)' }}
      className='bg-[#a1be26]'
    >
      <Toaster position='top-center' />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
