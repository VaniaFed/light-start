$(document).ready(function() {
    $("#order-modal-main button").click(
		function(){
			sendAjaxForm('#order-modal-main form', 'send-email.php');
			return false; 
		}
    );

    $("#order-modal .form__submit-button").click(
		function(){
			sendAjaxForm('#order-modal form', 'send-email.php');
			return false;
		}
	);
});
 
function sendAjaxForm(formSelector, url) {
    $.ajax({
        url:     url,
        type:     "POST",
        dataType: "html",
        data: $(formSelector).serialize(),
        success: function() {
            $('.success').show();
            $('.success-overlay').show();
    	},
    	error: function() {
            $('.fds').html('Ошибка. Данные не отправлены.');
    	}
 	});
}