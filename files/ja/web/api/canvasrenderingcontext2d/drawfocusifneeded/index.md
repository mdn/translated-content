---
title: CanvasRenderingContext2D.drawFocusIfNeeded()
slug: Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
translation_of: Web/API/CanvasRenderingContext2D/drawFocusIfNeeded
---
<div>{{APIRef}}</div>

<p>Canvas 2D APIの<code><strong>CanvasRenderingContext2D</strong></code><strong><code>.drawFocusIfNeeded()</code></strong>メソッドは、パラメーターで与えられた要素がフォーカスした時に、現在のパスもしくは与えられたパスの周りにフォーカスリングを描画します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">void <var><em>ctx</em>.drawFocusIfNeeded(element);<var>
void <var><em>ctx</em>.drawFocusIfNeeded(path, element);</var></var></var>
</pre>

<h3 id="パラメーター">パラメーター</h3>

<dl>
 <dt>element</dt>
 <dd>フォーカスしたかどうかをチェックする要素。</dd>
 <dt><code>path</code></dt>
 <dd>利用する {{domxref("Path2D")}} パス。</dd>
</dl>

<h2 id="例">例</h2>

<h3 id="drawFocusIfNeededメソッドを使う"><code>drawFocusIfNeeded</code>メソッドを使う</h3>

<p>これは、<code>drawFocusIfNeeded</code>メソッドを使った簡単なコードです</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;
  &lt;input id="button" type="range" min="1" max="12"&gt;
&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js; highlight:[9]">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var button = document.getElementById("button");

button.focus();

ctx.beginPath();
ctx.rect(10, 10, 30, 30);
ctx.drawFocusIfNeeded(button);
</pre>

<p>下のコードを編集すると、変更がリアルタイムにcanvasに反映されます:</p>

<div class="hidden">
<h6 id="Playable_code">Playable code</h6>

<pre class="brush: html">&lt;canvas id="canvas" width="400" height="200" class="playable-canvas"&gt;
&lt;input id="button" type="range" min="1" max="12"&gt;
&lt;/canvas&gt;
&lt;div class="playable-buttons"&gt;
  &lt;input id="edit" type="button" value="Edit" /&gt;
  &lt;input id="reset" type="button" value="Reset" /&gt;
&lt;/div&gt;
&lt;textarea id="code" class="playable-code"&gt;
button.focus();
ctx.beginPath();
ctx.rect(10, 10, 30, 30);
ctx.drawFocusIfNeeded(button);&lt;/textarea&gt;
</pre>

<pre class="brush: js">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var button = document.getElementById("button");
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

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-drawfocusifneeded", "CanvasRenderingContext2D.drawFocusIfNeeded")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>

<p>{{Compat("api.CanvasRenderingContext2D.drawFocusIfNeeded")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{domxref("CanvasRenderingContext2D")}} インタフェースがこのメソッドを定義しています。</li>
</ul>
