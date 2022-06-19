---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
tags:
  - DOM
  - DOM Reference
translation_of: Web/API/HTMLMetaElement
---
<div>{{ApiRef}}</div>

<p>meta オブジェクトは、文書についての 説明用メタデータ (descriptive metadata) を含む <a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-37041454">HTMLMetaElement</a> インタフェースを公開します。</p>

<p>このオブジェクトは {{domxref("HTMLElement")}} インタフェースの全てのプロパティとメソッドを継承しています。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt><code>content</code></dt>
 <dd>meta-data 属性の値の取得 / 設定</dd>
 <dt><code>httpEquiv</code></dt>
 <dd>文書に定義された HTTP レスポンスヘッダの名前の取得 / 設定</dd>
 <dt><code>name</code></dt>
 <dd>文書に指定された meta-data 属性の名前の取得 / 設定</dd>
 <dt><code>scheme</code> {{obsolete_inline}}</dt>
 <dd>meta-data 属性の値を解釈する為に使用されるスキームの名前を取得 / 設定</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "semantics.html#the-meta-element", "HTMLMetaElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName("HTML5 W3C")}} より変更無し</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "document-metadata.html#the-meta-element", "HTMLMetaElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td><code>scheme</code> プロパティが廃止となった</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-37041454', 'HTMLMetaElement')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>{{SpecName("DOM1")}} より変更無し</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-37041454', 'HTMLMetaElement')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.HTMLMetaElement")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("meta")}} 要素 - <code>HTMLMetaElement</code> インタフェースを持つ HTML 要素</li>
</ul>
