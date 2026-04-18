export default function Sanitation() {
  const data = [
    {
      title: "Clean Drinking Water",
      why: "Unsafe water causes diseases like cholera and typhoid.",
      steps: [
        "Use filtered or boiled water",
        "Store water in clean containers",
        "Keep containers covered",
      ],
    },
    {
      title: "Toilet Usage",
      why: "Open defecation spreads diseases.",
      steps: [
        "Always use toilets",
        "Keep toilet clean",
        "Flush after use",
      ],
    },
    {
      title: "Waste Segregation",
      why: "Proper waste management reduces pollution.",
      steps: [
        "Separate dry and wet waste",
        "Use different bins",
        "Dispose properly",
      ],
    },
    {
      title: "Garbage Disposal",
      why: "Improper disposal leads to infections.",
      steps: [
        "Use dustbins",
        "Do not litter",
        "Follow municipal rules",
      ],
    },
    {
      title: "Drainage System",
      why: "Blocked drains cause mosquito breeding.",
      steps: [
        "Keep drains clean",
        "Avoid dumping waste",
        "Report blockages",
      ],
    },
    {
      title: "Mosquito Control",
      why: "Prevents dengue, malaria.",
      steps: [
        "Avoid stagnant water",
        "Use nets/repellents",
        "Clean surroundings",
      ],
    },
    {
      title: "Public Cleanliness",
      why: "Keeps community healthy.",
      steps: [
        "Do not spit",
        "Use public bins",
        "Spread awareness",
      ],
    },
    {
      title: "Food Waste Management",
      why: "Prevents bad odor and pests.",
      steps: [
        "Dispose food waste daily",
        "Use composting if possible",
        "Keep kitchen clean",
      ],
    },
    {
      title: "School Sanitation",
      why: "Protects students from infections.",
      steps: [
        "Clean toilets regularly",
        "Provide safe drinking water",
        "Maintain hygiene facilities",
      ],
    },
    {
      title: "Hospital Sanitation",
      why: "Prevents spread of diseases.",
      steps: [
        "Maintain cleanliness",
        "Dispose medical waste properly",
        "Follow hygiene protocols",
      ],
    },
    {
      title: "Animal Waste Management",
      why: "Prevents contamination and disease spread.",
      steps: [
        "Clean animal areas",
        "Dispose waste properly",
        "Keep distance from living area",
      ],
    },
    {
      title: "Plastic Waste Control",
      why: "Reduces environmental pollution.",
      steps: [
        "Avoid single-use plastic",
        "Recycle properly",
        "Use eco-friendly alternatives",
      ],
    },
    {
      title: "Handwashing Stations",
      why: "Encourages hygiene in public places.",
      steps: [
        "Install near toilets",
        "Ensure water supply",
        "Maintain cleanliness",
      ],
    },
    {
      title: "Flood Water Safety",
      why: "Flood water carries harmful bacteria.",
      steps: [
        "Avoid contact with flood water",
        "Disinfect affected areas",
        "Use clean water only",
      ],
    },
    {
      title: "Construction Site Cleanliness",
      why: "Prevents dust and pollution.",
      steps: [
        "Manage debris properly",
        "Cover materials",
        "Maintain hygiene",
      ],
    },
    {
      title: "Community Participation",
      why: "Sanitation improves with collective effort.",
      steps: [
        "Join cleanliness drives",
        "Educate others",
        "Report issues",
      ],
    },
  ];

  return (
    <section id="sanitation" className="min-h-screen px-6 py-16 bg-black text-white">
      
      <h2 className="text-3xl md:text-5xl text-green-400 font-bold text-center mb-12">
        Basic Sanitation Awareness
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-green-500 p-6 rounded-xl bg-black/60 backdrop-blur hover:shadow-[0_0_20px_#22c55e] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-green-300 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              {item.why}
            </p>

            <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
              {item.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}