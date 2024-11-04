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
