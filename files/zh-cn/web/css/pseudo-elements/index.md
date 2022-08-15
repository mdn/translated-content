---
title: 伪元素
slug: Web/CSS/Pseudo-elements
tags:
  - CSS
  - 伪元素
  - 选择器
translation_of: Web/CSS/Pseudo-elements
---
<div>{{ CSSRef() }}</div>

<p>伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。下例中的 {{CSSxRef("::first-line")}} 伪元素可改变段落首行文字的样式。</p>

<pre class="brush: css; no-line-numbers">/* 每一个 &lt;p&gt; 元素的第一行。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}</pre>

<div class="blockIndicator note">
<p><strong>注意：</strong>与伪元素比较，{{cssxref("pseudo-classes")}} 能够根据状态改变元素样式。</p>
</div>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">selector::pseudo-element {
  property: value;
}</pre>

<div class="blockIndicator note">
<p>一个选择器中只能使用一个伪元素。伪元素必须紧跟在语句中的简单选择器/基础选择器之后。</p>

<p><strong>注意：</strong>按照规范，应该使用双冒号（<code>::</code>）而不是单个冒号（<code>:</code>），以便区分伪类和伪元素。但是，由于旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都同时支持使用这两种方式来表示伪元素。</p>
</div>

<h2 id="标准伪元素索引">标准伪元素索引</h2>

<div class="index" id="index">
<ul>
 <li>{{CSSxRef("::after", "::after (:after)")}}</li>
 <li>{{CSSxRef("::backdrop")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::before", "::before (:before)")}}</li>
 <li>{{CSSxRef("::cue", "::cue (:cue)")}}</li>
 <li>{{CSSxRef("::first-letter", "::first-letter (:first-letter)")}}</li>
 <li>{{CSSxRef("::first-line", "::first-line (:first-line)")}}</li>
 <li>{{CSSxRef("::grammar-error")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::marker")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::placeholder")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::selection")}}</li>
 <li>{{CSSxRef("::slotted", "::slotted()")}}</li>
 <li>{{CSSxRef("::spelling-error")}} {{Experimental_Inline}}</li>
</ul>
</div>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Browser</th>
   <th>Lowest Version</th>
   <th>Support of</th>
  </tr>
  <tr>
   <td rowspan="2">Internet Explorer</td>
   <td>8.0</td>
   <td><code>:pseudo-element</code></td>
  </tr>
  <tr>
   <td>9.0</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
  <tr>
   <td rowspan="2">Firefox (Gecko)</td>
   <td>1.0 (1.0)</td>
   <td><code>:pseudo-element</code></td>
  </tr>
  <tr>
   <td>1.0 (1.5)</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
  <tr>
   <td rowspan="2">Opera</td>
   <td>4.0</td>
   <td><code>:pseudo-element</code></td>
  </tr>
  <tr>
   <td>7.0</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
  <tr>
   <td>Safari (WebKit)</td>
   <td>1.0 (85)</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
 </tbody>
</table>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/CSS/Pseudo-classes">伪类</a></li>
</ul>
