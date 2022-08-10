---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/unescape
---
<div>{{jsSidebar("Objects")}}</div>

<p>已废弃的<code><strong>unescape()</strong></code> 方法计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。上述的转义序列就像{{jsxref("escape")}}里介绍的一样。因为 <code>unescape</code> 已经废弃，建议使用 {{jsxref("decodeURI")}}或者{{jsxref("decodeURIComponent")}} 替代本方法。</p>

<div class="note">
<p><strong>备注：</strong>不要使用<code>unescape</code>去解码 URLS，使用<code>decodeURI</code>或<code>decodeURIComponent</code>替代。</p>
</div>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><code>unescape(str)</code></pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>被编码过的字符串。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>一个未被转义的新字符串。</p>

<h2 id="描述">描述</h2>

<p><code>unescape</code>函数是<em>全局对象</em>的一个属性。</p>

<h2 id="示例">示例</h2>

<pre class="brush: js">unescape('abc123');     // "abc123"
unescape('%E4%F6%FC');  // "äöü"
unescape('%u0107');     // "ć"
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="相关链接">相关链接</h2>

<ul>
 <li>{{jsxref("decodeURI")}}</li>
 <li>{{jsxref("decodeURIComponent")}}</li>
 <li>{{jsxref("escape")}}</li>
</ul>
