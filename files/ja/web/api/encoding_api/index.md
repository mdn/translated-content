---
title: Encoding API
slug: Web/API/Encoding_API
translation_of: Web/API/Encoding_API
---
<p>{{DefaultAPISidebar("Encoding API")}}{{SeeCompatTable}}</p>

<p><strong>Encoding API</strong> はレガシーな非{{Glossary("UTF-8")}}エンコーディングを含む様々な{{Glossary("character encoding", "文字エンコーディング")}}のテキストを扱うメカニズムを提供します。</p>

<p>このAPIは4つのインターフェースを提供します。それは、 {{domxref("TextDecoder")}}、 {{domxref("TextEncoder")}}、 {{domxref("TextDecoderStream")}} そして {{domxref("TextEncoderStream")}} です。</p>

<h2 id="インターフェース">インターフェース</h2>

<div class="index">
<ul>
 <li>{{DOMxRef("TextDecoder")}}</li>
 <li>{{DOMxRef("TextEncoder")}}</li>
 <li>{{DOMxRef("TextDecoderStream")}}</li>
 <li>{{DOMxRef("TextEncoderStream")}}</li>
</ul>
</div>

<h2 id="チュートリアルとツール">チュートリアルとツール</h2>

<ul>
 <li><a href="http://code.google.com/p/stringencoding/">shim</a>はこのインターフェースをサポートしていないブラウザでもこのインターフェスを使えるようにします。</li>
 <li><a href="/ja/Add-ons/Code_snippets/StringView" title="/en-US/docs/Web/JavaScript/Typed_arrays/StringView"><code>StringView</code></a> はC言語の文字列配列型のような表現を提供します。</li>
</ul>

<h2 id="仕様書">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("Encoding")}}</td>
   <td>{{Spec2("Encoding")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの対応">ブラウザーの対応</h2>

<h3 id="TextDecoder"><code>TextDecoder</code></h3>

<p>{{Compat("api.TextDecoder")}}</p>

<h3 id="TextEncoder"><code>TextEncoder</code></h3>

<p>{{Compat("api.TextEncoder")}}</p>
