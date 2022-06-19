---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
tags:
  - DOM
  - DOM Reference
  - 翻訳中
translation_of: Web/API/HTMLEmbedElement
---
<div>{{ApiRef}}</div>

<div class="note">
<p>この頁では HTML5 標準仕様で定義されている <a href="http://www.w3.org/TR/html5/the-iframe-element.html#htmlembedelement">HTMLEmbedElement</a> インタフェースについて説明しています。HTML5 以前の仕様はこのインタフェースに対応していません。</p>
</div>

<p>DOM の <code>embed</code> 要素は、その特別なプロパティを操作する為の <a href="http://www.w3.org/TR/html5/the-iframe-element.html#htmlembedelement">HTMLEmbedElement</a> インタフェースを公開します。 <code>embed</code> 要素は通常の {{domxref("HTMLElement")}} オブジェクトインタフェースからも継承により操作可能となっています。</p>

<p><code>HTMLElement</code> インタフェースから継承するものの他にいくつかの固有プロパティを持ちます。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>Inherits properties from its parent, {{domxref("HTMLElement")}}.</em></p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">名称</th>
   <th scope="col">型</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>align</code> {{obsolete_inline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>Enumerated property indicating alignment of the element's contents with respect to the surrounding context. The possible values are <code>"left"</code>, <code>"right"</code>, <code>"center"</code>, and <code>"justify"</code>.</td>
  </tr>
  <tr>
   <td><code>height</code></td>
   <td>{{domxref("DOMString")}}</td>
   <td>{{htmlattrxref("height", "embed")}} HTML 属性を反映。リソースの高さ（※内部的な数値でない、実際に表示されているリソースの高さ）を含む</td>
  </tr>
  <tr>
   <td><code>name</code> {{obsolete_inline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>The name of the embedded object.</td>
  </tr>
  <tr>
   <td><code>src</code></td>
   <td>{{domxref("DOMString")}}</td>
   <td>{{htmlattrxref("src", "embed")}} HTML 属性を反映。リソースのアドレスを含む</td>
  </tr>
  <tr>
   <td><code>type</code></td>
   <td>{{domxref("DOMString")}}</td>
   <td>{{htmlattrxref("type", "embed")}} HTML 属性を反映。リソースの型を含む</td>
  </tr>
  <tr>
   <td><code>width</code></td>
   <td>{{domxref("DOMString")}}</td>
   <td>{{htmlattrxref("width", "embed")}} HTML 属性を反映。リソースの幅（※内部的な数値でない、実際に表示されているリソースの幅）を含む</td>
  </tr>
 </tbody>
</table>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "embedded-content-0.html#the-embed-element", "HTMLEmbedElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>No change from {{SpecName("HTML5 W3C")}}, but it formally adds two obsolete properties, <code>name</code> and <code>align</code>, to help with compatibility with old Web sites.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#the-embed-element", "HTMLEmbedElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.HTMLEmbedElement")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement('embed')}} 要素 - HTMLEmbedElement インタフェースを持つ HTML 要素</li>
</ul>
