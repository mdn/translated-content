---
title: HTMLHeadElement
slug: Web/API/HTMLHeadElement
tags:
  - DOM
  - DOM Reference
translation_of: Web/API/HTMLHeadElement
---
<div>
 {{ApiRef}}</div>
<p>DOM の <code>head</code> 要素は、文書の概要、メタデータを含む HTMLHeadElement インタフェース（{{HTMLVersionInline("5")}} <a href="http://www.w3.org/TR/html5/semantics.html#htmlheadelement">HTMLHeadElement</a> / {{HTMLVersionInline("4")}} <a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-77253168">HTMLHeadElement</a>）を公開します。このオブジェクトは、{{domxref("element")}} の節で述べられている全てのプロパティとメソッドを継承します。HTML5 に於いては、このインタフェースは、HTMLElement を継承元とするインタフェースですが、その他の追加メンバは定義されていません。</p>
<h2 id="Properties" name="Properties">プロパティ</h2>
<p>{{domxref("HTMLElement")}} インタフェースからの継承プロパティの他に、以下の固有プロパティを持ちます。</p>
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
   <td><code>profile</code></td>
   <td>{{domxref("DOMString")}}</td>
   <td>1 つ以上のメタデータプロファイルの URI。複数の場合は半角空白で区切って指定する。{{deprecated_inline("2.0")}} {{obsolete_inline("7.0")}}</td>
  </tr>
 </tbody>
</table>
<h2 id="Methods" name="Methods">メソッド</h2>
<p>固有のメソッドは持ちません。{{domxref("HTMLElement")}} インタフェースから継承するメソッドを持ちます。</p>
<h2 id="Specifications" name="Specifications">仕様</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "semantics.html#the-head-element", "HTMLHeadElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName("HTML5 W3C")}} より変更無し</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "document-metadata.html#the-head-element", "HTMLHeadElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td><code>profile</code> プロパティが削除された</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-77253168', 'HTMLHeadElement')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>{{SpecName("DOM1")}} より変更無し</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-77253168', 'HTMLHeadElement')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>
<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.HTMLHeadElement")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>
<ul>
 <li>{{HTMLElement("head")}} 要素 - <code>HTMLHeadElement</code> インタフェースを持つ HTML 要素</li>
</ul>
