---
title: HTMLMediaElement.volume
slug: Web/API/HTMLMediaElement/volume
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Reference
  - Volume
translation_of: Web/API/HTMLMediaElement/volume
---
{{APIRef("HTML DOM")}}

<span class="seoSummary">**`HTMLMediaElement.volume`** プロパティは、メディアを再生する音量を設定します。</span>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>volume</em> ​= <em>video</em>.volume; //1</pre>

<h3 id="Value" name="Value">値</h3>

`double` 型で値は 0 から 1 の間でなければなりません。 ここで、0 は効果的にミュートされ、1 が最大の可能な値です。

<h2 id="Example" name="Example">例</h2>

<pre>var obj = document.createElement('audio');
console.log(obj.volume); // 1
obj.volume = 0.75;</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#dom-media-volume", "HTMLMediaElement.volume")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#htmlmediaelement", "HTMLMediaElement.volume")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



{{Compat("api.HTMLMediaElement.volume")}}

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>これを定義するインターフェース、{{domxref("HTMLMediaElement")}}。</li>
 <li>{{domxref("HTMLMediaElement.muted")}}</li>
</ul>
