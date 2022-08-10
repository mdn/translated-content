---
title: ID 选择器
slug: Web/CSS/ID_selectors
tags:
  - CSS
  - Selectors
  - 参考
  - 选择器
translation_of: Web/CSS/ID_selectors
---
<div>{{CSSRef}}</div>

<p>在一个 HTML 文档中，CSS ID 选择器会根据该元素的 ID 属性中的内容匹配元素，元素 ID 属性名必须与选择器中的 ID 属性名完全匹配，此条样式声明才会生效。</p>

<pre class="brush: css no-line-numbers">/* The element with id="demo" */
#demo {
  border: red 2px solid;
}</pre>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">#id 属性值 {<var>样式声明</var> }</pre>

<p>它与下面的{{Cssxref("Attribute selectors", "属性选择器")}}语句等价：</p>

<pre class="syntaxbox">[id=id 属性值] {<var>样式声明</var> }</pre>

<h2 id="示例">示例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">span#identified {
  background-color: DodgerBlue;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">  &lt;span id="identified"&gt;Here's a span with some text.&lt;/span&gt;
  &lt;span&gt;Here's another.&lt;/span&gt;
</pre>

<h3 id="结果">结果</h3>

<p>{{EmbedLiveSample("Example", '100%', 50)}}</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("css.selectors.id")}}</p>
