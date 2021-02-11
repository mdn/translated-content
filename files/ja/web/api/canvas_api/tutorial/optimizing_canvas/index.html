---
title: canvas の最適化
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
tags:
  - Advanced
  - Canvas
  - Graphics
  - HTML
  - HTML5
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Optimizing_canvas
original_slug: Web/Guide/HTML/Canvas_tutorial/Optimizing_canvas
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}</div>

<div class="summary">
<p>{{HTMLElement("canvas")}} 要素は、ウェブで 2D グラフィックスを描画するためにもっとも広く使用されているツールのひとつです。しかし、ウェブサイトやアプリが Canvas API の限界付近まで使用するようになって、パフォーマンスが悪化するようになりました。<span class="seoSummary">この記事では、 canvas 要素の使用を最適化して、グラフィックを確実に改善するための提案を行います。</span></p>
</div>

<h2 id="Performance_tips" name="Performance_tips">パフォーマンスに関する TIPS</h2>

<p>キャンバスのパフォーマンスを向上させるための TIPS 集を以下に掲載します。</p>

<h3 id="Pre-render_similar_primitives_or_repeating_objects_on_an_offscreen_canvas" name="Pre-render_similar_primitives_or_repeating_objects_on_an_offscreen_canvas">同様のプリミティブや繰り返し使用するオブジェクトをオフスクリーン canvas で事前にレンダリングする</h3>

<p>アニメーションフレーム毎に同じ描画操作を繰り返していることに気づいたら、あらかじめオフスクリーンキャンバスに描画しておくことを検討しましょう。そして、必要な時に本来のキャンバスにオフスクリーン画像を、最初の場所で生成したときのステップなしで描画することができます。</p>

<pre class="brush: js">myCanvas.offscreenCanvas = document.createElement('canvas');
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext('2d').drawImage(myCanvas.offScreenCanvas, 0, 0);
</pre>

<h3 id="Avoid_floating-point_coordinates_and_use_integers_instead" name="Avoid_floating-point_coordinates_and_use_integers_instead">浮動小数点数値の座標を避けて整数を使用する</h3>

<p>canvas で整数以外の値を使用してオブジェクトを描画すると、サブピクセルレンダリングを実行します。</p>

<pre class="brush: js">ctx.drawImage(myImage, 0.3, 0.5);
</pre>

<p>これはアンチエイリアス効果を生成するために、ブラウザーに追加の計算処理を強制します。これを避けるために、たとえば {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} を呼び出す際に {{jsxref("Math.floor()")}} を使用して、すべての座標で端数処理を行ってください。</p>

<h3 id="Don’t_scale_images_in_drawImage" name="Don’t_scale_images_in_drawImage"><code>drawImage</code> で画像のスケーリングを行わない</h3>

<p>{{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} でいつも画像のスケーリング処理を行うのではなく、さまざまなサイズの画像をオフスクリーン canvas でキャッシュしてください。</p>

<h3 id="Use_multiple_layered_canvases_for_complex_scenes" name="Use_multiple_layered_canvases_for_complex_scenes">複雑なシーンでは複数レイヤーの canvas を使用する</h3>

<p>アプリケーションでは、一部のオブジェクトは頻繁に動かしたり変更したりする必要があるのに対し、他のものは比較的静止していることが分かるかもしれません。この場合に可能な最適化は、複数の <code>&lt;canvas&gt;</code> 要素を使用してアイテムをレイヤー化することです。</p>

<p>例えば、 UI があるゲームが最上位にあり、中間にゲームプレイの動作があり、最下位に静止した背景があるとします。この場合、ゲームを３つの <code>&lt;canvas&gt;</code> レイヤーに分割することができます。 UI はユーザーの入力のみに基づいて変化し、ゲームプレイレイヤーはフレーム毎に変化し、背景は基本的に変化しないままでいます。</p>

<pre class="brush: html">&lt;div id="stage"&gt;
  &lt;canvas id="ui-layer" width="480" height="320"&gt;&lt;/canvas&gt;
  &lt;canvas id="game-layer" width="480" height="320"&gt;&lt;/canvas&gt;
  &lt;canvas id="background-layer" width="480" height="320"&gt;&lt;/canvas&gt;
&lt;/div&gt;

&lt;style&gt;
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black;
  }

  canvas { position: absolute; }
  #ui-layer { z-index: 3; }
  #game-layer { z-index: 2; }
  #background-layer { z-index: 1; }
&lt;/style&gt;
</pre>

<h3 id="Use_plain_CSS_for_large_background_images" name="Use_plain_CSS_for_large_background_images">大きな背景画像に CSS を使用する</h3>

<p>静止した背景画像がある場合は、ただの {{HTMLElement("div")}} に CSS の {{cssxref("background")}} プロパティを使用し、 canvas の下に配置することで描画することができます。これにより、大きな画像を毎回 canvas に描画する処理を避けます。</p>

<h3 id="Scaling_canvas_using_CSS_transforms" name="Scaling_canvas_using_CSS_transforms">CSS transforms を使用して canvas をスケーリングする</h3>

<p><a href="/ja/docs/Web/Guide/CSS/Using_CSS_transforms">CSS 変形</a> は、 GPU を使用しますのでより高速です。もっともよいのは拡大縮小しないことですが、そうでなければ大きな canvas を縮小するよりも小さな canvas を拡大したほうが良好です。</p>

<pre class="brush: js">var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = '0 0'; //scale from top left
stage.style.transform = 'scale(' + scaleToFit + ')';
</pre>

<h3 id="Turn_off_transparency" name="Turn_off_transparency">透過をやめる</h3>

<p>アプリケーションが canvas を使用していて背後のものを透過させる必要がない場合は、 {{domxref("HTMLCanvasElement.getContext()")}} で描画コンテキストを生成する際に <code>alpha</code> オプションを <code>false</code> に設定しましょう。この情報を使用してブラウザーが描画を最適化する可能性があります。</p>

<pre class="brush: js">var ctx = canvas.getContext('2d', { alpha: false });</pre>

<h3 id="More_tips" name="More_tips">その他の TIPS</h3>

<ul>
 <li>canvas の呼び出しをひとまとめにします。たとえば、複数に分割した線分ではなくポリラインを描画します。</li>
 <li>不必要な canvas の状態変更を避けます。</li>
 <li>新しい状態の全体を描画せずに、スクリーンの差分だけを描画します。</li>
 <li>可能な限り {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} プロパティを避けます。</li>
 <li>可能な限り <a href="/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text">テキストレンダリング</a> を避けます。</li>
 <li>canvas をクリアーする別の方法を試します ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} 対 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 対 canvas のリサイズ)</li>
 <li>アニメーションで {{domxref("window.setInterval()")}} の代わりに {{domxref("window.requestAnimationFrame()")}} を使用します。</li>
 <li>高負荷な物理演算ライブラリーに注意してください。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref">Improving HTML5 Canvas Performance – HTML5 Rocks</a></li>
 <li><a href="https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/">Optimizing your JavaScript game for Firefox OS – Mozilla Hacks</a></li>
</ul>

<p>{{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}</p>
