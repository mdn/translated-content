---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Property
  - Reference
translation_of: Web/API/HTMLElement/contentEditable
---
<p>{{APIRef("HTML DOM")}}</p>

<p><span class="seoSummary">{{domxref("HTMLElement")}} インターフェイスの <strong><code>contentEditable</code></strong> プロパティは、要素が編集可能かどうかを指定します。</span> この列挙属性には、次の値を設定できます。</p>

<ul>
 <li>'<code>true</code>' は、要素の内容が編集可能 (<code>contenteditable</code>) であることを示します。</li>
 <li>'<code>false</code>' は、要素が編集できないことを示します。</li>
 <li>'<code>inherit</code>' は、要素がその親の編集可能状態を継承することを示します。</li>
</ul>

<p>{{domxref("HTMLElement.isContentEditable")}} プロパティを使用して、このプロパティの計算された {{jsxref("Boolean")}} 値をテストできます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>editable</var> = <var>element</var>.contentEditable
<var>element</var>.contentEditable = 'true'
</pre>

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
   <td>{{SpecName('HTML WHATWG', 'interaction.html#contenteditable', 'contenteditable')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLElement.contentEditable")}}</p>

<p>Internet Explorer では、<code>contenteditable</code> を {{htmlelement("table")}}、{{htmlelement("col")}}、{{htmlelement("colgroup")}}、{{htmlelement("tbody")}}、{{htmlelement("td")}}、{{htmlelement("tfoot")}}、{{htmlelement("th")}}、{{htmlelement("thead")}}、および {{htmlelement("tr")}} 要素に直接適用することはできません。 コンテンツを編集可能な {{htmlelement("span")}} または {{htmlelement("div")}} 要素を、表の個々のセル内に配置できます。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/HTML/Editable_content">コンテンツを編集可能にする</a></li>
 <li>{{domxref("HTMLElement.isContentEditable")}}</li>
 <li>{{htmlattrxref("contenteditable")}} グローバル属性</li>
</ul>
