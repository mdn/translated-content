---
title: CanvasRenderingContext2D.clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
translation_of: Web/API/CanvasRenderingContext2D/clearRect
---
<div>{{APIRef}}</div>

<p><code><strong>CanvasRenderingContext2D</strong></code><strong><code>.clearRect()</code></strong> は、座標 <em>(x, y)</em> を始点とする大きさ <em>(width, height)</em> の領域を、透明色（透明な黒）で塗りつぶします。領域内に描画されていたすべてのコンテンツは消去されます。</p>

<h2 id="文法">文法</h2>

<pre class="syntaxbox">void <var><em>ctx</em>.clearRect(x, y, width, height);</var>
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>矩形領域の始点のX座標を指定します。</dd>
 <dt><code>y</code></dt>
 <dd>矩形領域の始点のY座標を指定します。</dd>
 <dt><code>width</code></dt>
 <dd>矩形領域の幅を指定します。</dd>
 <dt><code>height</code></dt>
 <dd>矩形領域の高さを指定します。</dd>
</dl>

<h2 id="Usage_notes">Usage notes</h2>

<p><code>clearRect</code> にちなんでよく起きる問題は <a href="/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Drawing_paths">不適切なパス</a>によって起きています。<code>clearRect</code> を呼んで新しいフレームを描画し始める前に {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} を呼ぶのを忘れないようにして下さい。</p>

<p>訳注:<br>
 clearRect() 自体の動作にパスの設定は関係ありません。「clearRect()の後はbeginPath()を呼ばなければならない」というルールはありません。この注釈は「キャンバスをクリアした後って大体新しいフレームを描画しようとするよね。そのときに beginPath() し忘れておかしなことになっているのを clearRect() のせいにしないようにね」ということを言いたいのだと思います。</p>

<h2 id="使用例">使用例</h2>

<h3 id="clearRect_の使い方"><code>clearRect</code> の使い方</h3>

<p><code>clearRect</code> メソッドを使用する単純な例です。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js; highlight:[11]">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.lineTo(120, 120);
ctx.closePath(); // パスが閉じるので、三角形の最後の辺も描画される。
ctx.stroke();

ctx.clearRect(10, 10, 100, 100);

// キャンバス全体を消去するには、以下のようにします。
// ctx.clearRect(0, 0, canvas.width, canvas.height);
</pre>

<p>以下のコードを編集して、変更がどのように適用されるか試してみてください。</p>

<div class="hidden">
<h6 id="Playable_code">Playable code</h6>

<pre class="brush: html">&lt;canvas id="canvas" width="400" height="200" class="playable-canvas"&gt;&lt;/canvas&gt;
&lt;div class="playable-buttons"&gt;
  &lt;input id="edit" type="button" value="Edit" /&gt;
  &lt;input id="reset" type="button" value="Reset" /&gt;
&lt;/div&gt;
&lt;textarea id="code" class="playable-code" style="height:140px;"&gt;
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.lineTo(120,120);
ctx.closePath(); // draws last line of the triangle
ctx.stroke();

ctx.clearRect(10, 10, 100, 100);&lt;/textarea&gt;
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

<p>{{EmbedLiveSample('Playable_code', 700, 400)}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-clearrect", "CanvasRenderingContext2D.clearRect")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ間の互換性">ブラウザ間の互換性</h2>



<p>{{Compat("api.CanvasRenderingContext2D.clearRect")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>このメソッドは以下で定義されています。 {{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.fillRect()")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.strokeRect()")}}</li>
</ul>
