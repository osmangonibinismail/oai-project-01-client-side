

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Logo and Name */}
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold">
            SadikShop
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a href="/" className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">About</a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                <path d="M24 0v24h-24v-24h24zm-12 24v-9h-3v-3h3v-2c0-2.5 1.5-4 4-4 1.1 0 2 .1 2.3.1v2.9h-1.6c-1.4 0-1.7.7-1.7 1.7v2.3h3.5l-.5 3h-3v9h-3.5z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                <path d="M24 4.6c-.9.4-1.8.7-2.8.9 1-.6 1.8-1.5 2.1-2.6-.9.6-2 .9-3.1 1.2-.9-.9-2.1-1.5-3.5-1.5-2.7 0-4.8 2.2-4.8 4.9 0 .4 0 .8.1 1.1-4-.2-7.5-2.1-9.8-5-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2 3.8-.8 0-1.5-.2-2.1-.6 0 0 0 .1 0 .2 0 2.3 1.6 4.2 3.7 4.6-.4.1-.9.2-1.4.2-.3 0-.6 0-.8-.1.6 1.9 2.4 3.3 4.5 3.3-1.6 1.2-3.6 2-5.7 2-.4 0-.8 0-1.1-.1 2 1.3 4.4 2 7 2 8.4 0 13-7 13-13v-.6c.9-.7 1.7-1.5 2.3-2.4z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.3.1 2.1.3 2.6.5.6.2 1.1.5 1.6.9.4.4.7.9.9 1.6.2.5.4 1.3.5 2.6.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.3-.3 2.1-.5 2.6-.2.6-.5 1.1-.9 1.6-.4.4-.9.7-1.6.9-.5.2-1.3.4-2.6.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.3-.1-2.1-.3-2.6-.5-.6-.2-1.1-.5-1.6-.9-.4-.4-.7-.9-.9-1.6-.2-.5-.4-1.3-.5-2.6-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.3.3-2.1.5-2.6.2-.6.5-1.1.9-1.6.4-.4.9-.7 1.6-.9.5-.2 1.3-.4 2.6-.5 1.3-.1 1.7-.1 4.9-.1m0-2.2c-3.3 0-3.7 0-5 .1-1.4.1-2.3.3-3.1.6-.9.3-1.7.7-2.4 1.4-.7.7-1.1 1.5-1.4 2.4-.3.8-.5 1.7-.6 3.1-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.4.3 2.3.6 3.1.3.9.7 1.7 1.4 2.4.7.7 1.5 1.1 2.4 1.4.8.3 1.7.5 3.1.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.4-.1 2.3-.3 3.1-.6.9-.3 1.7-.7 2.4-1.4.7-.7 1.1-1.5 1.4-2.4.3-.8.5-1.7.6-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.4-.3-2.3-.6-3.1-.3-.9-.7-1.7-1.4-2.4-.7-.7-1.5-1.1-2.4-1.4-.8-.3-1.7-.5-3.1-.6-1.3-.1-1.7-.1-5-.1z"/>
                <path d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.3c-2.2 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1zm6.5-11.8c0 .8-.6 1.5-1.5 1.5s-1.5-.6-1.5-1.5.6-1.5 1.5-1.5 1.5.6 1.5 1.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SadikShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
