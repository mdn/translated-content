---
title: Document.contentType
slug: Web/API/Document/contentType
tags:
  - API
  - DOM
  - Document
  - MIME
  - Read-only
  - Reference
  - contentType
  - プロパティ
  - 読み取り専用
translation_of: Web/API/Document/contentType
---
<div>{{APIRef}}</div>

<p><code><strong>Document.contentType</strong></code> プロパティは読み取り専用で、文書がレンダリングされる MIME タイプを返します。これは HTTP ヘッダーやその他の MIME 情報のソースから来る可能性があり、ブラウザーや拡張機能によって行われる自動型変換の影響を受ける可能性があります。</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> このプロパティは {{HTMLElement("meta")}} 要素には影響されません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>contentType</var> = <var>document</var>.contentType;
</pre>

<h3 id="Value" name="Value">値</h3>

<p><code>contentType</code> は読み取り専用のプロパティです。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{SpecName('DOM WHATWG', '#dom-document-contenttype', 'Document.contentType')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>{{Compat("api.Document.contentType")}}</div>
