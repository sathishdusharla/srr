import React from 'react';
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onViewProduct: (product: Product) => void;
}

export default function HomePage({ onNavigate, onViewProduct }: HomePageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Pure <span className="text-yellow-600">A2 Cow Ghee</span>
              <br />Made with Love
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the rich, nutty flavor and aromatic goodness of traditionally made ghee using the ancient Bilona method
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('products')}
                className="bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Pure</h3>
              <p className="text-gray-600">No chemicals or preservatives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Traditional Method</h3>
              <p className="text-gray-600">Made using Bilona process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Fast and secure shipping</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">A2 cow milk from grass-fed cows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-yellow-600">Premium Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of pure A2 cow ghee in different sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewProduct}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('products')}
              className="bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-colors duration-300"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                The <span className="text-yellow-600">SRR Farms</span> Promise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At SRR Farms, we believe in preserving ancient traditions while maintaining the highest quality standards. Our ghee is made from the milk of indigenous A2 cows that graze freely on our lush green pastures.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                  <span className="text-gray-700">100% Pure A2 Cow Milk</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                  <span className="text-gray-700">Traditional Bilona Method</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                  <span className="text-gray-700">No Chemicals or Preservatives</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                  <span className="text-gray-700">Grass-Fed Cows</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('about')}
                className="text-yellow-600 font-semibold flex items-center space-x-2 hover:text-yellow-700 transition-colors duration-300"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="SRR Farm"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Experience Pure Ghee?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Order now and taste the difference of traditionally made A2 cow ghee
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
}