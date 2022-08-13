---
title: self.createImageBitmap()
slug: Web/API/createImageBitmap
tags:
  - API
  - Canvas
  - DOM
  - createImageBitmap
translation_of: Web/API/WindowOrWorkerGlobalScope/createImageBitmap
original_slug: Web/API/WindowOrWorkerGlobalScope/createImageBitmap
---
<div>{{APIRef("Canvas API")}}</div>

<p><code><strong>createImageBitmap()</strong></code> メソッドは、指定されたソースからビットマップを作成します。このメソッドは、windows と worker の両方のグローバルスコープに存在します。このメソッドは、さまざまな異なる画像ソースを受け付け、{{domxref("Promise")}} を返し、{{domxref("ImageBitmap")}} に解決します。</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="syntaxbox notranslate">const imageBitmapPromise = createImageBitmap(<em>image</em>[, options]);
const imageBitmapPromise = createImageBitmap(<em>image, sx, sy, sw, sh</em>[, options]);</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>image</code></dt>
 <dd>画像ソースで {{HTMLElement("img")}}、SVG {{SVGElement("image")}}、{{HTMLElement("video")}}、{{HTMLElement("canvas")}}、{{domxref("HTMLImageElement")}}、{{domxref("SVGImageElement")}}、{{domxref("HTMLVideoElement")}}、{{domxref("HTMLCanvasElement")}}、{{domxref("Blob")}}、{{domxref("ImageData")}}、{{domxref("ImageBitmap")}} または {{domxref("OffscreenCanvas")}} オブジェクトのいずれかになります。</dd>
 <dt><code>sx</code></dt>
 <dd><code>ImageBitmap</code> が抽出される矩形の参照点の x 座標。</dd>
 <dt><code>sy</code></dt>
 <dd><code>ImageBitmap</code> が抽出される矩形の参照点の y 座標。</dd>
 <dt><code>sw</code></dt>
 <dd><code>ImageBitmap</code> が抽出される矩形の幅。この値は負の値にすることができます。</dd>
 <dt><code>sh</code></dt>
 <dd><code>ImageBitmap</code> が抽出される矩形の高さ。この値は負の値にすることができます。</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>画像の抽出のためのオプションを設定するオブジェクト。利用可能なオプションは以下の通りです。
 <ul>
  <li><code>imageOrientation</code>: 画像をそのまま表示するか、垂直方向に反転させて表示するかを指定します。<code>none</code> (デフォルト) または <code>flipY</code> のいずれかを指定します</li>
  <li><code>premultiplyAlpha</code>: ビットマップのカラーチャンネルをアルファチャンネルで前置増幅するかどうかを指定します。<code>none</code>、<code>premultiply</code>、<code>default</code> (デフォルト) のいずれかです</li>
  <li><code>colorSpaceConversion</code>: 画像を色空間変換でデコードするかどうかを指定します。<code>none</code> または <code>default</code> (デフォルト) のいずれかを指定します。値 <code>default</code> は、実装固有の動作を使用することを示します</li>
  <li><code>resizeWidth</code>: 出力幅を示す long 整数</li>
  <li><code>resizeHeight</code>: 出力の高さを示す long 整数</li>
  <li><code>resizeQuality</code>: 出力寸法に合わせて入力のサイズを変更するために使用するアルゴリズムを指定します。<code>pixelated</code>、<code>low</code> (デフォルト)、<code>medium</code>、<code>high</code>のいずれかです</li>
 </ul>
 </dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>与えられた矩形のビットマップデータを含む{{domxref("ImageBitmap")}} オブジェクトに解決する{{domxref("Promise")}} を返します。</p>

<h2 id="例">例</h2>

<h3 id="スプライトシートからのスプライト作成">スプライトシートからのスプライト作成</h3>

<p>この例では、スプライトシートをロードし、個々のスプライトを抽出し、各スプライトをキャンバスにレンダリングします。スプライトシートとは、複数の小さな画像を含む画像で、それぞれを個別にレンダリングできるようにしたいものです。</p>

<pre class="brush: js  language-js notranslate">var canvas = document.getElementById('myCanvas'),
ctx = canvas.getContext('2d'),
image = new Image();

// スプライトシートがロードされるのを待ちます
image.onload = function() {
  Promise.all([
    // スプライトシートから2つのスプライトを切り取ります
    createImageBitmap(image, 0, 0, 32, 32),
    createImageBitmap(image, 32, 0, 32, 32)
  ]).then(function(sprites) {
    // 各スプライトをキャンバスに描きます
    ctx.drawImage(sprites[0], 0, 0);
    ctx.drawImage(sprites[1], 32, 32);
  });
}

// 画像ファイルからスプライトシートを読み込みます
image.src = 'sprites.png';
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "webappapis.html#dom-createimagebitmap", "createImageBitmap")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.WindowOrWorkerGlobalScope.createImageBitmap")}}</p>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li>{{domxref("CanvasRenderingContext2D.drawImage()")}}</li>
 <li>{{domxref("ImageData")}}</li>
</ul>
