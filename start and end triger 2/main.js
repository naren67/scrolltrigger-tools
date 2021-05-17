//toggle actions default     (markers start)

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:1000,
//           duration:2,
//           scrollTrigger:{
//                     trigger:'.three',
//                                                      //play pause resume reverse restart reset complete none
//                                                      //restart pause reverse pause 
//                     toggleActions: 'play pause none none',
//                     markers:true,
//                                                      //top center bottom pixels percentages
//                     start:'top 50%'
//           }
// })




//toggle actions default     (markers start at object - 50px height - 60%)

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:1000,
//           duration:2,
//           scrollTrigger:{
//                     trigger:'.three',
//                                                      //play pause resume reverse restart reset complete none
//                                                      //restart pause reverse pause 
//                     toggleActions: 'play pause none none',
//                     markers:true,
//                                                      //top center bottom pixels percentages
//                     start:'50px 60%'
//           }
// })





//toggle actions default     (markers with start and end)

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:1000,
//           duration:2,
//           scrollTrigger:{
//                     trigger:'.three',
//                                                      //play pause resume reverse restart reset complete none
//                                                      //restart pause reverse pause 
//                     toggleActions: 'restart pause reverse pause',
//                     markers:true,
//                                                      //top center bottom pixels percentages
//                     start:'50px 60%',
//                                                      //bottom - bottom of the object marker
//                     end:'bottom 100px'
//           }
// })




//toggle actions default     (markers with start and end) with end : '+300'gap

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:1000,
//           duration:2,
//           scrollTrigger:{
//                     trigger:'.three',
//                                                      //play pause resume reverse restart reset complete none
//                                                      //restart pause reverse pause 
//                     toggleActions: 'restart pause reverse pause',
//                     markers:true,
//                                                      //top center bottom pixels percentages
//                     start:'50px 60%',
//                                                      //bottom - bottom of the object marker
//                     end :'+300'
//           }
// })





//toggle actions default     (markers with start and end) with offset width during fancy design

// gsap.registerPlugin(ScrollTrigger)


// gsap.to('.three',{
//           x:1000,
//           duration:2,
//           scrollTrigger:{
//                     trigger:'.three',
//                                                      //play pause resume reverse restart reset complete none
//                                                      //restart pause reverse pause 
//                     toggleActions: 'restart pause reverse pause',
//                     markers:true,
//                                                      //top center bottom pixels percentages
//                     start:'center center',
//                                                      //bottom - bottom of the object marker
//                     end : ()=> '+=' + 
//                     document.querySelector('.three').offsetWidth
//           }
// })





                              //ultimate flexibility

                              //use the above and bellow object to animate the center object





                              
//toggle actions default     (markers with start and end) with offset width during fancy design

gsap.registerPlugin(ScrollTrigger)


gsap.to('.three',{
          x:1000,
          duration:3,
          scrollTrigger:{
                    trigger:'.two',
                                                     //play pause resume reverse restart reset complete none
                                                     //restart pause reverse pause 
                    toggleActions: 'restart pause reverse pause',
                    markers:true,
                                                     //top center bottom pixels percentages
                    start:'100% 50%',
                                                     //endTrigger
                    endTrigger: '.four',
                                                     //bottom - bottom of the object marker
                    end : 'bottom 80%'
          }
})                              