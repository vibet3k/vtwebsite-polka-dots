import PolkaDotBackground from '@/components/PolkaDotBackground';

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <div className="bg-tech-blue text-white">
        <PolkaDotBackground className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Vibrant Technology</h1>
              <p className="text-lg">Cloud-Based Tech Solutions</p>
            </div>
            <h2 className="text-5xl font-black mb-6 leading-tight">
              IT solutions that work for you
            </h2>
            <p className="text-xl mb-8">
              We make technology work for you, not against you.
            </p>
          </div>
        </PolkaDotBackground>
      </div>

      {/* Services section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-tech-blue mb-3">Complete IT Management</h3>
              <p className="text-gray-700">
                Cloud computing, security, software, hardware, and more.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-tech-blue mb-3">Proactive Support</h3>
              <p className="text-gray-700">
                We don't just fix problems; we prevent them.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-tech-blue mb-3">Custom Solutions</h3>
              <p className="text-gray-700">
                We listen, learn, and deliver what your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section with polka dots */}
      <div className="bg-tech-blue text-white">
        <PolkaDotBackground className="container mx-auto px-4 py-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Have IT questions?</h2>
            <p className="text-lg mb-6">
              Let us know what you need, and we'll get back to you ASAP.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-kelly-green hover:bg-opacity-90 px-6 py-2 rounded-md">
                Contact Us
              </button>
              <button className="border-2 border-white px-6 py-2 rounded-md">
                216.354.1572
              </button>
            </div>
          </div>
        </PolkaDotBackground>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <p className="text-gray-600">Vibrant Technology LLC</p>
            <p className="text-gray-500 text-sm">1536 Clarence Avenue, Lakewood, OH 44107</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">info@vibetechnco.com</p>
            <p className="text-gray-600">216.354.1572</p>
          </div>
        </div>
      </footer>
    </main>
  );
}