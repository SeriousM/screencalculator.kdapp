{nickname} = KD.whoami().profile

class MainView extends JView
  pistachio:->
    """
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script><script type="text/javascript">$(document).ready(function(){$("#calculate").on("click",function(){var e=$("#h_res").val();var t=$("#v_res").val();var n=$("#diag").val();var r=t/e;var i=Math.sqrt(Math.pow(n,2)/(1+Math.pow(r,2)));var s=i*r;$("#height").text(i.toFixed(2)+'"');$("#width").text(s.toFixed(2)+'"');var o=i*s;var u=e*t/o;var a=Math.sqrt(u);$("#ppi").text(a.toFixed(2))})})</script>
    <div class="holder">
        <div class="calculator">
            <label for="h_res">Horizontal Resolution (px)</label>
            <label for="v_res">Vertical Resolution (px)</label>
            <label for="diag">Diagonal Measurement (in)</label>
            <br>
            <input type="text" id="h_res" value="0"></input>
            <input type="text" id="v_res" value="0"></input>
            <input type="text" id="diag" value="0"></input>
            
            <button id="calculate">Calculate</button>
        </div>
        <div class="results">
            <h2>Your screen size is:</h2>
            <span id="height">0"</span>
            <span id="width">0"</span>
            
            <h2>Your Pixels Per Inch (PPI) is:</h2>
            <span id="ppi">0</span>
        </div>
    </div>
    <div class="credit">Designed and Developed by <a href="http://kasimahmic.koding.com/">Kasim Ahmic</a></div>
    """
  viewAppended: ->
    @setTemplate do @pistachio

appView.addSubView new MainView
  cssClass: "my-koding-app"