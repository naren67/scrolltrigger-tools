

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ ease:'none',duration:2})


const t1 = gsap.timeline()
tl.from('.move_one', {xPercent: -100})
.from('.move_two', {xPercent: 100})
.from('.move_three', {yPercent: -100})


ScrollTrigger.create({
          animation:t1,
          trigger:'.footer',
          start:'top top',
          end: '+=4000',
          scrub: true,
          pin: true,
          anticipatePin: 1
})