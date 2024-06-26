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

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

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
        //        e.preventDefault();
        if ($(this).attr("data-modal")) {
          setTimeout(() => {
            $("body").addClass("modal-open");
          }, 0.1);
        }
      });
    });
  }

  if ($(".grettings-slider").length > 0) {
    const swiper = new Swiper(".grettings-slider", {
      slidesPerView: 1,
      autoHeight: true,
      watchSlidesProgress: true,
      loop: false,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    });

    swiper.on("slideChange", function (e) {
      // console.log("swiper.activeIndex", swiper.realIndex);
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

    swiper.on("slideChange", function (e) {
      // console.log("swiper.activeIndex", swiper.realIndex);
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
});

$(window).on("resize", function () {});
