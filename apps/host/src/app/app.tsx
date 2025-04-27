import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Shop = React.lazy(() => import('shop/Module'));
const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 p-4 bg-gray-100 border-r">
        <h2 className="text-lg font-bold mb-4">Micro-frontend Dashboard</h2>
        <ul className="space-y-2">
          <li>
            🛒 Cart – <span className="text-green-600">OK</span>
          </li>
          <li>
            🏪 Shop – <span className="text-green-600">OK</span>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Host App</h1>
        <section className="space-y-6">
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Cart Component</h3>
            <Cart />
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Shop Component</h3>
            <Shop />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
