let currentIndex = 0
const items = document.querySelectorAll('.hero-carousel-item')
const navbar = document.querySelector('nav')
const totalItems = items.length

function showNextSlide() {
	const styles = ['bg-primary', 'bg-secondary', 'bg-purple-500']
	items[currentIndex].classList.remove('opacity-100', 'block')
	items[currentIndex].classList.add('hidden')

	currentIndex = (currentIndex + 1) % totalItems

	items[currentIndex].classList.remove('hidden')
	items[currentIndex].classList.add('opacity-100', 'block')

	navbar?.classList.remove(...styles)
	navbar?.classList.add(styles[currentIndex])
}

setInterval(showNextSlide, 5000)

const testimonialCarouselActions = document.querySelectorAll(
	'.testimonial-carousel-button div'
)
for (let i = 0; i < testimonialCarouselActions.length; i++) {
	testimonialCarouselActions[i].addEventListener('click', (e) => {
		document
			.querySelectorAll('.testimonial-carousel-button div')
			.forEach((element) => {
				element.classList.remove('bg-white')
			})
		e.target.classList.add('bg-white')
	})
}

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
