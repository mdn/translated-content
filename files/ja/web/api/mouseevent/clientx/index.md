---
title: MouseEvent.clientX
slug: Web/API/MouseEvent/clientX
translation_of: Web/API/MouseEvent/clientX
---
<p>{{APIRef("DOM Events")}}</p>

<p><strong><code>MouseEvent.clientX</code></strong> は event の起きた点の、クライアント内での X 座標を参照できる読み取り専用の属性です。画面の左上でクリックした場合、ページの横スクロール位置に関わらず、その値は 0 となります。</p>

<h2 id="記法">記法</h2>

<pre class="syntaxbox">var <em>x</em> = <em>instanceOfMouseEvent</em>.clientX
</pre>

<h3 id="返り値">返り値</h3>

<p>数値</p>

<h2 id="Example" name="Example">使用例</h2>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;clientX\clientY example&lt;/title&gt;

&lt;script&gt;
function showCoords(evt){
  alert(
    "clientX value: " + evt.clientX + "\n" +
    "clientY value: " + evt.clientY + "\n"
  );
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body onmousedown="showCoords(event)"&gt;
&lt;p&gt;To display the mouse coordinates click anywhere on the page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
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
   <td>{{SpecName('DOM3 Events','#widl-MouseEvent-clientX','MouseEvent.clientX')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>{{SpecName('DOM2 Events')}} からの変更はなし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Events','#Events-MouseEvent','MouseEvent.clientX')}}</td>
   <td>{{Spec2('DOM2 Events')}}</td>
   <td>最初の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ互換性</h2>

<p>{{Compat("api.MouseEvent.clientX")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{ domxref("MouseEvent") }}</li>
 <li>{{domxref("event.clientY","clientY")}}</li>
 <li>{{domxref("event.screenX","screenX")}} / {{domxref("event.screenY","screenY")}}</li>
</ul>
