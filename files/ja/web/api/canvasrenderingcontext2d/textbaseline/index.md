---
title: CanvasRenderingContext2D.textBaseline
slug: Web/API/CanvasRenderingContext2D/textBaseline
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
  - Référence(2)
translation_of: Web/API/CanvasRenderingContext2D/textBaseline
---
<div>{{APIRef}}</div>

<p>Canvas 2D API の <code><strong>CanvasRenderingContext2D.textBaseline</strong></code> プロパティは、テキストを描画するときに用いられる現在のテキストのベースライン (基準線) を指定します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><var><em>ctx</em>.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";</var>
</pre>

<h3 id="オプション">オプション</h3>

<p>指定可能な値:</p>

<dl>
 <dt>top</dt>
 <dd>テキストベースラインは em square 一辺が 1 em の正方形  の上になります。</dd>
 <dt>hanging</dt>
 <dd>テキストベースラインは hanging ベースラインになります。</dd>
 <dt>middle</dt>
 <dd>テキストベースラインは em square の真ん中になります。</dd>
 <dt>alphabetic (default value)</dt>
 <dd>テキストベースラインは標準的な alphabetic ベースラインになります。</dd>
 <dt>ideographic</dt>
 <dd>テキストベースラインは ideographic ベースラインになります。文字の主要範囲の底辺が alphabetic ベースラインの下からはみ出る場合があるのに対し、このラインは主要範囲の底辺そのものを表します。(中国語、日本語、韓国語で意味を持ちます。)</dd>
 <dt>bottom</dt>
 <dd>テキストベースラインは bounding box の下辺になります。ideographic ベースラインとの違いは、ディセンダー (descenders) をも含めて底辺を決めるかどうかです。</dd>
</dl>

<p>デフォルト値は <code>alphabetic</code> です。</p>

<h2 id="例">例</h2>

<h3 id="Using_the_textBaseline_property" name="Using_the_textBaseline_property"><code>textBaseline</code> プロパティの使用例</h3>

<p>さまざまなベースライン設定を行う例です。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas" width="550" height="500"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var baselines = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
ctx.font = '36px serif';
ctx.strokeStyle = 'red';

baselines.forEach(function (baseline, index) {
    ctx.textBaseline = baseline;
    var y = 75 + index * 75;
    ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(550, y + 0.5); ctx.stroke();
    ctx.fillText('Abcdefghijklmnop (' + baseline + ')', 0, y);
});
</pre>

<p>以下のコードを編集すると、canvas の変更個所をその場で確認できます:</p>

<div class="hidden">
<h6 id="Playable_code" name="Playable_code">Playable code</h6>

<pre class="brush: html">&lt;canvas id="canvas" width="550" height="500" class="playable-canvas"&gt;&lt;/canvas&gt;
&lt;div class="playable-buttons"&gt;
  &lt;input id="edit" type="button" value="Edit" /&gt;
  &lt;input id="reset" type="button" value="Reset" /&gt;
&lt;/div&gt;
&lt;textarea id="code" class="playable-code"&gt;
var baselines = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
ctx.font = '36px serif';
ctx.strokeStyle = 'red';
baselines.forEach(function (baseline, index) {
    ctx.textBaseline = baseline;
    var y = 75 + index * 75;
    ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(550, y + 0.5); ctx.stroke();
    ctx.fillText('Abcdefghijklmnop (' + baseline + ')', 0, y);
});
&lt;/textarea&gt;</pre>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

function drawCanvas() {
  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
  ctx.restore();
}

reset.addEventListener('click', function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener('click', function() {
  textarea.focus();
})

textarea.addEventListener('input', drawCanvas);
window.addEventListener('load', drawCanvas);
</pre>
</div>

<p>{{ EmbedLiveSample('Playable_code', 700, 700) }}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-textbaseline", "CanvasRenderingContext2D.textBaseline")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>



<p>{{Compat("api.CanvasRenderingContext2D.textBaseline")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>このメソッドを定義するインターフェイスである {{domxref("CanvasRenderingContext2D")}}</li>
</ul>
