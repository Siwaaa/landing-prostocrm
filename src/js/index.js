// Scroll to #

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
    })
  })
}

// Animation

const e = document.querySelectorAll("[data-animate-on-scroll]")
const t = new IntersectionObserver((e=>{
  e.forEach((e=>{
    e.isIntersecting && e.target.setAttribute("data-animate-on-scroll", "animated")
  }
  ))
}),{
  threshold: 0.25
});

e.forEach((e=>{
  t.observe(e)
}
))

// BURGER OM-NOM-NOM
const burgerBtn = document.querySelector('#burger')
const navbarMenu = document.querySelector('.navbar__menu')

burgerBtn.addEventListener('change', function() {
  if (this.checked) {
    navbarMenu.style.height = '196px'
  } else {
    navbarMenu.style.height = '0'
  }
})