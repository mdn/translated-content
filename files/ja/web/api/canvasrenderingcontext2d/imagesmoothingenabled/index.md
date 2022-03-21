---
title: CanvasRenderingContext2D.imageSmoothingEnabled
slug: Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Experimental
  - Property
  - Reference
translation_of: Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
---
<div>{{APIRef}} {{SeeCompatTable}}</div>

<p>Canvas 2D API の <code><strong>CanvasRenderingContext2D</strong></code><strong><code>.imageSmoothingEnabled</code></strong> プロパティ は、画像が滑らか（true：既定値）か、またはそうではない（false）かによって、変化するように設定できます。<code>imageSmoothingEnabled</code> プロパティを取得すると、設定された最新の値が返されます。</p>

<p>このプロパティは、たとえばキャンバスをスケーリングするような、<span>ピクセル</span><span>アート</span><span>をテーマにした</span><span>ゲームに役立ちます。</span> 既定のリサイズアルゴリズムは、ぼやかし効果をかけることで、美しいピクセルを崩してしまいます。このような場合、このプロパティを <code>false</code> に設定します。{{cssxref("image-rendering")}} プロパティも確認してください。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><var><em>ctx</em>.imageSmoothingEnabled = value;</var></pre>

<h3 id="オプション">オプション</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>滑らかな画像かどうかを示す {{jsxref("Boolean")}} 値。</dd>
</dl>

<h2 id="例">例</h2>

<h3 id="Using_the_globalAlpha_property" name="Using_the_globalAlpha_property"><code>imageSmoothingEnabled</code> プロパティを使用する</h3>

<p>これは、スケーリングされた画像で <code>imageSmoothingEnabled</code> property プロパティを使用するコードスニペットです。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js; highlight[7-10]">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = function() {
 ctx.mozImageSmoothingEnabled = false;
 ctx.webkitImageSmoothingEnabled = false;
 ctx.msImageSmoothingEnabled = false;
 ctx.imageSmoothingEnabled = false;
 ctx.drawImage(img, 0, 0, 400, 200);
};
</pre>

<p>以下のコードを編集して、canvas で変更がライブアップデートされることを確認してみてください：</p>

<div class="hidden">
<h6 id="Playable_code" name="Playable_code">Playable code</h6>

<pre class="brush: html">&lt;canvas id="canvas" width="400" height="200" class="playable-canvas"&gt;&lt;/canvas&gt;
&lt;div class="playable-buttons"&gt;
  &lt;input id="edit" type="button" value="Edit" /&gt;
  &lt;input id="reset" type="button" value="Reset" /&gt;
&lt;/div&gt;
&lt;textarea id="code" class="playable-code" style="height:140px;"&gt;
var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = function() {
 ctx.mozImageSmoothingEnabled = false;
 ctx.webkitImageSmoothingEnabled = false;
 ctx.msImageSmoothingEnabled = false;
 ctx.imageSmoothingEnabled = false;
 ctx.drawImage(img, 0, 0, 400, 200);
};&lt;/textarea&gt;
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

<p>{{ EmbedLiveSample('Playable_code', 700, 400) }}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-imagesmoothingenabled", "CanvasRenderingContext2D.imageSmoothingEnabled")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.CanvasRenderingContext2D.imageSmoothingEnabled")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>このプロパティを定義しているインターフェース： {{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{cssxref("image-rendering")}}</li>
</ul>
