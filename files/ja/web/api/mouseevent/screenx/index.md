---
title: MouseEvent.screenX
slug: Web/API/MouseEvent/screenX
translation_of: Web/API/MouseEvent/screenX
---
<p>{{APIRef("DOM Events")}}</p>

<p><strong><code>MouseEvent.screenX</code></strong> は、イベントの発生した位置の、スクリーン内での X 座標を参照できる読み取り専用の属性です。</p>

<h2 id="記法">記法</h2>

<pre class="syntaxbox">var <em>pixelNumber</em> = <em>instanceOfMouseEvent</em>.screenX
</pre>

<h3 id="返り値">返り値</h3>

<ul>
 <li><em><code>pixelNumber</code></em> はスクリーンの左上の点からのピクセル数です。</li>
</ul>

<h3 id="Example" name="Example">使用例</h3>

<pre class="brush: html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;screenX\screenY example&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function showCoords(evt){
  alert(
    "screenX value: " + evt.screenX + "\n"
    + "screenY value: " + evt.screenY + "\n"
  );
}

&lt;/script&gt;
&lt;/head&gt;

&lt;body onmousedown="showCoords(event)"&gt;
&lt;p&gt;To display the mouse coordinates click anywhere on the page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>window や document のような領域の広い要素に対してイベントを処理する場合、以下のように座標を元に適切な処理を呼び出すことができます。</p>

<pre class="brush: js">function checkClickMap(e) {
  if (e.screenX &lt; 50) doRedButton();
  if (50 &lt;= e.screenX<span style="font-size: 1rem;"> &amp;&amp; </span>e.screenX<span style="font-size: 1rem;"> &lt; 100)</span><span style="font-size: 1rem;"> doYellowButton();
</span>  if (e.screenX &gt;= 100) doRedButton();
}
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events','#widl-MouseEvent-screenX','MouseEvent.screenX')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td> {{SpecName('DOM2 Events')}} からの変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Events','#Events-MouseEvent','MouseEvent.sceenX')}}</td>
   <td>{{Spec2('DOM2 Events')}}</td>
   <td>最初の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ互換性</h2>

<p>{{Compat("api.MouseEvent.screenX")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{ domxref("MouseEvent") }}</li>
</ul>
