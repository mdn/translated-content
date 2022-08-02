---
title: 基礎動畫
slug: Web/API/Canvas_API/Tutorial/Basic_animations
translation_of: Web/API/Canvas_API/Tutorial/Basic_animations
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}</div>

<p>控制{{HTMLElement("canvas")}}元素來產生互動式動畫不是一件難事，當然，如果產生的動畫越複雜越需要多費一些力氣，未來如果有機會我們將說明這一塊。</p>

<p>由於圖形一但產生後便靜止不動，所以我們必須重新繪圖好移動圖案，產生動畫效果，所以如果繪圖越複雜，繪圖運算也需要消耗越多運算資源和時間，換句話說，電腦效能的好壞將大大影響動畫順暢度，或許這也是畫布動畫最大的限制。</p>

<h2 id="Basic_animation_steps">動畫基本步驟</h2>

<p>產生一個畫面基本上需要以下步驟 :</p>

<ol>
 <li><strong>清除畫布</strong><br>
  除了不變的背景畫面，所有先前畫的圖案都要先清除，這個步驟可以透過clearRect()方法達成。</li>
 <li><strong>儲存畫布狀態</strong><br>
  若是想要每一次重新繪圖時畫布起始狀態都是原始狀態，那麼就需要先行儲存畫布原始狀態。</li>
 <li><strong>畫出畫面</strong><br>
  畫出需要畫面。</li>
 <li><strong>復原畫布狀態</strong><br>
  復原畫布狀態以備下次繪圖使用。</li>
</ol>

<h2 id="Controlling_an_animation">控制動畫</h2>

<p>一般來說當程式碼執行完畢後我們才會看到繪圖結果，所以說我們無法靠執行for迴圈來產生動畫，我們得靠每隔一段時間繪圖來產生動畫，下面將介紹兩種作法。</p>

<h3 id="排程更新">排程更新</h3>

<p>第一種作法是利用{{domxref("window.setInterval()")}}與{{domxref("window.setTimeout()")}}方法。</p>

<div class="note">
<p><strong>Note:</strong> 針對新版瀏覽器建議採用{{domxref("window.requestAnimationFrame()")}}方法。</p>
</div>

<dl>
 <dt><code>setInterval(<em>function</em>, <em>delay</em>)</code></dt>
 <dd>每隔delay毫秒，執行輸入function(函數)</dd>
 <dt><code>setTimeout(<em>function</em>, <em>delay</em>)</code></dt>
 <dd>過delay毫秒後，執行輸入function(函數)</dd>
 <dt>requestAnimationFrame(callback)</dt>
 <dd>告訴瀏覽器你希望執行動畫的時候,要求瀏覽器在重繪下一張畫面之前,呼叫callback函數來更新動畫</dd>
</dl>

<p>如果希望不要有任何的使用者互動影響，請使用setInterval()，因為它會確實地每隔一段時間就執行程式碼。如果你想製作遊戲 , 我們能夠使用keyboard 或是 mouse event來控制動畫,並使用setTimeout()函數一起。藉由設定EventListeners,我們能夠捕捉任何使用者的動作,並執行我們的動畫函數。</p>

<div class="note">
<p>在下面的範例,我們將使用<strong>window.requestAnimationFrame()</strong>方法來控制動畫,<strong>window.requestAnimationFrame()</strong>方法為動畫提供更順暢更有效率的方式來執行,當系統準備好繪製畫面時,藉由呼叫動畫andmation frame()的callback函數 。callback通常每秒鐘執行60次,當執行background tab時,執行次數會更低,想知道更多關於動畫迴圈(animation loop)的資訊,尤其是遊戲的應用,請查看我們在 <a href="/en-US/docs/Games">Game development zone</a> 的主題 <a href="/en-US/docs/Games/Anatomy">Anatomy of a video game</a> 。</p>
</div>

<h3 id="從使用者輸入操作控制動畫">從使用者輸入操作控制動畫</h3>

<p>我們也可以從使用者輸入操作控制動畫，就像是電玩遊戲一般；像是在鍵盤上設置事件處理器{{domxref("EventListener")}}捕捉使用者輸入並執行對應動畫。</p>

<p>你可以利用我們的<a href="/en-US/docs/DOM/window.setInterval#A_little_framework">次要版</a>或<a href="/en-US/docs/JavaScript/Timers/Daemons">主要版動畫框架</a>。</p>

<pre>var myAnimation = new MiniDaemon(null, animateShape, 500, Infinity);</pre>

<p>或</p>

<pre>var myAnimation = new Daemon(null, animateShape, 500, Infinity);</pre>

<p>在後面的範例我們主要將使用window.setInterval()方法控制動畫，然後於本頁底部是一些使用widnow.setTimeout()的範例連結。</p>

<h4 id="太陽系動畫">太陽系動畫</h4>

<p>本例會產生一個小型太陽系運行動畫。</p>

<pre class="brush: js">var sun = new Image();
var moon = new Image();
var earth = new Image();
function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  setInterval(draw,100);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);

  // Earth
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(earth,-12,-12);

  // Moon
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun,0,0,300,300);
}
</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="300" height="300"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">init();</pre>
</div>

<p>{{EmbedLiveSample("An_animated_solar_system", "310", "310", "https://mdn.mozillademos.org/files/202/Canvas_animation1.png")}}</p>

<h4 id="時鐘動畫">時鐘動畫</h4>

<p>本例會產生一個時鐘指向現在時間。</p>

<pre class="brush: js">function init(){
  clock();
  setInterval(clock,1000);
}

function clock(){
  var now = new Date();
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,150,150);
  ctx.translate(75,75);
  ctx.scale(0.4,0.4);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  for (var i=0;i&lt;12;i++){
    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i=0;i&lt;60;i++){
    if (i%5!=0) {
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr&gt;=12 ? hr-12 : hr;

  ctx.fillStyle = "black";

  // write Hours
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,Math.PI*2,true);
  ctx.stroke();

  ctx.restore();
}</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">init();</pre>
</div>

<p>{{EmbedLiveSample("An_animated_clock", "180", "180", "https://mdn.mozillademos.org/files/203/Canvas_animation2.png")}}</p>

<h4 id="循環景色">循環景色</h4>

<p>本例會產一個由左到右循環捲動<a href="http://commons.wikimedia.org/wiki/File:Capitan_Meadows,_Yosemite_National_Park.jpg">美國優勝美地國家公園</a>景色，你也可以自行替換其他比畫布還大的圖片。</p>

<pre class="brush: js">var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = '/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW &gt; CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
    if (imgW &gt; CanvasXSize) { clearX = imgW; } // image larger than canvas
    else { clearX = CanvasXSize; }
    if (imgH &gt; CanvasYSize) { clearY = imgH; } // image larger than canvas
    else { clearY = CanvasYSize; }
    //Get Canvas Element
    ctx = document.getElementById('canvas').getContext('2d');
    //Set Refresh Rate
    return setInterval(draw, speed);
}

function draw() {
    //Clear Canvas
    ctx.clearRect(0,0,clearX,clearY);
    //If image is &lt;= Canvas Size
    if (imgW &lt;= CanvasXSize) {
        //reset, start from beginning
        if (x &gt; (CanvasXSize)) { x = 0; }
        //draw aditional image
        if (x &gt; (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
    }
    //If image is &gt; Canvas Size
    else {
        //reset, start from beginning
        if (x &gt; (CanvasXSize)) { x = CanvasXSize-imgW; }
        //draw aditional image
        if (x &gt; (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
    }
    //draw image
    ctx.drawImage(img,x,y,imgW,imgH);
    //amount to move
    x += dx;
}
</pre>

<p>循環景色就是在下方的{{HTMLElement("canvas")}}中捲動，請注意其中的width和height和程式碼中的CanvasXZSize與CanvasYSize一樣。</p>

<pre class="brush: html">&lt;canvas id="canvas" width="800" height="200"&gt;&lt;/canvas&gt;</pre>

<p><strong>Live sample</strong></p>

<p>{{EmbedLiveSample("A_looping_panorama", "830", "230")}}</p>

<h2 id="Other_examples">其他範例</h2>

<dl>
 <dt><a href="http://www.gartic.net/">Gartic</a></dt>
 <dd>
 <p>多人繪圖遊戲</p>
 </dd>
 <dt><a href="http://www.abrahamjoffe.com.au/ben/canvascape/">Canvascape</a></dt>
 <dd>
 <p>第一人稱3D冒險遊戲</p>
 </dd>
 <dt><a href="/en-US/docs/Web/Guide/HTML/A_basic_ray-caster">A basic ray-caster</a></dt>
 <dd>透過鍵盤控制動畫範例</dd>
 <dt><a href="http://andrewwooldridge.com/canvas/canvasgame001/canvasgame002.html">canvas adventure</a></dt>
 <dd>
 <p>另一個透過鍵盤控制動畫範例</p>
 </dd>
 <dt><a href="http://www.blobsallad.se/">An interactive Blob</a></dt>
 <dd>和Blob遊戲</dd>
 <dt><a href="http://arapehlivanian.com/wp-content/uploads/2007/02/canvas.html">Flying through a starfield</a></dt>
 <dd>
 <p>飛越星河</p>
 </dd>
 <dt><a href="http://igrapher.com/">iGrapher</a></dt>
 <dd>
 <p>股票市場圖</p>
 </dd>
</dl>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/JavaScript/Timers">JavaScript timers</a></li>
 <li><a href="/en-US/docs/DOM/window.setInterval#A_little_framework"><code>setInterval</code> – A little framework</a></li>
 <li><a href="/en-US/docs/JavaScript/Timers/Daemons">JavaScript Daemons Management</a></li>
 <li><a href="/en-US/docs/DOM/HTMLCanvasElement">HTMLCanvasElement</a></li>
</ul>

<p>{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Compositing", "Web/Guide/HTML/Canvas_tutorial/Optimizing_canvas")}}</p>
