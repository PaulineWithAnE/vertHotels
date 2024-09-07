
if (window.innerWidth > 801) { 
    gsap.to('.titlePart', {opacity: 0, duration: 1.5, delay: 5.5})
}

gsap.from('.titlePart', {opacity: 0, duration: 4, delay: 1})
gsap.from('#playPause', {delay: 1, repeat: -1, scale: 0.8, duration: 2})




const button = document.querySelector('#playPause')
let plaing = false;
button.addEventListener('click', playPause);

function playPause() {
    if (plaing) {
         document.querySelector('#audio').pause();
         document.querySelector('#playPause').innerHTML = `<svg viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.o{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style> </defs> <g id="c"> <line id="d" class="o" x1="13.1159" y1="11.7737" x2="13.1159" y2="36.2263"></line> <line id="e" class="o" x1="8.8039" y1="16.8329" x2="8.8039" y2="31.1671"></line> <line id="f" class="o" x1="4.5" y1="21.4705" x2="4.5" y2="26.5295"></line> <line id="g" class="o" x1="17.4569" y1="16.8329" x2="17.4569" y2="31.1671"></line> <line id="h" class="o" x1="21.9465" y1="21.4705" x2="21.9465" y2="26.5295"></line> </g> <g id="i"> <line id="j" class="o" x1="34.6693" y1="11.7737" x2="34.6693" y2="36.2263"></line> <line id="k" class="o" x1="30.3573" y1="16.8329" x2="30.3573" y2="31.1671"></line> <line id="l" class="o" x1="26.0535" y1="21.4705" x2="26.0535" y2="26.5295"></line> <line id="m" class="o" x1="39.0104" y1="16.8329" x2="39.0104" y2="31.1671"></line> <line id="n" class="o" x1="43.5" y1="21.4705" x2="43.5" y2="26.5295"></line> </g> </g></svg>`
    }
    else {
        document.querySelector('#audio').play();
        document.querySelector('#playPause').innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="svgMenu"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 6V18M9 6V18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
    }
    plaing = !plaing;
}


const hiddenMenu = document.querySelector('.hiddenMenu');
const menuButton = document.querySelector('#menuButton');
let menuIsShown = true;
menuButton.addEventListener('click', change)

function change() {
    if (menuIsShown) {
        hiddenMenu.style.display = 'inline-flex';
        document.querySelector('body').classList.add('bodyChangedMenu'); 
        hiddenMenu.classList.add('auto');
        button.classList.add('auto');
        signIn.classList.add('hideButtons');
        bookNow.classList.add('hideButtons');
        menuButton.classList.add('hideButtons');
        gsap.from('.part', {opacity: 0, stagger: 0.5, duration: 1.5, delay: 0.1})
        menuButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`
    }
    document.addEventListener( 'click', (e) => {
           
        const areaMenuButton = e.composedPath().includes(menuButton);
    
        if (!areaMenuButton) {
            hiddenMenu.style.display = 'none';
            signIn.classList.remove('hideButtons');
            bookNow.classList.remove('hideButtons');
            menuButton.classList.remove('hideButtons');
            document.querySelector('body').classList.remove('bodyChangedMenu');
            menuButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Duo_MD"> <path id="Vector" d="M5 15H19M5 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`
        }
       
    }) 
}



const formBookNow = document.querySelector('.formBookNow');
const bookNow = document.querySelector('.bookNow');

bookNow.addEventListener('click', showFormNow);

let formShown = true;

function showFormNow() {
    if (formShown) {
        formBookNow.style.display = 'inline-flex';
        document.querySelector('body').classList.add('bodyChanged');
        formBookNow.classList.add('auto');
        button.classList.add('auto');
   
        
        gsap.from('.formBookNow', {y: -100, duration: 0.5})
        

        document.addEventListener( 'click', (e) => {
            const areaBook = e.composedPath().includes(formBookNow);
            const areaTwoBook = e.composedPath().includes(bookNow);
        
            if (!areaTwoBook && !areaBook) {
                formBookNow.style.display = 'none';
                document.querySelector('body').classList.remove('bodyChanged');
            }
           
        }) 
    }
}

document.querySelector('.noActionBook').addEventListener('click', (e) => {
    e.preventDefault();
    alert('It is not possible to book rooms yet, but we are working on this possibility. We apologize for the inconvenience.')

})


let items = document.querySelectorAll(".one");

items.forEach(function(i) { 

let animation = gsap.to(i, {
  paused: true,
  x: 15
});

i.addEventListener("mouseenter", () => animation.play())
i.addEventListener("mouseleave", () => animation.reverse())   
})


const inputFrom = document.querySelector('.from');
let date = new Date();

inputFrom.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
'-' + date.getDate().toString().padStart(2, 0);

const inputTo = document.querySelector('.to');

inputTo.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
'-' + (date.getDate() + 1 ).toString().padStart(2, 0);



const formSignIn = document.querySelector('.formSignIn');
const signIn = document.querySelector('.signIn');
    
signIn.addEventListener('click', showForm);
let formIsNotShown = true;

function showForm() {
    if (formIsNotShown) {
        formSignIn.style.display = 'inline-flex';
        document.querySelector('body').classList.add('bodyChangedSignIn');
        formSignIn.classList.add('auto');
        button.classList.add('auto');
        gsap.from('.formSignIn', {y: -100, duration: 0.5})
        
        
        document.addEventListener( 'click', (e) => {
            const areaOne = e.composedPath().includes(formSignIn);
            const areaTwo = e.composedPath().includes(signIn);
          
            if (!areaTwo && !areaOne) {
                formSignIn.style.display = 'none';
                document.querySelector('body').classList.remove('bodyChangedSignIn');
            }
         
        })  
    }
}    

   

document.querySelector('.noActionSignUp').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#yourEmail').value = '';
    alert('Thank you for choosing us!')
})

document.querySelector('.noActionSignIn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#myEmail').value = '';
    document.querySelector('#password'). value = '';
    alert('Thank you for choosing us!')
})

document.querySelector('.noActionArrow').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#myEmailFooter').value = '';
    alert('Thank you for choosing us!')
})


document.querySelector('#room').addEventListener('keypress', enter);

function enter(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
} 

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

plus.addEventListener('click', plusF)


function plusF(e) {
    e.preventDefault();
    let room = document.querySelector('#room').value;
        room++;
        document.querySelector('#room').value = room;
        minus.addEventListener('click', minusF)
        function minusF() {
            if (room > 1) {
            room--;
            document.querySelector('#room').value = room;
        }
    }
}


document.querySelector('#adult').addEventListener('keypress', enter);

function enter(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
} 

const plusA = document.querySelector('#plusA');
const minusA = document.querySelector('#minusA');

plusA.addEventListener('click', plusFA)


function plusFA(e) {
    e.preventDefault();
    let adult = document.querySelector('#adult').value;
    adult++;
    document.querySelector('#adult').value = adult;
    minusA.addEventListener('click', minusFA)
    function minusFA() {
        if (adult > 1) {
            adult--;
            document.querySelector('#adult').value = adult;
        }
    }
}


document.querySelector('#child').addEventListener('keypress', enter);

function enter(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
} 

const plusC = document.querySelector('#plusC');
const minusC = document.querySelector('#minusC');

plusC.addEventListener('click', plusFC)


function plusFC(e) {
    e.preventDefault();
    let child = document.querySelector('#child').value;
    child++;
    document.querySelector('#child').value = child;
    minusC.addEventListener('click', minusFC)
    function minusFC() {
        if (child > 0) {
            child--;
            document.querySelector('#child').value = child;
        }
    }
}

const dest = document.querySelector('.dest');
dest.addEventListener('click', hideMenu)

const rest = document.querySelector('.rest');
rest.addEventListener('click', hideMenu)

const spa = document.querySelector('.spaButton');
spa.addEventListener('click', hideMenu)

const aboutUs = document.querySelector('.aboutUs');
aboutUs.addEventListener('click', hideMenu)

const contactUs = document.querySelector('.contactUs');
contactUs.addEventListener('click', hideMenu)



function hideMenu() {
    menuButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Duo_MD"> <path id="Vector" d="M5 15H19M5 9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`
    hiddenMenu.style.display = 'none'; 
}



const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ['rest1.jpeg', 'rest2.jpeg', 'rest3.jpeg', 'rest4.jpeg', 'rest5.jpeg'];
let i = 0;
next.addEventListener('click', () => {
    i++; 
    if (i > photos.length - 1) {
        i = 0
    }
    document.querySelector('#pictures').src = photos[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos.length - 1
    }
    document.querySelector('#pictures').src = photos[i]
})



const pics = document.querySelectorAll('.pic');


pics.forEach(function(i) { 

let animationPics = gsap.to(i, {
  paused: true,
  scale: 1.3
  
});

i.addEventListener("mouseenter", () => animationPics.play())
i.addEventListener("mouseleave", () => animationPics.reverse())   
})



const backRooms = document.querySelector('#backRooms');
const nextRooms = document.querySelector('#nextRooms');

let photosRoomsDefault = ['room.jpeg', 'room1.jpeg', 'room2.jpeg', 'room3.jpeg'];
let photosSuites = ['suit.jpeg', 'suit1.jpeg', 'suit2.jpeg', 'suit3.jpeg'];
let iR = 0;

nextRooms.addEventListener('click', () => {
    iR++; 
    if (iR > photosRoomsDefault.length - 1) {
        iR = 0
    }
    document.querySelector('#picturesRooms').src = photosRoomsDefault[iR];
})

backRooms.addEventListener('click', () => {
    iR--;
    if (iR < 0) {
        iR = photosRoomsDefault.length - 1
    }
    document.querySelector('#picturesRooms').src = photosRoomsDefault[iR]
})


const buttonR = document.querySelector('#btnR');
buttonR.classList.add('green');
buttonR.addEventListener('click', rooms)

function rooms() {
    buttonR.classList.add('green')
    buttonS.classList.remove('green')
    photosRooms = photosRoomsDefault;
    console.log(photosRooms)
    let iR = 0;
    document.querySelector('#picturesRooms').src = photosRooms[0];

nextRooms.addEventListener('click', () => {
    iR++; 
    if (iR > photosRooms.length - 1) {
        iR = 0
    }
    document.querySelector('#picturesRooms').src = photosRooms[iR];
})

backRooms.addEventListener('click', () => {
    iR--;
    if (iR < 0) {
        iR = photosRooms.length - 1
    }
    document.querySelector('#picturesRooms').src = photosRooms[iR]
})
} 

const buttonS = document.querySelector('#btnS');
buttonS.addEventListener('click', suites)

function suites() {
    buttonS.classList.add('green')
    buttonR.classList.remove('green')
    photosRooms = photosSuites;
    console.log(photosRooms)
    let iR = 0;
    document.querySelector('#picturesRooms').src = photosRooms[0];
    
    nextRooms.addEventListener('click', () => {
        iR++; 
        if (iR > photosRooms.length - 1) {
            iR = 0
        }
        document.querySelector('#picturesRooms').src = photosRooms[iR];
    })
    
    backRooms.addEventListener('click', () => {
        iR--;
        if (iR < 0) {
            iR = photosRooms.length - 1
        }
        document.querySelector('#picturesRooms').src = photosRooms[iR]
    })
} 


iconPhone = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 4.25H5C4.53668 4.25263 4.09309 4.43784 3.76546 4.76546C3.43784 5.09309 3.25263 5.53668 3.25 6V18C3.25263 18.4633 3.43784 18.9069 3.76546 19.2345C4.09309 19.5622 4.53668 19.7474 5 19.75H19C19.4633 19.7474 19.9069 19.5622 20.2345 19.2345C20.5622 18.9069 20.7474 18.4633 20.75 18V6C20.7474 5.53668 20.5622 5.09309 20.2345 4.76546C19.9069 4.43784 19.4633 4.25263 19 4.25ZM5 5.75H19C19.0663 5.75 19.1299 5.77634 19.1768 5.82322C19.2237 5.87011 19.25 5.9337 19.25 6V7.54L12 11.16L4.75 7.54V6C4.75 5.9337 4.77634 5.87011 4.82322 5.82322C4.87011 5.77634 4.9337 5.75 5 5.75ZM19 18.25H5C4.9337 18.25 4.87011 18.2237 4.82322 18.1768C4.77634 18.1299 4.75 18.0663 4.75 18V9.21L11.66 12.67C11.7656 12.7228 11.882 12.7503 12 12.7503C12.118 12.7503 12.2344 12.7228 12.34 12.67L19.25 9.21V18C19.25 18.0663 19.2237 18.1299 19.1768 18.1768C19.1299 18.2237 19.0663 18.25 19 18.25Z" fill="#000000"></path> </g></svg>';
iconMail = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.4 20.75H18.17C15.5788 20.4681 13.0893 19.5846 10.9 18.17C8.86618 16.8747 7.13938 15.1513 5.84 13.12C4.42216 10.925 3.53852 8.42823 3.26 5.83001C3.22816 5.52011 3.2596 5.20696 3.35243 4.90958C3.44525 4.6122 3.59752 4.33677 3.8 4.10001C3.99694 3.86008 4.24002 3.66211 4.51486 3.51782C4.78969 3.37354 5.09068 3.28587 5.4 3.26001H8C8.56312 3.26058 9.10747 3.46248 9.53476 3.82925C9.96205 4.19602 10.2441 4.70349 10.33 5.26001C10.425 5.97489 10.6028 6.67628 10.86 7.35001C11.0164 7.77339 11.0487 8.23264 10.9531 8.67375C10.8574 9.11485 10.6378 9.51947 10.32 9.84001L9.71 10.45C10.6704 11.9662 11.9587 13.2477 13.48 14.2L14.09 13.6C14.4105 13.2822 14.8152 13.0626 15.2563 12.9669C15.6974 12.8713 16.1566 12.9036 16.58 13.06C17.2545 13.3148 17.9556 13.4926 18.67 13.59C19.236 13.6751 19.7515 13.9638 20.1198 14.402C20.488 14.8403 20.6837 15.3978 20.67 15.97V18.37C20.67 18.9942 20.4227 19.593 19.9823 20.0353C19.5419 20.4776 18.9442 20.7274 18.32 20.73L18.4 20.75ZM8 4.75001H5.61C5.49265 4.75777 5.37809 4.78924 5.27325 4.84252C5.1684 4.8958 5.07545 4.96979 5 5.06001C4.92658 5.14452 4.871 5.24302 4.83663 5.34957C4.80226 5.45612 4.7898 5.56852 4.8 5.68001C5.04249 8.03679 5.83362 10.304 7.11 12.3C8.28664 14.1467 9.85332 15.7134 11.7 16.89C13.6973 18.1798 15.967 18.9878 18.33 19.25C18.4529 19.2569 18.5759 19.2383 18.6912 19.1953C18.8065 19.1522 18.9117 19.0857 19 19C19.1592 18.8368 19.2489 18.6181 19.25 18.39V16C19.2545 15.7896 19.1817 15.5848 19.0453 15.4244C18.9089 15.2641 18.7184 15.1593 18.51 15.13C17.6839 15.0189 16.8724 14.8177 16.09 14.53C15.9359 14.4724 15.7686 14.4596 15.6075 14.4933C15.4464 14.5269 15.2982 14.6055 15.18 14.72L14.18 15.72C14.0629 15.8342 13.912 15.9076 13.7499 15.9292C13.5877 15.9508 13.423 15.9195 13.28 15.84C11.1462 14.6342 9.37997 12.8715 8.17 10.74C8.08718 10.598 8.05402 10.4324 8.07575 10.2694C8.09748 10.1065 8.17286 9.95538 8.29 9.84001L9.29 8.84001C9.40468 8.72403 9.48357 8.57751 9.51726 8.41793C9.55095 8.25835 9.53802 8.09244 9.48 7.94001C9.19119 7.15799 8.98997 6.34637 8.88 5.52001C8.85519 5.30528 8.75133 5.10747 8.58865 4.96513C8.42597 4.82278 8.21613 4.7461 8 4.75001Z" fill="#000000"></path> </g></svg>';

const phoneHref = 'tel: 08-6591919'
const phoneDefault = `${iconMail} 08-6591919`
const emailDefault = `${iconPhone} ds_gmsec@vert-hotels.co.il`
const emailHref = 'mailto:ds_gmsec@vert-hotels.co.il'


const phoneHrefEilat = 'tel: 08-6367777'
const phoneEilat = `${iconMail} 08-6367777`
const emailEilat = `${iconPhone} ei_gmsec@vert-hotels.co.il`
const emailHrefEilat = 'mailto:ei_gmsec@vert-hotels.co.il'


const phoneHrefJ = 'tel: 02-6588888'
const phoneJ = `${iconMail} 02-6588888`
const emailJ = `${iconPhone} jm_recdep1@vert-hotels.co.il`
const emailHrefJ = 'mailto:jm_recdep1@vert-hotels.co.il'



const phoneHrefN = 'tel: 073-387-5555'
const phoneN = `${iconMail} 073-387-5555`
const emailN = `${iconPhone} vl_evning@vert-hotels.co.il`
const emailHrefN = 'mailto:vl_evning@vert-hotels.co.il'


const hotelD = document.querySelector('.deadSea');
const hotelE = document.querySelector('.eilat');
const hotelJ = document.querySelector('.jerusalem');
const hotelN = document.querySelector('.netanya');

hotelD.classList.add('green')

document.querySelector('#emailD').innerHTML = emailDefault;
document.querySelector('#emailD').href = emailHref;
document.querySelector('#phoneD').innerHTML = phoneDefault;
document.querySelector('#phoneD').href = phoneHref;

hotelD.addEventListener('click', detailsD)

function detailsD() {
    hotelD.classList.add('green');
    hotelE.classList.remove('green');
    hotelJ.classList.remove('green');
    hotelN.classList.remove('green');
    document.querySelector('#emailD').innerHTML = emailDefault;
    document.querySelector('#emailD').href = emailHref;
    document.querySelector('#phoneD').innerHTML = phoneDefault;
    document.querySelector('#phoneD').href = phoneHref;
}

hotelE.addEventListener('click', detailsE)

function detailsE() {
    hotelD.classList.remove('green');
    hotelE.classList.add('green');
    hotelJ.classList.remove('green');
    hotelN.classList.remove('green');
    document.querySelector('#emailD').innerHTML = emailEilat;
    document.querySelector('#emailD').href = emailHrefEilat;
    document.querySelector('#phoneD').innerHTML = phoneEilat;
    document.querySelector('#phoneD').href = phoneHrefEilat;
}

hotelJ.addEventListener('click', detailsJ)

function detailsJ() {
    hotelD.classList.remove('green');
    hotelE.classList.remove('green');
    hotelJ.classList.add('green');
    hotelN.classList.remove('green');
    document.querySelector('#emailD').innerHTML = emailJ;
    document.querySelector('#emailD').href = emailHrefJ;
    document.querySelector('#phoneD').innerHTML = phoneJ;
    document.querySelector('#phoneD').href = phoneHrefJ;
}

hotelN.addEventListener('click', detailsN)

function detailsN() {
    hotelD.classList.remove('green');
    hotelE.classList.remove('green');
    hotelJ.classList.remove('green');
    hotelN.classList.add('green');
    document.querySelector('#emailD').innerHTML = emailN;
    document.querySelector('#emailD').href = emailHrefN;
    document.querySelector('#phoneD').innerHTML = phoneN;
    document.querySelector('#phoneD').href = phoneHrefN;
}





const eilatOne = document.querySelector('.eilatOne');
const eilatTwo = document.querySelector('.eilatTwo');
const eilatThree = document.querySelector('.eilatThree');
const eilatFour = document.querySelector('.eilatFour');
let eilatMain = document.querySelector('.itemLarge');


eilatOne.addEventListener('mouseenter', showPicOne)

function showPicOne() {
    eilatMain.src = eilatOne.src;
}

eilatTwo.addEventListener('mouseenter', showPicTwo)

function showPicTwo() {
    eilatMain.src = eilatTwo.src;
}

eilatThree.addEventListener('mouseenter', showPicThree)

function showPicThree() {
    eilatMain.src = eilatThree.src;
}

eilatFour.addEventListener('mouseenter', showPicFour)

function showPicFour() {
    eilatMain.src = eilatFour.src;
}


const hotelEilat = document.querySelector('.hotelInfoE');
const discoverE = document.querySelector('.discoverE');
discoverE.addEventListener('click', openCloseHotel);


function openCloseHotel() {
    hotelEilat.style.display = 'inline-flex';
    document.querySelector('body').classList.add('bodyChangedEilat');
    hotelEilat.classList.add('auto');

    document.addEventListener( 'click', (e) => {
           
        const discoverEilat = e.composedPath().includes(discoverE);
        const discoverEilat1 = e.composedPath().includes(eilatOne);
        const discoverEilat2 = e.composedPath().includes(eilatTwo);
        const discoverEilat3 = e.composedPath().includes(eilatThree);
        const discoverEilat4 = e.composedPath().includes(eilatFour);
    
        if (!discoverEilat && !discoverEilat1 && !discoverEilat2 && !discoverEilat3 && !discoverEilat4) {
            hotelEilat.style.display = 'none';
            document.querySelector('body').classList.remove('bodyChangedEilat');
        }
       
    }) 

}


const dSeaOne = document.querySelector('.seaOne');
const dSeaTwo = document.querySelector('.seaTwo');
const dSeaThree = document.querySelector('.seaThree');
const dSeaFour = document.querySelector('.seaFour');
let dSeaMain = document.querySelector('.itemLargeD');


dSeaOne.addEventListener('mouseenter', showPicOneD)

function showPicOneD() {
    dSeaMain.src = dSeaOne.src;
}

dSeaTwo.addEventListener('mouseenter', showPicTwoD)

function showPicTwoD() {
    dSeaMain.src = dSeaTwo.src;
}

dSeaThree.addEventListener('mouseenter', showPicThreeD)

function showPicThreeD() {
    dSeaMain.src = dSeaThree.src;
}

dSeaFour.addEventListener('mouseenter', showPicFourD)

function showPicFourD() {
    dSeaMain.src = dSeaFour.src;
}


const hotelSea = document.querySelector('.hotelInfoD');
const discoverD = document.querySelector('.discoverD');
discoverD.addEventListener('click', openCloseHotelD);


function openCloseHotelD() {
    hotelSea.style.display = 'inline-flex';
    document.querySelector('body').classList.add('bodyChangedSea');
    hotelSea.classList.add('auto');

    document.addEventListener( 'click', (e) => {
           
        const discoverSea = e.composedPath().includes(discoverD);
        const discoverSea1 = e.composedPath().includes(dSeaOne);
        const discoverSea2 = e.composedPath().includes(dSeaTwo);
        const discoverSea3 = e.composedPath().includes(dSeaThree);
        const discoverSea4 = e.composedPath().includes(dSeaFour);
    
        if (!discoverSea && !discoverSea1 && !discoverSea2 && !discoverSea3 && !discoverSea4) {
            hotelSea.style.display = 'none';
            document.querySelector('body').classList.remove('bodyChangedSea');
        }
       
    }) 
}


const jerOne = document.querySelector('.jerusalemOne');
const jerTwo = document.querySelector('.jerusalemTwo');
const jerThree = document.querySelector('.jerusalemThree');
const jerFour = document.querySelector('.jerusalemFour');
let jerMain = document.querySelector('.itemLargeJ');


jerOne.addEventListener('mouseenter', showPicOneJ)

function showPicOneJ() {
    jerMain.src = jerOne.src;
}

jerTwo.addEventListener('mouseenter', showPicTwoJ)

function showPicTwoJ() {
    jerMain.src = jerTwo.src;
}

jerThree.addEventListener('mouseenter', showPicThreeJ)

function showPicThreeJ() {
    jerMain.src = jerThree.src;
}

jerFour.addEventListener('mouseenter', showPicFourJ)

function showPicFourJ() {
    jerMain.src = jerFour.src;
}


const hotelJerusalem = document.querySelector('.hotelInfoJ');
const discoverJ = document.querySelector('.discoverJ');
discoverJ.addEventListener('click', openCloseHotelJ);


function openCloseHotelJ() {
    hotelJerusalem.style.display = 'inline-flex';
    document.querySelector('body').classList.add('bodyChangedJerusalem');
    hotelJerusalem.classList.add('auto');

    document.addEventListener( 'click', (e) => {
           
        const discoverJer = e.composedPath().includes(discoverJ);
        const discoverJer1 = e.composedPath().includes(jerOne);
        const discoverJer2 = e.composedPath().includes(jerTwo);
        const discoverJer3 = e.composedPath().includes(jerThree);
        const discoverJer4 = e.composedPath().includes(jerFour);
    
        if (!discoverJer && !discoverJer1 && !discoverJer2 && !discoverJer3 && !discoverJer4) {
            hotelJerusalem.style.display = 'none';
            document.querySelector('body').classList.remove('bodyChangedJerusalem');
        }
       
    }) 
}




const netOne = document.querySelector('.netanyaOne');
const netTwo = document.querySelector('.netanyaTwo');
const netThree = document.querySelector('.netanyaThree');
const netFour = document.querySelector('.netanyaFour');
let netMain = document.querySelector('.itemLargeN');


netOne.addEventListener('mouseenter', showPicOneN)

function showPicOneN() {
    netMain.src = netOne.src;
}

netTwo.addEventListener('mouseenter', showPicTwoN)

function showPicTwoN() {
    netMain.src = netTwo.src;
}

netThree.addEventListener('mouseenter', showPicThreeN)

function showPicThreeN() {
    netMain.src = netThree.src;
}

netFour.addEventListener('mouseenter', showPicFourN)

function showPicFourN() {
    netMain.src = netFour.src;
}


const hotelNetanya = document.querySelector('.hotelInfoN');
const discoverN = document.querySelector('.discoverN');
discoverN.addEventListener('click', openCloseHotelN);


function openCloseHotelN() {
    hotelNetanya.style.display = 'inline-flex';
    document.querySelector('body').classList.add('bodyChangedNetanya');
    hotelNetanya.classList.add('auto');

    document.addEventListener( 'click', (e) => {
           
        const discoverNetanya = e.composedPath().includes(discoverN);
        const discoverN1 = e.composedPath().includes(netOne);
        const discoverN2 = e.composedPath().includes(netTwo);
        const discoverN3 = e.composedPath().includes(netThree);
        const discoverN4 = e.composedPath().includes(netFour);
    
        if (!discoverNetanya && !discoverN1 && !discoverN2 && !discoverN3 && !discoverN4) {
            hotelNetanya.style.display = 'none';
            document.querySelector('body').classList.remove('bodyChangedNetanya');
        }
       
    }) 
}


gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.destinations',
        start: 'top bottom',
        end: '-50px top',
        scrub: 1,
    },
});

let tlOne = gsap.timeline({
    scrollTrigger: {
        trigger: '.destinations',
        start: 'bottom bottom',
        end: '-50px top',
        scrub: 1,
    },
});

let tlTwo = gsap.timeline({
    scrollTrigger: {
        trigger: '.images',
        start: 'bottom bottom',
        scrub: 1,
    },
});

let tlThree = gsap.timeline({
    scrollTrigger: {
        trigger: '.hrRoom',
        start: 'top bottom',
        end: '-50px top',
        scrub: 1,
    },
});

let tlFour = gsap.timeline({
    scrollTrigger: {
        trigger: '.sliderRooms',
        start: 'top bottom',
        scrub: 1,
    },
});

let tlFive = gsap.timeline({
    scrollTrigger: {
        trigger: '.sliderRooms',
        start: 'top bottom',
        scrub: 1,
    },
});

let tlSix = gsap.timeline({
    scrollTrigger: {
        trigger: '.images',
        start: 'top bottom',
        scrub: 1,
    },
});

let tlSeven = gsap.timeline({
    scrollTrigger: {
        trigger: '.hrRoom',
        start: '-100px bottom',
        end: '50px top',
        scrub: 1,
    },
});

let tlEight = gsap.timeline({
    scrollTrigger: {
        trigger: '.slider',
        start: 'bottom bottom',
        scrub: 1,
    },
});

let tlNine = gsap.timeline({
    scrollTrigger: {
        trigger: '.slider',
        start: 'bottom bottom',
        scrub: 1,
    },
});

let tlTen = gsap.timeline({
    scrollTrigger: {
        trigger: '.slider',
        start: 'bottom bottom',
        scrub: 1,
    },
});

let tlEleven = gsap.timeline({
    scrollTrigger: {
        trigger: '.spaImg',
        start: 'bottom bottom',
        scrub: 1,
    },
});

let tlTwelve = gsap.timeline({
    scrollTrigger: {
        trigger: '.spaImg',
        start: 'bottom bottom',
        scrub: 1,
    },
});

let tlEvent = gsap.timeline({
    scrollTrigger: {
        trigger: '.spaImg',
        start: 'bottom bottom',
        scrub: 1,
    },
});

let tlHR = gsap.timeline({
    scrollTrigger: {
        trigger: '.spaImg',
        start: 'bottom bottom',
        scrub: 1,
    },
});

let tlEventHR = gsap.timeline({
    scrollTrigger: {
        trigger: '.spaImg',
        start: 'bottom bottom',
        scrub: 1,
    },
});

let tlAboutLogo = gsap.timeline({
    scrollTrigger: {
        trigger: '.last',
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
    },
});

let tlAboutText = gsap.timeline({
    scrollTrigger: {
        trigger: '.last',
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
    },
});

tl.from(".destinations", {
    x:-500,
    opacity:0,
});

tlOne.from(".images", {
    x:500,
    opacity:0
});


tlTwo.from(".hrRoom", {
    x:500,
    opacity:0
});


tlThree.from(".sliderRooms", {
    x:-500,
    opacity:0
});

tlFour.from(".headerR", {
    y:-370,
    opacity:0
});

tlFive.from(".textSecond", {
    x:-300,
    opacity:0
});

tlSix.from(".headerSuites", {
    y:-350,
    opacity:0
});

tlSeven.from("#btnS", {
    y:500,
    opacity:0
});

tlEight.from(".spaImg", {
    x:500,
    opacity:0
});

tlNine.from(".headerSpa", {
    y:-270,
    opacity:0
});

tlTen.from(".spaHRfirst", {
    x:-500,
    opacity:0,
    rotation: 360
});

tlEleven.from(".headerEvents", {
    y:-220,
    opacity:0
});

tlTwelve.from(".last", {
    y:270,
    opacity:0
});

tlEvent.from(".first", {
    x:500,
    opacity:0
});

tlHR.from(".hrEventsSecond", {
    x:-500,
    opacity:0,
    rotation: 360
});

tlEventHR.from(".hrEvents", {
    y:-500,
    opacity:0,
    rotation: 360
});

tlAboutLogo.from(".aboutLogo", {
    x:-500,
    opacity:0
});

tlAboutText.from(".aboutPart", {
    x:500,
    opacity:0
});
