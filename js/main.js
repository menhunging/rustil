// addEventListener("scroll", (event) => {
//   currentScroll = $(window).scrollTop();
// });

$(document).ready(function () {
  if ($(".burger").length > 0) {
    let menu = $(".header .menu");
    let burger = $(".burger");

    burger.on("click", function () {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.stop().slideDown();

        $(document).mouseup(function (e) {
          if (
            !menu.is(e.target) &&
            menu.has(e.target).length === 0 &&
            !burger.is(e.target)
          ) {
            closeMenu();
          }
        });
      }
    });

    function closeMenu() {
      burger.removeClass("opened");
      menu.stop().slideUp();
      $(document).off("mouseup");
    }
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".calc-section").length > 0) {
    $(".calc-section .input-item input").map(function () {
      $(this).inputmask({
        mask: "9{1,}|,9 (мм)",
        placeholder: "",
        showMaskOnHover: false,
        showMaskOnFocus: true,
      });
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => {
        e.preventDefault();
        $("body").addClass("modal-open");
      });
    });

    $("[data-micromodal-close]").map(function () {
      $(this).click((e) => {
        e.preventDefault();
      });
    });
  }

  if ($(".grettings-slider").length > 0) {
    const swiper = new Swiper(".grettings-slider", {
      slidesPerView: 1,
      autoHeight: true,
      watchSlidesProgress: true,
      loop: false,
      breakpoints: {
        0: {
          slidesPerView: 1,
          autoHeight: false,
        },
        768: {
          slidesPerView: 1,
          autoHeight: true,
        },
      },
    });
  }

  if ($(".about-slider").length > 0) {
    const swiper = new Swiper(".about-slider", {
      slidesPerView: 1,
      spaceBetween: 60,
      autoHeight: true,
      watchSlidesProgress: true,
      loop: false,
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
    });
  }

  if ($(".colors-slider__slider").length > 0) {
    const swiper = new Swiper(".colors-slider__slider", {
      slidesPerView: 5,
      spaceBetween: 56,
      autoHeight: true,
      watchSlidesProgress: true,
      loop: false,
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 56,
        },
      },
    });
  }

  if ($(".partners-slider").length > 0) {
    const swiper = new Swiper(".partners-slider", {
      slidesPerView: 4,
      spaceBetween: 50,
      autoHeight: true,
      watchSlidesProgress: true,
      loop: false,
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
  }

  if ($(".slider-info").length > 0) {
    const swiper = new Swiper(".slider-info", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoHeight: true,
      watchSlidesProgress: true,
      loop: false,
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  if ($(".selectric").length > 0) {
    $(".selectric").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {
          let id = $(element).attr("id");

          if (id === "type1") {
            filterType1 = $(this).val();
          }

          if (id === "type2") {
            filterType2 = $(this).val();
          }
        },
        onClose: function (element) {},
      });
    });
  }

  if ($(".text-scroll").length > 0) {
    $(".text-scroll").mCustomScrollbar({
      theme: "my-theme",
      scrollInertia: 800,
    });
  }

  if ($(".color-circle").length > 0) {
    $(".color-circle").on("click", function () {
      let color = $(this).attr("data-color");
      let name = $(this).attr("data-name");
      let code = $(this).attr("data-code");

      $(".popup-colors__color").css("background-color", color);
      $(".popup-colors .name").text(name);
      $(".popup-colors .code").text(code);
      $(".popup-colors .fullname strong").text(`${name} ${code}`);
    });
  }

  if ($(".faq-list").length > 0) {
    $(".faq-list").mCustomScrollbar({
      theme: "my-theme",
      scrollInertia: 100,
    });

    if ($(window).width() > 1200) {
      $(".faq-item").on("mouseover", function () {
        let sefl = $(this);
        openQuest(sefl);
      });

      $(".faq-item").on("mouseout", function () {
        let sefl = $(this);
        $(".faq-item").removeClass("opened");
        $(".faq-item__answer").stop().slideUp();
        closeQuest(sefl);
      });
    } else {
      $(".faq-item__quest").on("click", function () {
        let sefl = $(this).parents(".faq-item");

        if (sefl.hasClass("opened")) {
          $(".faq-item").removeClass("opened");
          $(".faq-item__answer").stop().slideUp();
          closeQuest(sefl);
        } else {
          $(".faq-item").removeClass("opened");
          $(".faq-item__answer").stop().slideUp();
          openQuest(sefl);
        }
      });
    }

    function openQuest(quest) {
      quest.addClass("opened").find(".faq-item__answer").stop().slideDown();
    }

    function closeQuest(quest) {
      quest.removeClass("opened").find(".faq-item__answer").stop().slideUp();
    }
  }

  if ($(".menu").length > 0) {
    $(".menu a").click(function (event) {
      if ($(this).attr("href").includes("#")) {
        handleClick(event, $(this));
      }
    });
  }

  if ($(".footer-menu").length > 0) {
    $(".footer-menu a").click(function (event) {
      if ($(this).attr("href").includes("#")) {
        handleClick(event, $(this));
      }
    });
  }
});

// $(window).on("resize", function () {});

function handleClick(event, self) {
  event.preventDefault();

  let href = self.attr("href");
  let offset_top = $(href).offset().top;

  $("html, body").stop().animate(
    {
      scrollTop: offset_top,
    },
    300
  );
}
