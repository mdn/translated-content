---
title: ブロック、絶対配置、表レイアウトのブロック配置
slug: Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables
tags:
  - CSS
  - ブロックレイアウト
  - ボックス配置
  - 絶対配置
  - 表
translation_of: Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables
---
<p class="summary"><a href="/ja/docs/Web/CSS/CSS_Box_Alignment">ボックス配置仕様書</a>は、様々なレイアウト方法でどのように配置が動作するかを詳説しています。このページでは、ボックス配置は浮動、位置指定、表要素を含むボックスレイアウトのレイアウトでどのように動作するかを明らかにします。このページはブロックレイアウトとボックス配置に固有のことを詳説するため、様々なレイアウト方法に共通のボックス配置の共通機能について説明している、中心となる<a href="/ja/docs/Web/CSS/CSS_Box_Alignment">ボックス配置</a>ページを併せて読んでください。</p>

<div class="note">
<p><strong>Note</strong>: At the time of writing (May 2018), there is no real support for the box alignment properties in block layout. This document details how the specification expects these properties to be implemented for completeness, and is likely to change as the specification and browser implementations develop.</p>
</div>

<h2 id="align-content_and_justify-content" name="align-content_and_justify-content">align-content と justify-content</h2>

<p>The {{cssxref("justify-content")}} property does not apply to block containers or table cells.</p>

<p>The {{cssxref("align-content")}} property applies to the block axis in order to align the contents of the box within its container. If a content distribution method such as <code>space-between</code>, <code>space-around</code> or <code>space-evenly</code> is requested then the fallback alignment will be used, as the content is treated as a single <a href="/ja/docs/Glossary/Alignment_Subject">alignment subject</a>.</p>

<h2 id="justify-self">justify-self</h2>

<p>The {{cssxref("justify-self")}} property is used to align an item inside its containing block on the inline axis.</p>

<p>This property does not apply to floated elements or table cells.</p>

<h3 id="Absolutely_positioned_elements" name="Absolutely_positioned_elements">絶対配置要素</h3>

<p>The alignment container is the positioned block, accounting for the offset values of top, left, bottom, and right. The normal keyword resolves to <code>stretch</code>, unless the positioned item is a replaced element, in which case it resolves to <code>start</code>.</p>

<h2 id="align-self">align-self</h2>

<p>The {{cssxref("align-self")}} property does not apply to block-level boxes (including floats), because there is more than one item in the block axis. It also does not apply to table cells.</p>

<h3 id="Absolutely_positioned_elements_2" name="Absolutely_positioned_elements_2">絶対配置要素</h3>

<p>The alignment container is the positioned block, accounting for the offset values of top, left, bottom, and right. The normal keyword resolves to <code>stretch</code>, unless the positioned item is a replaced element, in which case it resolves to <code>start</code>.</p>

<h2 id="Aligning_in_these_layout_methods_today">Aligning in these layout methods today</h2>

<p>As we do not currently have browser support for box alignment in block layout, your options for alignment are either to use one of the existing alignment methods or, to make even a single item inside a container a flex item in order to use the alignment properties as specified in flexbox.</p>

<p>Alignment of blocks horizontally prior to flexbox was typically achieved by way of setting auto margins on the block. A {{cssxref("margin")}} of <code>auto</code> will absorb all available space in that dimension, therefore setting a left and right margin of auto, you can push a block into the center:</p>

<pre class="brush: css">.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
</pre>

<p>In table layout, you have access to the {{cssxref("vertical-align")}} property to align the contents of a cell inside that cell.</p>

<p>For many use cases, turning the block container into a flex item will give you the alignment capability that you are looking for. In the example below, a container with a single item inside has been turned into a flex container for the purpose of being able to use the alignment properties.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}</p>

<h2 id="Reference" name="Reference">リファレンス</h2>

<h3 id="CSS_Properties" name="CSS_Properties">CSS プロパティ</h3>

<ul>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("align-content")}}</li>
 <li>{{cssxref("justify-self")}}</li>
 <li>{{cssxref("align-self")}}</li>
</ul>

<h3 id="Glossary_Entries" name="Glossary_Entries">用語集の項目</h3>

<ul>
 <li><a href="/ja/docs/Glossary/Alignment_Subject">Alignment subject</a></li>
 <li><a href="/ja/docs/Glossary/Alignment_Container">Alignment container</a></li>
 <li><a href="/ja/docs/Glossary/Fallback_Alignment">Fallback alignment</a></li>
</ul>

<p>{{CSSRef}}</p>
