---
title: CSSRule.parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
translation_of: Web/API/CSSRule/parentStyleSheet
---
<p>{{ APIRef("CSSOM") }}</p>

<h3 id="Summary">概述</h3>

<p><strong>parentStyleSheet</strong> 返回在当前规则中已定义的样式表对象。</p>

<h3 id="Syntax">语法</h3>

<pre class="eval"><em>stylesheet</em> = cssRule.parentStyleSheet
</pre>

<h3 id="Parameters">参数</h3>

<ul>
 <li><code>stylesheet</code>是一个样式表对象。</li>
</ul>

<h3 id="Example">例子</h3>

<pre class="eval">if ( bgRule.parentStyleSheet != mySheet ) {
   // alien style rule!
}
</pre>

<h3 id="Notes">备注</h3>

<p>查看 <a href="en/Gecko_DOM_Reference/event#DOM_styleSheet_Object">Gecko DOM Reference:event#DOM_styleSheet_Object</a> 有关样式表的对象接口的详细信息。</p>

<h3 id="Specification">规范</h3>

<p>DOM Level 2 Style - cssRule</p>
