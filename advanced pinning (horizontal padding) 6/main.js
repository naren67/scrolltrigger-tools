
//pinspacing false (avoid spacing)

// gsap.registerPlugin(ScrollTrigger)

// ScrollTrigger.create({
//           trigger: '.move_one',
//           start: 'top top',
//           end: '+=300',
//           pin: true,
//           pinSpacing: false
// })

//pinspacing true   (include spacing)

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.create({
          trigger: '.move_one',
          start: 'top top',
          end: '+=300',
          pin: true,
          pinSpacing: true
})