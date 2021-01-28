import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';  

$('.card__button').on('click', () => {
    console.log('in');
    $('#login-form').modal();
    return false;
});
