"use client";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
	{
		title: "Skyline Residences",
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
		desc: "Luxury apartments with city views.",
	},
	{
		title: "Green Valley Villas",
		img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
		desc: "Eco-friendly homes surrounded by nature.",
	},
	{
		title: "Downtown Offices",
		img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
		desc: "Modern office spaces in the heart of the city.",
	},
];

export default function Projects() {
	const scrollRef = useRef(null);
	const [current, setCurrent] = useState(0);

	const scrollToIndex = (idx) => {
		if (scrollRef.current) {
			const container = scrollRef.current;
			const card = container.children[idx];
			if (card) {
				card.scrollIntoView({
					behavior: "smooth",
					inline: "center",
					block: "nearest",
				});
				setCurrent(idx);
			}
		}
	};

	const handleScroll = (dir) => {
		let next = current + (dir === "right" ? 1 : -1);
		if (next < 0) next = 0;
		if (next > projects.length - 1) next = projects.length - 1;
		scrollToIndex(next);
	};

	return (
		<section className="py-4 bg-black">
			<div className="w-full h-auto min-h-[80vh] mx-auto px-2 md:px-4">
				<div className="flex flex-col md:flex-row items-center justify-between px-2 md:px-8">
					<h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
						Our Projects
					</h2>
					<div className="flex justify-center gap-4 mb-4 md:mb-8">
						<button
							onClick={() => handleScroll("left")}
							disabled={current === 0}
							className="text-white px-3 py-2 rounded-full border-[2px] border-white transition disabled:opacity-40 flex items-center justify-center"
							aria-label="Scroll left"
						>
							<FaChevronLeft size={22} />
						</button>
						<button
							onClick={() => handleScroll("right")}
							disabled={current === projects.length - 1}
							className="text-white px-3 py-2 rounded-full border-[2px] border-white transition disabled:opacity-40 flex items-center justify-center"
							aria-label="Scroll right"
						>
							<FaChevronRight size={22} />
						</button>
					</div>
				</div>
				<div className="relative">
					<div
						ref={scrollRef}
						className="flex gap-4 md:gap-8 overflow-x-hidden pb-4 scroll-smooth"
						style={{ scrollBehavior: "smooth" }}
					>
						{projects.map((project, idx) => (
							<div
								key={idx}
								className="w-[90vw] md:w-full min-w-[90vw] md:min-w-full h-[50vh] md:h-[80vh] rounded-xl p-2 md:p-4 flex-shrink-0 flex flex-col justify-center items-center"
							>
								<img
									src={project.img}
									alt={project.title}
									className="w-full h-[30vh] md:h-[70vh] object-cover rounded-lg mb-4 md:mb-6"
								/>
								<h3 className="text-xl md:text-3xl font-semibold mb-2 text-white">
									{project.title}
								</h3>
								<p className="text-gray-300 text-base md:text-lg">
									{project.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}