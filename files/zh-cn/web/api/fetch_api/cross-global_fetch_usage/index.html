---
title: Cross-global fetch usage
slug: Web/API/Fetch_API/Cross-global_fetch_usage
tags:
  - Fetch
  - 相对 URL
  - 跨源
  - 边缘情况
translation_of: Web/API/Fetch_API/Cross-global_fetch_usage
---
<p>本文解释了在 fetch 时发生的边缘情况（以及潜在的其他 APIs 展示相同类型的资源检索行为）。当从“iframe”发起包含相对 url 的跨源 fetch 时，相对 url 用于针对当前全局位置而不是 iframe 的位置进行解析。</p>

<h2 id="边缘情况">边缘情况</h2>

<p>大多数网站几乎不会遇到这种边缘情况。如下：</p>

<ul>
 <li>需要一个同源的 iframe</li>
 <li>该同源 iframe 需要具有不同基址位置</li>
 <li>必须使用跨全局的 fetch 函数，例如。<code>frame.contentWindow.fetch()</code></li>
 <li>传递给 fetch 函数的是相对 URL</li>
</ul>

<h2 id="遇到的问题">遇到的问题</h2>

<p>以前，我们从当前全局 URL 中解析相对 URL，例如：</p>

<pre class="brush: js">let absolute = new URL(relative, window.location.href)</pre>

<p>这样做不是什么大问题，只是表现出这种行为的不同 API 与规范中定义的行为的不一致可能导致问题的进一步发展。</p>

<h2 id="解决方案">解决方案</h2>

<p>在 Firefox 60 及以后版本中，Mozilla 对相对 URL 的解析是相对于拥有<code>fetch()</code>函数的全局的。（见 {{bug(1432272)}}）。因此在上述情形中，URL 是相对于 iframe 的地址进行解析的：</p>

<pre class="brush: js">let absolute = new URL(relative, frame.contentWindow.location.href)</pre>

<p>关于使新规范与此行为变化保持一致，以缓解未来可能出现的问题，大量讨论正在进行中。</p>
