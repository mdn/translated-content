---
title: ImageData.data
slug: Web/API/ImageData/data
---
<p>{{APIRef("Canvas API")}}</p>

<p>只读的 <code><strong>ImageData.data</strong></code> 属性，返回 {{jsxref("Uint8ClampedArray")}} ，描述一个一维数组，包含以 RGBA 顺序的数据，数据使用  <code style="font-style: normal; line-height: 1.5;">0</code> 至 <code style="font-style: normal; line-height: 1.5;">255</code>（包含）的整数表示。 </p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><em>imagedata</em>.data
</pre>

<h2 id="示例">示例</h2>

<pre class="brush: js  language-js">var imagedata = new ImageData(100, 100);
imagedata.data; // Uint8ClampedArray[40000]
</pre>

<h2 id="Specification">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat("api.ImageData.data")}}

<h2 id="参见">参见</h2>

<ul>
 <li>{{domxref("ImageData.height")}}</li>
 <li>{{domxref("ImageData.width")}}</li>
</ul>
