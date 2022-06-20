---
title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
translation_of: Web/API/HTMLIFrameElement/srcdoc
---
<div>{{APIRef('HTMLIFrameElement')}}</div>

<p>{{domxref("HTMLIFrameElement")}} の <strong><code>srcdoc</code></strong> プロパティは、ページの内容を指定します。</p>

<h2 id="Example_of_contentDocument" name="Example_of_contentDocument">例</h2>

<pre class="brush: js highlight:[3] line-numbers language-js">var iframe = document.createElement("iframe");
iframe.srcdoc = `&lt;!DOCTYPE html&gt;&lt;p&gt;Hello World!&lt;/p&gt;`;
document.body.appendChild(iframe);</pre>

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
   <td>{{SpecName('HTML WHATWG', '#attr-iframe-srcdoc', 'HTMLIFrameElement: srcdoc')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.HTMLIFrameElement.srcdoc")}}</p>
