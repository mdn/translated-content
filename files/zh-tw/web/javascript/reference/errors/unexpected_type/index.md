---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
translation_of: Web/JavaScript/Reference/Errors/Unexpected_type
---
<h2 id="錯誤類型">錯誤類型</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="哪裡錯了？">哪裡錯了？</h2>

<p>有一個意想不到的類型。這與 {{jsxref("undefined")}} 或 {{jsxref("null")}} 值經常發生。</p>

<p>另外，某些方法，如 {{jsxref("Object.create()")}} 或 {{jsxref("Symbol.keyFor()")}} 要求特定類型，即必須提供。</p>

<h2 id="實例">實例</h2>

<h3 id="無效的情況下">無效的情況下</h3>

<pre class="brush: js example-bad">// undefined 和 null 的情況下在其上的子方法不起作用
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null


// 某些方法可能要求特定類型
var foo = {}
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = "bar"
Object.create(foo); // TypeError: "foo" is not an object or null
</pre>

<h3 id="修復問題">修復問題</h3>

<p>為了解決空指針 <code>undefined</code> 或 <code>null</code> 值，可以使用 <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a> 運算符，例如。 operator, for example.</p>

<pre class="brush: js">if (typeof foo !== 'undefined') {
  // 現在我們知道foo被定義，我們可以繼續進行。
}</pre>

<h2 id="參見">參見</h2>

<ul>
 <li>{{jsxref("undefined")}}</li>
 <li>{{jsxref("null")}}</li>
</ul>
