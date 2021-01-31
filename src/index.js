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

$('.card__button').on('click', function() {
    $('#order-modal').modal();

    const $button = $(this);

    const orderName = $button.data('order-name');
    const $modalTitle = $('.order-modal__title');
    $modalTitle.text(orderName);

    const $buttonWrapper = $('.form__submit-button');
    switch (orderName) {
        case 'Студент':
            $buttonWrapper.addClass('orange'); 
            break;
    
        case 'Профессионал':
            $buttonWrapper.addClass('purple'); 
            break;

        case 'Учёный':
            $buttonWrapper.addClass('mint'); 
            break;

        default:
            break;
    }

    return false;
});
