---
title: Element.localName
slug: Web/API/Element/localName
tags:
- API
- DOM
- NeedsBrowserCompatibility
- NeedsMobileBrowserCompatibility
- Property
- Reference
browser-compat: api.Element.localName
translation_of: Web/API/Element/localName
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>Element.localName</code></strong> は読み取り専用プロパティで、要素の修飾名のローカル部分を返します。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><var>name</var> = <var>element</var>.localName
</pre>

<h3 id="Return_value">返値</h3>

<p>要素の修飾名の、ローカル部分を示す {{domxref("DOMString")}} です。
</p>

<h2 id="Example">例</h2>

<p>(<code>text/xml</code> や <code>application/xhtml+xml</code> のような、XML のコンテンツタイプで送出される必要があります。)</p>

<pre class="brush:xml">&lt;html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg"&gt;
&lt;head&gt;
  &lt;script type="application/javascript"&gt;&lt;![CDATA[
  function test() {
    var text = document.getElementById('text');
    var circle = document.getElementById('circle');

    text.value = "&lt;svg:circle&gt; has:\n" +
                 "localName = '" + circle.localName + "'\n" +
                 "namespaceURI = '" + circle.namespaceURI + "'";
  }
  ]]&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body onload="test()"&gt;
  &lt;svg:svg version="1.1"
    width="100px" height="100px"
    viewBox="0 0 100 100"&gt;
    &lt;svg:circle cx="50" cy="50" r="30" style="fill:#aaa" id="circle"/&gt;
  &lt;/svg:svg&gt;
  &lt;textarea id="text" rows="4" cols="55"/&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Notes">注</h2>

<p>ノードのローカル名とは、ノードの修飾名の、コロンの後に続く部分です。 XML において修飾名は、一般に特定の XML 文書の名前空間の一部として使われます。例えば、<code>ecomm:partners</code> という修飾名において、 <code>partners</code> はローカル名、<code>ecomm</code> は接頭辞です。</p>

<pre class="brush:xml">&lt;ecomm:business id="soda_shop" type="brick_n_mortar" xmlns:ecomm="http://example.com/ecomm"&gt;
  &lt;ecomm:partners&gt;
    &lt;ecomm:partner id="1001"&gt;Tony's Syrup Warehouse
    &lt;/ecomm:partner&gt;
  &lt;/ecomm:partner&gt;
&lt;/ecomm:business&gt;
</pre>

<div class="note">
<p><strong>注: </strong>{{Gecko("1.9.2")}} 以前、このプロパティは、HTML DOM における HTML 要素ではローカル名を大文字で返していました（XML DOM における XHTML 要素とは対照的に）。最新バージョンでは HTML5 に従い、このプロパティは内部の DOM ストレージの場合、 HTML DOM における HTML要素と XHTML DOM における XHTML要素のいずれも、小文字で返します。{{domxref("element.tagName","tagName")}} プロパティは引き続き、 HTML DOM における HTML 要素では大文字で返します。</p>
</div>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("Element.namespaceURI")}}</li>
  <li>{{domxref("Element.prefix")}}</li>
  <li>{{domxref("Attr.localName")}}</li>
</ul>
