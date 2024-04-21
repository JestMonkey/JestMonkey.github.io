const galleryImgs = document.querySelector(".ikony").querySelectorAll(".icon");
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox_img');
    const lightboxCloseBtn = document.querySelector('.lightbox_close');
    const body = document.body;

    galleryImgs.forEach((currImg) => {
        currImg.addEventListener('click', (e) => {
            let imgSrc = e.target.getAttribute('info');
            console.log(imgSrc)
            lightboxImg.setAttribute('src', imgSrc);
            lightbox.classList.add('open');
            body.classList.add('overflow_hide');
        });
    });


    const lightboxClose = () => {
        lightbox.classList.remove('open');
        body.classList.remove('overflow_hide');
    };

    lightboxCloseBtn.addEventListener('click', lightboxClose);
    window.addEventListener('click', (e) => {
        if (e.target.className === 'lightbox_wrapper') {
            lightboxClose();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightboxClose();
        }
    });

// var img1 = document.getElementById("img1") // Zdjęcie do kliknjęcia

// var tlo1 = document.getElementById("tlo1") // No pewnie to jest tło

// var close1 = document.getElementsByClassName("close")[0] // ten X, bierze sie go klasą więc trzeba użyć indeksowania

// img1.onclick = function() {
//     tlo1.style.display = "block";
// } // Że jak kliknie obraz to się wyświetli tekst + obraz

// close1.onclick = function() {
//     tlo1.style.display = "none";
// } // Że jak kliknie X to tekst + obraz znikną

