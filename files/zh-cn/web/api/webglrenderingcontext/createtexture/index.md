---
title: WebGLRenderingContext.createTexture()
slug: Web/API/WebGLRenderingContext/createTexture
translation_of: Web/API/WebGLRenderingContext/createTexture
---
<div>{{APIRef("WebGL")}}</div>

<p><a href="/en-US/docs/Web/API/WebGL_API">WebGL API</a>的<strong><code>WebGLRenderingContext.createTexture()</code></strong> 方法创建并初始化了一个{{domxref("WebGLTexture")}} 目标。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">WebGLTexture <var>gl</var>.createTexture();
</pre>

<h3 id="参数">参数</h3>

<p>无。</p>

<h3 id="返回值">返回值</h3>

<p>一个可以被任何图像绑定的 {{domxref("WebGLTexture")}} 目标</p>

<h2 id="示例">示例</h2>

<p>另见 <a href="/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL">Using textures in WebGL</a>上的<a href="/en-US/docs/Web/API/WebGL_API/Tutorial">WebGL tutorial</a></p>

<h3 id="创建一个纹理">创建一个纹理</h3>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var texture = gl.createTexture();
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("api.WebGLRenderingContext.createTexture")}}</p>

<h2 id="另见">另见</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.bindTexture()")}}</li>
 <li>{{domxref("WebGLRenderingContext.deleteTexture()")}}</li>
 <li>{{domxref("WebGLRenderingContext.isTexture()")}}</li>
 <li>{{domxref("WebGLRenderingContext.texImage2D()")}}</li>
</ul>
