<script lang="ts">
	import { Tilt, Shine } from 'svelte-ux';
</script>

<!-- Main Content -->
<main>
	<!-- Hero Section -->
	<section id="hero" class="bg-gray-100 py-20 md:py-32">
		<div class="container mx-auto px-6 text-center">
			<h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-6xl">Hi, I'm Jan Sobolewski</h1>
			<p class="mb-6 text-lg font-semibold text-indigo-700 md:text-2xl">Computer Science Student</p>
			<p class="text-md mx-auto mb-8 max-w-2xl text-gray-600 md:text-lg">
				A driven Computer Science student with a proven foundation in software development (Fanshawe
				College Advanced Diploma, Dean's Honour Roll 6x). Skilled in C++, Java, C#, and web
				technologies, passionate about building efficient applications and solving complex problems.
				Eager to contribute to innovative projects.
			</p>
			<a
				href="#projects"
				class="mr-4 rounded-md bg-indigo-600 px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-indigo-700"
				>View My Work</a
			>
			<a
				href="#contact"
				class="rounded-md border border-indigo-600 px-8 py-3 text-lg font-medium text-indigo-600 transition duration-300 hover:bg-indigo-50"
				>Get In Touch</a
			>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="py-16 md:py-24">
		<div class="container mx-auto px-6">
			<h2 class="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">About Me</h2>
			<div class="flex flex-col items-center md:flex-row md:space-x-12">
				<!-- Optional: Add an image here -->
				<div class="mb-8 md:mb-0 md:w-1/3">
					<img
						src="src/lib/assets/Image.jpeg"
						alt="Your Name"
						class="mx-auto rounded-lg shadow-lg"
					/>
					<!-- Replace 'https://via.placeholder.com/400x400' with the path to your photo -->
				</div>
				<div class="text-lg leading-relaxed text-gray-700 md:w-2/3">
					<p class="mb-4">
						Currently pursuing a Bachelor of Science in Computer Science at Western University,
						building upon a comprehensive Computer Programmer Analyst Advanced Diploma from Fanshawe
						College (graduated with a 4.12 GPA and 6x Dean's Honour Roll awards). My education
						provides a strong mix of theoretical knowledge (Data Structures, Algorithms) and
						practical application development skills. I'm passionate about the entire software
						development lifecycle, from design to deployment, with experience gained through diverse
						coding projects using languages like C++, Java, C#, and JavaScript, along with
						frameworks like ASP.NET, React, and Angular. I enjoy tackling challenges, whether it's
						building emulators, developing full-stack applications with SQL databases, or leveraging
						cloud services like Azure. I thrive in team environments, value clear communication, and
						am always eager to learn – currently expanding my knowledge in Rust and staying updated
						on emerging tech trends. I'm actively seeking opportunities to apply my skills and
						contribute to impactful projects.
					</p>
					<!-- Optional Skills List -->
					<div class="mt-8">
						<Tilt class="transition duration-500 hover:scale-110">
							<h3 class="mb-4 text-xl font-semibold text-gray-800">Key Skills:</h3>
							<ul class="flex flex-wrap gap-2">
								<li
									class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
								>
									Programming Languages: C++, C#, Java, JavaScript, SQL, HTML, CSS, C
								</li>
								<li
									class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
								>
									Frameworks/Libraries: React, Angular, Node.js, ASP.NET, OpenGL, Java Swing
								</li>
								<li
									class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
								>
									Databases: SQL Server (MSSQL), JSON
								</li>
								<li
									class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
								>
									Tools & Platforms: Git, GitHub, Azure, Visual Studio, Android Studio, Jira
								</li>
								<li
									class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
								>
									Concepts: Object-Oriented Programming (OOP), Agile Development, REST API Design,
									Data Structures & Algorithms, Full-Stack Development, CRUD Operations,
									User-Centered Design
								</li>
								<li
									class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
								>
									Collaboration: Teamwork, Communication, Problem-Solving, Adaptability
								</li>
								<!-- Add more skills as needed -->
							</ul>
						</Tilt>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Education Section -->
	<section id="education" class="bg-white py-16 md:py-24">
		<!-- Or use bg-white -->

		<div class="container mx-auto px-6">
			<h2 class="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">Education</h2>
			<div class="mx-auto max-w-3xl space-y-8">
				<Tilt class="overflow-hidden transition duration-300 hover:scale-110">
					<!-- Western University -->
					<div class="rounded-lg bg-white p-6 shadow-md">
						<h3 class="mb-1 text-xl font-semibold text-indigo-700">
							Bachelor of Science, Computer Science
						</h3>
						<p class="mb-1 font-medium text-gray-800">Western University | London, Ontario</p>
						<p class="mb-2 text-sm text-gray-600">September 2023 – December 2026 (Expected)</p>
						<p class="text-gray-700">
							<span class="font-semibold">Relevant Skills/Coursework:</span> Agile Development, Data
							Structures and Algorithms, Linear Algebra
						</p>
					</div>
				</Tilt>
				<Tilt class="overflow-hidden transition duration-300 hover:scale-110">
					<!-- Fanshawe College -->
					<div class="rounded-lg bg-white p-6 shadow-md">
						<h3 class="mb-1 text-xl font-semibold text-indigo-700">
							Ontario College Advanced Diploma, Computer Programmer Analyst
						</h3>
						<p class="mb-1 font-medium text-gray-800">
							Fanshawe College | London, Ontario | CO-OP Program
						</p>
						<p class="mb-2 text-sm text-gray-600">September 2019 – December 2022 (Graduated)</p>
						<ul class="list-inside list-disc text-sm text-gray-700">
							<li>Cumulative GPA: 4.12</li>
							<li>Awards: Dean's Honour Roll (6x)</li>
						</ul>
					</div>
				</Tilt>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="bg-gray-50 py-16 md:py-24">
		<div class="container mx-auto px-6">
			<h2 class="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">My Projects</h2>
			<Shine>
				<div class="grid grid-cols-3 grid-rows-1 gap-4">
					<!-- Project Card 1 -->
					<Tilt class="overflow-hidden transition duration-300 hover:scale-110">
						<div class=" rounded-lg bg-white shadow-lg transition hover:shadow-xl">
							<img
								src="https://via.placeholder.com/600x400"
								alt="Project 1 Thumbnail"
								class="h-48 w-full object-cover"
							/>
							<!-- Replace with your project image -->

							<div class="p-6">
								<h3 class="mb-2 text-xl font-semibold text-gray-800">Chip 8 Emulator (C++)</h3>
								<p class="mb-4 text-sm text-gray-600">
									Developed a functional Chip 8 emulator using C++ and OpenGL to simulate virtual
									CPU cycles and graphics rendering, applying Object-Oriented Programming
									principles.
								</p>
							</div>
						</div>
					</Tilt>

					<Tilt class="transition duration-500 hover:scale-110">
						<!-- Project Card 2 -->
						<div class="overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl">
							<img
								src="https://via.placeholder.com/600x400"
								alt="Project 2 Thumbnail"
								class="h-48 w-full object-cover"
							/>
							<!-- Replace with your project image -->
							<div class="p-6">
								<h3 class="mb-2 text-xl font-semibold text-gray-800">
									Note-Taking App (Android/Java)
								</h3>
								<p class="mb-4 text-sm text-gray-600">
									reated an Android application using Java and JSON for data storage. Focused on
									user-centered design principles and agile methodologies to enhance performance and
									usability.
								</p>
							</div>
						</div>
					</Tilt>

					<!-- Project Card 3 -->

					<Tilt class="transition duration-500 hover:scale-110">
						<div class="overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl">
							<img
								src="https://via.placeholder.com/600x400"
								alt="Project 3 Thumbnail"
								class="h-48 w-full object-cover"
							/>
							<!-- Replace with your project image -->
							<div class="p-6">
								<h3 class="mb-2 text-xl font-semibold text-gray-800">Bezier Pen Tool (C++)</h3>
								<p class="mb-4 text-sm text-gray-600">
									Created a Bezier pen tool that lets you make 2D Bezier curves in a OpenGL window.
								</p>
							</div>
						</div>
					</Tilt>
					<!-- Add more project cards as needed -->
				</div>
			</Shine>
		</div>
	</section>

	<!-- Contact Section -->
	<div class="container mx-auto px-6 text-center">
		<section id="contact" class="py-16 md:py-24">
			<p class="mx-auto mb-8 max-w-lg text-lg text-gray-600">
				I'm actively seeking co-op, internship, and software development opportunities where I can
				apply my skills and continue to learn. Feel free to reach out via email or connect with me
				on LinkedIn or GitHub!
			</p>
			<a
				href="mailto:your.email@example.com"
				class="inline-block rounded-md bg-indigo-600 px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-indigo-700"
			>
				Email Me
			</a>
			<!-- Optional: Add links to social profiles -->
			<div class="mt-12 flex justify-center space-x-6">
				<a
					href="https://www.linkedin.com/in/jan-sobolewski-65990119b/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-500 transition duration-300 hover:text-indigo-600"
				>
					<!-- Placeholder for an icon (e.g., Font Awesome, Heroicons) or Text -->
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<!-- Example: LinkedIn Icon Path -->
						<path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/>
					</svg>
					<span class="sr-only">LinkedIn</span>
					<!-- Screen reader text -->
				</a>
				<a
					href="https://github.com/Jassobolewski"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-500 transition duration-300 hover:text-indigo-600"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<!-- Example: Github Icon Path -->
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					<span class="sr-only">GitHub</span>
				</a>
				<!-- Add more social links (Twitter, etc.) -->
			</div>
			<!-- Note: For a functional contact form, you'd need backend logic or a service like Netlify Forms, Formspree, etc. -->
		</section>
	</div>
</main>

<!-- Footer -->
<footer class="bg-gray-800 py-8 text-gray-400">
	<div class="container mx-auto px-6 text-center">
		<!-- Optional: Footer Navigation -->
		<!-- <div class="mb-4">
                <a href="#about" class="px-3 hover:text-white">About</a>
                <a href="#projects" class="px-3 hover:text-white">Projects</a>
                <a href="#contact" class="px-3 hover:text-white">Contact</a>
            </div> -->
		<!-- Optional: Social Links in Footer -->
		<!-- <div class="flex justify-center space-x-4 mb-4"> ... social links ... </div> -->
		<p class="text-sm">© 2024 Jan Sobolewski. All rights reserved.</p>
	</div>
</footer>

<!-- Optional: Add JavaScript file for interactivity (like mobile menu toggle) -->
<!-- <script src="script.js"></script> -->
