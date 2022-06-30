---
title: HTMLMediaElement.muted
slug: Web/API/HTMLMediaElement/muted
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Web
translation_of: Web/API/HTMLMediaElement/muted
---
{{APIRef("HTML DOM")}}

**`HTMLMediaElement.muted`** は、メディア要素がミュートしているかどうかを示します。

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>isMuted</em> = <em>audioOrVideo</em>.muted
<em>audio</em>.muted = true;</pre>

<h3 id="Value" name="Value">値</h3>

{{jsxref("Boolean")}}。 `true` はミュートしていることを意味し、`false` はミュートしていないことを意味します。

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var obj = document.createElement('video');
console.log(obj.muted); // false
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
   <td>{{SpecName('HTML WHATWG', "#dom-media-muted", "HTMLMediaElement.muted")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#htmlmediaelement", "HTMLMediaElement.muted")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



{{Compat("api.HTMLMediaElement.muted")}}

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>これを定義するインターフェース、{{domxref("HTMLMediaElement")}}。</li>
 <li>{{domxref("HTMLMediaElement.defaultMuted")}}</li>
 <li>{{domxref("HTMLMediaElement.volume")}}</li>
</ul>
