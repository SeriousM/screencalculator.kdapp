{nickname} = KD.whoami().profile

class MainView extends JView
  pistachio:->
    """
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script><script type="text/javascript">$(document).ready(function(){function e(){var e=$("#h_res").val();var t=$("#v_res").val();var n=$("#diag").val();var r=t/e;var i=Math.sqrt(Math.pow(n,2)/(1+Math.pow(r,2)));var s=i*r;$("#height").text(i.toFixed(2)+'"');$("#width").text(s.toFixed(2)+'"');var o=i*s;var u=e*t/o;var a=Math.sqrt(u);$("#ppi").text(a.toFixed(2))}$("#h_res").val(screen.width);$("#v_res").val(screen.height);$("input").on("keyup",function(){e()});$(".open").on("click",function(){$(".presets").animate({right:0})});$(".presets li").on("click",function(){var t=$(this).data("h");var n=$(this).data("v");var r=$(this).data("diag");$(".presets").animate({right:-190});$("#h_res").val(t);$("#v_res").val(n);$("#diag").val(r);e()})})</script>
    <div class="holder">
        <div class="calculator">
            <label for="h_res">Horizontal Resolution (px)</label>
            <label for="v_res">Vertical Resolution (px)</label>
            <label for="diag">Diagonal Measurement (in)</label>
            <br>
            <input type="text" id="h_res" placeholder="0"></input>
            <input type="text" id="v_res" placeholder="0"></input>
            <input type="text" id="diag" placeholder="0"></input>
        </div>
        <div class="results">
            <h2>Your screen size is:</h2>
            <span id="height">0"</span>
            <span id="width">0"</span>
            
            <h2>Your Pixels Per Inch (PPI) is:</h2>
            <span id="ppi">0</span>
        </div>
    </div>
    <div class="presets">
        <span class="open"></span>
        
        <h2>Presets</h2>
        <ul>
            <li data-h="960" data-v="640" data-diag="3.5">iPhone 4</li>
            <li data-h="1136" data-v="640" data-diag="4">iPhone 5</li>
            <li data-h="1920" data-v="1080" data-diag="4.7">HTC One</li>
            <li data-h="1920" data-v="1080" data-diag="5">Samsung Glaxay S4</li>
            <li data-h="1024" data-v="768" data-diag="15">Kasim's Monitor</li>
            <li data-h="1920" data-v="1080" data-diag="27">ASUS MX279H</li>
        </ul>
    </div>
    <div class="credit">Designed and Developed by <a href="http://kasimahmic.koding.com/">Kasim Ahmic</a></div>
    """
  viewAppended: ->
    @setTemplate do @pistachio

appView.addSubView new MainView
  cssClass: "my-koding-app"