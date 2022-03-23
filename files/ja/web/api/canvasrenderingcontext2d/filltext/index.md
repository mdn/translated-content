---
title: CanvasRenderingContext2D.fillText()
slug: Web/API/CanvasRenderingContext2D/fillText
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
translation_of: Web/API/CanvasRenderingContext2D/fillText
---
<div>{{APIRef}}</div>

<p>Canvas 2D API の <code><strong>CanvasRenderingContext2D.fillText()</strong></code> メソッドは、指定した位置 <em>(x, y)</em> にテキストを塗りつぶして描画します。省略可能な第 4 引数である最大幅を与えると、この幅に収まるようにテキストを縮小します。</p>

<p>テキストの輪郭線を描画するための {{domxref("CanvasRenderingContext2D.strokeText()")}} メソッドもご覧ください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">void <var><em>ctx</em>.fillText(text, x, y [, maxWidth]);</var>
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>text</code></dt>
 <dd>現在の {{domxref("CanvasRenderingContext2D.font","font")}}、{{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}}、{{domxref("CanvasRenderingContext2D.direction","direction")}} の値を使用して描画するテキスト。</dd>
 <dt><code>x</code></dt>
 <dd>テキストの描画を始める、x 軸の座標。</dd>
 <dt><code>y</code></dt>
 <dd>テキストの描画を始める、y 軸の座標。</dd>
 <dt><code>maxWidth</code> {{optional_inline}}</dt>
 <dd>描画する最大幅。この引数が指定され、指定文字列の幅がこの幅より広く算出された場合、フォントはより水平方向に凝縮されたフォント (そのようなフォントが利用可能、もしくは、現在のフォントを水平方向に縮小することによって適度に読みやすいフォントに合成できる場合) か、より小さなフォントを用いるように調整されます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_fillText_method" name="Using_the_fillText_method"><code>fillText</code> メソッドの使用例</h3>

<p><code>fillText</code> メソッドを使用する、シンプルなコードスニペットです。</p>

<h4 id="HTML" name="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript" name="JavaScript">JavaScript</h4>

<pre class="brush: js; highlight:[5]">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.fillText("Hello world", 50, 100);
</pre>

<p>以下のコードを編集すると、canvas の変更個所をその場で確認できます:</p>

<div class="hidden">
<h6 id="Playable_code" name="Playable_code">Playable code</h6>

<pre class="brush: html">&lt;canvas id="canvas" width="400" height="200" class="playable-canvas"&gt;&lt;/canvas&gt;
&lt;div class="playable-buttons"&gt;
  &lt;input id="edit" type="button" value="編集" /&gt;
  &lt;input id="reset" type="button" value="リセット" /&gt;
&lt;/div&gt;
&lt;textarea id="code" class="playable-code"&gt;
ctx.font = "48px serif";
ctx.fillText("Hello world", 50, 100);&lt;/textarea&gt;
</pre>

<pre class="brush: js">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
</pre>
</div>

<p>{{EmbedLiveSample('Playable_code', 700, 360)}}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-filltext", "CanvasRenderingContext2D.fillText")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.CanvasRenderingContext2D.fillText")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このメソッドを定義するインターフェイスである {{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.strokeText()")}}</li>
</ul>
