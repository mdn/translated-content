---
title: Canvas とピクセル操作
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
tags:
  - Canvas
  - Graphics
  - Intermediate
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
original_slug: Web/Guide/HTML/Canvas_tutorial/Pixel_manipulation_with_canvas
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility")}}</div>

<div class="summary">
<p>これまで、canvas の実際のピクセルは見てきませんでした。<code>ImageData</code> オブジェクトを使用して、ピクセルデータを操作するためにデータ配列へ直接読み取りや書き込みを行うことが可能です。また、画像のスムージング (アンチエイリアシング) の制御方法や canvas の画像を保存する方法も見ていきます。</p>
</div>

<h2 id="The_ImageData_object" name="The_ImageData_object"><code>ImageData</code> オブジェクト</h2>

<p>{{domxref("ImageData")}} オブジェクトは、canvas オブジェクトの領域にあるピクセルデータを表します。これは以下の読み取り専用プロパティを持ちます:</p>

<dl>
 <dt><code>width</code></dt>
 <dd>画像の幅をピクセル数で表します。</dd>
 <dt><code>height</code></dt>
 <dd>画像の高さをピクセル数で表します。</dd>
 <dt><code>data</code></dt>
 <dd><code>0</code> から <code>255</code> の間の (両端の値を含む) 整数データを RGBA の順で収めた一次元配列を表す {{jsxref("Uint8ClampedArray")}} です。</dd>
</dl>

<p><code>data</code> プロパティは、生のピクセルデータを参照するためにアクセス可能な {{jsxref("Uint8ClampedArray")}} を返します。それぞれのピクセルは 4 つの 1 バイト値 (赤、緑、青、アルファの順、すなわち "RGBA" 形式) で表します。また、それぞれの色成分は 0 から 255 の間の整数で表します。さらに、それぞれの成分は配列内で連続した添字が割り当てられており、左上のピクセルの赤色成分が配列の添え字 0 になります。配列の中でピクセルは左から右へ進み、さらに下へと進んでいきます。</p>

<p>{{jsxref("Uint8ClampedArray")}} は <code>height</code> × <code>width</code> × 4 バイトのデータがあり、添字の範囲は 0 から (<code>height</code>×<code>width</code>×4)-1 になります。</p>

<p>例えば画像の 50 行目の 200 列目にあるピクセルから青色成分の値を読み取るには、以下のようにします:</p>

<pre class="brush: js">blueComponent = imageData.data[((50*(imageData.width*4)) + (200*4)) + 2];</pre>

<p><code>Uint8ClampedArray.length</code> 属性を読み取ると、ピクセル配列のサイズをバイト数で知ることができます:</p>

<pre class="brush: js">var numBytes = imageData.data.length;
</pre>

<h2 id="Creating_an_ImageData_object" name="Creating_an_ImageData_object"><code>ImageData</code> オブジェクトを作成する</h2>

<p>新たに空の <code>ImageData</code> オブジェクトを作成するには、{{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} メソッドを使用します。<code>createImageData()</code> メソッドは 2 種類の形式があります:</p>

<pre class="brush: js">var myImageData = ctx.createImageData(width, height);</pre>

<p>これは、特定の寸法の新たな <code>ImageData</code> オブジェクトを作成します。すべてのピクセルは透明な黒色に設定されます。</p>

<p><code>anotherImageData</code> で指定したオブジェクトと同じ寸法の、新たな <code>ImageData</code> オブジェクトを作成することもできます。新しいオブジェクトのピクセルは、すべて透明な黒色に設定されます。<strong>画像データはコピーされません!</strong></p>

<pre class="brush: js">var myImageData = ctx.createImageData(anotherImageData);</pre>

<h2 id="Getting_the_pixel_data_for_a_context" name="Getting_the_pixel_data_for_a_context">コンテキストのピクセルデータを取得する</h2>

<p>canvas コンテキストのピクセルデータの複製を持つ <code>ImageData</code> オブジェクトを取得するには、<code>getImageData()</code> メソッドを使用します:</p>

<pre class="brush: js">var myImageData = ctx.getImageData(left, top, width, height);</pre>

<p>このメソッドは (<code>left</code>,<code>top</code>)、(<code>left+width</code>, <code>top</code>)、(<code>left</code>, <code>top+height</code>)、(<code>left+width</code>, <code>top+height</code>) の点で四隅を表した canvas の領域のピクセルデータを表す <code>ImageData</code> オブジェクトを返します。点の座標は、canvas の座標空間の単位で指定します。</p>

<div class="note">
<p><strong>注記</strong>: 返される <code>ImageData</code> オブジェクトで、canvas の外部にあるピクセルはすべて透明な黒色になります。</p>
</div>

<p>このメソッドは、<a href="/ja/docs/Web/API/Canvas_API/Manipulating_video_using_canvas">Manipulating video using canvas</a> の記事でも説明しています。</p>

<h3 id="A_color_picker" name="A_color_picker">カラーピッカー</h3>

<p>この例では、マウスカーソルの下にある色を表示するために <a href="/ja/docs/Web/API/CanvasRenderingContext2D/getImageData">getImageData()</a> メソッドを使用しています。ここでは現在のマウスカーソルの位置を <code>layerX</code> と <code>layerY</code> で求めて、<a href="/ja/docs/Web/API/CanvasRenderingContext2D/getImageData">getImageData()</a> が提供するピクセル配列で該当位置のピクセルデータを探します。最後に、色を表示するための <code>&lt;div&gt;</code> で背景色とテキストを設定するために、配列データを使用します。</p>

<div class="hidden">
<pre class="brush: html;">&lt;canvas id="canvas" width="300" height="227" style="float:left"&gt;&lt;/canvas&gt;
&lt;div id="color" style="width:200px;height:50px;float:left"&gt;&lt;/div&gt;
</pre>
</div>

<pre class="brush: js;">var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};
var color = document.getElementById('color');
function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;
  var rgba = 'rgba(' + data[0] + ',' + data[1] +
             ',' + data[2] + ',' + (data[3] / 255) + ')';
  color.style.background =  rgba;
  color.textContent = rgba;
}
canvas.addEventListener('mousemove', pick);
</pre>

<p>{{EmbedLiveSample('A_color_picker', 610, 240)}}</p>

<h2 id="Painting_pixel_data_into_a_context" name="Painting_pixel_data_into_a_context">コンテキストにピクセルデータを描く</h2>

<p><a href="/ja/docs/Web/API/CanvasRenderingContext2D/putImageData">putImageData()</a> メソッドを使用して、コンテキストにピクセルデータを描くことができます:</p>

<pre class="brush: js">ctx.putImageData(myImageData, dx, dy);
</pre>

<p>引数 <code>dx</code> と <code>dy</code> は、描画したいピクセルデータの左上の隅を描く位置を、コンテキストのデバイス座標で示します。</p>

<p>例えば <code>myImageData</code> が表す画像全体をコンテキストの左上の隅から描くには、単純に以下のようにします:</p>

<pre class="brush: js">ctx.putImageData(myImageData, 0, 0);
</pre>

<h3 id="Grayscaling_and_inverting_colors" name="Grayscaling_and_inverting_colors">色のグレースケール化と反転</h3>

<p>この例ではすべてのピクセルの値を変更するためにイテレートを行って、<a href="/ja/docs/Web/API/CanvasRenderingContext2D/putImageData">putImageData()</a> を使用して変更後のピクセル配列を canvas に書き戻しています。invert 関数は、単純に最大値の 255 からそれぞれの色の値を減算します。grayscale 関数は、単純に赤、緑、青の平均値を使用します。また、例えば <code>x = 0.299r + 0.587g + 0.114b</code> といった式による加重平均も使用できます。詳しくは Wikipedia の <a href="http://en.wikipedia.org/wiki/Grayscale">Grayscale</a> (<a href="https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB">日本語版</a>) をご覧ください。</p>

<div class="hidden">
<pre class="brush: html;">&lt;canvas id="canvas" width="300" height="227"&gt;&lt;/canvas&gt;
&lt;div&gt;
  &lt;input id="grayscalebtn" value="グレースケール" type="button"&gt;
  &lt;input id="invertbtn" value="反転" type="button"&gt;
&lt;/div&gt;
</pre>
</div>

<pre class="brush: js">var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
img.onload = function() {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
  var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
  var data = imageData.data;

  var invert = function() {
    for (var i = 0; i &lt; data.length; i += 4) {
      data[i]     = 255 - data[i];     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var grayscale = function() {
    for (var i = 0; i &lt; data.length; i += 4) {
      var avg = (data[i] + data[i +1] + data[i +2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var invertbtn = document.getElementById('invertbtn');
  invertbtn.addEventListener('click', invert);
  var grayscalebtn = document.getElementById('grayscalebtn');
  grayscalebtn.addEventListener('click', grayscale);
}
</pre>

<p>{{EmbedLiveSample('Grayscaling_and_inverting_colors', 330, 270)}}</p>

<h2 id="Zooming_and_anti-aliasing" name="Zooming_and_anti-aliasing">ズームとアンチエイリアシング</h2>

<p>{{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} メソッド、第 2 の canvas、{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} プロパティの力を借りて、画像をズームアップして詳しく見ることができます。</p>

<p>マウスカーソルの位置を取得して、そこから上下左右に 5 ピクセルの範囲の画像を切り取ります。そして切り取った画像を別の canvas にコピーして、望むサイズにリサイズします。ズーム用の canvas では、元の canvas から切り取った 10×10 ピクセルの画像を 200×200 ピクセルにリサイズしています。</p>

<pre class="brush: js">zoomctx.drawImage(canvas,
                  Math.abs(x - 5), Math.abs(y - 5),
                  10, 10, 0, 0, 200, 200);</pre>

<p>アンチエイリアシングはデフォルトで有効ですので、ピクセルをはっきりさせるためにスムージングを無効化したいと考えるかもしれません。チェックボックスを切り替えると、<code>imageSmoothingEnabled</code> プロパティ (さまざまなブラウザ向けに接頭辞が必要です) の効果を確認できます。</p>

<h6 class="hidden" id="Zoom_example" name="Zoom_example">ズームの例</h6>

<div class="hidden">
<pre class="brush: html;">&lt;canvas id="canvas" width="300" height="227"&gt;&lt;/canvas&gt;
&lt;canvas id="zoom" width="300" height="227"&gt;&lt;/canvas&gt;
&lt;div&gt;
&lt;label for="smoothbtn"&gt;
  &lt;input type="checkbox" name="smoothbtn" checked="checked" id="smoothbtn"&gt;
  画像のスムージングを有効にする
&lt;/label&gt;
&lt;/div&gt;
</pre>
</div>

<pre class="brush: js">var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
img.onload = function() {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
  var zoomctx = document.getElementById('zoom').getContext('2d');

  var smoothbtn = document.getElementById('smoothbtn');
  var toggleSmoothing = function(event) {
    zoomctx.imageSmoothingEnabled = this.checked;
    zoomctx.mozImageSmoothingEnabled = this.checked;
    zoomctx.webkitImageSmoothingEnabled = this.checked;
    zoomctx.msImageSmoothingEnabled = this.checked;
  };
  smoothbtn.addEventListener('change', toggleSmoothing);

  var zoom = function(event) {
    var x = event.layerX;
    var y = event.layerY;
    zoomctx.drawImage(canvas,
                      Math.abs(x - 5),
                      Math.abs(y - 5),
                      10, 10,
                      0, 0,
                      200, 200);
  };

  canvas.addEventListener('mousemove', zoom);
}</pre>

<p>{{EmbedLiveSample('Zoom_example', 620, 490)}}</p>

<h2 id="Saving_images" name="Saving_images">画像を保存する</h2>

<p>{{domxref("HTMLCanvasElement")}} は、画像を保存する際に役に立つ <code>toDataURL()</code> メソッドを提供します。これは、引数 <code>type</code> で指定した形式 (既定値は <a class="external external-icon" href="https://ja.wikipedia.org/wiki/Portable_Network_Graphics">PNG</a>) で表した画像を持つ <a href="/ja/docs/Web/HTTP/data_URIs">data URI</a> を返します。返される画像の解像度は 96 dpi です。</p>

<dl>
 <dt>{{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/png')")}}</dt>
 <dd>既定の設定。PNG 画像を作成します。</dd>
 <dt>{{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/jpeg', quality)")}}</dt>
 <dd>JPG 画像を作成します。オプションで、品質を 0 から 1 の範囲で指定できます。1 は最高品質、0 はほとんど見分けがつかなくなりますがファイルサイズを小さくできます。</dd>
</dl>

<p>canvas から生成した data URI は、例えば任意の {{HTMLElement("image")}} のソースとして使用したり、ディスクに保存するために <a href="/ja/docs/Web/HTML/Element/a#attr-download">download 属性</a>を持つハイパーリンクに投入することができます。</p>

<p>また、canvas から {{domxref("Blob")}} を生成することもできます。</p>

<dl>
 <dt>{{domxref("HTMLCanvasElement.toBlob", "canvas.toBlob(callback, type, encoderOptions)")}}</dt>
 <dd>canvas に含まれる画像を表す <code>Blob</code> オブジェクトを作成します。</dd>
</dl>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("ImageData")}}</li>
 <li><a href="/ja/docs/Web/API/Canvas_API/Manipulating_video_using_canvas">Manipulating video using canvas</a></li>
 <li><a href="https://codepo8.github.io/canvas-images-and-pixels/">Canvas, images and pixels – by Christian Heilmann</a></li>
</ul>

<div>{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility")}}</div>
