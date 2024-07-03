import React from "react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="relative w-full h-[500px]">
        <img
          src="/placeholder.svg"
          alt="The Great Wall of China"
          className="mx-auto rounded-xl object-cover w-full h-[500px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-5xl font-bold">Discover the Wonders of China</h1>
          <p className="mt-4 text-xl">Explore the rich culture, history, and beauty of China.</p>
        </div>
      </header>

      {/* About Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold">About China</h2>
        <p className="mt-4 text-lg">
          China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion. China has a rich history that dates back thousands of years and has made significant contributions to art, science, and philosophy.
        </p>
      </section>

      {/* Culture Section */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center">Chinese Culture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="Chinese Cuisine"
              className="mx-auto rounded-xl object-cover w-full h-[200px]"
            />
            <h3 className="mt-4 text-2xl font-semibold">Cuisine</h3>
            <p className="mt-2">
              Chinese cuisine is diverse and flavorful, known for its regional variations and use of fresh ingredients. From spicy Sichuan dishes to delicate Cantonese dim sum, there's something for everyone.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="Chinese Festival"
              className="mx-auto rounded-xl object-cover w-full h-[200px]"
            />
            <h3 className="mt-4 text-2xl font-semibold">Festivals</h3>
            <p className="mt-2">
              China celebrates numerous festivals throughout the year, with Chinese New Year being the most significant. These festivals are marked by vibrant parades, traditional performances, and family gatherings.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="Traditional Chinese Clothing"
              className="mx-auto rounded-xl object-cover w-full h-[200px]"
            />
            <h3 className="mt-4 text-2xl font-semibold">Traditions</h3>
            <p className="mt-2">
              Chinese traditions are deeply rooted in history and include practices such as tea ceremonies, calligraphy, and traditional Chinese medicine. These traditions reflect the values and beliefs of Chinese society.
            </p>
          </div>
        </div>
      </section>

      {/* Tourist Attractions Section */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center">Top Tourist Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="The Great Wall of China"
              className="mx-auto rounded-xl object-cover w-full h-[200px]"
            />
            <h3 className="mt-4 text-2xl font-semibold">The Great Wall</h3>
            <p className="mt-2">
              The Great Wall of China is one of the most iconic landmarks in the world. It stretches over 13,000 miles and offers breathtaking views and a glimpse into China's ancient history.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="Forbidden City"
              className="mx-auto rounded-xl object-cover w-full h-[200px]"
            />
            <h3 className="mt-4 text-2xl font-semibold">Forbidden City</h3>
            <p className="mt-2">
              Located in the heart of Beijing, the Forbidden City was the imperial palace for 24 emperors during the Ming and Qing dynasties. It is a UNESCO World Heritage site and a must-visit for history enthusiasts.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="Terracotta Army"
              className="mx-auto rounded-xl object-cover w-full h-[200px]"
            />
            <h3 className="mt-4 text-2xl font-semibold">Terracotta Army</h3>
            <p className="mt-2">
              The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. This archaeological site is located in Xi'an and is considered one of the greatest discoveries of the 20th century.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-8">
        <p>Follow us on social media:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-blue-400">Twitter</a>
          <a href="#" className="text-pink-500">Instagram</a>
        </div>
        <p className="mt-4">Contact us: info@example.com</p>
      </footer>
    </div>
  );
};

export default Index;