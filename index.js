// Compiled by Koding Servers at Fri Apr 26 2013 17:14:46 GMT-0700 (PDT) in server time

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
    return "<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script><script type=\"text/javascript\">$(document).ready(function(){$(\"#calculate\").on(\"click\",function(){var e=$(\"#h_res\").val();var t=$(\"#v_res\").val();var n=$(\"#diag\").val();var r=t/e;var i=Math.sqrt(Math.pow(n,2)/(1+Math.pow(r,2)));var s=i*r;$(\"#height\").text(i.toFixed(2)+'\"');$(\"#width\").text(s.toFixed(2)+'\"');var o=i*s;var u=e*t/o;var a=Math.sqrt(u);$(\"#ppi\").text(a.toFixed(2))})})</script>\n<div class=\"holder\">\n    <div class=\"calculator\">\n        <label for=\"h_res\">Horizontal Resolution (px)</label>\n        <label for=\"v_res\">Vertical Resolution (px)</label>\n        <label for=\"diag\">Diagonal Measurement (in)</label>\n        <br>\n        <input type=\"text\" id=\"h_res\" value=\"0\"></input>\n        <input type=\"text\" id=\"v_res\" value=\"0\"></input>\n        <input type=\"text\" id=\"diag\" value=\"0\"></input>\n        \n        <button id=\"calculate\">Calculate</button>\n    </div>\n    <div class=\"results\">\n        <h2>Your screen size is:</h2>\n        <span id=\"height\">0\"</span>\n        <span id=\"width\">0\"</span>\n        \n        <h2>Your Pixels Per Inch (PPI) is:</h2>\n        <span id=\"ppi\">0</span>\n    </div>\n</div>\n<div class=\"credit\">Designed and Developed by <a href=\"http://kasimahmic.koding.com/\">Kasim Ahmic</a></div>";
  };

  MainView.prototype.viewAppended = function() {
    return this.setTemplate(this.pistachio());
  };

  return MainView;

})(JView);

appView.addSubView(new MainView({
  cssClass: "my-koding-app"
}));


/* BLOCK ENDS */

/* KDAPP ENDS */

}).call();