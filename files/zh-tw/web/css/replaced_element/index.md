---
title: 置換元素 (Replaced element)
slug: Web/CSS/Replaced_element
translation_of: Web/CSS/Replaced_element
---
<div>{{CSSRef()}}</div>

<h2 id="摘要">摘要</h2>

<p>CSS 中所謂的「置換元素 (<strong>Replaced element</strong>)」，即是該元素所呈現的內容不在 CSS 的控制範圍之內。這類外部物件所呈現的內容均獨立於 CSS 之外。常見的置換元素包含 {{HTMLElement("img")}}、{{HTMLElement("object")}}、{{HTMLElement("video")}}，或如 {{HTMLElement("textarea")}} 與 {{HTMLElement("input")}} 的表單元素。某些元素 (像是 {{HTMLElement("audio")}} 或 {{HTMLElement("canvas")}}) 只有在特殊情況下才是置替換元素。若是透過 CSS {{cssxref("content")}} 屬性所插入的物件，則稱為「不具名置換元素 (Anonymous replaced elements)」。</p>

<p>在某些情況下，CSS 會特別處理置換元素，如計算邊距空白 (Margin) 與某些 <code>auto</code> 的值。</p>

<p>另需注意的是，<strong>某些</strong>置換元素本身就具備固定尺寸 (Intrinsic dimension) 或已定義的基準線 (Baseline)，並可由 CSS 的某些屬性 (如 {{cssxref("vertical-align")}}) 所利用。</p>

<h2 id="另可參閱">另可參閱</h2>

<ul>
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
</ul>
