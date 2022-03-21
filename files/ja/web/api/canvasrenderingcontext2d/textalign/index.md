---
title: CanvasRenderingContext2D.textAlign
slug: Web/API/CanvasRenderingContext2D/textAlign
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
translation_of: Web/API/CanvasRenderingContext2D/textAlign
---
<div>{{APIRef}}</div>

<p>Canvas 2D API の <code><strong>CanvasRenderingContext2D.textAlign</strong></code> プロパティは、テキストを描画するときに用いられる現在のテキスト配置を指定します。CanvasRenderingContext2D.<strong>fillText</strong> メソッドの x の値に基づいて配置されることに注意してください。従って textAlign="center" は、テキストを x-50%*width の位置から描画します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var><em>ctx</em>.textAlign = "left" || "right" || "center" || "start" || "end";</var>
</pre>

<h3 id="Options" name="Options">オプション</h3>

<p>指定可能な値:</p>

<dl>
 <dt>left</dt>
 <dd>テキストを左揃えにします。</dd>
 <dt>right</dt>
 <dd>テキストを右揃えにします。</dd>
 <dt>center</dt>
 <dd>テキストを中央揃えにします。</dd>
 <dt>start</dt>
 <dd>テキストを行の標準な開始位置から配置します (左から右へのロケールは左揃え、右から左へのロケールは右揃え)。</dd>
 <dt>end</dt>
 <dd>テキストを行の標準な最終位置から配置します(左から右へのロケールは右揃え、右から左へのロケールは左揃え)。</dd>
</dl>

<p>デフォルト値は <code>start</code> です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_textAlign_property" name="Using_the_textAlign_property"><code>textAlign</code> プロパティの使用例</h3>

<p>さまざまなテキスト配置を設定するために <code>textAlign</code> プロパティを使用する、シンプルなコードスニペットです。</p>

<h4 id="HTML" name="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript" name="JavaScript">JavaScript</h4>

<pre class="brush: js">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.textAlign = "left";
ctx.strokeText("Hello world", 0, 100);
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
ctx.textAlign = "left";
ctx.strokeText("Hello world", 0, 100);&lt;/textarea&gt;
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
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-textalign", "CanvasRenderingContext2D.textAlign")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.CanvasRenderingContext2D.textAlign")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このメソッドを定義するインターフェイスである {{domxref("CanvasRenderingContext2D")}}</li>
</ul>
