---
title: 繼承
slug: Web/CSS/inheritance
translation_of: Web/CSS/inheritance
---
<h2 id="摘要">摘要</h2>

<p>每個 <a href="/en-US/docs/CSS/CSS_Reference">CSS property definition</a> 都寫道是否這個屬性預設有繼承: ("Inherited: Yes") 或是 預設沒有繼承: ("Inherited: no"). 這個設定將會在沒有位屬性標註值時發生.</p>

<h2 id="Inherited_properties">繼承屬性</h2>

<p>When no value for an <strong>inherited property</strong> has been specified on an element, the element gets the <a href="/en-US/docs/CSS/computed_value">computed value</a> of that property on its parent element. Only the root element of the document gets the <a href="/en-US/docs/CSS/initial_value">initial value</a> given in the property's summary.</p>

<p>A typical example of an inherited property is the {{ Cssxref("color") }} property. Given the style rules:</p>

<pre class="brush: css">p { color: green }</pre>

<p>HTML:</p>

<pre class="brush: html">&lt;p&gt;This paragraph has &lt;em&gt;emphasized text&lt;/em&gt; in it.&lt;/p&gt;</pre>

<p>the words "emphasized text" will appear green, since the <code>em</code> element has inherited the value of the {{ Cssxref("color") }} property from the <code>p</code> element. It does <em>not</em> get the initial value of the property (which is the color that is used for the root element when the page specifies no color).</p>

<h2 id="Non-inherited_properties">非繼承屬性</h2>

<p>When no value for an <strong>non-inherited property</strong> (sometimes called a <strong>reset property</strong> in Mozilla code) has been specified on an element, the element gets the <a href="/en-US/docs/CSS/initial_value">initial value</a> of that property (as specified in the property's summary).</p>

<p>A typical example of a non-inherited property is the {{ Cssxref("border") }} property. Given the style rules:</p>

<pre class="brush: css"> p { border: medium solid }</pre>

<p>HTML:</p>

<pre class="brush: html">  &lt;p&gt;This paragraph has &lt;em&gt;emphasized text&lt;/em&gt; in it.&lt;/p&gt;</pre>

<p>the words "emphasized text" will not have a border (since the initial value of {{ Cssxref("border-style") }} is <code>none</code>).</p>

<h2 id="Notes">註</h2>

<p>{{ Cssxref("inherit") }} 關鍵字允許作者準確地去標註. 這個在繼承和非繼承屬性都是有效的.</p>

<h2 id="See_Also">參見</h2>

<ul>
 <li><a href="/en-US/docs/CSS/CSS_Reference">CSS Reference</a></li>
 <li>CSS 重要概念：
  <ul>
    <li><a href="/zh-TW/docs/Web/CSS/Syntax">CSS 語法</a></li>
    <li><a href="/zh-TW/docs/Web/CSS/At-rule">@ 規則</a></li>
    <li><a href="/zh-TW/docs/Web/CSS/Comments">註釋</a></li>
    <li><a href="/zh-TW/docs/Web/CSS/Specificity">優先級</a></li>
    <li><a href="/zh-TW/docs/Web/CSS/inheritance">繼承</a></li>
    <li><a href="/zh-TW/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">盒模型</a></li>
    <li><a href="/zh-TW/docs/Web/CSS/Layout_mode">佈局模式</a></li>
    <li><a href="/zh-TW/docs/Web/CSS/Visual_formatting_model">視覺格式化模型</a></li>
    <li><a href="/zh-TW/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">外邊距合併</a></li>
    <li>值
      <ul>
        <li><a href="/zh-TW/docs/Web/CSS/initial_value">初始值</a></li>
        <li><a href="/zh-TW/docs/Web/CSS/computed_value">計算值</a></li>
        <li><a href="/zh-TW/docs/Web/CSS/resolved_value">解析值</a></li>
        <li><a href="/zh-TW/docs/Web/CSS/specified_value">指定值</a></li>
        <li><a href="/zh-TW/docs/Web/CSS/used_value">應用值</a></li>
        <li><a href="/zh-TW/docs/Web/CSS/actual_value">實際值</a></li>
      </ul>
    </li>
    <li><a href="/zh-TW/docs/Web/CSS/Value_definition_syntax">特性值定義語法</a></li>
    <li><a href="/zh-TW/docs/Web/CSS/Shorthand_properties">特性簡寫</a></li>
    <li><a href="/zh-TW/docs/Web/CSS/Replaced_element">可置換元素</a></li>
  </ul>
 </li>
 <li>{{ Cssxref("inherit") }}</li>
</ul>
