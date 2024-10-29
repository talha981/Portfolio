import React from 'react'
import { Github, Linkedin,Phone, Mail, ExternalLink } from "lucide-react";
import Link from 'next/link';

function Name() {
  return (
    <section  id="home" className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold mt-28 text-gray-900 mb-6">
            Hi, I'm Talha Safdar
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer | Designer | Problem Solver
          </p>
          <div className="flex justify-center space-x-4 mb-20">
            <Link href="https://github.com/talha981" rel="noopener noreferrer">
              <span className="p-2 text-gray-600 hover:text-gray-900">
                <Github className="w-6 h-6" />
              </span>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <span className="p-2 text-gray-600 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </span>
            </Link>
            <Link href="mailto:safdartalha69@gmail.com"target="_blank" rel="noopener noreferrer">
              <span className="p-2 text-gray-600 hover:text-gray-900">
                <Mail className="w-6 h-6" />
              </span>
            </Link>
            <Link href="tel:+923275816834" >
              <span className="p-2 text-gray-600 hover:text-gray-900">
                <Phone className="w-6 h-6" />
              </span>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Name
