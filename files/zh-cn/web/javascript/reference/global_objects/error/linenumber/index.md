---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
tags:
  - JavaScript
  - 属性
  - 错误
translation_of: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p><code><strong>lineNumber</strong></code> 属性的值为抛出错误的代码在其源文件中所在的行号。</p>

<h2 id="示例">示例</h2>

<h3 id="使用_lineNumber">使用 <code>lineNumber</code></h3>

<pre class="brush: js">var e = new Error('Could not parse input');
throw e;
console.log(e.lineNumber) // 2
</pre>

<h3 id="监听_error_事件的示例">监听 <code>error</code> 事件的示例</h3>

<pre class="brush: js">window.addEventListener('error', function(e) {
  console.log(e.lineNumber); // 5
});
var e = new Error('Could not parse input');
throw e;
</pre>

<p>这不是一个标准化的属性，缺乏广泛的支持。参见下面的浏览器兼容性表格。</p>

<h2 id="规范">规范</h2>

<p>非标准化属性。不属于任何规范。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<div>
<div>


<p>{{Compat("javascript.builtins.Error.lineNumber")}}</p>
</div>
</div>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li>{{jsxref("Error.prototype.stack")}} {{non-standard_inline}}</li>
 <li>{{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}</li>
 <li>{{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}</li>
</ul>
