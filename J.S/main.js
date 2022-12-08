/*==================SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*====================== MENU SHOW ==============*/
/* validate if constant exists */
if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

/*================= MENU HIDDEN ===============*/
/*Validate if n=constant exsists */
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}


/*================== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
	const navMenu =document.getElementById('nav-menu')
	//when we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction ))

/*===================== SHOW BACKGROUND ===============*/
const scrollHeader =() =>{
	const header =document.getElementById('header')
	//when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	this.scrollY >=50 ? header.classList.add('bg-header')
	                  : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
/*================= TESTIMONTAL SWIPER ==========*/
/*let testimonialSwiper = new swiper(".testimonial-swiper"), {spaceBetween: 30,
loop:'true',

navigation: {
	nextEl: ".swiper-button-next".
}
}
*/




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
	const scrollY = window.pageYOffset
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
		      sectionTop = current.offsetTop - 58 ,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =() =>{
	const scrollUp = document.getElementById('scroll-up')
	//when the scroll is heigher than 350 viewport height, add the show-scroll class to the a teg with the scrollup 
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						:scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
})
sr.reveal(`.home__date, .footer__container, .footer__group`)
sr.reveal(`.home__img`,{delay:700, origin:'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`,{interval:100})
sr.reveal(`.choose__img, .calculate__content`,{origin:'left'})
sr.reveal(`.choose__content, .calculate__img`,{origin:'right'})



/*=============== CALCULATE JS ===============*/
const calculateForm = document.querySelector("#calculate-form"),
 calculateCm = document.querySelector("#calculate-cm"),
calculateMessage = document.getElementById('calculate-messsage')
	  const calculateKg = document.getElementById("calculate-kg")

const calculateBmi = (e) =>{
	e.preventDefault()
	//check if the fields have a value
	if(calculateCm.value === '' || calculateKg.value === ''){
		//add and remove color
		calculateMessage.classList.remove('color-green')
		calculateMessage.classList.add('color-red')
		//show message
		calculateMessage.textContent = 'Fill in the Height and Weight :('
		
		//remove message three seconds
		setTimeout(() =>{		
		calculateMessage.textContent =''
		},3000)
	}else{
		//BMI Formula
		const cm = calculateCm.value / 100,
		      kg = calculateKg.value,
			  bmi = Math.round(kg /(cm * cm))
		//show your health status
		console.log(bmi)
	    if(bmi<18.5){
			//addcolor and display message
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = 'Your BMI is ${bmi} and you are skinny :( '
		}else if(bmi< 25){
            calculateMessage.classList.add('color-green')
			calculateMessage.textContent = 'Your BMI is ${bmi} and you are healthy :) '
		}else {
			calculateMessage.classList.add('color-green')
			calculateMessage.textContent = 'Your BMI is ${bmi} and you are overweight :( '
		}
		// To Clear the input field
		calculateCm.value = ''
		calculateKg.value = ''
		// Remove message four seconds
		setTimeout(() =>{
		calculateMessage.textContent = ''
		}, 4000)
	}

}

calculateForm.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
	  contactUser = document.getElementById('contact-user')
const sendEmail = (Event) =>{
	Event.preventDefault()
	//check if the field has a value
	if(contactUser.value === ''){
		//add and remove color
		contactMessage.classList.remove('color-green')
		contactMessage.classList.add('color-red')
		//show message
		contactMessage.textContent = 'You must enter email :('
		//remove message three seconds
		setTimeout(() =>{
			contactMessage.textContent = '' 
		}, 3000)
	}else{
		//serviceID - TemplateID - #form - publickey
		emailjs.sendForm('service_1j0byxe','template_9s88v0z','#contact-form', 'Jlq22SSmulH6hnRd-')
		     .then(() =>{
			//show message and add color 
			contactMessage.classList.add('color-green')
			contactMessage.textContent = 'You registered successfully :)'
			//remove message after there seconds 
			setTimeout(() =>{
				contactMessage.textContent = ''
			}, 3000) 
		},(error) =>{
			//Mail sending error
			alert('OOOOPS SOMTHING HAS FAILED....', error)
		})
		// To clear the input field 
		contactUser.value = '' 
	}
}
contactForm.addEventListener('submit', sendEmail)