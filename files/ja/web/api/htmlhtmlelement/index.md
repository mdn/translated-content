---
title: HTMLHtmlElement
slug: Web/API/HTMLHtmlElement
tags:
  - DOM
  - DOM Reference
translation_of: Web/API/HTMLHtmlElement
---
<div>
 {{ApiRef}}</div>

<p><code>html</code> オブジェクトは、HTML 文書のルートノードとして機能する <code>HTMLHtmlElement</code> インタフェース ({{HTMLVersionInline("5")}} <a href="http://www.w3.org/TR/html5/semantics.html#htmlhtmlelement">HTMLHtmlElement</a> / {{HTMLVersionInline("4")}} <a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-33759296">HTMLHtmlElement</a>) インタフェースを提供します。このオブジェクトは <a href="/ja/docs/DOM/element" title="DOM/element">element</a> インタフェースの全てのプロパティとメソッドを継承しています。HTML5 に於いては、このインタフェースは {{domxref("HTMLElement")}} インタフェースから継承されるものですが、追加メンバは提供されていません。</p>
<p>文書の <code>html</code> オブジェクトは <a href="/ja/docs/Web/API/document.documentElement"><code>document.documentElement</code></a> プロパティの値として取得可能です。</p>
<h2 id="Properties" name="Properties">プロパティ</h2>
<p>{{domxref("HTMLElement")}} から継承するプロパティの他に、以下のプロパティを持ちます。</p>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">名称</th>
   <th scope="col">型</th>
   <th scope="col">説明</th>
  </tr>
  <tr>
   <td><code>version</code> {{deprecatedGeneric('inline','HTML4.01')}} {{obsoleteGeneric('inline','HTML5')}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>その文書を制御する HTML 文書型宣言によって定義される文書のバージョンを取得</td>
  </tr>
 </tbody>
</table>
<h2 id="Methods" name="Methods">メソッド</h2>
<p>{{domxref("HTMLElement")}} から継承するもの以外に固有のメソッドは持ちません。</p>
<h2 id="Specifications" name="Specifications">仕様</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "semantics.html#the-html-element", "HTMLHtmlElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName("HTML5 W3C")}} より変更無し</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "semantics.html#the-html-element", "HTMLHtmlElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>The <code>version</code> element has been removed, as it is non-conforming.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-33759296', 'HTMLHtmlElement')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>{{SpecName("HTML4.01")}} の要素の仕様変更を反映し、 <code>version</code> プロパティが廃止された。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-33759296', 'HTMLHtmlElement')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>
<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.HTMLHtmlElement")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>
<ul>
 <li>{{HTMLElement("html")}} 要素 - <code>HTMLHtmlElement</code> インタフェースを持つ HTML 要素</li>
</ul>
