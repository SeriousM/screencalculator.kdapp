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
            <span id="more">Click to see more info...</span>
            <div class="more">
                <h4>Your screen size in centimeters is about <span id="centiWidth">___cm</span> wide by <span id="centiHeight">___cm</span> tall.</h4>
                <h4>Each inch on your screen is about <span id="lengthX">___px</span> wide by <span id="lengthY">___px</span> tall.</h4>
                <h4>Your screen has about <span id="area">___ square inches</span> (in.<sup>2</sup>).</h4>
                <h4>Your screens aspect ratio is <span id="aspectRatio">__:__</span>.</h4>
                <h4>You have a total of <span id="pixels">___ pixels</span> in your screen.</h4>
            </div>
            <p id="notice">*All measurements are taken in landscape.</p>
            <p id="selected_preset">Currently Selected Preset: <span>None</span></p>
        </div>
        <div class="presets">
            <span class="close"></span>
            <h2>Presets &bull; <span id="reset">Reset</span></h2>
            <ul>
                <li>Mobile</li>
                <li class="preset" data-h="960" data-v="640" data-d="3.5">iPhone 4</li>
                <li class="preset" data-h="1136" data-v="640" data-d="4">iPhone 5</li>
                <li class="preset" data-h="1920" data-v="1080" data-d="4.7">HTC One</li>
                <li class="preset" data-h="1280" data-v="720" data-d="4.8">Samsung Glaxay S3</li>
                <li class="preset" data-h="1920" data-v="1080" data-d="5">Samsung Glaxay S4</li>
            </ul>
            <ul>
                <li>Tablets</li>
                <li class="preset" data-h="1024" data-v="768" data-d="9.7">iPad 1 & 2</li>
                <li class="preset" data-h="2048" data-v="1536" data-d="9.7">iPad 3 & 4</li>
                <li class="preset" data-h="1024" data-v="768" data-d="7.9">iPad Mini</li>
                <li class="preset" data-h="1024" data-v="600" data-d="7">Kindle Fire</li>
                <li class="preset" data-h="1280" data-v="800" data-d="10.1">Samsung Galaxy Tab 10.1</li>
            </ul>
            <ul>
                <li>Monitors</li>
                <li class="preset" data-h="2560" data-v="1440" data-d="27">iMac</li>
                <li class="preset" data-h="2880" data-v="1800" data-d="15">MacBook Pro (Retina Display)</li>
                <li class="preset" data-h="1440" data-v="900" data-d="13">MacBook Air</li>
                <li class="preset" data-h="1920" data-v="1080" data-d="27">ASUS MX279H</li>
                <li class="preset" data-h="2560" data-v="1700" data-d="12.85">Chromebook Pixel</li>
                <li class="preset" data-h="1024" data-v="768" data-d="15">HP f1523h (Kasim's Monitor)</li>
            </ul>
        </div>
        <div class="credit">Designed and Developed by <a href="http://kasimahmic.kd.io/">Kasim Ahmic</a></div>
    </div>
    """
  viewAppended: ->
    @setTemplate do @pistachio

appView.addSubView new MainView
  cssClass: "ppiApp"