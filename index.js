const hamBtn = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobile")
const links = document.getElementsByClassName("link")
const close = document.getElementById("closebtn")

// hamBtn.addEventListener("click", () =>{
//     mobileMenu.classList.toggle("hidden")
// })

// close.addEventListener("click", () => {
//     mobileMenu.classList.add("hidden")
// })

// links.addEventListener.forEach("click", () => {
//     mobileMenu.classList.add("hidden")
//     // console.log(links)
// })


// hamBtn.addEventListener('click', () => {
//       if (mobileMenu.classList.contains('hidden')) {
//         // Show sidebar and start animation
//         mobileMenu.classList.remove('hidden');
//         requestAnimationFrame(() => {
//           mobileMenu.classList.remove('-translate-x-full');
//           mobileMenu.classList.add('translate-x-0');
//         });
//       } else {
//         // Hide with animation, then fully hide
//         mobileMenu.classList.remove('translate-x-0');
//         mobileMenu.classList.add('-translate-x-full');
//         // Wait for animation to finish before hiding completely
//         setTimeout(() => {
//           mobileMenu.classList.add('hidden');
//         }, 300); // Match with duration-300
//       }
//     });

hamBtn.addEventListener("click",() => {
    mobileMenu.classList.remove('hidden');
        requestAnimationFrame(() => {
          mobileMenu.classList.remove('translate-x-full');
          mobileMenu.classList.add('translate-x-0');
        });
})

close.addEventListener("click",() => {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);

    // mobileMenu.classList.add("hidden");
})

document.getElementsByClassName("link").forEach(link =>{
    link.addEventListener("click",() =>{
    // mobileMenu.classList.remove('translate-x-0');
    // mobileMenu.classList.add('translate-x-full');
    // setTimeout(() => {
    //       mobileMenu.classList.add('hidden');
    //     }, 300);
    console.log("clicked")
  });
});