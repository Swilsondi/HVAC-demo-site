import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTrophy, FaTools, FaPhoneAlt, FaClock, FaShieldAlt, FaAward } from "react-icons/fa";

const services = [
	{
		title: "HVAC Installation & Repair",
		image:
			"https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&w=600&q=80",
		description:
			"Certified installation and repair for all major HVAC brands. Residential & commercial.",
	},
	{
		title: "Plumbing Solutions",
		image:
			"https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&w=600&q=80",
		description: "Leak detection, pipe repair, water heaters, and more—done right the first time.",
	},
	{
		title: "24/7 Emergency Response",
		image:
			"https://images.pexels.com/photos/1435183/pexels-photo-1435183.jpeg?auto=compress&w=600&q=80",
		description: "Rapid response for urgent HVAC & plumbing issues. We’re always on call.",
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

const brands = [
	"https://upload.wikimedia.org/wikipedia/commons/2/2a/Carrier_logo.svg",
	"https://upload.wikimedia.org/wikipedia/commons/6/6b/Trane_logo.svg",
	"https://upload.wikimedia.org/wikipedia/commons/2/2d/Rheem_logo.svg",
	"https://upload.wikimedia.org/wikipedia/commons/7/7e/Lennox_logo.svg",
	"https://upload.wikimedia.org/wikipedia/commons/2/2c/Moen_logo.svg",
];

export default function Home() {
	return (
		<div>
			{/* Hero Section */}
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="relative flex flex-col items-center justify-center min-h-[60vh] bg-blue-900 text-white px-4 pt-12 pb-20 overflow-hidden"
			>
				<img
					src="https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&w=1200&q=80"
					alt="HVAC technician at work"
					className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
				/>
				<div className="relative z-10 text-center max-w-2xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
						Your Local HVAC & Plumbing Experts
					</h1>
					<p className="text-lg md:text-xl mb-8">
						Award-winning, licensed, and trusted for over 20 years. Fast, friendly, and always professional.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/contact"
							className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded shadow transition flex items-center gap-2"
						>
							<FaPhoneAlt /> Request a Free Estimate
						</Link>
						<Link
							to="/services"
							className="bg-white text-blue-700 font-bold py-3 px-6 rounded shadow hover:bg-blue-50 transition flex items-center gap-2"
						>
							<FaTools /> Explore Our Services
						</Link>
					</div>
				</div>
				{/* Award badge */}
				<div className="absolute right-8 top-8 z-20 flex flex-col items-center bg-white/90 rounded-lg shadow-lg px-4 py-3 border border-yellow-400">
					<FaAward className="text-yellow-500 text-3xl mb-1" />
					<span className="font-bold text-blue-900 text-sm">Voted #1 Service 2025</span>
				</div>
			</motion.section>

			{/* Why Choose Us */}
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, delay: 0.1 }}
				className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center"
			>
				<div>
					<h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">Why Choose Us?</h2>
					<ul className="space-y-3 text-gray-700">
						<li className="flex items-center gap-3"><FaShieldAlt className="text-blue-600" /> Licensed & Insured Professionals</li>
						<li className="flex items-center gap-3"><FaClock className="text-blue-600" /> 24/7 Emergency Service</li>
						<li className="flex items-center gap-3"><FaTrophy className="text-yellow-500" /> Award-Winning Customer Care</li>
						<li className="flex items-center gap-3"><FaTools className="text-blue-600" /> Upfront Pricing & Quality Workmanship</li>
					</ul>
				</div>
				<img
					src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&w=800&q=80"
					alt="Plumber at work"
					className="rounded-lg shadow-lg w-full object-cover max-h-80"
				/>
			</motion.section>

			{/* Brands We Service */}
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, delay: 0.15 }}
				className="max-w-5xl mx-auto px-4 py-6"
			>
				<h3 className="text-lg font-semibold text-center text-gray-700 mb-4">Brands We Service</h3>
				<div className="flex flex-wrap justify-center items-center gap-6">
					{brands.map((logo, i) => (
						<img key={i} src={logo} alt="Brand logo" className="h-10 object-contain grayscale opacity-80" />
					))}
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
					Need Fast, Reliable Service?
				</h2>
				<Link
					to="/contact"
					className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded shadow transition flex items-center gap-2"
				>
					<FaPhoneAlt /> Book Now or Call 24/7
				</Link>
			</motion.section>
		</div>
	);
}