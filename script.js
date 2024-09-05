document.addEventListener("DOMContentLoaded", function () {
    var splide1 = new Splide(".splide1", {
      perPage: 1,
      gap: 30,
      rewind: true,
      arrows: true,
      pagination: false,
      breakpoints: {
        900: {
          perPage: 1,
        },
      },
    });
    splide1.mount();

    var splide2 = new Splide(".splide2", {
      perPage: 1,
      gap: 30,
      rewind: true,
      arrows: true,
      pagination: false,

      breakpoints: {
        900: {
          perPage: 1,
        },
      },
    });
    splide2.mount();

    var splide3 = new Splide(".splide3", {
      perPage: 1,
      gap: 30,
      rewind: true,
      arrows: true,
      pagination: false,

      breakpoints: {
        900: {
          perPage: 1,
        },
      },
    });
    splide3.mount();

    var splide6 = new Splide(".splide6", {
      perPage: 1,
      gap: 30,
      rewind: true,
      arrows: false,
      pagination: false,
      breakpoints: {
        900: {
          perPage: 1,
        },
      },
    });
    splide6.mount();
  });

  document.addEventListener('DOMContentLoaded', function () {
    const mainCarousel = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        heightRatio: 0.5,
        pagination: false,
        arrows: true,
    }).mount();

    const thumbnailCarousel = new Splide('#thumbnail-carousel', {
        fixedWidth: 100,
        fixedHeight: 64,
        isNavigation: true,
        gap: 10,
        focus: 'center',
        breakpoints: {
            600: {
                fixedWidth: 66,
                fixedHeight: 40,
            },
        },
    }).mount();

    mainCarousel.sync(thumbnailCarousel);

    const totalSlides = mainCarousel.Components.Slides.length;
    const counterElement = document.getElementById('slide-counter');

    function updateCounter(index) {
        counterElement.innerText = `${index + 1} / ${totalSlides}`;
    }

    updateCounter(mainCarousel.index);

    mainCarousel.on('move', updateCounter);
});
