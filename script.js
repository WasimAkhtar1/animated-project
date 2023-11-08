gsap.from(".slide",{
    opacity:0,
    x:-50,
    duration:1,
    delay:1,
})

gsap.from(".slide2>img",{
    opacity:0,
    x:50,
    duration:1,
    delay:1,
})

gsap.from("nav>img",{
    opacity:0,
    y:-50,
    duration:1,
    // delay:1,
})

gsap.from("nav>#part",{
    opacity:0,
    y:-50,
    duration:1,
    // delay:1,
})


gsap.from("#slider",{
scrollTrigger:{
    trigger:"#slider",
    scroller:"body",
    start:"top 60%",
    end:"top 70%",
    // markers:true,
    scrub:1,
},
opacity:0,
y:-50,
duration:0.3,
})

gsap.from(".child",{
    scrollTrigger:{
        trigger:"#slider",
        scroller:"body",
        start:"top 60%",
        end:"top 70%",
        // markers:true,
        scrub:1,
    },
    opacity:0,
    y:50,
    // duration:0.3,
    })

    gsap.from("#left",{
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top 60%",
            end:"top 70%",
            // markers:true,
            scrub:1,
        },
        opacity:0,
        x:-50,
        // duration:0.3,
        })

        gsap.from("#right",{
            scrollTrigger:{
                trigger:"#page3",
                scroller:"body",
                start:"top 60%",
                end:"top 70%",
                // markers:true,
                scrub:1,
            },
            opacity:0,
            x:50,
            // duration:0.3,
            })

            gsap.from("#slide,#slide2",{
                scrollTrigger:{
                    trigger:"#main-tag",
                    scroller:"body",
                    start:"top 50%",
                    end:"top 70%",
                    // markers:true,
                    scrub:1,
                },
                opacity:0,
                x:-50,
                // duration:0.3,
                })

                gsap.from("#command",{
                    scrollTrigger:{
                        trigger:"#main-tag",
                        scroller:"body",
                        start:"top 50%",
                        end:"top 70%",
                        // markers:true,
                        scrub:1,
                    },
                    opacity:0,
                    y:50,
                    // duration:0.3,
                    })

                    gsap.from("#nav",{
                        scrollTrigger:{
                            trigger:"#page8",
                            scroller:"body",
                            start:"top 90%",
                            end:"top 70%",
                            // markers:true,
                            scrub:1,
                        },
                        opacity:0,
                        x:50,
                        // duration:0.3,
                        })

                        gsap.from("#nav2",{
                            scrollTrigger:{
                                trigger:"#page8",
                                scroller:"body",
                                start:"top 90%",
                                end:"top 70%",
                                // markers:true,
                                scrub:1,
                            },
                            opacity:0,
                            x:-50,
                            // duration:0.3,
                            })