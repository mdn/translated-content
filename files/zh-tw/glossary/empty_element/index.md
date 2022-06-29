---
title: Empty element
slug: Glossary/Empty_element
tags:
  - 置空元素
  - 術語表
translation_of: Glossary/Empty_element
---
<p><strong>置空元素(empty element)</strong>是一種來自HTML、 SVG 或 MathML <strong>不能</strong>有任何子節點 (如，嵌套元素或 文本節點)的元素({{Glossary("element")}})。</p>

<p><a href="https://html.spec.whatwg.org/multipage/">HTML</a>、 <a href="https://www.w3.org/TR/SVG2/">SVG</a> 和 <a href="https://www.w3.org/TR/MathML3/">MathML</a> 規範非常精確地定義了每個元素可以包含什麼。很多組合沒有語義意義，例如 {{HTMLElement("audio")}} 元素嵌套{{HTMLElement("hr")}} 元素。</p>

<p>在 HTML，給置空元素使用閉合標籤是無效的。例如：<code>&lt;input type="text"&gt;&lt;/input&gt;</code> 就是無效的 HTML。</p>

<p> HTML的置空元素列表如下：</p>

<ul>
 <li>{{HTMLElement("area")}}</li>
 <li>{{HTMLElement("base")}}</li>
 <li>{{HTMLElement("br")}}</li>
 <li>{{HTMLElement("col")}}</li>
 <li>{{HTMLElement("embed")}}</li>
 <li>{{HTMLElement("hr")}}</li>
 <li>{{HTMLElement("img")}}</li>
 <li>{{HTMLElement("input")}}</li>
 <li>{{HTMLElement("keygen")}}(HTML 5.2 草稿已移除)</li>
 <li>{{HTMLElement("link")}}</li>
 <li>{{HTMLElement("meta")}}</li>
 <li>{{HTMLElement("param")}}</li>
 <li>{{HTMLElement("source")}}</li>
 <li>{{HTMLElement("track")}}</li>
 <li>{{HTMLElement("wbr")}}</li>
</ul>
