---
title: 'Reason: CORS preflight channel did not succeed'
slug: Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
translation_of: Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason">Reason</h2>

<pre class="syntaxbox">Reason: CORS preflight channel did not succeed</pre>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>{{Glossary("CORS")}} 请求需要预校验，但是预校验请求失败。可能是由于下列几种原因导致：</p>

<ul>
 <li>一个跨域请求在先前已经进行过预校验，进行重复的校验是不被允许的。请确保你的代码每次连接只进行一次预校验。</li>
 <li>预校验请求碰到了通常情况下不应该发生的网络问题。</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS 错误</a></li>
 <li>Glossary: {{Glossary("CORS")}}</li>
 <li><a href="/en-US/docs/Web/HTTP/CORS">CORS 简介</a></li>
</ul>
