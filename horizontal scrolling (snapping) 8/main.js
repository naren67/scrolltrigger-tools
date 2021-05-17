

gsap.registerPlugin(ScrollTrigger)

let sections = gsap.utils.toArray('.body')

gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
               trigger: 'body',
               pin: true,
               scrub: 1,
               snap: 1/ (sections.length -1),
               end: ()=> '+=1' + document.querySelector*('body').offsetWidth

          }
})
