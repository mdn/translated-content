---
title: 'RangeError: radix must be an integer'
slug: Web/JavaScript/Reference/Errors/Bad_radix
tags:
  - JavaScript
  - 范围错误
  - 错误
translation_of: Web/JavaScript/Reference/Errors/Bad_radix
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="消息">消息</h2>

<pre class="syntaxbox">RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
RangeError: toString() radix argument must be between 2 and 36 (Chrome)
</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("RangeError")}}</p>

<h2 id="发生了什么错误？">发生了什么错误？</h2>

<p>在使用{{jsxref("Number.prototype.toString()")}}方法时使用了可选的基数参数，参数应该为一个 2 到 36 之间的整型 (数字)，返回对应数字的转换为字符串时表示的该进制对应的数字量。</p>

<p>为什么小于 36 呢？因为一个大于 (包含等于)10 的基数在使用时需要用一个字母表字符来代替。不能超过 36 是因为拉丁字母表中只有 26 个字符。</p>

<p>你可能会用到以下的常见基数：</p>

<ul>
 <li>2 for <a href="https://en.wikipedia.org/wiki/Binary_number">二进制</a>,</li>
 <li>8 for <a href="https://en.wikipedia.org/wiki/Octal">八进制</a>,</li>
 <li>10 for <a href="https://en.wikipedia.org/wiki/Decimal">十进制</a>,</li>
 <li>16 for <a href="https://en.wikipedia.org/wiki/Hexadecimal">十六进制</a>.</li>
</ul>

<h2 id="示例">示例</h2>

<h3 id="错误示例">错误示例</h3>

<pre class="brush: js example-bad">(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
// You cannot use a string like this for formatting:
(12071989).toString("MM-dd-yyyy");
</pre>

<h3 id="正确示例">正确示例</h3>

<pre class="brush: js example-good">(42).toString(2);     // "101010" (binary)
(13).toString(8);     // "15"     (octal)
(0x42).toString(10);  // "66"     (decimal)
(100000).toString(16) // "186a0"  (hexadecimal)
</pre>

<h2 id="参考">参考</h2>

<ul>
 <li>{{jsxref("Number.prototype.toString()")}}</li>
</ul>
