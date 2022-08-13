---
title: 주축
slug: Glossary/Main_Axis
tags:
  - CSS
  - Glossary
  - flexbox
translation_of: Glossary/Main_Axis
---
<p>{{glossary("flexbox", "플렉스박스")}}에서, <strong>주축</strong>이란 {{cssxref("flex-direction")}} 속성이 지정한 방향과 수평한 축입니다. <code>flex-direction</code>은 다음과 같은 네 가지 방향이 가능합니다.</p>

<ul>
 <li><code>row</code></li>
 <li><code>row-reverse</code></li>
 <li><code>column</code></li>
 <li><code>column-reverse</code></li>
</ul>

<p><code>row</code> 또는 <code>row-reverse</code>를 선택한 경우, 주축은 행을 따라 인라인 방향으로 진행합니다.</p>

<p><img alt="In this image the flex-direction is row which forms the main axis" src="https://mdn.mozillademos.org/files/15708/Basics1.png" style="display: block; height: 152px; margin: 0px auto; width: 522px;"></p>

<p><code>column</code> 또는 <code>column-reverse</code>인 경우, 주축은 페이지의 위에서 아래, 블록 방향으로 진행합니다.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15709/Basics2.png" style="display: block; height: 227px; margin: 0px auto; width: 709px;"></p>

<p>아이템의 <code>flex</code> 속성을 통하면, 컨테이너의 사용 가능한 공간을 그 아이템에 더 할당하는 방식으로 주축 방향 크기를 키울 수 있습니다. 아니면 <code>justify-content</code> 속성을 사용해 아이템 사이와 주위 여백을 조절할 수 있습니다.</p>

<h2 id="더_알아보기">더 알아보기</h2>

<h3 id="속성_참고서">속성 참고서</h3>

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

<h3 id="더_읽어보기">더 읽어보기</h3>

<ul>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Basic Concepts of Flexbox</a></em></li>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Aligning items in a flex container</a></em></li>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Controlling Ratios of flex items along the main axis</a></em></li>
</ul>
