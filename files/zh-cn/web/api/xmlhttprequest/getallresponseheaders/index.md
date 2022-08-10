---
title: XMLHttpRequest.getAllResponseHeaders()
slug: Web/API/XMLHttpRequest/getAllResponseHeaders
translation_of: Web/API/XMLHttpRequest/getAllResponseHeaders
---
<p>{{APIRef('XMLHttpRequest')}}</p>

<p><strong>XMLHttpRequest.getAllResponseHeaders()</strong> 方法返回所有的响应头，以 {{Glossary('CRLF')}} 分割的字符串，或者 <code>null</code> 如果没有收到任何响应。<strong> 注意：</strong> 对于复合请求（ multipart requests ），这个方法返回当前请求的头部，而不是最初的请求的头部。</p>

<pre class="syntaxbox">DOMString getAllResponseHeaders();</pre>

<h2 id="语法">语法</h2>

<pre>var headers = <var>XMLHttpRequest</var>.getAllResponseHeaders();
</pre>

<h3 id="参数">参数</h3>

<p>无</p>

<h3 id="返回值">返回值</h3>

<p>一个原始的 Header 头例子：</p>

<pre><code>date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
content-encoding: gzip\r\n
x-content-type-options: nosniff\r\n
server: meinheld/0.6.1\r\n
x-frame-options: DENY\r\n
content-type: text/html; charset=utf-8\r\n
connection: keep-alive\r\n
strict-transport-security: max-age=63072000\r\n
vary: Cookie, Accept-Encoding\r\n
content-length: 6502\r\n
x-xss-protection: 1; mode=block\r\n</code>
</pre>

<p>每一行通过\r\n来进行分割。</p>

<h2 id="例子">例子</h2>

<pre><code>var request = new XMLHttpRequest();
request.open("GET", "foo.txt", true);
request.send();

request.onreadystatechange = function() {
  if(this.readyState == this.HEADERS_RECEIVED) {

    // Get the raw header string
    var headers = request.getAllResponseHeaders();

    // Convert the header string into an array
    // of individual headers
    var arr = headers.trim().split(/[\r\n]+/);

    // Create a map of header names to values
    var headerMap = {};
    arr.forEach(function (line) {
      var parts = line.split(': ');
      var header = parts.shift();
      var value = parts.join(': ');
      headerMap[header] = value;
    });
  }
</code>
</pre>

<p>上面的代码执行后，你可以：</p>

<pre><code>var contentType = headerMap["content-type"];</code>
</pre>

<p>上面的变量 <code>contentType</code> 可以获取到 HTTP header 里的 <code>content-type</code> 字段值。</p>
