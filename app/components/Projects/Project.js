import React from 'react'
import { ExternalLink } from "lucide-react";

function Project() {
    const projects = [
        {
          title: "Project One",
          description:
            "A brief description of your first project and what technologies you used.",
          tags: ["React", "Node.js", "MongoDB"],
          link: "#",
        },
        {
          title: "Project Two",
          description:
            "Description of your second project highlighting your key achievements.",
          tags: ["Python", "Django", "PostgreSQL"],
          link: "#",
        },
        {
          title: "Project Three",
          description: "Overview of another significant project in your portfolio.",
          tags: ["JavaScript", "AWS", "Docker"],
          link: "#",
        },
      ];
  return (
  <section id="projects" className="bg-gray-200 px-4 py-10 shadow-lg shadow-gray-500 my-10">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-900 mt-16 mb-7">
      Projects
    </h2>
    <div className="grid grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:border-blue-500 transition duration-300 ease-in-out"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          View Project <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  ))}
</div>

  </div>
</section>

  

  )
}

export default Project
