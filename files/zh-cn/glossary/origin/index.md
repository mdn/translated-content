---
title: Origin
slug: Glossary/Origin
translation_of: Glossary/Origin
original_slug: Glossary/源
---
<p>Web 内容的源由用于访问它的{{Glossary("URL")}} 的方案 (协议)，主机 (域名) 和端口定义。只有当方案，主机和端口都匹配时，两个对象具有相同的起源。</p>

<p>某些操作仅限于同源内容，而可以使用 <a href="/zh-CN/docs/Glossary/CORS">CORS</a> 解除这个限制。</p>

<h2 id="同源的例子">同源的例子</h2>

<p>same origin because same scheme (<code>http</code>) and host (<code>example.com</code>)</p>

<ul>
 <li><code>http://example.com/app1/index.html</code></li>
 <li><code>http://example.com/app2/index.html</code></li>
</ul>

<p>same origin because a server delivers HTTP content through port 80 by default</p>

<ul>
 <li><code>http://Example.com:80</code></li>
 <li><code>http://example.com</code></li>
</ul>

<h2 id="不同源的例子">不同源的例子</h2>

<p>different schemes</p>

<ul>
 <li><code>http://example.com/app1</code></li>
 <li><code>https://example.com/app2</code></li>
</ul>

<p>different hosts</p>

<ul>
 <li><code>http://example.com</code></li>
 <li><code>http://www.example.com</code></li>
 <li><code>http://myapp.example.com</code></li>
</ul>

<p>different ports</p>

<ul>
 <li><code>http://example.com</code></li>
 <li><code>http://example.com:8080</code></li>
</ul>

<h2 id="了解更多">了解更多</h2>

<p>详细信息，请看<a href="/zh-CN/docs/Web/Security/Same-origin_policy">同源策略</a>。</p>
