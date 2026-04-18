export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-3xl md:text-6xl font-bold text-green-400 mb-4">
        SwasthyaSetu
      </h1>

      <p className="text-gray-400 mb-2 text-sm md:text-lg">
        in collaboration with Student Oruma Foundation
      </p>

      <p className="max-w-xl text-gray-300 mt-4">
        Empowering communities with awareness about personal hygiene and
        basic sanitation through interactive learning and AI guidance.
      </p>

      <button
        onClick={() =>
          document.getElementById("hygiene").scrollIntoView({
            behavior: "smooth",
          })
        }
        className="mt-8 px-6 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 rounded"
      >
        Get Started
      </button>
    </section>
  );
}