---
title: 'TypeError: cyclic object value'
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
tags:
  - Error
  - JavaScript
  - 类型错误
  - 错误提示
translation_of: Web/JavaScript/Reference/Errors/Cyclic_object_value
---
<div>{{jsSidebar("Errors")}}</div>

<div>当一段JSON中出现循环引用，使用{{jsxref("JSON.stringify()")}}这个方法去处理JSON时会报这个"cyclic object value"错误。</div>

<h2 id="提示信息">提示信息</h2>

<pre>TypeError: cyclic object value (Firefox)
TypeError: Converting circular structure to JSON (Chrome and Opera)
TypeError: Circular reference in value argument not supported (Edge)</pre>

<h2 id="错误类型">错误类型</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>当调用 {{jsxref("JSON.stringify()")}} 方法去处理循环引用结构的JSON会失败。</p>

<p>JSON标准参考链接:<a href="https://www.json.org/json-zh.html">JSON format</a></p>

<h2 id="示例">示例</h2>

<h3 id="循环引用">循环引用</h3>

<p>在如下循环结构中：</p>

<pre class="brush: js">var a = {};
var b = {};
a.child = b;
b.child = a;
</pre>

<p>{{jsxref("JSON.stringify()")}} 将会报错</p>

<pre class="brush: js example-bad">JSON.stringify(a);
// TypeError: cyclic object value
</pre>

<p>要处理循环引用的JSON，可以使用支持这种结构的库(例如<a href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a>))，或者自己实现。</p>

<p>下面代码展示了，可以通过指定替换函数({{jsxref("JSON.stringify()")}} 方法的第二个参数) 来检查转换成字符串之前是否有循环对象引用的存在。</p>

<p>注意：以下代码并不会保存循环引用的值。</p>

<pre class="brush: js example-good">var seen = [];

var replacer = function(key, value) {
  if (typeof value === "object" &amp;&amp; value !== null) {
    if (seen.indexOf(value) &gt;= 0) {
      return;
    }
    seen.push(value);
  }
  return value;
};

JSON.stringify(a, replacer);
// "{"child":{}}"
</pre>

<h2 id="相关内容">相关内容</h2>

<ul>
 <li>{{jsxref("JSON.stringify")}}</li>
 <li><a href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a> –  提出了两个方法<code>JSON.decycle</code> 和 <code>JSON.retrocycle</code>，这两个方法能够对循环对象引用结构进行编码和解码，并且使之成为一种扩展的且向下兼容的JSON格式。</li>
</ul>
