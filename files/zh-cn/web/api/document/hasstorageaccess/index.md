---
title: Document.hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
translation_of: Web/API/Document/hasStorageAccess
---
<div>{{APIRef}}{{seecompattable}}</div>

<div>{{domxref("Document")}}的<strong><code>hasStorageAccess()</code></strong> 方法返回了一个{{jsxref("Promise")}}来判断该文档是否有访问第一方储存的权限。</div>

<p>通过 <a href="/en-US/docs/Web/API/Storage_Access_API">Storage Access API</a> 获取更多信息。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">var <em>promise</em> = document.hasStorageAccess();</pre>

<h3 id="参数">参数</h3>

<p>None.</p>

<h3 id="返回值">返回值</h3>

<p>一个用来判断文档是否有权利访问其第一方存储的{{jsxref("Promise")}} 。</p>

<p>If the promise gets resolved and a user gesture event was being processed when the function was originally called, the resolve handler will run as if a user gesture was being processed, so it will be able to call APIs that require user activation.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">document.hasStorageAccess().then(hasAccess =&gt; {
  if (hasAccess) {
    // storage access has been granted already.
  } else {
    // storage access hasn't been granted already;
    // you may want to call requestStorageAccess().
  }
});</pre>

<h2 id="Specifications">Specifications</h2>

<p>The API is currently only at the proposal stage — the standardization process has yet to begin. You can currently find specification details of the API at Apple's <a href="https://webkit.org/blog/8124/introducing-storage-access-api/">Introducing Storage Access API</a> blog post, and <a href="https://github.com/whatwg/html/issues/3338">WHATWG HTML issue 3338 — Proposal: Storage Access API</a>.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.Document.hasStorageAccess")}}</p>

<h2 id="See_also">See also</h2>

<p><a href="/en-US/docs/Web/API/Storage_Access_API">Storage Access API</a></p>
