import React from "react";

function Footer() {
  return (
    <>
      <footer className="h-screen bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
