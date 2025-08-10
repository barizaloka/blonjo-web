'use client';
import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, ArrowRight, Menu, X, Heart, Share2, Eye } from 'lucide-react';
import Image from 'next/image';

export default function UMKMRembangBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredUMKM = [
    {
      id: 1,
      name: "Batik Lasem Heritage",
      category: "Kerajinan",
      location: "Lasem",
      image: "/api/placeholder/400/300",
      description: "Batik tulis tradisional Lasem dengan motif khas yang telah diwariskan turun temurun.",
      rating: 4.8,
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      name: "Soto Kemiri Bu Sari",
      category: "Kuliner",
      location: "Rembang",
      image: "/api/placeholder/400/300",
      description: "Soto ayam khas Rembang dengan kuah bening dan rempah kemiri yang menggugah selera.",
      rating: 4.9,
      views: 2100,
      likes: 156
    },
    {
      id: 3,
      name: "Kerupuk Ikan Bawal",
      category: "Makanan",
      location: "Sluke",
      image: "/api/placeholder/400/300",
      description: "Kerupuk ikan bawal premium dengan rasa gurih dan tekstur renyah khas pantai utara Jawa.",
      rating: 4.7,
      views: 980,
      likes: 67
    }
  ];

  const recentArticles = [
    {
      id: 1,
      title: "Bangkitnya UMKM Digital di Rembang Pasca Pandemi",
      excerpt: "Transformasi digital memberikan angin segar bagi pelaku UMKM di Kabupaten Rembang...",
      author: "Redaksi UMKM Rembang",
      date: "2 hari yang lalu",
      readTime: "5 min",
      image: "/api/placeholder/300/200",
      category: "Bisnis"
    },
    {
      id: 2,
      title: "Festival Kuliner Nusantara 2024: UMKM Rembang Raih Penghargaan",
      excerpt: "Produk kuliner dari Rembang berhasil meraih berbagai penghargaan di ajang bergengsi...",
      author: "Tim Liputan",
      date: "5 hari yang lalu",
      readTime: "3 min",
      image: "/api/placeholder/300/200",
      category: "Event"
    },
    {
      id: 3,
      title: "Tips Memulai Usaha Kerajinan Tangan di Rembang",
      excerpt: "Panduan lengkap untuk memulai bisnis kerajinan tangan dengan memanfaatkan potensi lokal...",
      author: "Dinas Koperasi",
      date: "1 minggu yang lalu",
      readTime: "7 min",
      image: "/api/placeholder/300/200",
      category: "Tutorial"
    }
  ];

  const categories = [
    { name: "Kuliner", count: 45, color: "bg-emerald-100 text-emerald-800" },
    { name: "Kerajinan", count: 28, color: "bg-green-100 text-green-800" },
    { name: "Fashion", count: 19, color: "bg-lime-100 text-lime-800" },
    { name: "Teknologi", count: 12, color: "bg-teal-100 text-teal-800" },
    { name: "Pertanian", count: 33, color: "bg-emerald-100 text-emerald-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">UR</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">UMKM Rembang</h1>
                <p className="text-xs text-gray-600">Blog Bisnis Lokal</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Beranda</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">UMKM</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Artikel</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Kategori</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Kontak</a>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Daftar UMKM
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-emerald-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Beranda</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">UMKM</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Artikel</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Kategori</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Kontak</a>
                <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors mt-2">
                  Daftar UMKM
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                <MapPin size={16} className="mr-2" />
                Kabupaten Rembang, Jawa Tengah
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Jelajahi 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600"> UMKM Lokal </span>
              Rembang
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Temukan cerita inspiratif, produk berkualitas, dan potensi luar biasa dari usaha mikro, kecil, dan menengah 
              di bumi Kartini yang penuh dengan kearifan lokal.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Cari UMKM, artikel, atau kategori..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:outline-none bg-white shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition-colors">
                  Cari
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">150+</div>
                <div className="text-gray-700">UMKM Terdaftar</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-700">Artikel Blog</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-teal-600 mb-2">25+</div>
                <div className="text-gray-700">Kategori Bisnis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori UMKM</h2>
            <p className="text-gray-600">Jelajahi berbagai jenis usaha lokal di Rembang</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`${category.color} px-6 py-3 rounded-full cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <span className="font-medium">{category.name}</span>
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured UMKM */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">UMKM Unggulan</h2>
            <p className="text-gray-600">Kenali lebih dekat usaha-usaha terbaik dari Rembang</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredUMKM.map((umkm) => (
              <div
                key={umkm.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    src={umkm.image}
                    alt={umkm.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {umkm.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart size={16} className="text-gray-600" />
                    </button>
                    <button className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                      <Share2 size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{umkm.name}</h3>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600 ml-1">{umkm.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{umkm.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{umkm.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Eye size={16} className="mr-1" />
                        {umkm.views}
                      </div>
                      <div className="flex items-center">
                        <Heart size={16} className="mr-1" />
                        {umkm.likes}
                      </div>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                      Selengkapnya
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Artikel Terbaru</h2>
              <p className="text-gray-600">Baca cerita dan tips terbaru seputar UMKM Rembang</p>
            </div>
            <button className="hidden md:flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
              Lihat Semua
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{article.author}</span>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                      Baca
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bergabunglah dengan Komunitas UMKM Rembang
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Daftarkan usaha Anda dan jadilah bagian dari ekosistem bisnis lokal yang berkembang pesat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Daftar UMKM Gratis
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-emerald-600 transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UR</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">UMKM Rembang</h3>
                  <p className="text-sm text-gray-400">Blog Bisnis Lokal</p>
                </div>
              </div>
              <p className="text-gray-400">
                Platform digital untuk mengembangkan dan mempromosikan UMKM lokal di Kabupaten Rembang.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Beranda</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">UMKM</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Artikel</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Kategori</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Bantuan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Panduan</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Kontak</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <div className="text-gray-400 space-y-2">
                <p>📧 info@umkmrembang.id</p>
                <p>📞 (0295) 123-4567</p>
                <p>📍 Jl. Diponegoro No. 123, Rembang</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 UMKM Rembang Blog. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}