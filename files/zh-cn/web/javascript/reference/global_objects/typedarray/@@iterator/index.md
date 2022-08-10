---
title: 'TypedArray.prototype[@@iterator]()'
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator
---
<div>{{JSRef}}</div>

<p>@@iterator 的初始值是和 {{jsxref("TypedArray.prototype.values()", "values")}} 属性的初始值相同的对象。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><code><var>arr</var>[Symbol.iterator]()</code></pre>

<h3 id="返回值">返回值</h3>

<p>数组的 <strong>迭代器</strong> 函数，通常是 {{jsxref("TypedArray.prototype.values()", "values()")}}函数。</p>

<h2 id="示例">示例</h2>

<h3 id="使用for...of_循环的迭代">使用<code>for...of</code> 循环的迭代</h3>

<pre class="brush: js">var arr = new Uint8Array([10, 20, 30, 40, 50]);
// 你的浏览器必须支持 for..of 循环
// 以及 for 循环中的 let 区域变量
for (let n of arr) {
  console.log(n);
}
</pre>

<h3 id="备选迭代">备选迭代</h3>

<pre class="brush: js">var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Typed_arrays">JavaScript typed arrays</a></li>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("TypedArray.prototype.entries()")}}</li>
 <li>{{jsxref("TypedArray.prototype.keys()")}}</li>
 <li>{{jsxref("TypedArray.prototype.values()")}}</li>
</ul>
