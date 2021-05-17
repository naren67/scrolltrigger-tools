


//toggle actions default     (pin the current object)

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:800,
//           duration:6,
//           scrollTrigger:{
//                   trigger:'.three',
//                   start: 'top 50%',
//                   end:'top 100px',
//                   markers: true,
//                   scrub: 2,
//                   pin:true
//           }
// })     




//toggle actions default     (pin the thirt party object)

gsap.registerPlugin(ScrollTrigger)


gsap.to('.three',{
          x:800,
          duration:6,
          scrollTrigger:{
                  trigger:'.three',
                  start: 'top 120%',
                  end:'top 100px',
                  markers: true,
                  scrub: 2,
                  pin: '.two'
          }
})  

