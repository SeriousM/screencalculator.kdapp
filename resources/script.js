$(document).ready(function() {
    // Sets the default values for the resolution
    $('#h_res').val(screen.width);
    $('#v_res').val(screen.height);

    // The calculator
    function calculate() {
        // Detects what you put in the fields
        var x = $('#h_res').val();
        var y = $('#v_res').val();
        var d = $('#diag').val();

        // Calculates the screen size
        var ratio = y / x;
        var devWidth = Math.sqrt(Math.pow(d,2) / (1 + Math.pow(ratio,2)));
        var devHeight = devWidth * ratio;

        // Displays the result rounded to two decimal places
        $('#width').text(devWidth.toFixed(2) + '"');
        $('#height').text(devHeight.toFixed(2) + '"');

        // Calculates the PPI
        var area = devHeight * devWidth;
        var ppi = Math.sqrt(x * y / area);

        // Displays the result rounded to two decimal places
        $('#ppi').text(ppi.toFixed(2));
        
        // Calculates the width and height of each inch of the device screen in px
        var lengthX = Math.sqrt(ppi);
        var lengthY = Math.sqrt(ppi);
        
        // Displays the result
        $('#lengthX').text(lengthX.toFixed(2) + ' px');
        $('#lengthY').text(lengthY.toFixed(2) + ' px');
        
        // Calculates the screen size in centimeters
        var centiWidth = devWidth * 2.54;
        var centiHeight = devHeight * 2.54;
        
        // Displays the result
        $('#centiWidth').text(centiWidth.toFixed(2) + ' cm');
        $('#centiHeight').text(centiHeight.toFixed(2) + ' cm');
        
        // Displays square inches in the screen (calculated earlier)
        $('#area').html(area.toFixed(2) + ' square inches');
        
        // Calculates the amount of pixels there are in the screen
        var pixels = (x * y);
        
        // Displays the result
        $('#pixels').text(pixels + ' pixels');
        
        // Calculates the screens aspect ratio (kinda buggy)
        var aspectRatio = (x / y).toFixed(2);
        var result;
        
        // Displays the result
        if (aspectRatio == 1.25) {
            result = '5:4';
        } else if (aspectRatio == 1.33) {
            result = '4:3';
        } else if (aspectRatio == 1.5) {
            result = '3:2';
        } else if (aspectRatio == 1.51) {
            result = '3:2';
        } else if (aspectRatio == 1.6) {
            result = '16:10';
        } else if (aspectRatio == 1.67) {
            result = '5:3';
        } else if (aspectRatio == 1.71) {
            result = '128:75';
        } else if (aspectRatio == 1.77) {
            result = '16:9';
        } else if (aspectRatio == 1.78) {
            result = '16:9';
        } else if (aspectRatio == 2.33) {
            result = '21:9';
        } else {
            result = aspectRatio;
        }
        $('#aspectRatio').text(result);
    }

    // Allows only numbers in the resolution input fields
    $('#h_res, #v_res').keypress(function (e) {
        if (e.which !=8 && e.which !==0 && (e.which < 48 || e.which > 57)) {return false}
    });

    // Allows only numbers and decimals in the diagonal measurement input field
    $('#diag').keypress(function (e) {
        if (e.which !=8 && e.which !==0 && (e.which < 46 || e.which > 57)) {return false}
    });

    // Runs the calculate function while typing
    $('input').on('keyup', function() {
        calculate();
    });

    // More Info section
    $('#more').click(function() {
        // Shows and hides the More Info section
        $('.more').stop().slideToggle();
        
        // Changes the text of the link
        if ($(this).text() == 'Click to see more info...')
            $(this).text('Click to see less info...');
        else
            $(this).text('Click to see more info...');
    });

    // Opens and closes the presets menu
    $('.open').click(function() {
        $('.presets').fadeIn(200);
    });
    $('.close').click(function() {
        $('.presets').fadeOut(200);
    });

    // The preset menu
    $('li.preset').on('click', function() {
        // Adds the data attribute values of the presets to the calculator
        $('#h_res').val($(this).data('h'));
        $('#v_res').val($(this).data('v'));
        $('#diag').val($(this).data('d'));

        // Sets the text of the "Currently Selected Preset" span to that of the selected preset
        $('#selected_preset span').text($(this).text());

        // Calls the calculate function
        calculate();

        // Closes the menu
        $('.presets').fadeOut(200);
    });
    
    // Runs the calculate function
    calculate();
});