---
title: x
slug: Web/SVG/Attribute/x
tags:
  - SVG
  - SVG 属性
  - 需要兼容性表
translation_of: Web/SVG/Attribute/x
---
<p>« <a href="/en/SVG/Attribute">SVG 属性参考主页</a></p>

<p>该属性在用户坐标系统中标识了一个 x 轴坐标。本坐标的确切效果依赖于每个元素。大多数时候，它体现了引用元素的矩形区域的左上角的 x 轴坐标（请阅读每个元素的文档以了解例外情况）。</p>

<p>如果没有指定这个属性，效果相当于值被设置为 0，除了{{ SVGElement("filter") }}元素以及{{ SVGElement("mask") }}元素；这两个元素的<code>x</code>默认值为<strong>-10%</strong>。</p>

<h2 id="用法">用法</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">类别</th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">值</th>
   <td><a href="/en/SVG/Content_type#Coordinate">&lt;coordinate&gt;</a></td>
  </tr>
  <tr>
   <th scope="row">可变性</th>
   <td>Yes</td>
  </tr>
 </tbody>
</table>

<p>{{ page("/en/SVG/Content_type","coordinate") }}</p>

<h2 id="元素">元素</h2>

<p>下列元素可以使用<code>x</code>属性：</p>

<ul>
 <li><a href="/en/SVG/Element#FilterPrimitive">滤镜元素</a> »</li>
 <li>{{ SVGElement("altGlyph") }}</li>
 <li>{{ SVGElement("fePointLight") }}</li>
 <li>{{ SVGElement("feSpotLight") }}</li>
 <li>{{ SVGElement("filter") }}</li>
 <li>{{ SVGElement("foreignObject") }}</li>
 <li>{{ SVGElement("glyphRef") }}</li>
 <li>{{ SVGElement("image") }}</li>
 <li>{{ SVGElement("pattern") }}</li>
 <li>{{ SVGElement("rect") }}</li>
 <li>{{ SVGElement("svg") }}</li>
 <li>{{ SVGElement("text") }}</li>
 <li>{{ SVGElement("use") }}</li>
 <li>{{ SVGElement("mask") }}</li>
 <li>{{ SVGElement("tref") }}</li>
 <li>{{ SVGElement("tspan") }}</li>
</ul>

<h2 id="规范">规范</h2>

{{Specifications}}
