---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Games
  - Graphics
  - Reference
translation_of: Web/API/CanvasRenderingContext2D
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Canvas_API">Canvas API</a> の <code><strong>CanvasRenderingContext2D</strong></code> インターフェイスは、{{ HTMLElement("canvas")}} 要素に描画するための 2D レンダリングコンテキストを提供します。図形、文字、画像、その他のオブジェクトを描画するのに使用します。</span></p>

<p>詳細は、サイドバーや以下にあるプロパティとメソッドの説明を参照してください。<a href="/ja/docs/Web/API/Canvas_API/Tutorial" title="Canvas チュートリアル">Canvas チュートリアル</a> にもより多くの説明やサンプルコード、リソースがあります。</p>

<h2 id="Basic_example" name="Basic_example">基本的な例</h2>

<p><code>CanvasRenderingContext2D</code> インスタンスを取得するには、まず連携する HTML <code>&lt;canvas&gt;</code> 要素が必要です。</p>

<pre class="brush: html">&lt;canvas id="my-house" width="300" height="300"&gt;&lt;/canvas&gt;</pre>

<p>この canvas の 2D レンダリングコンテキストを取得するには、引数に <code>'2d'</code> を指定して <code>&lt;canvas&gt;</code> の {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} を呼び出します。</p>

<pre class="brush: js">const canvas = document.getElementById('my-house');
const ctx = canvas.getContext('2d');
</pre>

<p>2D レンダリングコンテキストを取得した後は、好きなように描画できます。以下のコードは家を描画します。</p>

<pre class="brush: js">// Set line width
ctx.lineWidth = 10;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
</pre>

<p>結果は次のようになります。</p>

<p>{{EmbedLiveSample("Basic_example", 700, 330)}}</p>

<h2 id="Reference" name="Reference">リファレンス</h2>

<h3 id="Drawing_rectangles" name="Drawing_rectangles">矩形の描画</h3>

<p>ビットマップに対して矩形を直接描画する方法は三つあります。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.clearRect()")}}</dt>
 <dd>座標<em>(x, y)</em> を始点とする大きさ <em>(width, height)</em> の領域を、透明色 (透明な黒) で塗りつぶします。領域内に描画されていたすべてのコンテンツは消去されます。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.fillRect()")}}</dt>
 <dd>座標<em>(x, y)</em> を始点とし大きさ <em>(width, height)</em> の領域を、(訳注: 現在の塗りつぶしスタイルを用いて) 塗りつぶします。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.strokeRect()")}}</dt>
 <dd>座標<em>(x, y)</em> を始点とし大きさ <em>(width, height)</em> の領域の枠線を、現在のストロークスタイルを用いて描画します。</dd>
</dl>

<h3 id="Drawing_text" name="Drawing_text">文字列の描画</h3>

<p>以下のメソッドは、文字列の描画を提供します。文字列のプロパティについては {{domxref("TextMetrics")}} も参照してください。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.fillText()")}}</dt>
 <dd>現在の塗りつぶしスタイルを用いて、文字の内部を塗りつぶします。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.strokeText()")}}</dt>
 <dd>現在のストロークスタイルを用いて、文字の輪郭を描画します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.measureText()")}}</dt>
 <dd>{{domxref("TextMetrics")}} オブジェクトを返します。</dd>
</dl>

<h3 id="Line_styles" name="Line_styles">線のスタイル</h3>

<p>線がどのように描画されるかを設定・取得します。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.lineWidth")}}</dt>
 <dd>線の幅を設定します。デフォルトは <code>1.0</code> です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.lineCap")}}</dt>
 <dd>線の末端のスタイルを設定します。設定可能な値は <code>butt</code> (デフォルト), <code>round</code>, <code>square</code> です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.lineJoin")}}</dt>
 <dd>2 つの直線が出会う頂点のスタイルを設定します。設定可能な値は <code>round</code>, <code>bevel</code>, <code>miter</code> (デフォルト) です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.miterLimit")}}</dt>
 <dd>Miter limit を設定します。デフォルトは <code>10</code> です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.getLineDash()")}}</dt>
 <dd>現在の破線パターンを格納した配列を取得します。この配列には負でない実数が偶数個含まれています。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.setLineDash()")}}</dt>
 <dd>破線パターンを指定します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.lineDashOffset")}}</dt>
 <dd>線のどこから破線にするかを指定します。</dd>
</dl>

<h3 id="Text_styles" name="Text_styles">文字列のスタイル</h3>

<p>以下のプロパティは、テキストがどのように配置されるかを制御します。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.font")}}</dt>
 <dd>フォントを設定します。デフォルト値は <code>10px sans-serif</code> です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.textAlign")}}</dt>
 <dd>テキストの揃え方を設定します。設定可能な値は以下の通りです: <code>start</code> (デフォルト), <code>end</code>, <code>left</code>, <code>right</code> or <code>center</code>。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.textBaseline")}}</dt>
 <dd>ベースラインの揃え方を設定します。設定可能な値は以下の通りです: <code>top</code>, <code>hanging</code>, <code>middle</code>, <code>alphabetic</code> (デフォルト), <code>ideographic</code>, <code>bottom</code>。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.direction")}}</dt>
 <dd>テキストの方向を指定します。設定可能な値は以下の通りです: <code>ltr</code>, <code>rtl</code>, <code>inherit</code> (デフォルト)。</dd>
</dl>

<h3 id="Fill_and_stroke_styles" name="Fill_and_stroke_styles">塗りつぶしとストロークのスタイル</h3>

<p>塗りつぶしには図形の内部の色やスタイルの設定に、ストロークには図形の輪郭の色やスタイルの設定に使用されます。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.fillStyle")}}</dt>
 <dd>図形の内側を色やスタイルで指定します。 デフォルト値は <code>#000</code> (黒) です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.strokeStyle")}}</dt>
 <dd>図形の輪郭を色やスタイルで指定します。 デフォルト値は <code>#000</code> (黒) です。</dd>
</dl>

<h3 id="Gradients_and_patterns" name="Gradients_and_patterns">グラデーションとパターン</h3>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.createLinearGradient()")}}</dt>
 <dd>パラメーターの座標から線に沿った線形のグラデーションを作成します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.createRadialGradient()")}}</dt>
 <dd>パラメーターの座標から2つの円の座標を利用して放射状のグラデーションを作成します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.createPattern()")}}</dt>
 <dd>指定されたイメージソース ({{domxref("CanvasImageSource")}}) を利用してパターンイメージを作成します。そのパターンイメージからパラメーターの方向に繰り返します。このメソッドは {{domxref("CanvasPattern")}} で出力します。</dd>
</dl>

<h3 id="Shadows" name="Shadows">影のスタイル</h3>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.shadowBlur")}}</dt>
 <dd>影のぼかしを設定します。デフォルト値は <code>0</code> です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.shadowColor")}}</dt>
 <dd>影の色を設定します。デフォルト値は完全に透明の黒です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.shadowOffsetX")}}</dt>
 <dd>横方向の影の長さを設定します。デフォルト値は <code>0</code> です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.shadowOffsetY")}}</dt>
 <dd>縦方向の影の長さを設定します。デフォルト値は <code>0</code> です。</dd>
</dl>

<h3 id="Paths" name="Paths">パスの作成</h3>

<p>以下のメソッドはオブジェクトのパスの操作で使用できます。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.beginPath()")}}</dt>
 <dd>すでにあるサブパスのリストを消去して新しいパスの起点を作成します。パスを作成したい時にこのメソッドを利用します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.closePath()")}}</dt>
 <dd>ペンの場所を現在のサブパスの最初の位置に戻します。現在の位置から最初の位置まで直線を引くことになります。パスの図形が閉じていたり、まだ 1 点だけだったりする場合は、このメソッドは何も実行しません。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.moveTo()")}}</dt>
 <dd>(x, y) 座標へ作成済みのサブパスの始点を移動します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.lineTo()")}}</dt>
 <dd>現在のサブパスの終点を指定した (x, y) 座標へ直線で接続します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}</dt>
 <dd>現在のパスに 3 次元のベジェ曲線を追加します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}</dt>
 <dd>現在のパスに 2 次元のベジェ曲線を追加します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.arc()")}}</dt>
 <dd>現在のパスに円弧を追加します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.arcTo()")}}</dt>
 <dd>パラメーターの制御点と半径から現在のパスに円弧を追加し、直線で前の点に接続します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.ellipse()")}} {{experimental_inline}}</dt>
 <dd>現在のパスに楕円形の円弧を追加します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.rect()")}}</dt>
 <dd>パラメーターの座標 (x, y) から <em>width</em> と <em>height</em> のサイズで長方形のパスを作成します。</dd>
</dl>

<h3 id="Drawing_paths" name="Drawing_paths">パスを描画する</h3>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.fill()")}}</dt>
 <dd>塗りつぶしのスタイルに基づいてサブパス内を塗りつぶします。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.stroke()")}}</dt>
 <dd>ストロークのスタイルに基づいてサブパスを描画します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}</dt>
 <dd>パラメーターで指定した要素がフォーカスされた場合、このメソッドは現在のパスの周りにフォーカスリングを描画します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}}</dt>
 <dd>現在のパスかパラメーターで指定したパスが表示範囲に入るまでスクロールします。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.clip()")}}</dt>
 <dd>現在のサブパスからクリッピングパスを作成します。このメソッドが実行されると、後に描画されたものがすべてそのクリッピングパスの内側にだけ描画されます。サンプルは Canvas チュートリアルの <a href="/ja/docs/Web/API/Canvas_API/Tutorial/Compositing" title="Clipping paths">Clipping paths</a> をご参照ください。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.isPointInPath()")}}</dt>
 <dd>パラメーターで指定した位置が現在のパスの中に含まれているか調べます。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.isPointInStroke()")}}</dt>
 <dd>パラメーターで指定した位置がパスでストロークした領域の中に含まれているか調べます。</dd>
</dl>

<h3 id="Transformations" name="Transformations">図形の変形</h3>

<p><code>CanvasRenderingContext2D</code> のレンダリングコンテキストのオブジェクトには現在の変換行列の状態とその変換行列を操作するメソッドがあります。現在のデフォルトパスを作成したり、テキスト、図形、{{domxref("Path2D")}} を描くと変換行列が適用されます。下記に紹介するメソッドは過去の事情や互換性を確保する理由で残されていて、{{domxref("SVGMatrix")}} オブジェクトがその API の大部分で使用されています。将来は {{domxref("SVGMatrix")}} の代わりに {{domxref("DOMMatrix")}} を利用したメソッドが使用されることになります。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.currentTransform")}} {{experimental_inline}}</dt>
 <dd>現在の変換行列 ({{domxref("SVGMatrix")}} オブジェクト)。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.rotate()")}}</dt>
 <dd>変換行列に回転を追加します。パラメーターの角度は時計回りをラジアン値で指定します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.scale()")}}</dt>
 <dd>キャンバスに対して X で横方向に、Y で縦方向にスケーリング変換を追加します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.translate()")}}</dt>
 <dd>キャンバスと指定した原点に対して X で横方向に、Y で縦方向にグリッド状で移動して、平行移動の変形を追加します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.transform()")}}</dt>
 <dd>現在の変換行列とパラメーターで指定した行列を乗算します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.setTransform()")}}</dt>
 <dd>現在の変換行列を単位行列にリセットしてから、パラメーターで指定した行列から <code>transform()</code> メソッドを実行します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.resetTransform()")}} {{experimental_inline}}</dt>
 <dd>現在の変換行列を単位行列にリセットします。</dd>
</dl>

<h3 id="Compositing" name="Compositing">合成</h3>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.globalAlpha")}}</dt>
 <dd>合成される前に適用されるキャンバス内の図形やイメージの透明度です。デフォルト値は <code>1.0</code> (不透明) です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}</dt>
 <dd><code>globalAlpha</code> で設定した透明度を利用して、これまで描画された図形やイメージの描画方法を設定します。</dd>
</dl>

<h3 id="Drawing_images" name="Drawing_images">画像の描画</h3>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.drawImage()")}}</dt>
 <dd>指定したイメージを描画します。このメソッドでは指定方法が多く、大きな柔軟性を持ちます。</dd>
</dl>

<h3 id="Pixel_manipulation" name="Pixel_manipulation">ピクセル操作</h3>

<p>{{domxref("ImageData")}} も併せてご参照ください。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.createImageData()")}}</dt>
 <dd>パラメーターで指定した領域から空の {{domxref("ImageData")}} オブジェクトを作成します。そのオブジェクトはすべてのピクセルが透明な黒で構成されています。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.getImageData()")}}</dt>
 <dd>キャンバス内の座標 <em>(sx, sy)</em> から 幅 <em>sw</em> と 高さ <em>sh</em> のサイズで示される基本のピクセルデータの {{domxref("ImageData")}} オブジェクトを取得します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.putImageData()")}}</dt>
 <dd>パラメーターで指定した {{domxref("ImageData")}} オブジェクトのデータをビットマップ上に描画します。不適切な四角形が指定された場合は、その四角形のピクセルだけが描画されます。</dd>
</dl>

<h3 id="Image_smoothing" name="Image_smoothing">画像の平滑化</h3>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} {{experimental_inline}}</dt>
 <dd>Image smoothing mode; if disabled, images will not be smoothed if scaled.</dd>
</dl>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}} {{experimental_inline}}</dt>
 <dd>Allows you to set the quality of image smoothing.</dd>
</dl>

<h3 id="キャンバスの状態">キャンバスの状態</h3>

<p>The <code>CanvasRenderingContext2D</code> rendering context contains a variety of drawing style states (attributes for line styles, fill styles, shadow styles, text styles). The following methods help you to work with that state:</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.save()")}}</dt>
 <dd>Saves the current drawing style state using a stack so you can revert any change you make to it using <code>restore()</code>.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.restore()")}}</dt>
 <dd>Restores the drawing style state to the last element on the 'state stack' saved by <code>save()</code>.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.canvas")}}</dt>
 <dd>A read-only back-reference to the {{domxref("HTMLCanvasElement")}}. Might be {{jsxref("null")}} if it is not associated with a {{HTMLElement("canvas")}} element.</dd>
</dl>

<h3 id="Hit_regions" name="Hit_regions">キャンバスの当たり判定</h3>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}</dt>
 <dd>Adds a hit region to the canvas.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}</dt>
 <dd>Removes the hit region with the specified <code>id</code> from the canvas.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}</dt>
 <dd>Removes all hit regions from the canvas.</dd>
</dl>

<h3 id="Filters" name="Filters">フィルター</h3>

<dl>
 <dt>{{experimental_inline}} {{domxref("CanvasRenderingContext2D.filter")}}</dt>
 <dd>Applys a CSS and SVG filter to the Canvas, e.g. to change the brightness or blur the canvas.</dd>
</dl>

<h2 id="Non-standard_APIs" name="Non-standard_APIs">非標準 API</h2>

<h3 id="Blink_and_WebKit">Blink and WebKit</h3>

<p>Most of these APIs are <a href="https://code.google.com/p/chromium/issues/detail?id=363198">deprecated and were removed shortly after Chrome 36</a>.</p>

<dl>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.clearShadow()</code></dt>
 <dd>Removes all shadow settings like {{domxref("CanvasRenderingContext2D.shadowColor")}} and {{domxref("CanvasRenderingContext2D.shadowBlur")}}.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.drawImageFromRect()</code></dt>
 <dd>This is redundant with an equivalent overload of <code>drawImage</code>.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.setAlpha()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.globalAlpha")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.setCompositeOperation()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.setLineWidth()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.lineWidth")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.setLineJoin()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.lineJoin")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.setLineCap()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.lineCap")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.setMiterLimit()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.miterLimit")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.setStrokeColor()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.strokeStyle")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.setFillColor()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.fillStyle")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.setShadow()</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.shadowColor")}} and {{domxref("CanvasRenderingContext2D.shadowBlur")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.webkitLineDash</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.getLineDash()")}} and {{domxref("CanvasRenderingContext2D.setLineDash()")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.webkitLineDashOffset</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.lineDashOffset")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.webkitImageSmoothingEnabled</code></dt>
 <dd>Use {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} instead.</dd>
</dl>

<h3 id="Blink_only" name="Blink_only">Blink only</h3>

<dl>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.isContextLost()</code></dt>
 <dd>Inspired by the same <code>WebGLRenderingContext</code> method it returns <code>true</code> if the Canvas context has been lost, or <code>false</code> if not.</dd>
</dl>

<h3 id="WebKit_only" name="WebKit_only">WebKit only</h3>

<dl>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.webkitBackingStorePixelRatio</code></dt>
 <dd>The backing store size in relation to the canvas element. See <a href="http://www.html5rocks.com/en/tutorials/canvas/hidpi/">High DPI Canvas</a>.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.webkitGetImageDataHD</code></dt>
 <dd>Intended for HD backing stores, but removed from canvas specifications.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.webkitPutImageDataHD</code></dt>
 <dd>Intended for HD backing stores, but removed from canvas specifications.</dd>
</dl>

<dl>
</dl>

<h3 id="Gecko_only" name="Gecko_only">Gecko only</h3>

<h4 id="Prefixed_APIs" name="Prefixed_APIs">Prefixed APIs</h4>

<dl>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.mozCurrentTransform</code></dt>
 <dd>Sets or gets the current transformation matrix, see {{domxref("CanvasRenderingContext2D.currentTransform")}}.  {{ gecko_minversion_inline("7.0") }}</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.mozCurrentTransformInverse</code></dt>
 <dd>Sets or gets the current inversed transformation matrix.  {{ gecko_minversion_inline("7.0") }}</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.mozImageSmoothingEnabled</code></dt>
 <dd>See {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}.</dd>
 <dt>{{non-standard_inline}} {{deprecated_inline}} <code>CanvasRenderingContext2D.mozTextStyle</code></dt>
 <dd>Introduced in in Gecko 1.9, deprecated in favor of the {{domxref("CanvasRenderingContext2D.font")}} property.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.mozDrawText()</code></dt>
 <dd>This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.strokeText()")}} or {{domxref("CanvasRenderingContext2D.fillText()")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.mozMeasureText()</code></dt>
 <dd>This method was introduced in Gecko 1.9 and is unimplemented starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.measureText()")}} instead.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.mozPathText()</code></dt>
 <dd>This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.</dd>
 <dt>{{non-standard_inline}} {{obsolete_inline}} <code>CanvasRenderingContext2D.mozTextAlongPath()</code></dt>
 <dd>This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.</dd>
</dl>

<h4 id="Internal_APIs_(chrome-context_only)" name="Internal_APIs_(chrome-context_only)">Internal APIs (chrome-context only)</h4>

<dl>
 <dt>{{non-standard_inline}} {{domxref("CanvasRenderingContext2D.drawWindow()")}}</dt>
 <dd>Renders a region of a window into the <code>canvas</code>. The contents of the window's viewport are rendered, ignoring viewport clipping and scrolling.</dd>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.demote()</code></dt>
 <dd>This causes a context that is currently using a hardware-accelerated backend to fallback to a software one. All state should be preserved.</dd>
</dl>

<h3 id="Internet_Explorer" name="Internet_Explorer">Internet Explorer</h3>

<dl>
 <dt>{{non-standard_inline}} <code>CanvasRenderingContext2D.msFillRule</code></dt>
 <dd>The <a class="external" href="http://cairographics.org/manual/cairo-cairo-t.html#cairo-fill-rule-t">fill rule</a> to use. This must be one of <code>evenodd</code> or <code>nonzero</code> (default).</dd>
</dl>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#2dcontext:canvasrenderingcontext2d", "CanvasRenderingContext2D")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.CanvasRenderingContext2D")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>{{domxref("HTMLCanvasElement")}}</li>
 <li>{{HTMLElement("canvas")}}</li>
</ul>
