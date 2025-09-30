import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const spinTimer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(spinTimer);
  }, []);

  // if(loading) return <Spinner/>

  return (
    <>
      <Navbar />
      {loading ? <Spinner /> : <>
        <section className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556229010-aa3f7ff66b93')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-fade-in">
              Service Manager
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light">
              Your complete <span className="font-semibold">Wellness Portal</span>
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/services"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
              >
              Explore Services
              </Link>
             <Link
                to="/blog"
                className="bg-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 transition"
              >
              Read Blog
              </Link>
            </div>
          </div>

          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-overlay blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-400 rounded-full mix-blend-overlay blur-3xl animate-pulse"></div>
        </section>
        <section className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Service Manager</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Service Manager is your one-stop portal for wellness and self-care.
            From rejuvenating spa treatments to mindful yoga practices and
            expert wellness blogs, we bring everything you need to recharge
            your body and mind, right at your fingertips.
          </p>
        </section>
      </>}

    </>
  );
};

export default Home;
