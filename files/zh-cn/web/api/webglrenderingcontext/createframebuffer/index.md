---
title: WebGLRenderingContext.createFramebuffer()
slug: Web/API/WebGLRenderingContext/createFramebuffer
translation_of: Web/API/WebGLRenderingContext/createFramebuffer
---
<div>{{APIRef("WebGL")}}</div>

<div><strong><code>WebGLRenderingContext.creatFramebuffer()</code></strong>  是 <a href="/en-US/docs/Web/API/WebGL_API">WebGL API</a>  的一个方法，用来创建和初始化{{domxref("WebGLFramebuffer")}} 对象。</div>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">WebGLFramebuffer <var>gl</var>.createFramebuffer();
</pre>

<h3 id="参数">参数</h3>

<p>None.</p>

<h3 id="返回值">返回值</h3>

<p>{{domxref("WebGLFramebuffer")}} 对象</p>

<h2 id="样例">样例</h2>

<h3 id="创建一个帧缓冲区">创建一个帧缓冲区</h3>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var framebuffer = gl.createFramebuffer();
</pre>

<h2 id="说明">说明</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("api.WebGLRenderingContext.createFramebuffer")}}</p>

<h2 id="另见">另见</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.bindFramebuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.deleteFramebuffer()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isFramebuffer()")}}</li>
 <li>Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}</li>
</ul>
