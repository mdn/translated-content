---
title: HTMLMediaElement.loop
slug: Web/API/HTMLMediaElement/loop
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Web
translation_of: Web/API/HTMLMediaElement/loop
---
{{APIRef("HTML DOM")}}

<span class="seoSummary">**`HTMLMediaElement.loop`** プロパティは、{{htmlattrxref("loop", "video")}} HTML 属性を反映します。 これは、メディア要素が最後に到達したときに最初からやり直すかどうかを制御します。</span>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js">var <em>loop</em> = <em>video</em>.loop;
<em>audio</em>.loop = true;
</pre>

<h3 id="Value" name="Value">値</h3>

{{jsxref("Boolean")}}。

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var obj = document.createElement('video');
obj.loop = true; // true
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#dom-media-loop", "HTMLMediaElement.loop")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#htmlmediaelement", "HTMLMediaElement.loop")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



{{Compat("api.HTMLMediaElement.loop")}}

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>これを定義するインターフェース、{{domxref("HTMLMediaElement")}}。</li>
</ul>
