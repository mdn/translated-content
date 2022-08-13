---
title: HTMLModElement
slug: Web/API/HTMLModElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
translation_of: Web/API/HTMLModElement
---
<div>{{ APIRef("HTML DOM") }}</div>

<p><strong><code>HTMLModElement</code></strong> インターフェイスは、 (継承によって {{domxref("HTMLElement")}} を通じて利用できる通常のメソッドやプロパティに加えて) 改変 (modification) 要素、すなわち {{HTMLElement("del")}} と {{HTMLElement("ins")}} を操作するための特有のプロパティを提供します。</p>

<p>{{InheritanceDiagram(600, 120)}}</p>

<h2 id="Properties">プロパティ</h2>

<p><em>親である {{domxref("HTMLElement")}} からプロパティを継承しています。</em></p>

<dl>
 <dt>{{domxref("HTMLModElement.cite")}}</dt>
 <dd>{{domxref("DOMString")}} で、 HTML の {{htmlattrxref("cite", "del")}} 属性の値を反映します。変更点についての説明を含むリソースの URI が入ります。</dd>
 <dt>{{domxref("HTMLModElement.dateTime")}}</dt>
 <dd>{{domxref("DOMString")}} で、 HTML の {{htmlattrxref("datetime", "del")}} 属性の値を反映します。変更されたタイムスタンプを示す日時文字列が入ります。</dd>
</dl>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "edits.html#htmlmodelement", "HTMLAnchorElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName("HTML5 W3C")}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "edits.html#htmlmodelement", "HTMLAnchorElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>{{SpecName("DOM2 HTML")}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-79359609', 'HTMLModElement')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>{{SpecName("DOM1")}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-79359609', 'HTMLModElement')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLModElement")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>このインターフェイスを実装している HTML 要素: {{HTMLElement("ins")}}, {{HTMLElement("del")}}</li>
</ul>
