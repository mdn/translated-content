---
title: HTMLInputElement.select()
slug: Web/API/HTMLInputElement/select
translation_of: Web/API/HTMLInputElement/select
---
<div>{{ APIRef("HTML DOM") }}</div>

<p><strong><code>HTMLInputElement.select()</code></strong> 方法选中一个 {{HTMLElement("textarea")}} 元素或者一个带有 text 字段的 {{HTMLElement("input")}} 元素里的所有内容。</p>

<h2 id="Syntax">语法</h2>

<pre class="syntaxbox">element.select()</pre>

<h2 id="示例">示例</h2>

<p>点击这个例子的按钮以选中所有在<code>&lt;input&gt;</code>元素中的文字</p>

<p>HTML</p>

<pre class="brush: html"><code>&lt;input type="text" id="text-box" size="20" value="Hello world!"&gt;
&lt;button onclick="selectText()"&gt;Select text&lt;/button&gt;</code></pre>

<p>JavaScript</p>

<pre class="brush: js"><code>function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.select();
}</code></pre>

<h3 id="结果">结果</h3>

<p>{{EmbedLiveSample("示例")}}</p>

<h2 id="注意">注意</h2>

<p>调用 <code>element.select()</code> 并不一定会使得该 input 元素被 focused，所以它经常和 {{domxref("HTMLElement.focus()")}} 一起使用。</p>

<h2 id="Specification">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("api.HTMLInputElement.select")}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{ HTMLElement("input") }}</li>
 <li>{{ HTMLElement("textarea") }}</li>
 <li>{{ domxref("HTMLInputElement") }}</li>
 <li>{{ domxref("HTMLInputElement.setSelectionRange") }}</li>
</ul>
