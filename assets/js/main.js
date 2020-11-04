// window.addEventListener('scroll',(e)=>{
//     console.log(document.querySelector('.check').getBoundingClientRect().top);
// })

window.addEventListener('scroll',(e)=>{
        // if(window.innerWidth<768){
        // document.querySelectorAll('.sticky-top').forEach(el=>
        //        {    
        //             if(el.getBoundingClientRect().top==0){
        //                el.style.height='20vh';
        //             }else{
        //                el.style.height='30vh'
        //             }
        //         }
        //     );
        // }else{
        //         document.querySelectorAll('.sticky-top').forEach(el=>el.style.height='100vh';
        // }
          document.querySelectorAll('.scroll-element').forEach(el=>{
            let slow=el.querySelector('.slow-scroll');
            slow.style.transform='translateY(-'+ el.getBoundingClientRect().top *1.1+'%)';
            })

          document.querySelectorAll('.d-animate-none').forEach(el=>{

            if(window.scrollY>el.getBoundingClientRect().top-400){
                el.classList.add('slideUp')
            }else{
                el.classList.remove('slideUp')
            }
          })
})