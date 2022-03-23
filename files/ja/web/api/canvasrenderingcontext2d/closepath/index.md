---
title: CanvasRenderingContext2D.closePath()
slug: Web/API/CanvasRenderingContext2D/closePath
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
  - メソッド
  - リファレンス
translation_of: Web/API/CanvasRenderingContext2D/closePath
---
<div>{{APIRef}}</div>

<p><strong><code>CanvasRenderingContext2D.closePath()</code></strong> は Canvas 2D API のメソッドで、現在の点から現在のサブパスの開始点までの間に直線を追加することを試みます。図形がすでに閉じていたり、1つしか点がなかったりした場合は、この関数は何もしません。</p>

<p>このメソッドは canvas に直接は何も描きません。 {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} または {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} メソッドを使用してパスを描くことができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">void <em>ctx</em>.closePath();
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Closing_a_triangle" name="Closing_a_triangle">三角形を閉じる</h3>

<p>この例は最初に三角形の2つの (対角の) 辺を <code>lineTo()</code> メソッドを使用して作成します。その後で、図形の最初と最後の点を自動的に接続する <code>closePath()</code> メソッドで、底辺を作成します。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<p>The triangle's corners are at (20, 150), (120, 20), and (220, 150).</p>

<pre class="brush: js; highlight:[8]">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(20, 140);   // ペンを左下の隅へ移動
ctx.lineTo(120, 10);   // 上中央へ線を引く
ctx.lineTo(220, 140);  // 右下の隅へ線を引く
ctx.closePath();       // 左下の隅へ線を引く
ctx.stroke();
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Closing_a_triangle', 700, 180) }}</p>

<h3 id="Closing_just_one_sub-path" name="Closing_just_one_sub-path">サブパスを1つだけ閉じる</h3>

<p>この例では、非接続のサブパス3つからなるスマイリーの顔マークを描画します。</p>

<div class="blockIndicator note">
<p>メモ: すべての弧について、作成された後で <code>closePath()</code> が呼び出されていますが、最後の弧 (サブパス) のみが閉じられます。</p>
</div>

<h4 id="HTML_2" name="HTML_2">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript_2">JavaScript</h4>

<p>最初の2つの弧は顔の目を作成します。最後の弧は口を作成します。</p>

<pre class="brush: js; highlight:[10]">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(240, 20, 40, 0, Math.PI);
ctx.moveTo(100, 20);
ctx.arc(60, 20, 40, 0, Math.PI);
ctx.moveTo(215, 80);
ctx.arc(150, 80, 65, 0, Math.PI);
ctx.closePath();
ctx.lineWidth = 6;
ctx.stroke();
</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{ EmbedLiveSample('Closing_just_one_sub-path', 700, 180) }}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-closepath", "CanvasRenderingContext2D.closePath")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.CanvasRenderingContext2D.closePath")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.beginPath()")}}</li>
</ul>
