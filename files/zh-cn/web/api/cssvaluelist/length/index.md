---
title: CSSValueList.length
slug: Web/API/CSSValueList/length
tags:
  - API
  - CSS
  - CSSValueList
translation_of: Web/API/CSSValueList/length
---
<div>{{APIRef("CSSOM")}}{{Deprecated_header}}</div>

<p>{{domxref("CSSValueList")}} 接口的只读属性 <code><strong>length</strong></code> 表示列表中的 {{domxref("CSSValue")}} 数量。有效的索引区间为 <code>0</code> 到 <code>length-1</code>。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">var <var>length</var> = <var>cssValueList</var>.length;
</pre>

<h3 id="值">值</h3>

<p>一个 <code>unsigned long</code> 数值，表示此列表中 {{domxref("CSSValue")}} 的个数。</p>

<h2 id="规范">规范</h2>

<p>该特性最初在 <a href="https://www.w3.org/TR/DOM-Level-2-Style/">DOM Style Level 2</a> 中定义，但从那时起已从标准化工作中移除。</p>

<p>它已被现代、不兼容的 <a href="/zh-CN/docs/Web/API/CSS_Typed_OM_API">CSS 类型对象模型 API</a> 取代，该 API 已被标准化。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>
