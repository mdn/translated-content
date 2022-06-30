---
title: HTMLMediaElement.paused
slug: Web/API/HTMLMediaElement/paused
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Read-only
translation_of: Web/API/HTMLMediaElement/paused
---
{{APIRef("HTML DOM")}}

<span class="seoSummary">読み取り専用の **`HTMLMediaElement.paused`** プロパティは、メディア要素を一時停止しているかどうかを示します。</span>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>isPaused</em> = <em>audioOrVideo</em>.paused</pre>

<h3 id="Value" name="Value">値</h3>

{{jsxref("Boolean")}}。 `true` は一時停止中で、`false` は一時停止していません。

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var obj = document.createElement('video');
console.log(obj.paused); // true
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
   <td>{{SpecName('HTML WHATWG', "#dom-media-paused", "HTMLMediaElement.paused")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#htmlmediaelement", "HTMLMediaElement.paused")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



{{Compat("api.HTMLMediaElement.paused")}}

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>これを定義するインターフェース、{{domxref("HTMLMediaElement")}}。</li>
</ul>
