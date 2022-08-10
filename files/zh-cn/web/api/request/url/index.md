---
title: Request.url
slug: Web/API/Request/url
translation_of: Web/API/Request/url
---
<div>{{APIRef("Fetch")}}{{SeeCompatTable}}</div>

<p>The <strong><code>url</code></strong> read-only property of the {{domxref("Request")}} interface contains the URL of the request.</p>

<h2 id="句法">句法</h2>

<pre class="syntaxbox">var <var>myURL</var> = <var>request</var>.url;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("USVString")}} indicating the url of the request.</p>

<h2 id="举例">举例</h2>

<p>In the following snippet, we create a new request using the {{domxref("Request.Request()")}} constructor (for an image file in the same directory as the script), then save the url of the request in a variable:</p>

<pre class="brush: js">var myRequest = new Request('flowers.jpg');
var myURL = myRequest.url; // "http://mdn.github.io/fetch-examples/fetch-request/flowers.jpg"</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat("api.Request.url")}}

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/en-US/docs/Web/HTTP/Access_control_CORS">HTTP access control (CORS)</a></li>
 <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
</ul>
