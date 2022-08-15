---
title: ':has'
slug: 'Web/CSS/:has'
tags:
  - CSS
  - Pseudo-class
  - Reference
  - Selectors
translation_of: 'Web/CSS/:has'
---
<div>{{CSSRef}}</div>

<p><strong><code>:has()</code> </strong>CSS<strong> </strong><a href="/zh-CN/docs/Web/CSS/Pseudo-classes">伪类</a>代表一个元素，其给定的选择器参数（相对于该元素的 {{cssxref(":scope")}}）至少匹配一个元素。</p>

<p><code>:has()</code><strong> </strong>伪类接受一个选择器组作为参数。在当前规范中 <code>:has</code> 并未列为<a href="https://drafts.csswg.org/selectors/#live-profile">实时选择器配置</a>的一部分，意味着其不能用于样式表中，只能用于如 {{domxref("document.querySelector()")}} 的函数中。</p>

<pre><code>/* 选择任何直接包含 &lt;img&gt; 子元素的 &lt;a&gt;  */
/* 注意，目前还没有任何浏览器支持此方法 */
/* 此伪类也未计划投入样式表中使用 */
var test = document.querySelector('a:has(&gt; img)');</code></pre>

<h2 id="语法">语法</h2>

{{CSSSyntax}}

<h2 id="示例">示例</h2>

<p>下面的选择器只会匹配直接包含 {{HTMLElement("img")}} 子元素的 {{HTMLElement("a")}} 元素：</p>

<pre><code>a:has(&gt; img)</code>
</pre>

<p>下面的选择器只会匹配其后紧跟着 {{htmlelement("p")}} 元素的 {{HTMLElement("h1")}} 元素：</p>

<pre><code>h1:has(+ p)</code></pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="Browser_compatibility">浏览器兼容性</h2>

<p>{{Compat}}</p>

<div id="compat-mobile"></div>
