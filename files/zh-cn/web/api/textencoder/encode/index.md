---
title: TextEncoder.prototype.encode()
slug: Web/API/TextEncoder/encode
tags:
  - 文本编码
  - 编码
translation_of: Web/API/TextEncoder/encode
---
<div>{{APIRef("Encoding API")}}</div>

<p><strong><code>TextEncoder.prototype.encode()</code></strong> 方法接受一个 {{domxref("USVString")}} 作为参数，返回一个以给定的文本（字符串）参数，通过 <code>TextEncoder</code> 中指定的方法（默认 UTF-8）编码后的 {{jsxref("Global_Objects/Uint8Array", "Uint8Array")}} 类型的值。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><var>b1</var> = <var>encoder</var>.encode(<var>string</var>);
</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code><var>string</var></code></dt>
 <dd>一个包含了将要编码的文本的 {{DOMxRef("USVString")}}。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>一个 {{domxref("Uint8Array")}} 对象。</p>

<h2 id="示例">示例</h2>

<pre class="brush: html">&lt;p class="source"&gt;This is a sample paragraph.&lt;/p&gt;
&lt;p class="result"&gt;Encoded result: &lt;/p&gt;</pre>

<pre class="brush: js">const sourcePara = document.querySelector('.source');
const resultPara = document.querySelector('.result');
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();

let encoded = textEncoder.encode(string);
resultPara.textContent += encoded;</pre>

<p>{{EmbedLiveSample('Examples')}}</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<div>


<p>{{Compat("api.TextEncoder.encode")}}</p>
</div>

<h2 id="另见">另见</h2>

<ul>
 <li>The {{DOMxRef("TextEncoder")}} interface it belongs to.</li>
</ul>
