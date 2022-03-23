---
title: CanvasRenderingContext2D.beginPath()
slug: Web/API/CanvasRenderingContext2D/beginPath
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
translation_of: Web/API/CanvasRenderingContext2D/beginPath
---
<div>{{APIRef}}</div>

<p>Canvas 2D API の<code><strong>CanvasRenderingContext2D</strong></code><strong><code>.beginPath()</code></strong> メソッドは、サブパスのリストを空にすることにより新しいパスを開始します。新しいパスを作成したい場合、このメソッドを呼び出してください。</p>

<div class="note">
<p><strong>注:</strong> 新しいサブパス (つまり、現在のキャンバスの状態に一致するサブパス) を作成する場合、{{domxref("CanvasRenderingContext2D.moveTo()")}}を使用できます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">void <em>ctx</em>.beginPath();
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Creating_distinct_paths" name="Creating_distinct_paths">異なるパスの作成</h3>

<p>この例では、それぞれが1本の直線を含む2つのパスを作成します。</p>

<h4 id="HTML" name="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript" name="JavaScript">JavaScript</h4>

<p><code>beginPath()</code> メソッドはそれぞれの線についての処理開始前に呼ばれるため、各線は別々の色で描かれるでしょう。</p>

<pre class="brush: js; highlight:[5,12]">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 第1のパス
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// 第2のパス
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();
</pre>

<h4 id="Result" name="Result">実行結果</h4>

<p>{{ EmbedLiveSample('Creating_distinct_paths', 700, 180) }}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-beginpath", "CanvasRenderingContext2D.beginPath")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.CanvasRenderingContext2D.beginPath")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このメソッドを定義しているインターフェース: {{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.closePath()")}}</li>
</ul>
