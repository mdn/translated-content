---
title: CSSStyleDeclaration.getPropertyCSSValue()
slug: Web/API/CSSStyleDeclaration/getPropertyCSSValue
tags:
  - CSSOM
  - Obsolete
  - Reference
translation_of: Web/API/CSSStyleDeclaration/getPropertyCSSValue
---
<p>{{ APIRef("CSSOM") }} {{deprecated_header}}</p>

<p><strong>CSSStyleDeclaration.getPropertyCSSValue()</strong> 方法接口返回一个{{domxref('CSSValue')}} 包含一个属性的 CSS 值。请注意，如果属性名称是速记属性，则返回 null。</p>

<p>现在你应该使用 {{domxref("CSSStyleDeclaration.getPropertyValue()")}}。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">let <em>value</em> = <em>style</em>.getPropertyCSSValue(<em>property</em>);</pre>

<h3 id="参数">参数</h3>

<ul>
 <li><em><code>property</code></em> is a {{domxref('DOMString')}} representing the property name to be retrieved.</li>
</ul>

<h3 id="返回值">返回值</h3>

<ul>
 <li><code><em>value</em></code> is a {{domxref('CSSValue')}} containing the CSS value for a property. If none exists, returns <code>null</code>.</li>
</ul>

<h2 id="示例">示例</h2>

<p>The following JavaScript code gets an object containing the computed RGB values of the <code>color</code> CSS property:</p>

<pre class="brush: js">var style = window.getComputedStyle(elem, null);
var rgbObj = style.getPropertyCSSValue('color').getRGBColorValue();
</pre>

<h2 id="规范">规范</h2>

<p>该特性最初在 <a href="https://www.w3.org/TR/DOM-Level-2-Style/">DOM Style Level 2</a> 中定义，但从那时起已从标准化工作中移除。</p>

<p>它已被现代、不兼容的 <a href="/zh-CN/docs/Web/API/CSS_Typed_OM_API">CSS 类型对象模型 API</a> 取代，该 API 已被标准化。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>
