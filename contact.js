let isValid = false;

$(function(){

    $('#btnsubmit').on("click", (e) => {
        console.log("submit click")

        let valid = validateForm();

        if(valid)
        {
            $('#success-message').text('Your form has been submitted.');
            $('#success').show();
            $('#error').hide();
        }
    });

    $('#btnreset').on("click", (e) => {
        resetForm();
    });

    triggerSubmitButtonValidation();

   

    $("#name").on('change', () => {
        let valid = silentValidate();
        isValid = valid;
        triggerSubmitButtonValidation();
    });

    $("#email").on('change', () => {
        let valid = silentValidate();
        isValid = valid;
        triggerSubmitButtonValidation();
    });

    $("#mobile").on('change', () => {
        let valid = silentValidate();
        isValid = valid;
        triggerSubmitButtonValidation();
    });

    $("#content").on('change', () => {
        let valid = silentValidate();
        isValid = valid;
        triggerSubmitButtonValidation();
    });


});

const triggerSubmitButtonValidation = () => {
    if(isValid === false)
    {
        $('#btnsubmit').attr("disabled", "disabled");
    }
    else{
        $('#btnsubmit').removeAttr("disabled");
    }
}

const validateForm = () => {

    let valid = true;

    $('#error-message').text('');
    $('#error').hide();

    let name = $("#name").val();
    let email = $('#email').val();
    let mobile = $('#mobile').val();
    let content = $('#content').val();

    if(name == "" || name == undefined)
    {
        $('#error-message').text('Name field is requried!');
        $('#error').fadeIn();
        valid = false;
    }

    if(email == "" || email == undefined)
    {
        $('#error-message').text('Email field is requried!');
        $('#error').fadeIn();
        valid = false;
    }

    
    if(mobile == "" || mobile == undefined)
    {
        $('#error-message').text('Mobile field is requried!');
        $('#error').fadeIn();
        valid = false;
    }

    
    if(content == "" || content == undefined)
    {
        $('#error-message').text('Content is requried!');
        $('#error').fadeIn();
        valid = false;
    }

    return valid;

}

const silentValidate = () => {

    let valid = true;


    let name = $("#name").val();
    let email = $('#email').val();
    let mobile = $('#mobile').val();
    let content = $('#content').val();

    if(name == "" || name == undefined)
    {
        valid = false;
    }

    if(email == "" || email == undefined)
    {
        valid = false;
    }

    
    if(mobile == "" || mobile == undefined)
    {
        valid = false;
    }

    
    if(content == "" || content == undefined)
    {

        valid = false;
    }

    return valid;

}

const resetForm = () => {

    $('#error-message').text('');
    $('#error').hide();

    $("#name").val("");
    $('#email').val("");
    $('#mobile').val("");
    $('#content').val("");

}