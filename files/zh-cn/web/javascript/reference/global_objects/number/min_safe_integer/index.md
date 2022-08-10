---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
---
<div>{{JSRef}}</div>

<p><strong><code>Number.MIN_SAFE_INTEGER</code></strong> 代表在 JavaScript 中最小的安全的 integer 型数字 (<code>-(2^53 - 1)</code>)。</p>

<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="描述">描述</h2>

<p><code>MIN_SAFE_INTEGER</code> 的值是<code>-9007199254740991</code>. 形成这个数字的原因是 JavaScript 在 <a href="http://en.wikipedia.org/wiki/IEEE_floating_point">IEEE 754</a>中使用<a href="http://en.wikipedia.org/wiki/Double_precision_floating-point_format">double-precision floating-point format numbers</a> 作为规定。在这个规定中能安全的表示数字的范围在<code>-(2^53 - 1)</code> 到 <code>2^53 - 1</code>之间。</p>

<p><code>由于 MIN_SAFE_INTEGER</code> 是 {{jsxref("Number")}} 的一个静态属性，你可以直接使用<code>Number.MIN_SAFE_INTEGER</code>, 而不是自己去创建一个 {{jsxref("Number")}} 的属性。 </p>

<h2 id="示例">示例</h2>

<pre class="brush: js">Number.MIN_SAFE_INTEGER // -9007199254740991
-(Math.pow(2, 53) - 1)  // -9007199254740991
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="参阅">参阅</h2>

<ul>
 <li>{{jsxref("Number.MAX_SAFE_INTEGER")}}</li>
 <li>{{jsxref("Number.isSafeInteger()")}}</li>
</ul>
