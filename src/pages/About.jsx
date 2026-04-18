import React from "react";

const About = () => {
  return (
     <div
      id="about"
      className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-black text-white px-6 py-12"
    >

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide">
        About <span className="text-cyan-400">Me & Project</span>
      </h1>

      {/* Cards Container */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* CARD 1 - PERSONAL INFO */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            👨‍💻 Vedanth J. Mandpe
          </h2>

          <p className="text-sm leading-relaxed text-gray-300">
            I am pursuing <b>B.Sc. Computer Science (Sem-4)</b> at
            <b> Saint Francis de Sales College, Seminary Hills, Nagpur</b>.
          </p>

          <p className="mt-4 text-sm text-gray-300">
            I am passionate about web development, AI systems, and building
            real-world impactful projects that solve social problems using
            technology.
          </p>

          <p className="mt-4 text-sm text-gray-300">
            <b>Why this project?</b> I chose hygiene and sanitation awareness
            because it is a critical yet often ignored topic in society. I
            wanted to combine education with AI to make learning interactive
            and engaging.
          </p>

          <p className="mt-4 text-sm text-gray-300">
            <b>My Contributions:</b><br />
            • Built SwasthyaSetu full frontend (React + Tailwind)<br />
            • Integrated Health Mitra AI (Ollama LLM)<br />
            • Designed UI for hygiene education modules<br />
            • Optimized chatbot for low-end systems<br />
            • Made project offline-friendly & responsive
          </p>

          <p className="mt-4 text-sm text-gray-400">
            📧 vedman0000@gmail.com
          </p>
        </div>

        {/* CARD 2 - COLLABORATION */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            🤝 Collaboration
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
  I collaborated with Students Oruma Foundation to support awareness-based learning initiatives focused on education and social impact. The organization guided me in understanding real community challenges and encouraged practical thinking. This collaboration helped me align my SwasthyaSetu project with real-world needs related to hygiene awareness, student development, and improving knowledge accessibility for underprivileged and rural communities through technology-based learning solutions.
</p>
        </div>

        {/* CARD 3 - NGO INFO */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            🏢 Students Oruma Foundation
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
  Students Oruma Foundation is a non-governmental organization dedicated to education, empowerment, and social development across India. It actively supports students, skill-building programs, and awareness initiatives that improve learning opportunities. The foundation focuses on uplifting underprivileged communities by promoting education, social responsibility, and developmental activities that contribute to a more informed and progressive society.
</p>

          <div className="mt-4 text-sm text-gray-300 space-y-2">
            <p><b>Founder Director:</b> Irshad Khan</p>
            <p>
              <b>Website:</b>{" "}
              <a
                href="http://www.studentsoruma.in"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 underline"
              >
                www.studentsoruma.in
              </a>
            </p>
            <p>
              <b>Address:</b> #5, Raza Apartment, Rajaram Layout, Nagpur - 440013
            </p>
            <p>
              <b>NGO DARPAN ID:</b> MH/2023/0342024
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;