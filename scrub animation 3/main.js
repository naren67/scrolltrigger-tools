


//toggle actions default     (scrub with a value true)

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:1000,
//           duration:6,
//           scrollTrigger:{
//                   trigger:'.three',
//                   start: 'top 80%',
//                   end:'top 100px',
//                   markers: true,
//                   scrub: true
//           }
// })      




//toggle actions default     (scrub with a value 1 or 3 or 5 optional to make smooth movements)

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:1000,
//           duration:6,
//           scrollTrigger:{
//                   trigger:'.three',
//                   start: 'top 80%',
//                   end:'top 100px',
//                   markers: true,
//                   scrub: 1
//           }
// })       





                                   //scrolltrigger timeline chaining


//toggle actions default     (scrub with a value 1 or 3 or 5 optional to make smooth movements)

gsap.registerPlugin(ScrollTrigger)


let t1 = gsap.timeline({

          scrollTrigger:{
                    trigger:'.two',
                    start: 'top 95%',
                    end:'top 100px',
                    markers: true,
                    scrub: 1
            }
})


t1.to('.two',{
          x:600,
          duration:6
})  
.to('.two', {
          backgroundColor: 'purple',
          duration: 5
})
.to('.two', {
          x:0,
          duration :6
})