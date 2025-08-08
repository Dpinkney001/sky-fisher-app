import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Dummy Data
const blogPosts = [
  { id: 1, title: "First Blog Post", date: "2025-08-08", excerpt: "A short intro to our first post.", image: "https://via.placeholder.com/400x200" },
  { id: 2, title: "Another Update", date: "2025-08-05", excerpt: "Some more news from our world.", image: "https://via.placeholder.com/400x200" },
];

const merchItems = [
  { id: 1, name: "Cool Hoodie", price: "$49.99", image: "https://via.placeholder.com/300x300" },
  { id: 2, name: "Logo Mug", price: "$14.99", image: "https://via.placeholder.com/300x300" },
];

// Components
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">MySite</Link>
      <div className="space-x-6">
        <Link to="/blog" className="hover:text-gray-300">Blog</Link>
        <Link to="/content" className="hover:text-gray-300">Content</Link>
        <Link to="/merch" className="hover:text-gray-300">Merch</Link>
      </div>
    </nav>
  );
}

function BlogPage() {
  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      {blogPosts.map(post => (
        <Card key={post.id} className="shadow-lg">
          <img src={post.image} alt={post.title} className="rounded-t-2xl" />
          <CardContent>
            <h2 className="text-xl font-bold mt-2">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            <Button className="mt-4" asChild>
            <Link to={`/blog/${post.id}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ContentPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-lg text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>Welcome to our space! We share stories, updates, and behind-the-scenes looks at what we do. Check out our blog for the latest or visit the merch store to grab some cool stuff.</p>
    </div>
  );
}

function MerchPage() {
  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {merchItems.map(item => (
        <Card key={item.id} className="shadow-lg">
          <img src={item.image} alt={item.name} className="rounded-t-2xl" />
          <CardContent>
            <h2 className="text-xl font-bold mt-2">{item.name}</h2>
            <p className="text-lg text-gray-700">{item.price}</p>
            <Button className="mt-4 w-full">Buy Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MySite</h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        Your hub for blog posts, exclusive content, and awesome merch.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}
