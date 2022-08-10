---
title: ImageBitmapRenderingContext
slug: Web/API/ImageBitmapRenderingContext
tags:
  - API
  - Canvas
  - OffscreenCanvas
  - Reference
  - 性能
  - 绘图
translation_of: Web/API/ImageBitmapRenderingContext
---
<div>{{APIRef("Canvas API")}} {{SeeCompatTable}}</div>

<p><strong><code>ImageBitmapRenderingContext</code></strong> 接口是 canvas 的渲染上下文，它只提供了使用给定 {{domxref("ImageBitmap")}} 替换 canvas 的功能。它的上下文 ID ({{domxref("HTMLCanvasElement.getContext()")}} 或 {{domxref("OffscreenCanvas.getContext()")}} 的第一个参数)  是 <code>"bitmaprenderer"。</code></p>

<p>这个接口可用于 window context 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API">worker</a> context.</p>

<h2 id="方法">方法</h2>

<dl>
 <dt>{{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}</dt>
 <dd>
 <p>在与此渲染上下文相关的 canvas 中显示给定的 <code>ImageBitmap</code> 。 <code>ImageBitmap</code> 的所有权被转移到画布上。 这个函数以前命名为<code>transferImageBitmap()</code>，但在规范中修改了原名字。 为了避免影响之前的代码，旧名称作为别名被保留下来。</p>
 </dd>
</dl>

<h2 id="规范">规范</h2>

<p>Currently drafted as a proposal in the <a href="https://wiki.whatwg.org/wiki/OffscreenCanvas">OffscreenCanvas</a> specification.</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<div>


<p>{{Compat("api.ImageBitmapRenderingContext")}}</p>
</div>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{domxref("OffScreenCanvas")}}</li>
</ul>
