---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
translation_of: Web/JavaScript/Reference/Global_Objects/String/small
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p><strong><code>small()</code></strong> 方法的作用是创建一个使字符串显示小号字体的 {{HTMLElement("small")}} 标签。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><code><var>str</var>.small()</code></pre>

<h3 id="返回值">返回值</h3>

<p>带有 {{HTMLElement("small")}} 标签的字符串。</p>

<h2 id="描述">描述</h2>

<p><code>small()</code> 方法会 将一个字符串嵌入到<code>&lt;small&gt;</code> 标签中： <code>"&lt;small&gt;str&lt;/small&gt;"。</code></p>

<h2 id="示例">示例</h2>

<h3 id="使用_small_函数">使用 <code>small()</code> 函数</h3>

<p>为了改变一个字符串的字体大小，下面的例子使用了字符串中的方法：</p>

<pre class="brush: js">var worldString = 'Hello, world';

console.log(worldString.small());     // &lt;small&gt;Hello, world&lt;/small&gt;
console.log(worldString.big());       // &lt;big&gt;Hello, world&lt;/big&gt;
console.log(worldString.fontsize(7)); // &lt;font size="7"&gt;Hello, world&lt;/fontsize&gt;
</pre>

<p>使用{{domxref("HTMLElement.style", "element.style")}}对象，你能更加一般地获得和操作该元素的属性，比如：</p>

<pre class="brush: js">document.getElementById('yourElemId').style.fontSize = '0.7em';
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

{{Compat}}

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("String.prototype.fontsize()")}}</li>
 <li>{{jsxref("String.prototype.big()")}}</li>
</ul>
