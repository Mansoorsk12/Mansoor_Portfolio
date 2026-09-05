import { useState, useEffect } from "react";
import { Search, ShoppingCart, Heart, Star, Filter, ChevronDown, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const EcommercePlatform = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const categories = [
    "All", "Electronics", "Fashion", "Home & Garden", "Sports", "Books", 
    "Health & Beauty", "Automotive", "Toys", "Grocery"
  ];

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1199,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      category: "Electronics",
      rating: 4.8,
      reviews: 2341,
      discount: 8
    },
    {
      id: 2,
      name: "Nike Air Jordan Retro",
      price: 189,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      category: "Fashion",
      rating: 4.6,
      reviews: 1876,
      discount: 14
    },
    {
      id: 3,
      name: "MacBook Pro 16-inch",
      price: 2399,
      originalPrice: 2699,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
      category: "Electronics",
      rating: 4.9,
      reviews: 3421,
      discount: 11
    },
    {
      id: 4,
      name: "Designer Leather Handbag",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      category: "Fashion",
      rating: 4.5,
      reviews: 987,
      discount: 25
    },
    {
      id: 5,
      name: "Smart Home Security Camera",
      price: 159,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
      category: "Electronics",
      rating: 4.4,
      reviews: 1234,
      discount: 20
    },
    {
      id: 6,
      name: "Yoga Mat Premium",
      price: 49,
      originalPrice: 69,
      image: "https://images.unsplash.com/photo-1506629905135-b5f4b1c0e5d3?w=300&h=300&fit=crop",
      category: "Sports",
      rating: 4.7,
      reviews: 856,
      discount: 29
    },
    {
      id: 7,
      name: "Coffee Maker Deluxe",
      price: 129,
      originalPrice: 179,
      image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=300&h=300&fit=crop",
      category: "Home & Garden",
      rating: 4.3,
      reviews: 643,
      discount: 28
    },
    {
      id: 8,
      name: "Wireless Bluetooth Headphones",
      price: 89,
      originalPrice: 129,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      category: "Electronics",
      rating: 4.6,
      reviews: 2109,
      discount: 31
    },
    {
      id: 9,
      name: "Organic Skincare Set",
      price: 79,
      originalPrice: 99,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
      category: "Health & Beauty",
      rating: 4.8,
      reviews: 1456,
      discount: 20
    },
    {
      id: 10,
      name: "Gaming Mechanical Keyboard",
      price: 149,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
      category: "Electronics",
      rating: 4.7,
      reviews: 1678,
      discount: 25
    },
    {
      id: 11,
      name: "Premium Denim Jeans",
      price: 89,
      originalPrice: 119,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
      category: "Fashion",
      rating: 4.4,
      reviews: 934,
      discount: 25
    },
    {
      id: 12,
      name: "Smart Fitness Watch",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      category: "Electronics",
      rating: 4.5,
      reviews: 1567,
      discount: 20
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId]);
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold gradient-text">ShopHub</h1>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search for products, brands and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="w-4 h-4 mr-2" />
                Wishlist
                {wishlist.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 px-1 py-0 text-xs">
                    {wishlist.length}
                  </Badge>
                )}
              </Button>
              <Button variant="hero" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 px-1 py-0 text-xs">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 space-y-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Mobile Category Filter */}
          <div className="lg:hidden w-full mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    {selectedCategory}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="space-y-4 mt-6">
                  <h3 className="font-semibold">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {selectedCategory === "All" ? "All Products" : selectedCategory}
              </h2>
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          wishlist.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    </Button>
                    {product.discount > 0 && (
                      <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2 line-clamp-2 h-12">{product.name}</h3>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <Button
                      onClick={() => addToCart(product.id)}
                      className="w-full"
                      variant="hero"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default EcommercePlatform;