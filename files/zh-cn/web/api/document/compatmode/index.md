---
title: document.compatMode
slug: Web/API/Document/compatMode
tags:
  - API
  - DOM
  - Document
  - 参考
  - 属性
translation_of: Web/API/Document/compatMode
---
<div>{{ ApiRef("DOM") }}</div>

<p>表明当前文档的渲染模式是<a href="/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode">怪异模式/混杂模式</a>还是标准模式。</p>

<h2 id="术语">术语</h2>

<table>
 <thead>
  <tr>
   <th scope="col">英文</th>
   <th scope="col">中文</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Quirks mode</td>
   <td>怪异模式<br>
    混杂模式</td>
  </tr>
  <tr>
   <td>Standards mode</td>
   <td>标准模式</td>
  </tr>
  <tr>
   <td>almost standards mode<br>
    limited-quirks mode</td>
   <td>准标准模式</td>
  </tr>
 </tbody>
</table>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><var>mode</var> = document.compatMode;</pre>

<h3 id="值">值</h3>

<dl>
 <dt><code>mode</code></dt>
 <dd>是一个枚举值（enumerated value），可能的值有：
 <ul>
  <li><code>"BackCompat"</code>：文档为怪异模式。</li>
  <li><code>"CSS1Compat"</code>：文档不是怪异模式，意味着文档处于标准模式或者准标准模式。</li>
 </ul>
 </dd>
</dl>

<div class="blockIndicator note">
<p><strong>备注：</strong>现在，这些模式都已经被标准化了，准标准模式已和标准模式相同，而标准模式成为了默认表现。标准模式和准标准模式这两个名字已经失去了意义，不再在规范文档中出现。</p>
</div>

<h2 id="例子">例子</h2>

<pre class="brush: js">if (document.compatMode == "BackCompat") {
  // 渲染模式为混杂模式
}
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("api.Document.compatMode")}}</p>
