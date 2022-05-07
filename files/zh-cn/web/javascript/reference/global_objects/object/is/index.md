---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
tags:
  - ECMAScript 2015
  - JavaScript
  - 判断
  - 对象
  - 方法
  - 相等
translation_of: Web/JavaScript/Reference/Global_Objects/Object/is
---
<div>{{JSRef}}</div>

<p><code><strong>Object.is()</strong></code> 方法判断两个值是否为<a href="/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness">同一个值</a>。</p>

<p><strong>语法</strong></p>

<p>
 </p><pre class="syntaxbox"><code>Object.is(<var>value1</var>, <var>value2</var>);</code></pre>


<h3 id="参数">参数</h3>

<dl>
 <dt><code><var>value1</var></code></dt>
 <dd>被比较的第一个值。</dd>
 <dt><code><var>value2</var></code></dt>
 <dd>被比较的第二个值。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>一个 {{jsxref("Boolean")}} 类型标示两个参数是否是同一个值。</p>

<h2 id="描述">描述</h2>

<p><code>Object.is()</code> 方法判断两个值是否为<a href="/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness">同一个值</a>。如果满足以下条件则两个值相等:</p>

<ul>
 <li>都是 {{jsxref("undefined")}}</li>
 <li>都是 {{jsxref("null")}}</li>
 <li>都是 <code>true</code> 或 <code>false</code></li>
 <li>都是相同长度的字符串且相同字符按相同顺序排列</li>
 <li>都是相同对象（意味着每个对象有同一个引用）</li>
 <li>都是数字且
  <ul>
   <li>都是 <code>+0</code></li>
   <li>都是 <code>-0</code></li>
   <li>都是 {{jsxref("NaN")}}</li>
   <li>或都是非零而且非 {{jsxref("NaN")}} 且为同一个值</li>
  </ul>
 </li>
</ul>

<p>与{{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} 运算<em>不同。</em>  <code>==</code> 运算符在判断相等前对两边的变量(如果它们不是同一类型) 进行强制转换 (这种行为的结果会将 <code>"" == false</code> 判断为 <code>true</code>), 而 <code>Object.is</code>不会强制转换两边的值。</p>

<p>与{{jsxref("Operators/Comparison_Operators", "===", "#Identity")}} 运算也不相同。 <code>===</code> 运算符 (也包括 <code>==</code> 运算符) 将数字 <code>-0</code> 和 <code>+0</code> 视为相等 ，而将{{jsxref("Number.NaN")}} 与{{jsxref("NaN")}}视为不相等.</p>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">if (!Object.is) {
  Object.is = function(x, y) {
    // SameValue algorithm
    if (x === y) { // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x &amp;&amp; y !== y;
    }
  };
}
</pre>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-object.is', 'Object.is')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.is', 'Object.is')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="例子">例子</h2>

<h3 id="使用_Object.is">使用 Object.is</h3>

<pre class="brush: js">Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// 特例
Object.is(0, -0);            // false
Object.is(0, +0);            // true
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
</pre>

<p><strong>规范</strong></p>

<p>
 </p><table>
  <thead>
   <tr>
    <th scope="col">Specification</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td>{{SpecName('ESDraft', '#sec-object.is', 'Object.is')}}<br>
      </td>
   </tr>
  </tbody>
 </table>


<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("javascript.builtins.Object.is")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness">JavaScript 中的相等性判断</a> — JavaScript 中的三种相等性判断方法的比较</li>
</ul>
