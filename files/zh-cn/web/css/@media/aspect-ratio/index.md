---
title: aspect-ratio
slug: Web/CSS/@media/aspect-ratio
translation_of: Web/CSS/@media/aspect-ratio
---
<div>{{cssref}}</div>

<p><strong><code>aspect-ratio</code></strong> <a href="/zh-CN/docs/CSS">CSS</a> <a href="/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features">媒体属性</a> 可以用来测试 {{glossary("viewport")}} 的宽高比。</p>

<h2 id="语法">语法</h2>

<p>宽高比属性被指定为{{cssxref("&lt;ratio&gt;")}}值来代表 viewport 的宽高比。其为一个范围，这意味着你可以使用<strong><code>min-aspect-ratio</code></strong>和<code><strong>max-aspect-ratio</strong></code>分别查询最小和最大的值。</p>

<h2 id="示例">示例</h2>

<p>下面的例子包含一个 {{htmlElement("iframe")}}，拥有它自身的 viewport。调整的 <code>&lt;iframe&gt;</code> 宽高来观察 <code>aspect-ratio</code> 的变化。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div id='inner'&gt;
  Watch this element as you resize your viewport's width and height.
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">/* 最小宽高比 */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9af; /* blue */
  }
}

/* 最大宽高比 */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9ff;  /* cyan */
  }
}

/* 明确的宽高比，放在最下部防止同时满足条件时的覆盖*/
@media (aspect-ratio: 1/1) {
  div {
    background: #f9a; /* red */
  }
}
</pre>

<h3 id="结果">结果</h3>

<p>{{ EmbedLiveSample('示例', '300px', '400px') }}</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("css.at-rules.media.aspect-ratio")}}</p>
