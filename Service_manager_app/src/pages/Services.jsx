import { useState, useEffect, useCallback, useMemo } from 'react';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import Spinner from '../components/Spinner';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8888/WP-SM/wordpress/wp-json/wp/v2/services').then(res => res.data).then(data => {
      setServices(data);
      setFilteredServices(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let filtered = services;
    if (category) filtered = filtered.filter(s => s.acf.category === category);
    if (maxPrice)
      filtered = filtered.filter(s => parseInt(s.acf.price) <= parseInt(maxPrice)
      );
    setFilteredServices(filtered);
  }, [category, maxPrice, services]);

  
  const categories = useMemo(() => [...new Set(services.map(s => s.acf.category))], [services]);

  // if(loading) return <Spinner/>
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Our Services
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <label className="flex-1">
            <span className="sr-only">Filter by category</span>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>

          <label className="flex-1">
            <span className="sr-only">Filter by maximum price</span>
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>
        </div>
        {/* {loading && <Spinner/>} */}
        {filteredServices.length === 0 && !loading && (
          <p className="text-center text-gray-600">No services found.</p>
        )}
       {loading ? <Spinner/> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>}
      </section>
    </>
  );
};

export default Services;
