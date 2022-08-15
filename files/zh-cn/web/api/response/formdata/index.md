---
title: Response.formData()
slug: Web/API/Response/formData
---
<div>{{APIRef("Fetch")}}</div>

<p> {{domxref("Response")}} 对象中的<strong><code>formData()</code></strong> 方法将 {{domxref("Response")}} 对象中的所承载的数据流读取并封装成为一个对象，该方法将返回一个 <strong><code>Promise</code></strong>  对象，该对象将产生一个{{domxref("FormData")}} 对象。</p>

<div class="note">
<p><strong>注意</strong>: 该方法主要与 <a href="/en-US/docs/Web/API/ServiceWorker_API">service workers</a> 有关。如果客户端提交的一个表单请求被 Service Worker 所截取，您可以像下述的样例一样，调用 <code>formData()</code> 方法来获取一个 key-value 字典，对该字典可以进行修饰，然后将修饰后的表填提交给远端服务器 (或在本地应用)。</p>
</div>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">response.formData()
.then(function(formdata) {
  // do something with your formdata
});</pre>

<h3 id="参数">参数</h3>

<p>无。</p>

<h3 id="返回值">返回值</h3>

<p>生成 {{domxref("FormData")}}对象的{{domxref("Promise")}} 对象。</p>

<h2 id="样例">样例</h2>

<p>待定。</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat("api.Response.formData")}}

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/en-US/docs/Web/HTTP/Access_control_CORS">HTTP access control (CORS)</a></li>
 <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
</ul>
