

//automatic box move

gsap.to('.one',{
          x:600,
          duration:2
})




//scrollTrigger box move automatically when the box revealed

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:600,
//           duration:2,
//           scrollTrigger:'.three'
// })




//toggle actions default run

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:600,
//           duration:2,
//           scrollTrigger:{
//                     trigger:'.three',
//                                                      //play pause resume reverse restart reset complete none
//                     toggleActions: 'play none none none'
//           }
// })




//toggle actions default        restart

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:600,
//           duration:2,
//           scrollTrigger:{
//                     trigger:'.three',
//                                                      //play pause resume reverse restart reset complete none
//                     toggleActions: 'restart none none none'
//           }
// })




//toggle actions default     (restart, pause )

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:1000,
//           duration:2,
//           scrollTrigger:{
//                     trigger:'.three',
//                                                      //play pause resume reverse restart reset complete none
//                     toggleActions: 'restart pause none none'
//           }
// })




//toggle actions default     (restart, pause, resume )

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:1000,
//           duration:2,
//           scrollTrigger:{
//                     trigger:'.three',
//                                                      //play pause resume reverse restart reset complete none
//                     toggleActions: 'restart pause resume none'
//           }
// })





//toggle actions default     (restart, pause, reverse ) with pause

gsap.registerPlugin(ScrollTrigger)


gsap.to('.three',{
          x:1000,
          duration:2,
          scrollTrigger:{
                    trigger:'.three',
                                                     //play pause resume reverse restart reset complete none
                    toggleActions: 'restart pause reverse pause'
          }
})




