---
title: 画像を使う
slug: Web/API/Canvas_API/Tutorial/Using_images
tags:
  - Advanced
  - Canvas
  - Graphics
  - HTML
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Using_images
original_slug: Web/Guide/HTML/Canvas_tutorial/Using_images
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}</div>

<div class="summary">
<p>これまで、<a href="/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes">図形</a>を作成して<a href="/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors">スタイルを適用する</a>方法を見てきました。{{HTMLElement("canvas")}} のより面白い機能のひとつが、画像を扱えることです。これは動的な画像合成を行う、グラフの背景として使用する、ゲームのスプライトとして使用するなどといったことが可能です。PNG、GIF、JPEG といった、ブラウザがサポートする形式の外部画像を使用できます。同じページ上の別の canvas 要素によって生成された画像も、ソースとして使用できます!</p>
</div>

<p>基本的には 2 ステップの手続きによって、画像を canvas にインポートします:</p>

<ol>
 <li>{{domxref("HTMLImageElement")}} オブジェクトまたは別の canvas 要素への参照を、ソースとして取得します。URL を与えることでも、画像を使用できます。</li>
 <li><code>drawImage()</code> 関数を使用して、画像を canvas に描きます。</li>
</ol>

<p>これを行う方法を見ていきましょう。</p>

<h2 id="Getting_images_to_draw" name="Getting_images_to_draw">描く画像を取得する</h2>

<p>canvas API は、以下のデータ形式を画像ソースとして使用できます:</p>

<dl>
 <dt>{{domxref("HTMLImageElement")}}</dt>
 <dd>{{HTMLElement("img")}} 要素だけでなく、<code>Image()</code> コンストラクタを使用して作成した画像も含みます。</dd>
 <dt>{{domxref("HTMLVideoElement")}}</dt>
 <dd>HTML の {{HTMLElement("video")}} 要素を画像ソースとして使用すると、現在のフレームを動画から取得して、画像として使用します。</dd>
 <dt>{{domxref("HTMLCanvasElement")}}</dt>
 <dd>別の {{HTMLElement("canvas")}} 要素を画像ソースとして使用できます。</dd>
</dl>

<p>これらのソースは集約的に、{{domxref("CanvasImageSource")}} 型から参照されています。</p>

<p>canvas で使用する画像を取得する方法がいくつかあります。</p>

<h3 id="Using_images_from_the_same_page" name="Using_images_from_the_same_page">同一ページ上の画像を使用する</h3>

<p>以下のいずれかを使用して、canvas として同一ページ上の画像への参照を取得できます:</p>

<ul>
 <li>{{domxref("document.images")}} コレクション</li>
 <li>{{domxref("document.getElementsByTagName()")}} メソッド</li>
 <li>使用したい特定の画像の ID がわかる場合は、特定の画像を取得するために {{domxref("document.getElementById()")}} を使用できます。</li>
</ul>

<h3 id="Using_images_from_other_domains" name="Using_images_from_other_domains">ほかのドメインにある画像を使用する</h3>

<p>{{HTMLElement("img")}} 要素の {{htmlattrxref("crossorigin", "img")}} 属性 ({{domxref("HTMLImageElement.crossOrigin")}} プロパティに反映されます) を使用して、<code>drawImage()</code> を呼び出してほかのドメインから画像を読み込む許可を求めることができます。ホスティングドメインが画像のクロスドメインアクセスを許可している場合は、canvas を汚染せずに画像を使用できます。そうでない場合は、画像を使用すると <a href="/ja/docs/HTML/CORS_Enabled_Image#What_is_a_.22tainted.22_canvas.3F" rel="internal">canvas を汚染します</a>。</p>

<h3 id="Using_other_canvas_elements" name="Using_other_canvas_elements">ほかの canvas 要素を使用する</h3>

<p>通常の画像と同様に、{{domxref("document.getElementsByTagName()")}} または {{domxref("document.getElementById()")}} メソッドを使用してほかの canvas 要素にアクセスできます。対象の canvas を使用する前に、そのキャンバスで描画を終えるようにしてください。</p>

<p>より実践的な使用法のひとつが、別の大きな canvas のサムネイルビューとして第 2 の canvas を使用することです。</p>

<h3 id="Creating_an_image_from_scratch" name="Creating_an_image_from_scratch">最初から画像を作成する</h3>

<p>もうひとつの方法は、スクリプト内で新たな {{domxref("HTMLImageElement")}} オブジェクトを作成することです。そのために、便利な <code>Image()</code> コンストラクタを使用できます:</p>

<pre class="brush: js">var img = new Image();   // 新たな img 要素を作成
img.src = 'myImage.png'; // ソースのパスを設定
</pre>

<p>このスクリプトを実行すると、画像の読み込みが始まります。</p>

<p>画像の読み込みが完了する前に <code>drawImage()</code> を呼び出しても、何も行いません (あるいは、古いブラウザでは例外が発生するかもしれません)。よって画像を読み込む前に描画しないようにするために、load イベントを使用する必要があります:</p>

<pre class="brush: js">var img = new Image();   // 新たな img 要素を作成
img.addEventListener("load", function() {
  // drawImage を実行する文をここに置く
}, false);
img.src = 'myImage.png'; // ソースのパスを設定
</pre>

<p>これは、外部の画像を 1 つしか使用しない場合はよい方法ですが、複数の画像を追跡しなければならない場合は、より器用な方法に頼らなければなりません。画像の事前読み込み法を見ていくことはこのチュートリアルの対象を超えますが、心に留めておいてください。</p>

<h3 id="Embedding_an_image_via_data_URL" name="Embedding_an_image_via_data_URL">data: URL で画像を埋め込む</h3>

<p>画像を埋め込む別の方法が、<a href="/ja/docs/Web/HTTP/data_URIs">data: url</a> です。Data URL によって、画像を Base64 でエンコードした文字列として、コード内で完全に定義できます。</p>

<pre class="brush: js">var img = new Image();   // 新たな img 要素を作成
img.src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';
</pre>

<p>data URL の利点のひとつが、別にサーバとの通信を行うことなく即座に結果の画像を使用できることです。ほかに潜在的な利点として <a href="/ja/docs/Web/CSS" title="Web/CSS">CSS</a>、<a href="/ja/docs/Web/JavaScript" title="Web/JavaScript">JavaScript</a>、<a href="/ja/docs/Web/HTML" title="Web/HTML">HTML</a>、画像をひとつのファイルにカプセル化することもでき、ほかの場所へ持ち運びやすくなります。</p>

<p>この方法の欠点は画像がキャッシュされないことと、大きな画像をエンコードした URL がとても長くなることです。</p>

<h3 id="Using_frames_from_a_video" name="Using_frames_from_a_video">動画のフレームを使用する</h3>

<p>{{HTMLElement("video")}} 要素が提供する動画のフレームも (動画が非表示であっても) 使用できます。例えば ID が "myvideo" である {{HTMLElement("video")}} 要素があるとき、以下のようなことができます:</p>

<pre class="brush: js">function getMyVideo() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    return document.getElementById('myvideo');
  }
}
</pre>

<p>これは動画の {{domxref("HTMLVideoElement")}} オブジェクトを返します。このオブジェクトは先に述べたとおり、<code>CanvasImageSource</code> として使用できるオブジェクトのひとつです。</p>

<h2 id="Drawing_images" name="Drawing_images">画像を描く</h2>

<p>ソース画像オブジェクトへの参照を取得したら、<code>drawImage()</code> メソッドを使用して画像を canvas に描画できます。後ほど見るように、<code>drawImage()</code> メソッドをオーバーロードした派生形がいくつかあります。もっとも基本的な形式は以下のようなものです:</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, x, y)")}}</dt>
 <dd>引数 <code>image</code> で指定した <code>CanvasImageSource</code> を、座標 (<code>x</code>, <code>y</code>) に描画します。</dd>
</dl>

<div class="note">
<p>SVG 画像は、ルート &lt;svg&gt; 要素で幅と高さを指定しなければなりません。</p>
</div>

<h3 id="Example_A_simple_line_graph" name="Example_A_simple_line_graph">例: シンプルな折れ線グラフ</h3>

<p>以下の例は、小さな折れ線グラフの背景として外部の画像を使用しています。背景画像を使用すると背景を生成するコードが不要になりますので、スクリプトをかなり小さくすることができます。この例では画像を 1 つしか使用しませんので、描画する文を実行するために image オブジェクトの <code>load</code> イベントハンドラを使用しています。<code>drawImage()</code> メソッドは背景画像を座標 (0, 0) に配置します。これは canvas の左上の隅です。</p>

<div class="hidden">
<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="180" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js;highlight[5]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img,0,0);
    ctx.beginPath();
    ctx.moveTo(30,96);
    ctx.lineTo(70,66);
    ctx.lineTo(103,76);
    ctx.lineTo(170,15);
    ctx.stroke();
  };
  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}</pre>

<p>結果のグラフは以下のようになります:</p>

<p>{{EmbedLiveSample("Example_A_simple_line_graph", 220, 160, "https://mdn.mozillademos.org/files/206/Canvas_backdrop.png")}}</p>

<h2 id="Scaling" name="Scaling">スケーリング</h2>

<p><code>drawImage()</code> メソッドの第 2 の形式は引数が 2 つ追加されており、canvas に拡大・縮小した画像を配置することができます。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, x, y, width, height)")}}</dt>
 <dd>これは引数 <code>width</code> および <code>height</code> を追加しており、画像を canvas に描画する際のサイズを示します。</dd>
</dl>

<h3 id="Example_Tiling_an_image" name="Example_Tiling_an_image">例: 画像をタイリングする</h3>

<p>以下の例は画像を壁紙として使用して、canvas 上で数回繰り返して貼り付けています。ループ処理によって、さまざまな場所に縮小した画像を貼り付けました。以下のコードでは、最初の <code>for</code> ループで行の繰り返し処理を行います。2 番目の <code>for</code> ループで列の繰り返し処理を行います。画像は元のサイズの 3 分の 1 である、50x38 ピクセルに縮小しています。</p>

<div class="note">
<p><strong>注記</strong>: 画像を拡大しすぎると不鮮明に、あるいは縮小しすぎると荒くなります。読みやすくしておかなければならない文字列が画像内にある場合は、サイズを変更しないほうがよいでしょう。</p>
</div>

<div class="hidden">
<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function(){
    for (var i=0;i&lt;4;i++){
      for (var j=0;j&lt;3;j++){
        ctx.drawImage(img,j*50,i*38,50,38);
      }
    }
  };
  img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
}</pre>

<p>canvas の結果は以下のようになります:</p>

<p>{{EmbedLiveSample("Example_Tiling_an_image", 160, 160, "https://mdn.mozillademos.org/files/251/Canvas_scale_image.png")}}</p>

<h2 id="Slicing" name="Slicing">切り抜き</h2>

<p><code>drawImage()</code> メソッドの第 3 かつ最後の形式は、画像ソースについて 8 個の引数が追加されています。これはソース画像の一部を切り抜いて、サイズ変更および canvas への描画を行います。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)")}}</dt>
 <dd>この関数は、<code>image</code> から左上の隅が (<code>sx</code>, <code>sy</code>)、幅と高さが <code>sWidth</code> および <code>sHeight</code> である矩形で指定されるソース画像の領域を取得して、canvas の (<code>dx</code>, <code>dy</code>) で示した位置に配置して、<code>dWidth</code> および <code>dHeight</code> で指定したサイズに拡大・縮小します。</dd>
</dl>

<p><img alt="" src="https://mdn.mozillademos.org/files/225/Canvas_drawimage.jpg" style="float: right; height: 290px; width: 300px;">何を行っているかを正しく理解するために、右の画像を見ると役に立つでしょう。始めの 4 つの引数は、ソース画像を切り抜く場所とサイズを定義します。最後の 4 つの引数は、描画先 canvas で画像を描画する矩形を定義します。</p>

<p>切り抜きは、画像を合成する際に役に立つでしょう。ひとつの画像ファイルにすべての要素を置いておき、このメソッドを使用して完成形の描画結果に合成します。例えばチャートを作成したいときに、すべての必要なテキストをひとつのファイルに収めた PNG 画像を用意して、データに応じてチャートの目盛りをとても簡単に変更できるでしょう。ほかの利点として、すべての画像を個別に読み込む必要がありませんので、読み込みパフォーマンスが向上するでしょう。</p>

<h3 id="Example_Framing_an_image" name="Example_Framing_an_image">例: 画像をフレームに収める</h3>

<p>以下の例では前の例と同じサイの画像を使用していますが、頭の部分を切り抜いて額縁の中に合成しています。額縁の画像は、ドロップシャドウを含む 24 ビット PNG 画像です。GIF や 8 ビット PNG 画像と異なり、24 ビット PNG 画像は 8 ビットのアルファチャンネルが含まれていますので、マットカラーに悩まされることなく背景に重ねることができます。</p>

<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
   &lt;div style="display:none;"&gt;
     &lt;img id="source" src="https://mdn.mozillademos.org/files/5397/rhino.jpg" width="300" height="227"&gt;
     &lt;img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150"&gt;
   &lt;/div&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>

<pre class="brush: js">function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // スライス画像を描く
  ctx.drawImage(document.getElementById('source'),
                33, 71, 104, 124, 21, 20, 87, 104);

  // フレームを描く
  ctx.drawImage(document.getElementById('frame'),0,0);
}</pre>

<p>この例では、画像の読み込みに別の方法を使用しています。新しい {{domxref("HTMLImageElement")}} オブジェクトを作成して画像を読み込む代わりに、画像を HTML ソース内の {{HTMLElement("img")}} タグとして直接含めておき、そこから画像を取り込んでいます。この画像は、CSS の {{cssxref("display")}} プロパティを none に設定して隠しています。</p>

<p>{{EmbedLiveSample("Example_Framing_an_image", 160, 160, "https://mdn.mozillademos.org/files/226/Canvas_drawimage2.jpg")}}</p>

<p>スクリプト自体はとてもシンプルです。それぞれの {{HTMLElement("img")}} に ID 属性を割り当てており、{{domxref("document.getElementById()")}} を使用して簡単に選択できます。最初の画像からサイを切り抜いて canvas 上でサイズを調整するため単純に <code>drawImage()</code> を使用して、その後に第 2 の <code>drawImage()</code> を呼び出して枠を描きます。</p>

<h2 id="Art_gallery_example" name="Art_gallery_example">アートギャラリーの例</h2>

<p>この章の最後の例では、小さなアートギャラリーを作ります。いくつかの画像を持つテーブルで、ギャラリーを構成します。ページを読み込むとそれぞれの画像のために {{HTMLElement("canvas")}} 要素を挿入して、そこに画像と額縁を描画します。</p>

<p>ここでは、周囲に描く額縁を含むすべての画像が一定の幅および高さです。額縁をぴったり合わせるために画像の幅と高さを使用するよう、スクリプトを改良することができるでしょう。</p>

<p>以下のコードは自明でしょう。{{domxref("document.images")}} コンテナに対するループ処理を行って、適宜新たな canvas 要素を追加します。おそらく、DOM についてあまり詳しくない場合に注意したほうがよいことは、{{domxref("Node.insertBefore")}} メソッドを使用していることです。<code>insertBefore()</code> は、ある要素 (image) の前に新たな要素 (canvas 要素) を挿入したいときに使用する、親ノード (テーブルのセル) のメソッドです。</p>

<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
     &lt;table&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5399/gallery_1.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5401/gallery_2.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5403/gallery_3.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5405/gallery_4.jpg"&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5407/gallery_5.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5409/gallery_6.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5411/gallery_7.jpg"&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src="https://mdn.mozillademos.org/files/5413/gallery_8.jpg"&gt;&lt;/td&gt;
      &lt;/tr&gt;
     &lt;/table&gt;
     &lt;img id="frame" src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" width="132" height="150"&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>こちらが、見栄えをよくするための CSS です:</p>

<pre class="brush: css">body {
  background: 0 -100px repeat-x url(https://mdn.mozillademos.org/files/5415/bg_gallery.png) #4F191A;
  margin: 10px;
}

img {
  display: none;
}

table {
  margin: 0 auto;
}

td {
  padding: 15px;
}
</pre>

<p>額縁付き画像を描く JavaScript が、すべてを結びつけます:</p>

<pre class="brush: js">function draw() {

  // すべての画像に対するループ処理
  for (var i=0;i&lt;document.images.length;i++){

    // 額縁の画像用の canvas は追加しない
    if (document.images[i].getAttribute('id')!='frame'){

      // canvas 要素を作成
      canvas = document.createElement('canvas');
      canvas.setAttribute('width',132);
      canvas.setAttribute('height',150);

      // 画像の前に挿入
      document.images[i].parentNode.insertBefore(canvas,document.images[i]);

      ctx = canvas.getContext('2d');

      // canvas に画像を描く
      ctx.drawImage(document.images[i],15,20);

      // 額縁を追加
      ctx.drawImage(document.getElementById('frame'),0,0);
    }
  }
}</pre>

<p>{{EmbedLiveSample("Art_gallery_example", 725, 400)}}</p>

<h2 id="Controlling_image_scaling_behavior" name="Controlling_image_scaling_behavior">画像のサイズ変更の動作を制御する</h2>

<p>先に述べたとおり、サイズを変更した画像は変更処理の影響で、不鮮明またはブロック状のアーティファクトが発生します。描画コンテキスト内で画像のサイズを変更する際に使用する画像スムージングアルゴリズムを制御するために、描画コンテキストの {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} プロパティを使用できます。デフォルトではこれが <code>true</code> であり、画像のサイズを変更する際にスムージングを行います。以下のように、この機能は無効化できます:</p>

<pre class="brush: js">ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
</pre>

<div>{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}</div>
