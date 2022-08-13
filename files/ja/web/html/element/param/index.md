---
title: '<param>: オブジェクト引数要素'
slug: Web/HTML/Element/param
tags:
  - Element
  - HTML
  - HTML embedded content
  - Reference
  - Web
translation_of: Web/HTML/Element/param
---
<div>{{HTMLRef}}</div>

<p><strong>HTML の <code>&lt;param&gt;</code> 要素</strong>は、{{HTMLElement("object")}} 要素の引数を定義します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a></th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td>なし。これは {{Glossary("empty element", "空要素")}} です。</td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>空要素であるため開始タグは必須、また終了タグを置いてはなりません。</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td>{{HTMLElement("object")}} の子として、他の<a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>より前に配置可能。</td>
  </tr>
  <tr>
   <th scope="row">暗黙の ARIA ロール</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>許可されている <code>role</code> なし</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{domxref("HTMLParamElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。</p>

<dl>
 <dt>{{htmlattrdef("name")}}</dt>
 <dd>引数の名称。</dd>
 <dt>{{htmlattrdef("value")}}</dt>
 <dd>引数の値</dd>
</dl>

<h3 id="Deprecated_attributes">非推奨の属性</h3>

<dl>
 <dt>{{htmlattrdef("type")}} {{deprecated_inline}}</dt>
 <dd><code>valuetype</code> が <code>ref</code> に設定されている場合にのみ指定可能。<code>value</code> の値で指定された URI に存在するオブジェクトの MIME タイプを指定します。</dd>
 <dt>{{htmlattrdef("valuetype")}} {{deprecated_inline}}</dt>
 <dd><code>value</code> 属性の型を指定します。指定可能な値は以下の通りです。
 <ul>
  <li><code>data</code>: 既定値。値は文字列としてオブジェクトの実装に渡されます。</li>
  <li><code>ref</code>: 値は、実行時の値が格納されているリソースへの URI です。</li>
  <li><code>object</code>: 同一文書内の他の {{HTMLElement("object")}} 要素の ID です。</li>
 </ul>
 </dd>
</dl>

<h2 id="Examples">例</h2>

<p><code>&lt;param&gt;</code> の使用例については、{{HTMLElement("object")}} のページを参照してください。</p>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName('HTML WHATWG', 'iframe-embed-object.html#the-param-element', '&lt;param&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'semantics-embedded-content.html#the-param-element', '&lt;param&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/objects.html#h-13.3.2', '&lt;param&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.param")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("object")}}</li>
</ul>
