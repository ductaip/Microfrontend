import { PrimaryButton } from 'shared/src/lib/shared-button';

const images = [
  'https://i.pinimg.com/736x/9c/e2/65/9ce265258a6bcb31eae7ecca07a62306.jpg',
  'https://down-vn.img.susercontent.com/file/0773a4b25c254038aea2b9761e164011@resize_w900_nl.webp',
  'https://i.pinimg.com/736x/af/c7/ae/afc7ae95091f8b0c8d6fd97d1557a138.jpg',
  'https://i.pinimg.com/736x/05/fa/29/05fa29880ed43c2a5a667cb24c6e8bfe.jpg',
];
export function ProductDetail() {
  return (
    <main className="w-full px-4 mt-10">
      {/* Featured Products Section */}
      <section className="w-full max-w-7xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((product) => (
            <div
              key={product}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-40 bg-gray-200 rounded-lg">
                <img
                  className="w-full h-full object-cover"
                  src={images[product - 1]}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Product {product}</h3>
              <p className="text-gray-600 mt-2">High quality and affordable.</p>
              <PrimaryButton>Add to Cart</PrimaryButton>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
