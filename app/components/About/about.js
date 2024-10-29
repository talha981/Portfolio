import React from "react";

function About() {
  return (
    <>
     <section id="about" className="bg-gray-200 px-4 py-10 shadow-lg shadow-gray-500">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mt-16 text-gray-900 mb-7">
      About Me
    </h2>
    <p className="text-gray-600 leading-relaxed mb-20">
      I am a Full Stack Web Developer specializing in Next.js and TypeScript, with expertise in React, Node.js, and MongoDB.
      Currently, I contribute to technology solutions at the Parliament House in Pakistan, focusing on dynamic and responsive web
      applications. Driven by a commitment to excellence and continuous learning, I strive to stay updated with the latest trends in web
      development, ensuring I deliver impactful solutions.
    </p>
  </div>
</section>


      <section id="about" className=" px-4 py-20 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="">
            <h2 className="text-3xl font-bold  mt-10  text-center text-gray-900 mb-7">
              Tech Stack
            </h2>
            <div className="flex flex-wrap mb-20 gap-2">
              {[
                "JavaScript",
                "React",
                "Next Js",
                "Css",
                "Node.Js",
                "Bootstrap",
                "Tailwind Css",
                "Material Ui",
                "Express Js",
                "Mongoose",
                "Mongo Db",
                "Sequelize",
                "Postgress",
                "Sql",
                "Jav",
                "TypeScript",
                "Rust",
                "C/C++",
                "Git/Github",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
