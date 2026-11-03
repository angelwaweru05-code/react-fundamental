import { useMemo, useState } from 'react';
import './App.css';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'AeroBook Pro 14',
    category: 'Electronics',
    price: 1299,
    description: 'Lightweight laptop built for work, streaming, and everyday productivity.',
    badge: 'Best Seller',
    rating: 4.9,
    stock: 'In stock',
    emoji: '💻',
    accent: 'blue',
  },
  {
    id: 2,
    title: 'PureBrew Coffee Maker',
    category: 'Home Appliances',
    price: 89,
    description: 'Brew rich, smooth coffee at home with a compact, easy-clean design.',
    badge: 'Hot deal',
    rating: 4.7,
    stock: 'Low stock',
    emoji: '☕',
    accent: 'amber',
  },
  {
    id: 3,
    title: 'EchoSound Headphones',
    category: 'Electronics',
    price: 199,
    description: 'Noise-canceling sound with a soft-touch finish for all-day comfort.',
    badge: 'New',
    rating: 4.8,
    stock: 'In stock',
    emoji: '🎧',
    accent: 'purple',
  },
  {
    id: 4,
    title: 'FlexDesk Lamp',
    category: 'Office',
    price: 64,
    description: 'Adjustable LED lighting for focus-heavy tasks and calm evening reading.',
    badge: 'Trending',
    rating: 4.6,
    stock: 'In stock',
    emoji: '💡',
    accent: 'green',
  },
];

const filters = ['All', 'Electronics', 'Home Appliances', 'Office'];

function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') {
      return products;
    }

    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="catalog-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">S</div>
          <div>
            <p className="brand-label">ShopEase</p>
            <span>Catalog</span>
          </div>
        </div>

        <nav className="nav-actions" aria-label="Main navigation">
          <button type="button">Deals</button>
          <button type="button">New arrivals</button>
          <button type="button">Support</button>
        </nav>

        <button type="button" className="cart-button">
          Cart (2)
        </button>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Curated for modern living</p>
            <h1>Fresh finds for your everyday essentials.</h1>
            <p className="subtitle">
              Discover quality gadgets, home upgrades, and workday picks designed to make life easier.
            </p>

            <div className="cta-row">
              <button type="button" className="primary-btn">
                Shop now
              </button>
              <button type="button" className="secondary-btn">
                Explore deals
              </button>
            </div>
          </div>

          <div className="hero-summary" aria-label="Store performance stats">
            <div className="summary-card accent-blue">
              <span>24k+</span>
              <small>happy shoppers</small>
            </div>
            <div className="summary-card accent-purple">
              <span>4.9/5</span>
              <small>average rating</small>
            </div>
            <div className="summary-card accent-amber">
              <span>Free</span>
              <small>shipping over $50</small>
            </div>
          </div>
        </section>

        <section className="catalog-section">
          <div className="catalog-header">
            <div>
              <p className="eyebrow">Featured collection</p>
              <h2>Trending products</h2>
            </div>

            <div className="filter-group" aria-label="Filter products by category">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={filter === activeFilter ? 'filter-btn active' : 'filter-btn'}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;