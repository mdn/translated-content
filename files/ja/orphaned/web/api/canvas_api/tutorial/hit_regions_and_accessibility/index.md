---
title: ヒット領域とアクセシビリティ
slug: orphaned/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility
---

<div>{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}</div>

<div class="summary">{{HTMLElement("canvas")}} 自体は単なるビットマップであり、描かれているオブジェクトに関する情報は提供しません。canvas の内容物は、セマンティック HTML のようなアクセシビリティ機能に公開されません。通常、アクセシブルなウェブサイトやアプリでは、canvas の使用を避けるべきでしょう。以下のガイドラインは、canvas をよりアクセシブルにする助けになります。</div>

<h2 id="Fallback_content" name="Fallback_content">フォールバックコンテンツ</h2>

<p><code>&lt;canvas&gt; ... &lt;/canvas&gt;</code> タグの内部にあるコンテンツは、canvas のレンダリングをサポートしないブラウザ向けのフォールバックコンテンツとして使用できます。また支援技術 (スクリーンリーダーなど) ユーザーに対しても、タグ内のサブ DOM を読み上げたり対話することができますので、とても役に立ちます。この方法を示すよい例が <a href="http://www.html5accessibility.com/tests/canvas.html">html5accessibility.com</a> にあります:</p>

<pre class="brush: html">&lt;canvas&gt;
  &lt;h2&gt;Shapes&lt;/h2&gt;
  &lt;p&gt;A rectangle with a black border.
   In the background is a pink circle.
   Partially overlaying the &lt;a href="http://en.wikipedia.org/wiki/Circle" onfocus="drawCircle();" onblur="drawPicture();"&gt;circle&lt;/a&gt;.
   Partially overlaying the circle is a green
   &lt;a href="http://en.wikipedia.org/wiki/Square" onfocus="drawSquare();" onblur="drawPicture();"&gt;square&lt;/a&gt;
   and a purple &lt;a href="http://en.wikipedia.org/wiki/Triangle" onfocus="drawTriangle();" onblur="drawPicture();"&gt;triangle&lt;/a&gt;,
   both of which are semi-opaque, so the full circle can be seen underneath.&lt;/p&gt;
&lt;/canvas&gt; </pre>

<p><a href="https://www.youtube.com/watch?v=ABeIFlqYiMQ">Steve Faulkner による、この例を NVDA がどのように読み上げるかを示した動画</a> もご覧ください。</p>

<h2 id="ARIA_rules" name="ARIA_rules">ARIA ルール</h2>

<p>Accessible Rich Internet Applications <strong>(<a href="/ja/docs/Web/Accessibility/ARIA">ARIA</a>)</strong> は、障がいがある人たちに対してウェブコンテンツやウェブアプリをよりアクセシブルにするための手段を定義しています。canvas 要素の振る舞いや目的を説明するために、ARIA 属性を使用できます。詳しくは <a href="/ja/docs/Web/Accessibility/ARIA">ARIA</a> や <a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques">ARIA techniques</a> をご覧ください。</p>

<pre class="brush: html">&lt;canvas id="button" tabindex="0" role="button" aria-pressed="false" aria-label="Start game"&gt;&lt;/canvas&gt;
</pre>

<h2 id="Hit_regions" name="Hit_regions">ヒット領域</h2>

<p>canvas 上の特定の領域内にマウス座標が存在するかは、解決する価値がある一般的な問題です。ヒット領域 API を使用して canvas 内の領域を定義することができます。また、canvas 上のインタラクティブコンテンツをアクセシビリティツールに公開する機能もあります。これによりヒット検出が容易になり、イベントを DOM 要素に送ることができます。この API には、以下の3つのメソッドがあります (これらは現行のウェブブラウザーでまだ実験的です。ブラウザー実装状況を確認してください)。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}</dt>
 <dd>canvas にヒット領域を追加します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}</dt>
 <dd>特定の <code>id</code> を持つヒット領域を、canvas から削除します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}</dt>
 <dd>すべてのヒット領域を canvas から削除します。</dd>
</dl>

<p>たとえば以下のように、パスにヒット領域を追加して、その領域にマウスがヒットしたかを判断するために {{domxref("MouseEvent.region")}} を確認できます。</p>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
&lt;script&gt;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
ctx.fill();
ctx.addHitRegion({id: "circle"});

canvas.addEventListener("mousemove", function(event) {
  if(event.region) {
    alert("hit region: " + event.region);
  }
});
&lt;/script&gt;</pre>

<p><code>addHitRegion()</code> メソッドには、イベントを要素 (canvas の子孫要素) へ送るための <code>control</code> オプションがあります:</p>

<pre class="brush: js">ctx.addHitRegion({control: element});</pre>

<p>これはたとえば、{{HTMLElement("input")}} 要素へイベントを送るのに有用です。<a href="http://codepen.io/adobe/pen/BhcmK">こちらの codepen demo</a> もご覧ください。</p>

<h2 id="Focus_rings" name="Focus_rings">フォーカスリング</h2>

<p>キーボードで操作するとき、フォーカスリングはページ上のナビゲーションを支援するために役に立つインジケーターです。canvas の描画物にフォーカスリングを描くために、<code>drawFocusIfNeeded</code> プロパティを使用できます。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}} {{experimental_inline}}</dt>
 <dd>指定した要素にフォーカスがあるとき、このメソッドは現在のパスの周囲にフォーカスリングを描きます。</dd>
</dl>

<p>また、たとえばフォーカスがある場合に要素をスクリーン上に見せるために、<code>scrollPathIntoView()</code> メソッドを使用できます。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}} {{experimental_inline}}</dt>
 <dd>現在のパスまたは指定したパスを表示するようにスクロールします。</dd>
</dl>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases">Canvas accessibility use cases</a></li>
 <li><a href="https://www.w3.org/html/wg/wiki/AddedElementCanvas">Canvas element accessibility issues</a></li>
 <li><a href="http://www.paciellogroup.com/blog/2012/06/html5-canvas-accessibility-in-firefox-13/">HTML5 Canvas Accessibility in Firefox 13 – by Steve Faulkner</a></li>
 <li><a href="https://html.spec.whatwg.org/multipage/scripting.html#best-practices">Best practices for interactive canvas elements</a></li>
</ul>

<div>{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}</div>
