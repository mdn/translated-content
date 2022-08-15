---
title: 计算值
slug: Web/CSS/computed_value
tags:
  - CSS
  - Reference
translation_of: Web/CSS/computed_value
---
<p>{{cssref}}</p>

<p>一个 CSS 属性的计算值是指这个属性在由父类转向子类的继承中的值。它通过指定值计算出来：</p>

<ul>
 <li>处理特殊的值 {{cssxref("inherit")}}，{{cssxref("initial")}}， {{cssxref("unset")}}和 {{cssxref("revert")}}。</li>
 <li>进行计算，以达到属性摘要中“计算值”行中描述的值。</li>
</ul>

<p>计算值所需要的计算通常包括将相对值转换成绝对值 (如 em 单位或百分比)。例如，如一个元素的属性值为<code> font-size:16px </code>和<code> padding-top:2em</code>, 则<code> padding-top </code>的计算值为 <code>32px </code>(字体大小的 2 倍).</p>

<p>然而，对于有些属性 (这些元素的百分比与需要布局确定后才能知道的值有关，如<code> width</code>,<code> margin-right</code>,<code> text-indent</code>, 和<code> top</code>)，它们的“百分比值”会转换成“百分比的计算值”。另外，line-height 属性值如是没有单位的数字，则该值就是其计算值。这些计算值中的相对值会在 <a href="/en-US/docs/CSS/used_value">应用值</a> 确定后转换成绝对值。</p>

<div class="note">
<p>注意：{{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API 返回 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/resolved_value">resolved value</a>, 可能是 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value">computed value</a> 或 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/used_value">used value</a>其中的一个，取决于属性。</p>
</div>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="参见">参见</h2>

<ul>
 <li>{{domxref("window.getComputedStyle")}}</li>
 <li>CSS 重要概念：
  <ul>
    <li><a href="/zh-CN/docs/Web/CSS/Syntax">CSS 语法</a></li>
    <li><a href="/zh-CN/docs/Web/CSS/At-rule">@ 规则</a></li>
    <li><a href="/zh-CN/docs/Web/CSS/Comments">注释</a></li>
    <li><a href="/zh-CN/docs/Web/CSS/Specificity">优先级</a></li>
    <li><a href="/zh-CN/docs/Web/CSS/inheritance">继承</a></li>
    <li><a href="/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">盒模型</a></li>
    <li><a href="/zh-CN/docs/Web/CSS/Layout_mode">布局模式</a></li>
    <li><a href="/zh-CN/docs/Web/CSS/Visual_formatting_model">视觉格式化模型</a></li>
    <li><a href="/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">外边距合并</a></li>
    <li>值
      <ul>
        <li><a href="/zh-CN/docs/Web/CSS/initial_value">初始值</a></li>
        <li><a href="/zh-CN/docs/Web/CSS/computed_value">计算值</a></li>
        <li><a href="/zh-CN/docs/Web/CSS/resolved_value">解析值</a></li>
        <li><a href="/zh-CN/docs/Web/CSS/specified_value">指定值</a></li>
        <li><a href="/zh-CN/docs/Web/CSS/used_value">应用值</a></li>
        <li><a href="/zh-CN/docs/Web/CSS/actual_value">实际值</a></li>
      </ul>
    </li>
    <li><a href="/zh-CN/docs/Web/CSS/Value_definition_syntax">属性值定义语法</a></li>
    <li><a href="/zh-CN/docs/Web/CSS/Shorthand_properties">简写属性</a></li>
    <li><a href="/zh-CN/docs/Web/CSS/Replaced_element">可替换元素</a></li>
  </ul>
 </li>
</ul>
