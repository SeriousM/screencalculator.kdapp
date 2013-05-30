// Compiled by Koding Servers at Thu May 30 2013 12:15:12 GMT-0700 (PDT) in server time

(function() {

/* KDAPP STARTS */

/* BLOCK STARTS /Source: /Users/kasimahmic/Applications/screencalculator.kdapp/index.coffee */

var MainView, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

MainView = (function(_super) {
  __extends(MainView, _super);

  function MainView() {
    _ref = MainView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  MainView.prototype.pistachio = function() {
    return "    <div class=\"ppiApp\">\n    <span class=\"open\"></span>\n    <div class=\"holder\">\n        <div class=\"calculator\">\n            <label for=\"h_res\">Horizontal Resolution (px)</label>\n            <label for=\"v_res\">Vertical Resolution (px)</label>\n            <label for=\"diag\">Diagonal Measurement (in)</label>\n            <br>\n            <input type=\"text\" id=\"h_res\" placeholder=\"0\"></input>\n            <input type=\"text\" id=\"v_res\" placeholder=\"0\"></input>\n            <input type=\"text\" id=\"diag\" placeholder=\"0\"></input>\n        </div>\n        <div class=\"results\">\n            <h2>Your screen size is:</h2>\n            <span id=\"width\">0\"</span>\n            <span id=\"height\">0\"</span>\n            \n            <h2>Your Pixels Per Inch (PPI) is:</h2>\n            <span id=\"ppi\">0</span>\n        </div>\n        <a href=\"#\" return false id=\"more\">Click to see more (useless) info...</a>\n        <div class=\"more\">\n<h4>Your screen size in centimeters is about <span id=\"centiWidth\">___cm</span> wide by <span id=\"centiHeight\">___cm</span> tall.</h4>\n<h4>Each inch on your screen is about <span id=\"lengthX\">___px</span> wide by <span id=\"lengthY\">___px</span> tall.</h4>\n<h4>Your screen has about <span id=\"area\">___ square inches</span> (in.<sup>2</sup>).</h4>\n<h4>Your screens aspect ratio is <span id=\"aspectRatio\">__:__</span>.</h4>\n<h4>You have a total of <span id=\"pixels\">___ pixels</span> in your screen.</h4>\n        </div>\n        <p>*All measurements are taken in landscape.</p>\n    </div>\n    <div class=\"presets\">\n        <span class=\"close\"></span>\n        <h2>Presets</h2>\n        <ul>\n            <li>Mobile</li>\n            <li class=\"preset\" data-h=\"960\" data-v=\"640\" data-diag=\"3.5\">iPhone 4</li>\n            <li class=\"preset\" data-h=\"1136\" data-v=\"640\" data-diag=\"4\">iPhone 5</li>\n            <li class=\"preset\" data-h=\"1920\" data-v=\"1080\" data-diag=\"4.7\">HTC One</li>\n            <li class=\"preset\" data-h=\"1280\" data-v=\"720\" data-diag=\"4.8\">Samsung Glaxay S3</li>\n            <li class=\"preset\" data-h=\"1920\" data-v=\"1080\" data-diag=\"5\">Samsung Glaxay S4</li>\n        </ul>\n        <ul>\n        	<li>Tablets</li>\n        	<li class=\"preset\" data-h=\"1024\" data-v=\"768\" data-diag=\"9.7\">iPad 1 & 2</li>\n        	<li class=\"preset\" data-h=\"2048\" data-v=\"1536\" data-diag=\"9.7\">iPad 3 & 4</li>\n        	<li class=\"preset\" data-h=\"1024\" data-v=\"768\" data-diag=\"7.9\">iPad Mini</li>\n        	<li class=\"preset\" data-h=\"1024\" data-v=\"600\" data-diag=\"7\">Kindle Fire</li>\n        	<li class=\"preset\" data-h=\"1280\" data-v=\"800\" data-diag=\"10.1\">Samsung Galaxy Tab 10.1</li>\n        </ul>\n        <ul>\n            <li>Monitors</li>\n            <li class=\"preset\" data-h=\"2560\" data-v=\"1440\" data-diag=\"27\">iMac</li>\n            <li class=\"preset\" data-h=\"2880\" data-v=\"1800\" data-diag=\"15\">MacBook Pro (Retina Display)</li>\n            <li class=\"preset\" data-h=\"1440\" data-v=\"900\" data-diag=\"13\">MacBook Air</li>\n            <li class=\"preset\" data-h=\"1920\" data-v=\"1080\" data-diag=\"27\">ASUS MX279H</li>\n            <li class=\"preset\" data-h=\"2560\" data-v=\"1700\" data-diag=\"12.9\">Chromebook Pixel</li>\n            <li class=\"preset\" data-h=\"1024\" data-v=\"768\" data-diag=\"15\">HP f1523h (Kasim's Monitor)</li>\n        </ul>\n    </div>\n    <div class=\"credit\">Designed and Developed by <a href=\"http://kasimahmic.koding.com/\">Kasim Ahmic</a></div>\n    </div>";
  };

  MainView.prototype.viewAppended = function() {
    return this.setTemplate(this.pistachio());
  };

  return MainView;

})(JView);

appView.addSubView(new MainView({
  cssClass: "ppiapp"
}));


/* BLOCK ENDS */



/* BLOCK STARTS /Source: /Users/kasimahmic/Applications/screencalculator.kdapp/resources/script.js */

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
        var devWidth = Math.sqrt( Math.pow(d,2) / ( 1 + Math.pow(ratio,2)) );
        var devHeight = devWidth * ratio;

        // Displays the result rounded to two decimal places
        $('#height').text(devHeight.toFixed(2) + '"');
        $('#width').text(devWidth.toFixed(2) + '"');

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
        
        // Displays the result
		if (aspectRatio == 1.25) {
			$('#aspectRatio').text('5:4');
		} else if (aspectRatio == 1.33) {
			$('#aspectRatio').text('4:3');
		} else if (aspectRatio == 1.5) {
			$('#aspectRatio').text('3:2');
		} else if (aspectRatio == 1.6) {
			$('#aspectRatio').text('16:10');
		} else if (aspectRatio == 1.67) {
			$('#aspectRatio').text('5:3');
		} else if (aspectRatio == 1.71) {
			$('#aspectRatio').text('128:75');
		} else if (aspectRatio == 1.77) {
			$('#aspectRatio').text('16:9');
		} else if (aspectRatio == 1.78) {
			$('#aspectRatio').text('16:9');
		} else if (aspectRatio == 2.33) {
			$('#aspectRatio').text('21:9');
		} else {
			$('#aspectRatio').text(aspectRatio);
        }
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
		if ($(this).text() == "Click to see more (useless) info...")
			$(this).text("Click to see less (useless) info...");
		else
			$(this).text("Click to see more (useless) info...");
	});
	
	$('.open').click(function() {
		$('.presets').fadeIn(200);
	});
	$('.close').click(function() {
		$('.presets').fadeOut(200);
	});

    // The preset menu
    $('li.preset').on('click', function() {

        // Adds the data attribute values of the presets to the calculator
        $('#h_res').val( $(this).data('h') );
        $('#v_res').val( $(this).data('v') );
        $('#diag').val( $(this).data('diag') );

        // Calls the calculate() function
        calculate();

        // Closes the menu
		$('.presets').fadeOut();
		
    });
    
    calculate();
});

/* BLOCK ENDS */

/* KDAPP ENDS */

}).call();