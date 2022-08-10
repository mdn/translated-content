---
title: any-hover
slug: Web/CSS/@media/any-hover
tags:
  - '@media'
  - CSS
  - Reference
  - 媒体查询
  - 媒体特性
translation_of: Web/CSS/@media/any-hover
---
<div>{{cssref}}</div>

<p><strong><code>any-hover</code></strong> <a href="/en-US/docs/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features">媒体特性</a> 可以用来测试是否有<em>任意</em>可用的输入机制可以在元素上 hover。</p>

<h2 id="语法">语法</h2>

<p><code>any-hover</code> 使用下面列表的值作为关键字。</p>

<dl>
 <dt><code>none</code></dt>
 <dd>可用的输入机制里没有机制可以方便地 hover，或者不存在定点输入机制。</dd>
 <dt><code>hover</code></dt>
 <dd>一个或多个可用的输入机制可以方便地在元素上 hover。</dd>
</dl>

<h2 id="示例">示例</h2>

<h3 id="测试是否有输入机制可以_hover">测试是否有输入机制可以 hover</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;a href="#"&gt;Try hovering over me!&lt;/a&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">@media (any-hover: hover) {
  a:hover {
    background: yellow;
  }
}</pre>

<h4 id="结果">结果</h4>

<p>{{EmbedLiveSample("Testing_whether_input_methods_can_hover")}}</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("css.at-rules.media.any-hover")}}</p>

<h2 id="更多资料">更多资料</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/@media/hover">the <code>hover</code> media feature</a></li>
</ul>
