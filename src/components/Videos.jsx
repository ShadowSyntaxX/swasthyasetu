import { useState } from "react";

export default function Videos() {
  const [category, setCategory] = useState("all");

  const videos = [
    // HYGIENE
    { title: "Handwashing Technique", id: "3PmVJQUCm4E", type: "hygiene" },
    { title: "Oral Hygiene Tips", id: "vzOp_Qv2iss?si=Y2tMbmylRIYLgaOl", type: "hygiene" },
    { title: "Bathing Importance", id: "_sO_CThVJnI?si=vWbtrNGGXAKl62tx", type: "hygiene" },
    { title: "Nail Care Guide", id: "FDFnCigQf2c?si=ErzlZ8elaWFm4bFK", type: "hygiene" },
    { title: "Hair Hygiene", id: "Qy5KzhmYL7Q?si=VntXSt_fhIAwjpbR", type: "hygiene" },
    { title: "Clean Clothes Awareness", id: "IYE4-G_D-sU?si=c2rIJzIiS4j4Aqqg", type: "hygiene" },
    { title: "Foot Hygiene", id: "0_qzkkoUjOc?si=aXqYp5OsNuVgjrIz", type: "hygiene" },
    { title: "Food Hygiene Basics", id: "RUeVNCEDbCo?si=WIPKaPC20y8ASo6y", type: "hygiene" },
    { title: "Hand Sanitizer Use", id: "K5qmA-8Ewto?si=29jtq7Jo3m1qJzaQ", type: "hygiene" },
    { title: "Mask Usage Guide", id: "etZK-GrUYgM?si=OPwZbpOrFgpsC3t2", type: "hygiene" },

    // SANITATION
    { title: "Clean Water Awareness", id: "opYiBMyUdK8?si=xM6i6P5cxpTeDR_r", type: "sanitation" },
    { title: "Waste Segregation", id: "A8udcpxDLtc?si=zhG907OARMP_Vurt", type: "sanitation" },
    { title: "Garbage Disposal", id: "58S7j-uzFBI?si=YfL3YpfRJF6pGrY0", type: "sanitation" },
    { title: "Drainage System", id: "M9qQu7VvYrA?si=hZtcXt6clbW73Sby", type: "sanitation" },
    { title: "Mosquito Control", id: "CnzfNqyBuMQ?si=FXoILa6mvuBtxXqg", type: "sanitation" },
    { title: "Public Cleanliness", id: "Vuwdnns8IyI?si=Lx2z9k_qR7mgMQ4M", type: "sanitation" },
    { title: "Plastic Waste Control", id: "W1wmSJsxk3w?si=l1CHUgp412WKenwQ", type: "sanitation" },
    { title: "Toilet Hygiene Awareness", id: "DygEkKXUDdQ?si=IfjDjsTu03ZzMVTo", type: "sanitation" },
    { title: "Flood Safety Hygiene", id: "6QOcvonTakQ?si=mijmuHm-Aq28JRLP", type: "sanitation" },
    { title: "Community Cleanliness Drive", id: "9cL5g_HHYgA?si=IcIhHqIR7u2JTeiq", type: "sanitation" },

    // AWARENESS
    { title: "Health Awareness Basics", id: "g0R_x8kgakE?si=O9DV9GQUJkk0qs6r", type: "awareness" },
    { title: "Preventing Diseases", id: "tupJDf13jBo?si=ZM-qEg105hwCMAW9", type: "awareness" },
    { title: "School Hygiene", id: "cxGwg5kjKEc?si=hLCCc6kDg2cNlWPD", type: "awareness" },
    { title: "Home Cleanliness", id: "_5GLXaxJblQ?si=WQ6Fa7XTG1kL4O_H", type: "awareness" },
    { title: "Safe Drinking Water", id: "uUllUjy10w4?si=z5GyqMm5O5AxILMT", type: "awareness" },
    { title: "Sanitation & Health", id: "mhAZ30c7tB4?si=P1p-8tO0qiPiof2k", type: "awareness" },
    { title: "Village Sanitation Awareness", id: "k53TW_FIFs0?si=IDNKtZPZ7tiE1KK6", type: "awareness" },
    { title: "Public Health Education", id: "5aww-Bpgkf4?si=rp2B1xJ_-Q-jX9o_8x7y6z5w4v3", type: "awareness" },
    { title: "Clean India Mission", id: "AjSZlXRj2X4?si=9ctPSqn-sh7F6LQs", type: "awareness" },
  ];

  const filteredVideos =
    category === "all"
      ? videos
      : videos.filter((v) => v.type === category);

  return (
    <section id="videos" className="min-h-screen px-6 py-16 bg-black text-white">

      <h2 className="text-3xl md:text-5xl text-green-400 font-bold text-center mb-8">
        Awareness Videos
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["all", "hygiene", "sanitation", "awareness"].map((type) => (
          <button
            key={type}
            onClick={() => setCategory(type)}
            className={`px-4 py-2 border rounded ${
              category === type
                ? "bg-green-400 text-black"
                : "border-green-400 text-green-400"
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* VIDEO GRID */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredVideos.map((video, index) => (
          <div
            key={index}
            className="border border-green-500 rounded-xl overflow-hidden bg-black/60 hover:shadow-[0_0_20px_#22c55e] transition-all duration-300"
          >
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              className="w-full h-52"
            ></iframe>

            <div className="p-4">
              <h3 className="text-green-300 text-sm font-semibold">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}