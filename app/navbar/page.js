"use client";
import React, { useState } from "react";
import { X, Menu, Download } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/Talha Safdar Resume...pdf"; // Corrected path
    link.download = "Talha_Safdar_Resume.pdf"; // Set a default file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header className="bg-gray-200 shadow-lg shadow-gray-500 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            Talha Safdar
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-gray-900">
              HOME
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              ABOUT
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              CONTACT
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              PROJECTS
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-gray-600 hover:text-gray-900"
            >
              CV
            </button>
          </div>
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-200 px-4 pb-4 space-y-2">
            <a
              href="#home"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="block text-gray-600 hover:text-gray-900"
            >
              CV
            </button>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">Curriculum Vitae</h2>
              <div className="flex items-center">
                <button
                  onClick={handleDownload} // Call the download function
                  className="p-2 hover:bg-gray-100 rounded-full"
                  title="Download CV"
                >
                  <Download className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full ml-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Header Section */}
              <div className="text-center border-b pb-6">
                <h1 className="text-3xl font-bold mb-2">TALHA SAFDAR</h1>
                <p className="text-xl text-gray-600 mb-4">WEB DEVELOPER</p>
                <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 text-gray-600">
                  <p>📱 +92 3275816834</p>
                  <p>📧 safdartalha69@gmail.com</p>
                  <p>📍 Pakistan, Rawalpindi</p>
                </div>
              </div>

              {/* Profile Summary */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Profile</h2>
                <p className="text-gray-700">
                  Strong, skillful, and self-organized web developer with 2+
                  years of experience in developing websites. Seeking a position
                  to utilize technical and management skills for achieving
                  targets and developing the best performance in a reputable
                  organization.
                </p>
              </div>

              {/* Education Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">
                        Bachelor in Software Engineering
                      </h3>
                      <span className="text-gray-600">Spring 2025</span>
                    </div>
                    <p className="text-gray-600">
                      PMAS Arid Agriculture University, Rawalpindi
                    </p>
                    <p className="text-gray-600">CGPA: 3.2/4</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">
                        Intermediate in Computer Science
                      </h3>
                      <span className="text-gray-600">2019-2021</span>
                    </div>
                    <p className="text-gray-600">Askaria College Rawalpindi</p>
                    <p className="text-gray-600">Marks: 934/1100</p>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Experience</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Front-End Developer Intern</h3>
                    <span className="text-gray-600">
                      June 2022 - September 2022
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    Orhan Tech Software House
                  </p>
                  <p className="text-gray-700">
                    Contributed to various projects utilizing HTML, CSS, and
                    JavaScript technologies as a Front-End Developer.
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Technical Skills
                  </h2>
                  <div className="space-y-2">
                    <p className="bg-blue-50 p-2 rounded">
                      HTML, CSS, JavaScript
                    </p>
                    <p className="bg-blue-50 p-2 rounded">
                      Bootstrap, Tailwind CSS
                    </p>
                    <p className="bg-blue-50 p-2 rounded">
                      ReactJS, NodeJs, ExpressJs
                    </p>
                    <p className="bg-blue-50 p-2 rounded">Mongoose, MongoDB</p>
                    <p className="bg-blue-50 p-2 rounded">Figma, Illustrator</p>
                    <p className="bg-blue-50 p-2 rounded">C++</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Practices & Languages
                  </h2>
                  <div className="space-y-2">
                    <p className="bg-green-50 p-2 rounded">
                      Responsive Web Designing
                    </p>
                    <p className="bg-green-50 p-2 rounded">Debugging</p>
                    <p className="bg-green-50 p-2 rounded">
                      Libraries and frameworks
                    </p>
                    <p className="bg-green-50 p-2 rounded">English</p>
                    <p className="bg-green-50 p-2 rounded">Urdu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
