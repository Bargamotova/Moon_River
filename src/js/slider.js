import $, { event, fn } from "jquery";
import "slick-carousel";
const slider = () => {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: true,
    infinite: true,
    autoplay: true,
    swipe: true,
    touchMove: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          arrows: false,

        }
      },]
  });
}
export default slider;
