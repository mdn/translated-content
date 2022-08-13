---
title: Empty element (空要素)
slug: Glossary/Empty_element
tags:
  - CodingScripting
  - Glossary
  - Intermediate
translation_of: Glossary/Empty_element
---
<p><strong>空要素</strong> とは HTML、SVG、MathML における {{Glossary("element", "要素")}} のうち、子ノード (子要素およびテキストノード) を<strong>持つことができない</strong>ものを指します。</p>

<p><a href="https://html.spec.whatwg.org/multipage/">HTML</a>、<a href="https://www.w3.org/TR/SVG2/">SVG</a>、<a href="https://www.w3.org/TR/MathML3/">MathML</a> 仕様は、それぞれの要素が何を含むことができるかを詳細に定義しています。でないと、例えば {{HTMLElement("hr")}} 要素を親に持つ {{HTMLElement("audio")}} 要素、といった無意味な組み合わせが多数存在してしまいます。</p>

<p>また HTML においては、空要素に対する閉じタグの使用は多くの場合禁じられています。例えば、 <code>&lt;input type="text"&gt;&lt;/input&gt;</code> は不正な HTML です。</p>

<p>HTML には以下の空要素が存在します。</p>

<ul>
 <li>{{HTMLElement("area")}}</li>
 <li>{{HTMLElement("base")}}</li>
 <li>{{HTMLElement("br")}}</li>
 <li>{{HTMLElement("col")}}</li>
 <li>{{HTMLElement("embed")}}</li>
 <li>{{HTMLElement("hr")}}</li>
 <li>{{HTMLElement("img")}}</li>
 <li>{{HTMLElement("input")}}</li>
 <li>{{HTMLElement("keygen")}}(HTML 5.2 の草案で削除されました)</li>
 <li>{{HTMLElement("link")}}</li>
 <li>{{HTMLElement("meta")}}</li>
 <li>{{HTMLElement("param")}}</li>
 <li>{{HTMLElement("source")}}</li>
 <li>{{HTMLElement("track")}}</li>
 <li>{{HTMLElement("wbr")}}</li>
</ul>
