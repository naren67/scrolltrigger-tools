gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('section').forEach((panel, i)=>{
          ScrollTrigger.create({
                    trigger: panel,
                    start: 'top top',
                    // end: '+=500px',
                    pin: true,
                    pinSpacing: false
          })
})