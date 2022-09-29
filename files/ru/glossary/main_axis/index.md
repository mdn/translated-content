---
title: Главная ось
slug: Glossary/Main_Axis
translation_of: Glossary/Main_Axis
original_slug: Глоссарий/Main_Axis
---
<p>Главная ось в {{glossary("flexbox")}} определяется направлением, установленным в свойстве {{cssxref("flex-direction")}}. Это свойство может принимать одно из четырёх значений:</p>

<ul>
 <li><code>row</code></li>
 <li><code>row-reverse</code></li>
 <li><code>column</code></li>
 <li><code>column-reverse</code></li>
</ul>

<p>Если вы выберите <code>row</code> или <code>row-reverse</code>, то главная ось будет проходить вдоль направления строк.</p>

<p><img alt="In this image the flex-direction is row which forms the main axis" src="https://mdn.mozillademos.org/files/15708/Basics1.png" style="display: block; height: 152px; margin: 0px auto; width: 522px;"></p>

<p>Выберите <code>column</code> или <code>column-reverse</code>, и главная ось будет проходить сверху вниз в направлении блоков.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15709/Basics2.png" style="display: block; height: 227px; margin: 0px auto; width: 709px;"></p>

<p>На главной оси вы можете контролировать размеры flex элементов, добавляя к ним свободное пространство с помощью свойства <code>flex</code> на самих элементах. Также, вы можете контролировать пространство между и вокруг элементов свойством <code>justify-content</code>.</p>

<h2 id="Узнать_больше">Узнать больше</h2>

<h3 id="Связанные_свойства">Связанные свойства</h3>

<div class="index">
<ul>
 <li>{{cssxref("flex-basis")}}</li>
 <li>{{cssxref("flex-direction")}}</li>
 <li>{{cssxref("flex-grow")}}</li>
 <li>{{cssxref("flex-shrink")}}</li>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("flex")}}</li>
</ul>
</div>

<h3 id="Дальнейшее_чтение">Дальнейшее чтение</h3>

<ul>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Basic Concepts of Flexbox</a></em></li>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Aligning items in a flex container</a></em></li>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Controlling Ratios of flex items along the main axis</a></em></li>
</ul>
