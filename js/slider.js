$(document).ready( function () {
  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const container = $(".slider__container");
  const body = $(".slider__items");
  const item = $(".slider__text");
  const buttonLeft = $(".slider__button1");
  const buttonRight = $(".slider__button2");
  const buttonLeftImg = $(".slider__button1 img");
  const buttonRightImg = $(".slider__button2 img");
  const itemCount = item.length;
  const itemWidth = container.width() / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  const formbut = $("#butt");
  const form  = $(".form__container");
  
  formbut.click(function () {
    form.toggleClass("form__containersl");
  });
  
  item.each(function (index, item) {
    $(item).css({
      minWidth: itemWidth,
    });
  });
  
  
  
  buttonLeft.click(function () {
    const itemLeft = Math.abs(position) / itemWidth
    
    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition();
    checkBtns();
  });
  buttonRight.click(function () {
    const itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    
    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    
    setPosition();
    checkBtns();
  });
  
  const setPosition = () =>  {
    body.css({
      transform: `translateX(${position}px)`
    });
    
  }
  const setLeftBtnStyle = () => {
    if (position === 0) {
      buttonLeft.css({
        'opacity': '100%'
        
      });
      buttonLeftImg.css({
        'opacity': '65%'
      });
    }
    else if (position !== 0) {
      buttonLeft.css({
        'opacity': '70%'
      });
      buttonLeftImg.css({
        'opacity': '100%'
      });
    }
  }
  
  const setRightBtnStyle = () => {
    if (position <= -(itemCount - slidesToShow) * itemWidth) {
      buttonRight.css({
        'opacity': '100%'
      });
      
      buttonRightImg.css({
        'opacity': '65%'
      });
      
    }
    else if (position > -(itemCount - slidesToShow) * itemWidth) {
      buttonRight.css({
        'opacity': '70%'
      });
      
      buttonRightImg.css({
        'opacity': '100%'
      });
    }
  }
    
  
  
  const checkBtns = () => {
    buttonLeft.prop("disabled", position === 0);
    buttonRight.prop("disabled", 
      position <= -(itemCount - slidesToShow) * itemWidth
    );
    setLeftBtnStyle();
    setRightBtnStyle();
  }
  checkBtns();
  
  const burger = $(".header__burger");
  const menu = $(".header__menu");
  
  $(burger).click(function(event) {
    $( menu).toggleClass("active");
    $(burger).toggleClass("active");
    $("body").toggleClass("lock");
  });
});