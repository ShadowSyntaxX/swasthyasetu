export default function Hygiene() {
  const data = [
    {
      title: "Handwashing",
      why: "Prevents spread of germs and infections.",
      steps: [
        "Use clean water",
        "Apply soap properly",
        "Scrub for at least 20 seconds",
        "Wash between fingers",
        "Dry with clean towel",
      ],
    },
    {
      title: "Oral Hygiene",
      why: "Keeps teeth and gums healthy.",
      steps: [
        "Brush twice daily",
        "Use fluoride toothpaste",
        "Clean tongue",
        "Rinse mouth after meals",
      ],
    },
    {
      title: "Bathing",
      why: "Removes dirt, sweat, and bacteria.",
      steps: [
        "Bathe daily",
        "Use soap properly",
        "Clean all body parts",
        "Dry body completely",
      ],
    },
    {
      title: "Nail Care",
      why: "Prevents dirt accumulation and infections.",
      steps: [
        "Trim nails weekly",
        "Keep nails clean",
        "Avoid biting nails",
      ],
    },
    {
      title: "Hair Hygiene",
      why: "Prevents dandruff and scalp infections.",
      steps: [
        "Wash hair regularly",
        "Use clean comb",
        "Avoid sharing combs",
      ],
    },
    {
      title: "Clean Clothes",
      why: "Prevents skin diseases and odor.",
      steps: [
        "Wear washed clothes",
        "Change daily",
        "Dry clothes in sunlight",
      ],
    },
    {
      title: "Foot Hygiene",
      why: "Avoids fungal infections and odor.",
      steps: [
        "Wash feet daily",
        "Dry between toes",
        "Wear clean socks",
      ],
    },
    {
      title: "Food Hygiene",
      why: "Prevents food-borne diseases.",
      steps: [
        "Wash hands before eating",
        "Eat fresh food",
        "Avoid uncovered food",
      ],
    },
    {
      title: "Drinking Water Safety",
      why: "Prevents water-borne diseases.",
      steps: [
        "Drink clean water",
        "Boil if necessary",
        "Store properly",
      ],
    },
    {
      title: "Toilet Hygiene",
      why: "Prevents infections and bad odor.",
      steps: [
        "Flush after use",
        "Clean toilet regularly",
        "Wash hands after use",
      ],
    },
    {
      title: "Sneezing Etiquette",
      why: "Stops spread of airborne diseases.",
      steps: [
        "Cover mouth with elbow",
        "Use tissue",
        "Dispose tissue properly",
      ],
    },
    {
      title: "Waste Disposal",
      why: "Maintains clean surroundings.",
      steps: [
        "Use dustbins",
        "Separate waste",
        "Do not litter",
      ],
    },
    {
      title: "Menstrual Hygiene",
      why: "Prevents infections in women.",
      steps: [
        "Use clean sanitary products",
        "Change regularly",
        "Dispose safely",
      ],
    },
    {
      title: "Sleep Hygiene",
      why: "Improves health and immunity.",
      steps: [
        "Sleep 7-8 hours",
        "Maintain routine",
        "Avoid screens before sleep",
      ],
    },
    {
      title: "Exercise Hygiene",
      why: "Prevents sweat-related infections.",
      steps: [
        "Shower after workout",
        "Wear clean clothes",
        "Stay hydrated",
      ],
    },
    {
      title: "Mask Usage",
      why: "Prevents spread of diseases.",
      steps: [
        "Wear mask properly",
        "Cover nose and mouth",
        "Do not reuse dirty masks",
      ],
    },
    {
      title: "Hand Sanitizer Use",
      why: "Kills germs when soap not available.",
      steps: [
        "Use alcohol-based sanitizer",
        "Rub thoroughly",
        "Let it dry",
      ],
    },
    {
      title: "School Hygiene",
      why: "Prevents spread among students.",
      steps: [
        "Keep desk clean",
        "Avoid sharing bottles",
        "Wash hands regularly",
      ],
    },
    {
      title: "Home Cleanliness",
      why: "Prevents disease-causing bacteria.",
      steps: [
        "Clean floors regularly",
        "Keep kitchen clean",
        "Dispose garbage daily",
      ],
    },
    {
      title: "Public Hygiene",
      why: "Keeps community safe.",
      steps: [
        "Do not spit",
        "Use public bins",
        "Maintain cleanliness",
      ],
    },
  ];

  return (
    <section id="hygiene" className="min-h-screen px-6 py-16 bg-black text-white">
      
      <h2 className="text-3xl md:text-5xl text-green-400 font-bold text-center mb-12">
        Personal Hygiene Awareness
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