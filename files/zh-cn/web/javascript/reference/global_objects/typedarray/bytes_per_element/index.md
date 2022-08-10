---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
---
<div>{{JSRef("Global_Objects", "TypedArray", "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array")}}</div>

<h2 id="概要">概要</h2>

<p><code><strong>TypedArray.BYTES_PER_ELEMENT</strong></code> 属性代表了强类型数组中每个元素所占用的字节数。</p>

<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">TypedArray.BYTES_PER_ELEMENT;</pre>

<h2 id="描述">描述</h2>

<p>强类型数组对象用来解释为单个元素的字节数是不一样的。常量 <code>BYTES_PER_ELEMENT</code> 表示了特定强类型数组中每个元素所占用的字节数。</p>

<h2 id="示例">示例</h2>

<pre class="brush:js">Int8Array.BYTES_PER_ELEMENT;         // 1
Uint8Array.BYTES_PER_ELEMENT;        // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT;        // 2
Uint16Array.BYTES_PER_ELEMENT;       // 2
Int32Array.BYTES_PER_ELEMENT;        // 4
Uint32Array.BYTES_PER_ELEMENT;       // 4
Float32Array.BYTES_PER_ELEMENT;      // 4
Float64Array.BYTES_PER_ELEMENT;      // 8</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="参见">参见</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript 强类型数组</a></li>
 <li>{{jsxref("TypedArray")}}</li>
</ul>
