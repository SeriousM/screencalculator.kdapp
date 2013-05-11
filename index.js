// Compiled by Koding Servers at Sat May 11 2013 05:33:20 GMT-0700 (PDT) in server time

(function() {

/* KDAPP STARTS */

/* BLOCK STARTS /Source: /Users/kasimahmic/Applications/screencalculator.kdapp/index.coffee */

var MainView, nickname, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nickname = KD.whoami().profile.nickname;

MainView = (function(_super) {
  __extends(MainView, _super);

  function MainView() {
    _ref = MainView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  MainView.prototype.pistachio = function() {
    return "<div class=\"ppiApp\">\n<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"><script type=\"text/javascript\" src=\"./resources/prefixfree.min.js\"></script><script type=\"text/javascript\">$(document).ready(function(){function e(){var e=$(\"#h_res\").val();var t=$(\"#v_res\").val();var n=$(\"#diag\").val();var r=t/e;var i=Math.sqrt(Math.pow(n,2)/(1+Math.pow(r,2)));var s=i*r;$(\"#height\").text(i.toFixed(2)+'\"');$(\"#width\").text(s.toFixed(2)+'\"');var o=i*s;var u=Math.sqrt(e*t/o);$(\"#ppi\").text(u.toFixed(2))}$(\"#h_res\").val(screen.width);$(\"#v_res\").val(screen.height);$(\"#h_res, #v_res\").keypress(function(e){if(e.which!=8&&e.which!=0&&(e.which<48||e.which>57)){return false}});$(\"#diag\").keypress(function(e){if(e.which!=8&&e.which!=0&&(e.which<46||e.which>57)){return false}});$(\"input\").on(\"keyup\",function(){e()});$(\".open\").click(function(){$(\".presets\").animate({right:0})});$(\".close\").click(function(){$(\".presets\").animate({right:-240})});$(\"li.preset\").on(\"click\",function(){$(\"#h_res\").val($(this).data(\"h\"));$(\"#v_res\").val($(this).data(\"v\"));$(\"#diag\").val($(this).data(\"diag\"));e();$(\".presets\").animate({right:-240})})})</script>\n<div class=\"holder\">\n    <div class=\"calculator\">\n        <label for=\"h_res\">Horizontal Resolution (px)</label>\n        <label for=\"v_res\">Vertical Resolution (px)</label>\n        <label for=\"diag\">Diagonal Measurement (in)</label>\n        <br>\n        <input type=\"text\" id=\"h_res\" placeholder=\"0\"></input>\n        <input type=\"text\" id=\"v_res\" placeholder=\"0\"></input>\n        <input type=\"text\" id=\"diag\" placeholder=\"0\"></input>\n    </div>\n    <div class=\"results\">\n        <h2>Your screen size is:</h2>\n        <span id=\"height\">0\"</span>\n        <span id=\"width\">0\"</span>\n        \n        <h2>Your Pixels Per Inch (PPI) is:</h2>\n        <span id=\"ppi\">0</span>\n    </div>\n    <p>*All measurements are taken in landscape.</p>\n</div>\n<div class=\"presets\">\n    <span class=\"open\"></span>\n    <span class=\"close\"></span>\n    \n    <h2>Presets</h2>\n    <ul>\n        <li>Mobile</li>\n        <li class=\"preset\" data-h=\"960\" data-v=\"640\" data-diag=\"3.5\">iPhone 4</li>\n        <li class=\"preset\" data-h=\"1136\" data-v=\"640\" data-diag=\"4\">iPhone 5</li>\n        <li class=\"preset\" data-h=\"1920\" data-v=\"1080\" data-diag=\"4.7\">HTC One</li>\n        <li class=\"preset\" data-h=\"1280\" data-v=\"720\" data-diag=\"4.8\">Samsung Glaxay S3</li>\n        <li class=\"preset\" data-h=\"1920\" data-v=\"1080\" data-diag=\"5\">Samsung Glaxay S4</li>\n    </ul>\n    <ul>\n        <li>Monitors</li>\n        <li class=\"preset\" data-h=\"2560\" data-v=\"1440\" data-diag=\"27\">iMac</li>\n        <li class=\"preset\" data-h=\"2880\" data-v=\"1800\" data-diag=\"15\">MacBook Pro (Retina Display)</li>\n        <li class=\"preset\" data-h=\"1440\" data-v=\"900\" data-diag=\"13\">MacBook Air</li>\n        <li class=\"preset\" data-h=\"1024\" data-v=\"768\" data-diag=\"15\">Kasim's Monitor</li>\n        <li class=\"preset\" data-h=\"1920\" data-v=\"1080\" data-diag=\"27\">ASUS MX279H</li>\n    </ul>\n</div>\n<div class=\"credit\">Designed and Developed by <a href=\"http://kasimahmic.koding.com/\">Kasim Ahmic</a></div>\n</div>";
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

/* KDAPP ENDS */

}).call();