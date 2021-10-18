---
title: Main Axis (主軸)
slug: Glossary/Main_Axis
tags:
  - CSS
  - Glossary
  - Main axis
  - flexbox
translation_of: Glossary/Main_Axis
---
<p>{{glossary("flexbox")}} における主軸は、{{cssxref("flex-direction")}} プロパティの設定方向によって定義されます。<code>flex-direction</code> が取り得る値は以下の四つです。</p>

<ul>
 <li><code>row</code></li>
 <li><code>row-reverse</code></li>
 <li><code>column</code></li>
 <li><code>column-reverse</code></li>
</ul>

<p><code>row</code> または <code>row-reverse</code> を選んだ場合は、主軸はインライン要素の並ぶ方向に伸びる軸となります。</p>

<p><img alt="flex-direction が row の場合の主軸" src="https://mdn.mozillademos.org/files/15708/Basics1.png" style="display: block; height: 152px; margin: 0px auto; width: 522px;"></p>

<p><code>column</code> または <code>column-reverse</code> を選んだ場合は、ページの上から下に向かってブロック要素の並ぶ方向に伸びる軸となります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15709/Basics2.png" style="display: block; height: 227px; margin: 0px auto; width: 709px;"></p>

<p>アイテムの <code>flex</code> プロパティを使って、flex アイテム自体が使える幅を指定することで、主軸に沿ったサイズを制御することができます。また、アイテム間そしてアイテムの周囲の余白について、<code>justify-content</code> プロパティを使って制御することができます。</p>

<h2 id="Learn_more" name="Learn_more">関連項目</h2>

<h3 id="Property_reference" name="Property_reference">プロパティリファレンス</h3>

<div class="index">
<ul>
 <li>{{cssxref("flex-basis")}}</li>
 <li>{{cssxref("flex-direction")}}</li>
 <li>{{cssxref("flex-grow")}}</li>
 <li>{{cssxref("flex-shrink")}}</li>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("flex")}}</li>
 <li></li>
</ul>
</div>

<h3 id="Further_reading" name="Further_reading">参考文献</h3>

<ul>
 <li>CSS Flexbox Guide: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Basic Concepts of Flexbox</a></em></li>
 <li>CSS Flexbox Guide: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Aligning items in a flex container</a></em></li>
 <li>CSS Flexbox Guide: <em><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Controlling Ratios of flex items along the main axis</a></em></li>
</ul>
