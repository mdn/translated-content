---
title: TextEncoder.prototype.encode()
slug: Web/API/TextEncoder/encode
tags:
  - API
  - Encoding
  - Method
  - Reference
  - TextEncoder
  - encode
translation_of: Web/API/TextEncoder/encode
---
<p>{{APIRef("Encoding API")}}</p>

<p><strong><code>TextEncoder.prototype.encode()</code></strong> メソッドは入力として1つの {{domxref("USVString")}} を取り、引数で与えられたテキストが <code>TextEncoder</code> オブジェクトで指定されたメソッドでエンコードされたものが入った {{jsxref("Global_Objects/Uint8Array", "Uint8Array")}} を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>b1</var> = <var>encoder</var>.encode(<var>string</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>string</var></code></dt>
 <dd>エンコードするテキストが入った {{DOMxRef("USVString")}} です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{domxref("Uint8Array")}} オブジェクト。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html notranslate">&lt;p class="source"&gt;This is a sample paragraph.&lt;/p&gt;
&lt;p class="result"&gt;Encoded result: &lt;/p&gt;</pre>

<pre class="brush: js notranslate">const sourcePara = document.querySelector('.source');
const resultPara = document.querySelector('.result');
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();

let encoded = textEncoder.encode(string);
resultPara.textContent += encoded;</pre>

<p>{{EmbedLiveSample('Examples')}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("Encoding", "#dom-textencoder-encode", "TextEncoder.prototype.encode()")}}</td>
   <td>{{Spec2("Encoding")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.TextEncoder.encode")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>所属する {{DOMxRef("TextEncoder")}} インターフェイス</li>
</ul>
