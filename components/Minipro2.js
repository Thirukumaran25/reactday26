import Link from 'next/link';

export default function Products({ products }) {
  if (!products || !Array.isArray(products)) {
    return (
      <div>
        <h1>Products</h1>
        <p>No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>{product.title} - ${product.price}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const products = await res.json();
    
    return {
      props: { 
        products: products || [] 
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { 
        products: [] 
      },
    };
  }
}
