$('button').click(function() {
    var skillSet = $('#input').val();
    $('#skills').append(`<li>${skillSet}</li>`);
})