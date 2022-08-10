---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - NaN
  - Number
  - 数字
  - 方法
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---
<div>{{JSRef}}</div>

<p><strong><code>Number.isNaN()</code></strong> 方法确定传递的值是否为 {{jsxref("NaN")}}，并且检查其类型是否为 {{jsxref("Number")}}。它是原来的全局 {{jsxref("isNaN", "isNaN()")}} 的更稳妥的版本。</p>

<p>{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">Number.isNaN(v<var>alue</var>)</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>要检测是否为 {{jsxref("Global_Objects/NaN", "NaN")}} 的值。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>一个{{jsxref("Boolean", "布尔值")}}，表示给定的值是否是 {{jsxref("NaN")}}。</p>

<h2 id="描述">描述</h2>

<p>在 JavaScript 中，<code>NaN</code> 最特殊的地方就是，我们不能使用相等运算符（{{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} 和 {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}）来判断一个值是否是 <code>NaN</code>，因为 <code>NaN == NaN</code> 和 <code>NaN === NaN</code> 都会返回 <code>false</code>。因此，必须要有一个判断值是否是 <code>NaN</code> 的方法。</p>

<p>和全局函数 {{jsxref("Global_Objects/isNaN", "isNaN()")}} 相比，<code>Number.isNaN()</code> 不会自行将参数转换成数字，只有在参数是值为 <code>NaN</code> 的数字时，才会返回 <code>true</code>。</p>

<h2 id="示例">示例</h2>

<pre class="brush: js">Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0)       // true

// 下面这几个如果使用全局的 isNaN() 时，会返回 true。
Number.isNaN("NaN");      // false，字符串 "NaN" 不会被隐式转换成数字 NaN。
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN("blabla");   // false

// 下面的都返回 false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");</pre>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">Number.isNaN = Number.isNaN || function(value) {
    return typeof value === "number" &amp;&amp; isNaN(value);
}
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<div>{{Compat}}</div>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("Number")}}</li>
 <li>{{jsxref("isNaN", "isNaN()")}}</li>
</ul>
