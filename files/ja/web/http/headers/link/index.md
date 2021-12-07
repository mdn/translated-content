---
title: Link
slug: Web/HTTP/Headers/Link
tags:
  - Draft
  - HTTP
  - HTTP Header
  - HTTP ヘッダー
  - Link
  - NeedsCompatTable
  - NeedsContent
  - NeedsSyntax
  - Reference
  - エンティティヘッダー
translation_of: Web/HTTP/Headers/Link
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <strong><code>Link</code></strong> エンティティヘッダーフィールドは、 HTTP ヘッダー内の1つ以上のリンクをシリアル化する手段を提供します。意味的には、 HTML の &lt;link&gt; 要素と同等です。</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">Link: &lt; <var>uri-reference</var> &gt;; <var>param1</var>=<var>value1</var>; <var>param2</var>="<var>value2</var>"</pre>

<dl>
 <dt><code>&lt;uri-reference&gt;</code></dt>
 <dd>URI 参照。 <code>&lt;</code> と <code>&gt;</code> で囲む必要があります。</dd>
</dl>

<h3 id="Parameters">Parameters</h3>

<p>リンクヘッダーには <code>;</code> で区切られたパラメーターが含まれており、 {{HTMLElement("link")}} 要素の属性に相当します。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>URI は <code>&lt;</code> と <code>&gt;</code> で囲む必要があります。</p>

<pre class="brush: http; no-line-numbers example-good">Link: &lt;https://example.com&gt;; rel="preconnect"</pre>

<pre class="brush: http; no-line-numbers example-bad">Link: https://bad.example; rel="preconnect"</pre>

<h3 id="Specifying_multiple_links" name="Specifying_multiple_links">複数リンクを指定</h3>

<p>カンマで区切られた複数のリンクを指定できます。次に例を示します。</p>

<pre>Link: &lt;https://one.example.com&gt;; rel="preconnect", &lt;https://two.example.com&gt;; rel="preconnect", &lt;https://three.example.com&gt;; rel="preconnect"</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC(8288, "Link Serialisation in HTTP Headers", 3)}}</td>
   <td><span class="spec-RFC">IETF RFC</span></td>
   <td></td>
  </tr>
  <tr>
   <td>{{RFC(5988, "The Link Header Field", 5)}}</td>
   <td><span class="spec-RFC">IETF RFC</span></td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Link")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPStatus(103, "103 Early Hints")}}</li>
</ul>
