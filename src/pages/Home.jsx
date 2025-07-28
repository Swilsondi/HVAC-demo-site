import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
	{
		title: "AC Repair",
		image:
			"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		description:
			"Fast, reliable air conditioning repair to keep you cool all summer.",
	},
	{
		title: "Leak Fix",
		image:
			"https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&w=400&q=80",
		description: "Expert leak detection and repair for peace of mind.",
	},
	{
		title: "Emergency Services",
		image:
			"https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
		description:
			"24/7 emergency HVAC & plumbing support when you need it most.",
	},
];

const testimonials = [
	{
		name: "Sarah W.",
		text: "Prompt, professional, and fixed my AC in no time! Highly recommend.",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		name: "James P.",
		text: "Great service and honest pricing. My go-to for plumbing issues.",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
	},
];

export default function Home() {
	return (
		<div>
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="relative flex flex-col items-center justify-center min-h-[60vh] bg-blue-900 text-white px-4 pt-12 pb-20"
			>
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
					src="https://www.pexels.com/video/4148572/download/?fps=25.0"
				/>
				<div className="relative z-10 text-center max-w-2xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
						Reliable HVAC & Plumbing Services Near You
					</h1>
					<p className="text-lg md:text-xl mb-8">
						Professional, trusted, and ready to help—day or night.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/contact"
							className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow transition"
						>
							Contact Us
						</Link>
						<Link
							to="/services"
							className="bg-white text-blue-700 font-semibold py-3 px-6 rounded shadow hover:bg-blue-50 transition"
						>
							View Services
						</Link>
					</div>
				</div>
			</motion.section>

			{/* Service Highlights */}
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, delay: 0.2 }}
				className="max-w-7xl mx-auto px-4 py-12"
			>
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
					Our Services
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{services.map((service, idx) => (
						<motion.div
							key={service.title}
							whileHover={{ scale: 1.05 }}
							className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
						>
							<img
								src={service.image}
								alt={service.title}
								className="h-20 w-20 object-cover rounded-full mb-4 border-2 border-blue-100"
							/>
							<h3 className="text-lg font-semibold mb-2 text-blue-700">
								{service.title}
							</h3>
							<p className="text-gray-600">{service.description}</p>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* Testimonials */}
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, delay: 0.3 }}
				className="bg-blue-50 py-12 px-4"
			>
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-700">
					What Our Clients Say
				</h2>
				<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					{testimonials.map((t) => (
						<motion.div
							key={t.name}
							whileHover={{ scale: 1.03 }}
							className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
						>
							<img
								src={t.image}
								alt={t.name}
								className="h-16 w-16 rounded-full mb-4 border-2 border-blue-200"
							/>
							<p className="text-gray-700 italic mb-2">“{t.text}”</p>
							<span className="font-semibold text-blue-700">{t.name}</span>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* Final CTA */}
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, delay: 0.4 }}
				className="max-w-7xl mx-auto px-4 py-12 text-center"
			>
				<h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
					Ready to Book Your Service?
				</h2>
				<Link
					to="/contact"
					className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded shadow transition"
				>
					Get Started
				</Link>
			</motion.section>
		</div>
	);
}