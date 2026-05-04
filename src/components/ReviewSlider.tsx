import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const REVIEWS = [
  {
    id: 1,
    name: "James Thompson",
    location: "Enfield",
    text: "Broken down on the North Circular at 2am. SwiftRecover were there in 20 minutes. Professional service and very fair price. Highly recommended!",
    stars: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "Watford",
    text: "Towed my van after a steering failure. The driver was excellent and very careful with the vehicle. Best recovery team in London.",
    stars: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "Croydon",
    text: "Used them for a jump start. Arrived quickly and got me to work on time. Friendly staff and great communication.",
    stars: 5,
  },
];

export default function ReviewSlider() {
  return (
    <section className="py-24 bg-emergency-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-8 h-8 fill-emergency-dark text-emergency-dark" />
            ))}
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-emergency-dark">
            What Our Customers Say
          </h2>
          <p className="text-xl font-bold text-emergency-dark/70 mt-4 uppercase">
            Over 500+ Local Drivers Rescued This Year
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-xl relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-50" />
              <div className="flex mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emergency-yellow text-emergency-yellow" />
                ))}
              </div>
              <p className="text-lg font-medium text-gray-700 italic mb-8 relative z-10">
                "{review.text}"
              </p>
              <div>
                <p className="font-black text-emergency-dark uppercase tracking-tight text-xl">{review.name}</p>
                <p className="text-sm font-bold text-emergency-red uppercase tracking-widest">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
