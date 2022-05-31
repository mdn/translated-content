---
title: Attr.localName
slug: Web/API/Attr/localName
tags:
  - API
  - DOM
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Property
  - Reference
translation_of: Web/API/Attr/localName
---
<div>{{APIRef("DOM")}}</div>

<p><strong>Attr.localName</strong>読み取り専用プロパティは、要素の修飾名のローカル部分を返します。</p>

<div class="note">
<p>以前のDOM仕様では、このAPIは{{domxref("Node")}}インターフェース内で定義されていました。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><var>name</var> = <var>attribute</var>.localName
</pre>

<h3 id="戻り値">戻り値</h3>

<p>属性の修飾名のローカル部分を表す{{domxref("DOMString")}}。</p>

<h2 id="例">例</h2>

<p>次の例は、警告ダイアログの"id"を示しています。</p>

<h3 id="HTML_Content">HTML Content</h3>

<pre class="brush: html">&lt;button id="example"&gt;Click me&lt;/button&gt;</pre>

<h3 id="JavaScript_Content">JavaScript Content</h3>

<pre class="brush: js">const element = document.querySelector("#example");
element.addEventListener("click", function() {
  const attribute = element.attributes[0];
  alert(attribute.localName);
});
</pre>

<p>{{ EmbedLiveSample('例','100%',30) }}</p>

<h2 id="注意">注意</h2>

<p>属性のローカル名は、コロンの後に続く属性の修飾名の一部です。 修飾名は、通常、特定のXML文書の名前空間の一部としてXMLで使用されます。</p>

<div class="note">
<p><strong>注意：</strong>{{Gecko("1.9.2")}}以前では、（XML DOMでのDOMのXHTML属性とは対照的に）HTML DOMのHTML属性のローカル名の大文字のプロパティを返します。 後のバージョンでは、HTML5に準拠して、内部DOMストレージの場合に、HTML DOMのHTML属性とXML DOMのXHTML属性の両方で小文字のプロパティが返されます。</p>
</div>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-attr-localname', 'Attr.localName')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>初版</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの実装状況">ブラウザの実装状況</h2>

<p>{{Compat("api.Attr.localName")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{domxref("Attr.namespaceURI")}}</li>
 <li>{{domxref("Attr.prefix")}}</li>
 <li>{{domxref("Element.localName")}}</li>
 <li>{{domxref("Node.localName")}}</li>
</ul>
