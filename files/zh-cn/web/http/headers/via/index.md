---
title: Via
slug: Web/HTTP/Headers/Via
tags:
  - 代理
  - 循环请求
  - 首部
translation_of: Web/HTTP/Headers/Via
---
<p>{{HTTPSidebar}}</p>

<p><code><strong>Via</strong></code> 是一个通用首部，是由代理服务器添加的，适用于正向和反向代理，在请求和响应首部中均可出现。这个消息首部可以用来追踪消息转发情况，防止循环请求，以及识别在请求或响应传递链中消息发送者对于协议的支持能力。</p>

<table class="properties">
	<tbody>
		<tr>
			<th scope="row">Header type</th>
			<td>{{Glossary("General header")}}</td>
		</tr>
		<tr>
			<th scope="row">{{Glossary("Forbidden header name")}}</th>
			<td>yes</td>
		</tr>
	</tbody>
</table>

<h2 id="语法">语法</h2>

<pre>Via: [ &lt;protocol-name&gt; "/" ] &lt;protocol-version&gt; &lt;host&gt; [ ":" &lt;port&gt; ]
or
Via: [ &lt;protocol-name&gt; "/" ] &lt;protocol-version&gt; &lt;pseudonym&gt;
</pre>

<h2 id="指令">指令</h2>

<dl>
	<dt>&lt;protocol-name&gt;</dt>
	<dd>可选。所使用的协议名称，如 "HTTP"。</dd>
	<dt>&lt;protocol-version&gt;</dt>
	<dd>所使用的协议版本号， 例如 "1.1"。</dd>
	<dt>&lt;host&gt; and &lt;port&gt;</dt>
	<dd>公共代理的 URL 及端口号。</dd>
	<dt>&lt;pseudonym&gt;</dt>
	<dd>内部代理的名称或别名。</dd>
</dl>

<h2 id="示例">示例</h2>

<pre>Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="相关内容">相关内容</h2>

<ul>
	<li>{{HTTPHeader("X-Forwarded-For")}}</li>
	<li><a href="https://github.com/heroku/vegur">Heroku 的代理库 Vegur</a></li>
</ul>
