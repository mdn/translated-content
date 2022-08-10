---
title: 后代选择器
slug: Web/CSS/Descendant_combinator
tags:
  - CSS
  - Selectors
translation_of: Web/CSS/Descendant_combinator
---
<div>{{CSSRef("Selectors")}}</div>

<p><strong>后代组合器</strong>（通常用单个空格（<code> </code>）字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。利用后代组合器的选择器称为<dfn>后代选择器</dfn>。</p>

<pre class="brush: css no-line-numbers notranslate">/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}</pre>

<p>从技术上讲，后代组合器是两个选择器之间的一个或多个 {{Glossary("CSS")}}  空格字符-空格字符和/或四个控制字符之一：回车，换页，换行和制表符在没有其他组合器的情况下。此外，组成组合器的空白字符可以包含任意数量的CSS注释。</p>



<h2 id="语法">语法</h2>

<pre class="syntaxbox notranslate"><var>selector1</var> <var>selector2</var> {
  <var>/* property declarations */</var>
}</pre>

<h2 id="Examples">Examples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li&gt;
    &lt;div&gt;Item 1&lt;/div&gt;
    &lt;ul&gt;
      &lt;li&gt;Subitem A&lt;/li&gt;
      &lt;li&gt;Subitem B&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;div&gt;Item 2&lt;/div&gt;
    &lt;ul&gt;
      &lt;li&gt;Subitem A&lt;/li&gt;
      &lt;li&gt;Subitem B&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples", "100%", 160)}}</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("css.selectors.descendant")}}</p>

<h2 id="相关">相关</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Child_combinator">Child combinator</a></li>
</ul>
