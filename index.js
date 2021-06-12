$(function() {
    $('#name').focus(() => {
        $('#nameOutput').text("Hello there! What's your name?");
    }).focusout(function() {
        let message = $(this).val().length !== 0 ? $(this).val() : 'Please enter a name.';
        $('#nameOutput').text("Hi, " + message);
    });

    $('#date').focus(function() {
        $('#ageOutput').text("Let me guess. Your age is...");
    }).focusout(function() {
        if ($(this).val().length === 0) {
            $('#ageOutput').text("Would you mind entering your birthday?");
        } else {
            const birthdate = new Date($(this).val());
            const today = new Date();
            const age = $(this).val().length !== 0 ? "Your age is " + computeAge(today, birthdate) + " years old!" : 'Would you mind entering your birthday?';
            $('#ageOutput').text(age);
        }
    });

    $('input[name="modeOptions"]').change(function() {
        if ($(this).val() === 'Light') {
            $('#background').removeClass('bg-dark');
            $('#background').removeClass('text-white');

            $('#background').addClass('bg-light');
            $('#background').addClass('text-dark');
        } else {
            $('#background').removeClass('bg-light');
            $('#background').removeClass('text-dark');

            $('#background').addClass('bg-dark');
            $('#background').addClass('text-white');
        }
    });

    $('.skills').click(function() {
        if ($(this).parent().hasClass('form-group')) {
            $('#skillsOutput').append($(this));
            $('.skillsChoices').remove(this);
        } else {
            $('.skillsChoices').append($(this));
            $('#skillsOutput').remove(this);
        }
        // $(this).remove();
    });
});


function computeAge(today, birthdate) {
    let age = today.getFullYear() - birthdate.getFullYear();
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() > birthdate.getDate())) {
        age -= 1;
    }
    return age;
}