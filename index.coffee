class MainView extends JView
  pistachio:->
    """
    <div class="ppiApp">
    <span class="open"></span>
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
            <span id="width">0"</span>
            <span id="height">0"</span>
            
            <h2>Your Pixels Per Inch (PPI) is:</h2>
            <span id="ppi">0</span>
        </div>
        <a href="#" return false id="more">Click to see more (useless) info...</a>
        <div class="more">
			<h4>Your screen size in centimeters is about <span id="centiWidth">___cm</span> wide by <span id="centiHeight">___cm</span> tall.</h4>
			<h4>Each inch on your screen is about <span id="lengthX">___px</span> wide by <span id="lengthY">___px</span> tall.</h4>
			<h4>Your screen has about <span id="area">___ square inches</span> (in.<sup>2</sup>).</h4>
			<h4>Your screens aspect ratio is <span id="aspectRatio">__:__</span>.</h4>
			<h4>You have a total of <span id="pixels">___ pixels</span> in your screen.</h4>
        </div>
        <p>*All measurements are taken in landscape.</p>
    </div>
    <div class="presets">
        <span class="close"></span>
        <h2>Presets</h2>
        <ul>
            <li>Mobile</li>
            <li class="preset" data-h="960" data-v="640" data-diag="3.5">iPhone 4</li>
            <li class="preset" data-h="1136" data-v="640" data-diag="4">iPhone 5</li>
            <li class="preset" data-h="1920" data-v="1080" data-diag="4.7">HTC One</li>
            <li class="preset" data-h="1280" data-v="720" data-diag="4.8">Samsung Glaxay S3</li>
            <li class="preset" data-h="1920" data-v="1080" data-diag="5">Samsung Glaxay S4</li>
        </ul>
        <ul>
            <li>Monitors</li>
            <li class="preset" data-h="2560" data-v="1440" data-diag="27">iMac</li>
            <li class="preset" data-h="2880" data-v="1800" data-diag="15">MacBook Pro (Retina Display)</li>
            <li class="preset" data-h="1440" data-v="900" data-diag="13">MacBook Air</li>
            <li class="preset" data-h="1024" data-v="768" data-diag="15">Kasim's Monitor</li>
            <li class="preset" data-h="1920" data-v="1080" data-diag="27">ASUS MX279H</li>
        </ul>
    </div>
    <div class="credit">Designed and Developed by <a href="http://kasimahmic.koding.com/">Kasim Ahmic</a></div>
    </div>
    """
  viewAppended: ->
    @setTemplate do @pistachio

appView.addSubView new MainView
  cssClass: "ppiapp"