document.addEventListener('DOMContentLoaded', () => {
	const sections = document.querySelectorAll('.hero-section')
	let currentIndex = 0

	function showNextSection() {
		sections[currentIndex].classList.remove('active')
		sections[currentIndex].classList.add('prev')

		currentIndex = (currentIndex + 1) % sections.length
		sections[currentIndex].classList.remove('prev')
		sections[currentIndex].classList.add('active')
	}

	// Automatically slide every 5 seconds
	setInterval(showNextSection, 8000)
})

document
	.getElementById('contactForm')
	.addEventListener('submit', function (event) {
		event.preventDefault()

		const buttton = document.getElementById('submit-btn')
		buttton.textContent = 'Sending...'
		const formData = new FormData(event.target)

		const fromName = formData.get('user_name')
		const message = formData.get('user_message')
		const email = formData.get('user_email')
		const phone = formData.get('user_phone')

		// Sends the email
		emailjs
			.send('service_jh6unt9', 'template_dzi3doa', {
				from_name: fromName,
				message: message,
				email: email,
				phone: phone,
				reply_to: email,
			})
			.then((response) => {
				const toast = document.getElementById('toast')
				const message = document.getElementById('toast-message')
				message.classList.add('success')
				message.textContent = 'Email sent successfully'
				toast.classList.remove('hidden')

				setTimeout(() => {
					toast.classList.add('hidden')
				}, 3000)
			})
			.catch(() => {
				const toast = document.getElementById('toast')
				const message = document.getElementById('toast-message')
				message.classList.add('error')
				message.textContent = 'Failed to send email'
				toast.classList.remove('hidden')
				setTimeout(() => {
					document.getElementById('toast').classList.add('hidden')
				}, 3000)
			})
			.finally(() => {
				buttton.textContent = 'Get Started Now'
			})
	})

class NumberAnimator {
	constructor(element, target, duration = 2000) {
		this.element = element
		this.target = target
		this.duration = duration
		this.startTime = null
		this.observer = null
		this.initObserver()
	}

	// Initialize Intersection Observer
	initObserver() {
		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.animate()
				} else {
					this.element.textContent = '0'
				}
			})
		})
		this.observer.observe(this.element)
	}

	animate() {
		this.startTime = Date.now()
		this.updateNumber()
	}

	updateNumber() {
		const elapsed = Date.now() - this.startTime
		const progress = Math.min(elapsed / this.duration, 1)
		const currentValue = Math.floor(progress * this.target)

		this.element.textContent = currentValue

		if (progress < 1) {
			requestAnimationFrame(this.updateNumber.bind(this))
		} else {
			this.element.textContent = this.target
		}
	}
}

const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const number3 = document.getElementById('number3')

const animator1 = new NumberAnimator(number1, 10, 3000)
const animator2 = new NumberAnimator(number2, 240, 2500)
const animator3 = new NumberAnimator(number3, 78, 2000)

document.querySelectorAll('.payment-methods-carousel').forEach((element) => {
	element.innerHTML += element.innerHTML
	element.innerHTML += element.innerHTML
	element.innerHTML += element.innerHTML
})

document.querySelectorAll('.hero-section').forEach((section) => {
	section.addEventListener('mousemove', function (e) {
		const lightEffect = document.querySelector('.light-effect')
		const rect = this.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		lightEffect.style.left = `${x}px`
		lightEffect.style.top = `${y}px`
		lightEffect.style.opacity = 1
	})
})

document
	.querySelector('.hero-section')
	.addEventListener('mouseleave', function () {
		const lightEffect = document.querySelector('.light-effect')
		lightEffect.style.opacity = 0
	})

const testimonials = [
	[
		{
			quote:
				"Everything promised and more! It's rare to find a company that delivers on its word.",
			name: 'Lana Rey',
			title: 'Founder & leader',
			image:
				'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
		},
		{
			quote:
				'Is it possible to fall in love with a company? Well, I did! They are the best in the business.',
			name: 'John Doe',
			title: 'CEO & Founder',
			image:
				'https://images.generated.photos/AGajC2_viO_FD9mUUN860fpb8zL_gz_Pw-VC_oX-fw8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTIyNTQzLmpwZw.jpg',
		},
		{
			quote:
				"Transparency, honesty, and integrity. That's what you get when you work with this company.",
			name: 'Chen Li',
			title: 'Finance Manager',
			image:
				'https://images.generated.photos/X6OMUnBl1rlOBnPgTN6LbCR8Jf81eUXbh0Bx0XTZE84/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTA0MTIyLmpwZw.jpg',
		},
	],
	[
		{
			quote:
				'Fastest way to get your business off the ground. They are the best in the business.',
			name: 'Gabriella Smith',
			title: 'Marketing Manager',
			image:
				'https://images.generated.photos/_6k0_gRXM89EclypTE03kJzSlNvtssinYSczO3R0wxA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTYwNzI1LmpwZw.jpg',
		},
		{
			quote:
				'I saved so much in hidden fees. This app is transparent, trustworthy, and super easy to use!',
			name: 'Mark Johnson',
			title: 'CTO & Co-Founder',
			image:
				'https://images.generated.photos/fcSJuy4iLadsnYQZXOGqcZm_8MP8XqhQw-5p7HeHPko/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTM0OTg5LmpwZw.jpg',
		},
		{
			quote:
				'Instant transfers, low fees, and top-notch security—what more could you ask for?',
			name: 'Mahershala Ali',
			title: 'Actor & Producer',
			image:
				'https://images.generated.photos/6Rvff04erBdpLhPXyV-GZE500SIzKI-YCBtlLykuZog/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYxODI0LmpwZw.jpg',
		},
	],
	[
		{
			quote:
				'Makes sending and receiving money seamless. The best experience I’ve had with any financial app.',
			name: 'Ranbir Kapoor',
			title: 'Writer',
			image:
				'https://images.generated.photos/yHJL5ymbZeGfnZmnUYlZnOlCXkGdNSFdpIcdtNblBaY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzMxODI3LmpwZw.jpg',
		},
		{
			quote:
				'Tracking expenses and investments has never been this fun and simple.',
			name: 'Cynthia Erivo',
			title: 'Singer & Songwriter',
			image:
				'https://images.generated.photos/F46n-_Vik3phLILcavTBAV3y1U-z6yMvRsP0brbqT1k/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIxMTQ5LmpwZw.jpg',
		},
		{
			quote:
				'No more waiting for days to see transactions. This app updates instantly!',
			name: 'Lonsdale Smith',
			title: 'Designer',
			image:
				'https://images.generated.photos/-zjI21TA7IKXl-FTt2Vg9gbZAW89i0F-NkaqOLmxXFw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE2NzY4LmpwZw.jpg',
		},
	],
]

const carouselContainer = document.querySelector('.testimonial-carousel')

testimonials.forEach((testimonial, index) => {
	const item = document.createElement('div')
	item.className =
		'flex justify-center gap-4 md:gap-6 lg:gap-10 items-center flex-wrap min-w-full w-full snap-end '
	item.id = `testimonial-item-${index + 1}`
	testimonial.forEach((testimonialItem) => {
		item.innerHTML += `<div class="size-64 lg:size-80  rounded-2xl relative flex flex-col p-6 lg:px-10 lg:py-12 justify-center ">
						<img
							src="./assets/card-bg.png"
							alt="card-bg"
							class="absolute w-[100%] h-[100%] top-0 left-0"
						/>
					<div class="flex gap-1">
						${'<div class="mask mask-star-2 bg-yellow-500 size-4"></div>'.repeat(5)}
					</div>
					<blockquote class="text-sm lg:text-base font-semibold mt-4 z-10">${
						testimonialItem.quote
					}</blockquote>
					<div class="flex items-center gap-2 mt-auto">
						<div class="avatar">
							<div class="w-12 rounded-full">
								<img src="${testimonialItem.image}" alt="avatar of ${testimonialItem.name}" />
							</div>
						</div>
						<div class="z-10">
							<h5 class="lg:text-lg">${testimonialItem.name}</h5>
							<p class="!text-xs h6 lg:!text-sm text-neutral-300">${testimonialItem.title}</p>
						</div>
					</div>
				</div>`
	})
	carouselContainer.appendChild(item)
})

const indicators = document.querySelectorAll('button[id^="indicator-"]')

function setActiveSlide(index) {
	// Scroll to the carousel item

	document
		.getElementById(`testimonial-item-${index}`)
		.scrollIntoView({ behavior: 'smooth' })

	// Update the active indicator
	indicators.forEach((indicator, i) => {
		indicator.classList.toggle('opacity-100', i === index - 1)
		indicator.classList.toggle('opacity-50', i !== index - 1)
	})
}
