---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
tags:
  - DOM
  - DOM Reference
  - 要更新
translation_of: Web/API/HTMLStyleElement
---
<div>{{ApiRef}}</div>

<p><code>HTMLStyleElement</code> インタフェースは {{HTMLElement("style")}} 要素を表すインタフェースです。{{domxref("HTMLElement")}} と {{domxref("LinkStyle")}} のプロパティとメソッドを継承しています。</p>

<p>This interface doesn't allow to manipulate the CSS it contains (in most case). To manipulate CSS, see <a href="/ja/docs/DOM/Using_dynamic_styling_information">Using dynamic styling information</a> for an overview of the objects used to manipulate specified CSS properties using the DOM.</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p>{{domxref("HTMLElement")}} および {{domxref("LinkStyle")}} から継承するプロパティの他に、以下の固有プロパティを持ちます。</p>

<dl>
 <dt>{{domxref("HTMLStyleElement.media")}}</dt>
 <dd>スタイル情報の適用先として意図するメディアを表す {{domxref("DOMString")}}</dd>
 <dt>{{domxref("HTMLStyleElement.type")}}</dt>
 <dd>この style 要素のスタイルの種類を表す {{domxref("DOMString")}}</dd>
 <dt>{{domxref("HTMLStyleElement.disabled")}}</dt>
 <dd>{{domxref("Boolean")}}。スタイルシート有効時には <code>true</code> 、無効時には <code>false</code> を返す。</dd>
 <dt>{{domxref("HTMLStyleElement.scoped")}}</dt>
 <dd>{{domxref("Boolean")}}。スタイルの適用対象が文書全体の場合は <code>false</code>、 <code>scoped</code> 属性により適用範囲が制限されている場合は <code>true</code> を返す。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p>固有のメソッドは持ちません。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "semantics.html#the-style-element", "HTMLStyleElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName("HTML5 W3C")}} より変更無し</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "document-metadata.html#the-style-element", "HTMLStyleElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td><code>scoped</code> プロパティの追加</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-16428977', 'HTMLStyleElement')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>{{domxref("LinkStyle")}} インタフェースからの継承の追加</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-16428977', 'HTMLStyleElement')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<div>


<p>{{Compat("api.HTMLStyleElement")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("style")}} - <code>HTMLStyleElement</code> インタフェースを持つ HTML 要素</li>
 <li><a href="/ja/docs/Web/Guide/DOM/Using_dynamic_styling_information">動的スタイル情報の利用</a></li>
</ul>
