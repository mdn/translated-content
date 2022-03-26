---
title: CanvasRenderingContext2D.stroke()
slug: Web/API/CanvasRenderingContext2D/stroke
translation_of: Web/API/CanvasRenderingContext2D/stroke
---
<div>{{APIRef}}</div>

<p>Canvas 2D API の <code><strong>CanvasRenderingContext2D</strong></code><strong><code>.stroke()</code></strong> メソッドは、現在のあるいは渡されたパスを、ノンゼロワインディング規則を使って、現在のストロークスタイルで描きます。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">void <var><em>ctx</em>.stroke();</var>
void <var><em>ctx</em>.stroke(path);</var>
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>path</code></dt>
 <dd>描画する {{domxref("Path2D")}} パス。</dd>
</dl>

<h2 id="例">例</h2>

<h3 id="stroke_メソッドを使う"><code>stroke</code> メソッドを使う</h3>

<p>これは <code>stroke</code> メソッドを使ってパスを描画する、実にシンプルなコード断片です。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js; highlight:[4]">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.stroke();
</pre>

<p>下のコードを編集して、変更が canvas に直に反映されることを確認してください。</p>

<div class="hidden">
<h6 id="Playable_code">Playable code</h6>

<pre class="brush: html">&lt;canvas id="canvas" width="400" height="200" class="playable-canvas"&gt;&lt;/canvas&gt;
&lt;div class="playable-buttons"&gt;
  &lt;input id="edit" type="button" value="Edit" /&gt;
  &lt;input id="reset" type="button" value="Reset" /&gt;
&lt;/div&gt;
&lt;textarea id="code" class="playable-code"&gt;
ctx.rect(10, 10, 100, 100);
ctx.stroke();&lt;/textarea&gt;
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

<p>{{ EmbedLiveSample('Playable_code', 700, 360) }}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-stroke", "CanvasRenderingContext2D.stroke")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.CanvasRenderingContext2D.stroke")}}</p>

<h2 id="参考情報">参考情報</h2>

<ul>
 <li>このメソッドを定義するインターフェイス:  {{domxref("CanvasRenderingContext2D")}}</li>
</ul>
