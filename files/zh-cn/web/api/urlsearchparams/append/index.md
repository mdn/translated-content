---
title: URLSearchParams.append()
slug: Web/API/URLSearchParams/append
translation_of: Web/API/URLSearchParams/append
---
<p>{{ApiRef("URL API")}}{{SeeCompatTable}} </p>

<p><strong>append() </strong>是 {{domxref("URLSearchParams")}} 接口的一个方法。可以插入一个新搜索参数。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">URLSearchParams.append(name, value)</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt>name</dt>
 <dd>需要插入搜索参数的键名。</dd>
 <dt>value </dt>
 <dd>需要插入搜索参数的值。</dd>
</dl>

<h3 id="返回">返回</h3>

<p>无</p>

<h2 id="例子">例子</h2>

<pre class="brush: js">let url = new URL('https://example.com?foo=1&amp;bar=2');
let params = new URLSearchParams(url.search.slice(1));

//添加第二个 foo 搜索参数。
params.append('foo', 4);
//查询字符串变成: 'foo=1&amp;bar=2&amp;foo=4'</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat("api.URLSearchParams.append")}}

<h2 id="参见">参见</h2>

<ul>
 <li>其它 URL 相关的接口: {{domxref("URL")}}, {{domxref("URLUtils")}}.</li>
 <li><a href="https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en">谷歌开发者：简单 URL 与 URLSearchParams 操纵</a></li>
</ul>
