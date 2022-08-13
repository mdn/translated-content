---
title: <code>
slug: Web/HTML/Element/code
translation_of: Web/HTML/Element/code
---
<h2 id="摘要">摘要</h2>
<p><strong>HTML <code>&lt;code&gt;</code> 元素</strong>呈现一段计算机代码。默认情况下，它以浏览器的默认等宽字体显示。</p>
<ul>
 <li><dfn><a href="/en-US/docs/HTML/Content_categories">Content categories</a></dfn> <a href="/en-US/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/en-US/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>, palpable content.</li>
 <li><dfn>Permitted content</dfn> <a href="/en-US/docs/HTML/Content_categories#Phrasing_content">Phrasing content</a>.</li>
 <li><dfn>Tag omission</dfn> {{no_tag_omission}}</li>
 <li><dfn>Permitted parent elements</dfn> Any element that accepts <a href="/en-US/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>.</li>
 <li><dfn>DOM interface</dfn> {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the {{domxref("HTMLSpanElement")}} interface for this element.</li>
</ul>
<h2 id="属性">属性</h2>
<p>此元素仅包含 <a href="https://developer.mozilla.org/zh-CN/docs/HTML/Global_attributes">全局属性</a>.</p>
<h2 id="例子">例子</h2>
<pre class="brush: html">&lt;p&gt;Regular text. &lt;code&gt;This is code.&lt;/code&gt; Regular text.&lt;/p&gt;
</pre>
<h3 id="Result">结果</h3>
<p>Regular text. <code>This is code.</code> Regular text.</p>
<p>(中文的等宽字和正常字看起来区别不大，因为汉字本身就是方块行。但是仍能看出几行文字之间的对齐差异)</p>
<h2 id="注意">注意</h2>
<p>CSS 规则可以覆盖浏览器默认的 <code>code</code> 标签字体样式。但用户设置的浏览器字体选项可能会超过 CSS 的优先级，使之无效。</p>
<h2 id="Specifications">Specifications</h2>
{{Specifications}}
<h2 id="Browser_compatibility">浏览器兼容性</h2>
{{Compat("html.elements.code")}}

<h2 id="See_also">See also</h2>
<ul>
 <li>{{HTMLElement("samp")}}</li>
 <li>{{HTMLElement("kbd")}}</li>
 <li>{{HTMLElement("command")}}</li>
 <li>{{HTMLElement("var")}}</li>
</ul>
<div>
 {{HTMLRef}}</div>
