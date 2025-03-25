import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-200">
              Swahili Pot Hub is a creative space dedicated to nurturing talent, innovation, and cultural expression within the Swahili community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-200 hover:text-blue-300">Home</a></li>
              <li><a href="#about" className="text-gray-200 hover:text-blue-300">About</a></li>
              <li><a href="#programs" className="text-gray-200 hover:text-blue-300">Programs</a></li>
              <li><a href="#events" className="text-gray-200 hover:text-blue-300">Events</a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-blue-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/swahilipothub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/swahilipothub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com/swahilipothub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/company/swahilipothub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://youtube.com/@swahilipothubfoundation?si=70PYs-EkBY-vOOQK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-blue-300"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-lg flex-grow text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-300 text-blue-600 px-4 rounded-r-lg hover:bg-blue-400"
              >
                <FaEnvelope className="text-xl" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-blue-500 pt-8">
          <p>&copy; 2025 Swahili Pot Hub. All rights reserved.</p>
          <p>Follow us on <a href="https://www.swahilipothub.co.ke/" className="underline hover:text-blue-300">our website</a></p>
        </div>
      </div>
    </footer>
  );
}