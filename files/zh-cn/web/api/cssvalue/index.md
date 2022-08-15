---
title: CSSValue
slug: Web/API/CSSValue
---
<div>{{APIRef("CSSOM")}}{{Deprecated_header}}</div>

<div><code>CSSValue</code> 接口表示经过计算的当前 CSS 属性值。</div>

<h2 id="属性">属性</h2>

<dl>
 <dt>{{domxref("CSSValue.cssText")}}</dt>
 <dd>{{domxref("DOMString")}} 代表当前值。</dd>
 <dt>{{domxref("CSSValue.cssValueType")}} {{readonlyInline}}</dt>
 <dd>一个 <code>unsigned short</code> 类型的数据用来定义了值的类型。 可取值为：
 <table>
  <tbody>
   <tr>
    <td class="header">值</td>
    <td class="header">说明</td>
   </tr>
   <tr>
    <td><code>CSS_CUSTOM</code></td>
    <td>该值是一个自定义值。</td>
   </tr>
   <tr>
    <td><code>CSS_INHERIT</code></td>
    <td>该值是继承来的值，并且它的 <code>cssText</code> 属性值中包含<code>"inherit"</code>。</td>
   </tr>
   <tr>
    <td><code>CSS_PRIMITIVE_VALUE</code></td>
    <td>该值是一个原始值，并且是 {{domxref("CSSPrimitiveValue")}} 接口的一个实例，可以通过绑定特殊的构造方法在这个 CSSValue 接口的这个实例来获得。</td>
   </tr>
   <tr>
    <td><code>CSS_VALUE_LIST</code></td>
    <td>该值是一个 <code>CSSValue</code> 列表，是{{domxref("CSSValueList")}} 接口的一个实例，可以通过绑定特殊的构造方法在这个 CSSValue 接口的这个实例来获得。</td>
   </tr>
  </tbody>
 </table>
 </dd>
</dl>

<h2 id="规范">规范</h2>

<p>该特性最初在 <a href="https://www.w3.org/TR/DOM-Level-2-Style/">DOM Style Level 2</a> 中定义，但从那时起已从标准化工作中移除。</p>

<p>它已被现代、不兼容的 <a href="/zh-CN/docs/Web/API/CSS_Typed_OM_API">CSS 类型对象模型 API</a> 取代，该 API 已被标准化。</p>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>{{domxref("CSSPrimitiveValue")}}</li>
 <li>{{domxref("CSSValueList")}}</li>
</ul>
