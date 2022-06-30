---
title: HTMLMediaElement.src
slug: Web/API/HTMLMediaElement/src
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Reference
  - src
translation_of: Web/API/HTMLMediaElement/src
---
{{APIRef("HTML DOM")}}

**`HTMLMediaElement.src`** プロパティは、HTML メディア要素の `src` 属性の値を反映します。 これは、要素で使用するメディアリソースの URL を示します。

<div class="note">
**注**: この要素が現在実際に使用しているメディアリソースの URL を知る最善の方法は、{{domxref("HTMLMediaElement.currentSrc", "currentSrc")}} 属性の値を調べることです。 これは、（{{HTMLElement("source")}} 要素を表す）{{domxref("HTMLSourceElement")}} で提供されるリストからの最良または優先メディアリソースの選択も考慮に入れます。
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>mediaUrl</em> = <em>HTMLMediaElement</em>.src;</pre>

<h3 id="Value" name="Value">値</h3>

要素で使用するメディアリソースの URL を含む {{domxref("USVString")}} オブジェクト。 このプロパティは HTML 要素の `src` 属性の値を反映します。

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var obj = document.createElement('video');
console.log(obj.src); // ""
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
   <td>{{SpecName('HTML WHATWG', "embedded-content.html#dom-media-src", "HTMLMediaElement.src")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName('HTML5 W3C')}} から変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#dom-media-src", "HTMLMediaElement.src")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



{{Compat("api.HTMLMediaElement.src")}}

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>これを定義するインターフェース、{{domxref("HTMLMediaElement")}}。</li>
</ul>
