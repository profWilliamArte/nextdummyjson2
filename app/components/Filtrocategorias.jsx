

import Link from 'next/link';
const API = 'https://dummyjson.com/products/category-list';
async function getData() {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}
export async function generateStaticParams() {
    const data = await getData();
    return data.map((item) => ({ slug: item.id.toString() }));
  }

  export default async function LaptopPage() {
    const data = await getData();
  return (
    <>
       {data.map((item, index) => (
      
            <li key={index}><Link href={`/categoria/${item}`} className="dropdown-item">{item}</Link></li>
        ))}
    
    </>
  );
};
