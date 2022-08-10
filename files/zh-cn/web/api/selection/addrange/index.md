---
title: Selection.addRange()
slug: Web/API/Selection/addRange
translation_of: Web/API/Selection/addRange
---
<div>{{ApiRef}}</div>

<h2 id="Summary">概述</h2>

<p>向选区（{{domxref("Selection")}}）中添加一个区域（{{domxref("Range")}}）。</p>

<h2 id="Syntax">语法</h2>

<pre class="syntaxbox"><em>sel</em>.addRange(<em>range</em>)</pre>

<h3 id="Parameters">参数</h3>

<dl>
 <dt><em><code>range</code></em></dt>
 <dd>一个区域（{{ domxref("Range") }}）对象将被增加到选区（{{ domxref("Selection") }}）当中。</dd>
</dl>

<h2 id="Examples">例子</h2>

<pre class="brush:js">/* 在一个 HTML 文档中选中所有<strong>加粗</strong>的文本。 */

var strongs = document.getElementsByTagName("strong");
var s = window.getSelection();

if(s.rangeCount &gt; 0) s.removeAllRanges();

for(var i = 0; i &lt; strongs.length; i++) {
  var range = document.createRange();
  range.selectNode(strongs[i]);
  s.addRange(range);
}</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="Browser_compatibility">浏览器兼容性</h2>

<p>{{Compat("api.Selection.addRange")}}</p>

<h2 id="See_also">相关链接</h2>

<ul>
 <li>{{domxref("Selection")}}，此方法所属接口。</li>
</ul>
