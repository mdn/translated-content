---
title: CSSValue.cssText
slug: Web/API/CSSValue/cssText
tags:
  - API
  - CSSValue
  - Property
  - Reference
  - cssText
translation_of: Web/API/CSSValue/cssText
---
<div>{{APIRef("DOM")}}</div>

<p>{{domxref("CSSValue")}} インターフェイスの <code><strong>cssText</strong></code> プロパティは、現在計算されている CSS プロパティ値を表します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate"><var>cssText</var> = <var>cssValue</var>.cssText;
</pre>

<h3 id="値">値</h3>

<p>現在の CSS プロパティ値を表す {{domxref("DOMString")}} 。</p>

<h2 id="例">例</h2>

<pre class="brush: js; highlight[3] notranslate">var styleDeclaration = document.styleSheets[0].cssRules[0].style;
var cssValue = styleDeclaration.getPropertyCSSValue("color");
console.log(cssValue.cssText);
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Style', 'css.html#CSS-CSSValue-cssText', 'CSSValue.cssText')}}</td>
   <td>{{Spec2('DOM2 Style')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.CSSValue.cssText")}}</p>
</div>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}}</li>
</ul>
