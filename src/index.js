import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';  

$('.main-block button').on('click', function() {
    $('#order-modal-main').modal();

    const $button = $(this);

    const orderName = $button.data('order-name');
    const $modalTitle = $('.order-modal__title');
    $modalTitle.text(orderName);

    const $buttonWrapper = $('.form__submit-button');
    $buttonWrapper.addClass('purple'); 

    return false;
});

$('.card-list .card__button').on('click', function() {
    $('#order-modal').modal();

    const modalForm = $('#order-modal form');

    $('[name="product"]', modalForm).remove();

    const $button = $(this);

    const orderName = $button.data('order-name');
    const $modalTitle = $('.order-modal__title');
    $modalTitle.text(orderName);

    const $buttonWrapper = $('.form__submit-button');
    switch (orderName) {
        case 'Студент':
            $buttonWrapper.removeClass('purple');
            $buttonWrapper.removeClass('mint');
            $buttonWrapper.addClass('orange'); 
            modalForm.append('<input type="hidden" name="product" value="student">');
            break;
    
        case 'Профессионал':
            $buttonWrapper.removeClass('orange');
            $buttonWrapper.removeClass('mint');
            $buttonWrapper.addClass('purple'); 
            modalForm.append('<input type="hidden" name="product" value="professional">');
            break;

        case 'Учёный':
            $buttonWrapper.removeClass('orange');
            $buttonWrapper.removeClass('purple');
            $buttonWrapper.addClass('mint'); 
            modalForm.append('<input type="hidden" name="product" value="scientist">');
            break;

        default:
            break;
    }

    return false;
});

$('.success .card__close').on('click', () => {
    $('.success').hide();
    $('.success-overlay').hide();
});

$(document).on('click', (function (e){
    if ($(".success .card").is(':visible')) {
        var div = $(".success .card");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.success').hide();
            $('.success-overlay').hide();
        }
    }
}));

const hideNavigation = () => {
    $('#burger-input').prop('checked', false);
}

$('.header__nav-link').on('click', hideNavigation);


$(window).on('click', hideNavigation);

$('.header-nav').on('click', function(event) {
    event.stopPropagation();
});