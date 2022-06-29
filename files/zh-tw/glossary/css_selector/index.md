---
title: CSS 選擇器
slug: Glossary/CSS_Selector
tags:
  - 樣式表
  - 超文本標記語言
  - 選擇器
translation_of: Glossary/CSS_Selector
---
<p><strong>CSS 選擇器</strong>是 CSS 規則的一部分。它能讓你選定要調整哪個（或哪些）元素的樣式。</p>

<h2 id="範例">範例</h2>

<pre class="brush: html">
&lt;div&gt; I am inside of a div element. &lt;/div&gt;
&lt;p&gt; I am inside of a paragraph element. &lt;/p&gt;
</pre>

<pre class="brush: css">
div {
 color: green;
}

p {
 color: red;
}
</pre>

<p>在第一個 CSS 規則，我選取了 <code>&lt;div&gt;</code> 元素、並將該元素的文字變成了綠色。在第二個 CSS 規則，我選取了 <code>&lt;p&gt;</code> 元素、並將該元素的文字變成了紅色。結果應該長成這個樣子：</p>

{{EmbedLiveSample("範例", 640, 80)}}

<h2 id="深入理解">深入理解</h2>

<h3 id="基本知識">基本知識</h3>

<ul>
 <li>基本選擇器
  <ul>
   <li><a href="/zh-TW/docs/Web/CSS/Type_selectors">類型選擇器</a> <code>elementname</code></li>
   <li><a href="/zh-TW/docs/Web/CSS/Class_selectors">Class 選擇器</a> <code>.classname</code></li>
   <li><a href="/zh-TW/docs/Web/CSS/ID_selectors">ID 選擇器</a> <code>#idname</code></li>
   <li><a href="/zh-TW/docs/Web/CSS/Universal_selectors">通用選擇器</a><code> * ns|* *|*</code></li>
   <li><a href="/zh-TW/docs/Web/CSS/Attribute_selectors">屬性選擇器</a><code> [attr=value]</code></li>
   <li><a href="/zh-TW/docs/Web/CSS/Pseudo-classes">狀態選擇器</a> <code>a:active, a:visited</code></li>
  </ul>
 </li>
 <li>複合選擇器
  <ul>
   <li><a href="/zh-TW/docs/Web/CSS/Adjacent_sibling_selectors">鄰接同層選擇器</a> <code>A + B</code></li>
   <li><a href="/zh-TW/docs/Web/CSS/General_sibling_selectors">通用同層選擇器</a> <code>A ~ B</code></li>
   <li><a href="/zh-TW/docs/Web/CSS/Child_selectors">直屬選擇器</a> <code>A &gt; B</code></li>
   <li><a href="/zh-TW/docs/Web/CSS/Descendant_selectors">後代選擇器</a> <code>A B</code></li>
  </ul>
 </li>
 <li><a href="/zh-TW/docs/Web/CSS/Pseudo-elements">虛擬元素</a></li>
 <li><a href="/zh-TW/docs/Web/CSS/Pseudo-classes">虛擬類別</a></li>
</ul>

<h3 id="技術指南">技術指南</h3>

<p>{{SpecName("CSS3 Selectors")}}</p>
