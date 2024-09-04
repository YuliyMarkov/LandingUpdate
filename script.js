document.addEventListener("DOMContentLoaded", function () {
    var splide1 = new Splide(".splide1", {
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
    splide1.mount();

    var splide2 = new Splide(".splide2", {
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
    splide2.mount();
    var splide3 = new Splide(".splide3", {
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
    splide3.mount();
    splide2.mount();
    var splide4 = new Splide(".splide4", {
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
    splide4.mount();
  });
  
  

  