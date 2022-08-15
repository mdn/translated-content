---
title: 의사 요소
slug: Web/CSS/Pseudo-elements
tags:
  - CSS
  - Overview
  - Pseudo-element
  - Reference
  - Selectors
translation_of: Web/CSS/Pseudo-elements
---
<div>{{CSSRef}}</div>

<p><a href="/ko/docs/Web/CSS">CSS</a> <strong>의사 요소</strong>(가상 요소)는 선택자에 추가하는 키워드로, 선택한 요소의 일부분에만 스타일을 입힐 수 있습니다. 예를 들어 {{cssxref("::first-line")}}을 사용하면 문단 첫 줄의 글씨체만 바꿀 수 있습니다.</p>

<pre class="brush: css">/* The first line of every &lt;p&gt; element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}</pre>

<div class="blockIndicator note">
<p><strong>참고</strong>: <a href="/ko/docs/Web/CSS/Pseudo-classes">의사 클래스</a>는 의사 요소와 달리 요소의 <strong>특정 상태</strong>에 스타일을 적용할 때 사용합니다.</p>
</div>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">selector::pseudo-element {
  property: value;
}</pre>

<p>하나의 선택자에 하나의 의사 요소만 사용할 수 있습니다. 반드시 단순 선택자 뒤에 위치해야 합니다.</p>

<div class="blockIndicator note">
<p>참고: 규칙을 따라 단일 콜론(<code>:</code>) 대신 이중 콜론(<code>::</code>)을 사용하여 의사 클래스와 의사 요소를 구별해야 합니다. 그러나 과거 W3C 명세에선 이런 구별을 두지 않았으므로 대부분의 브라우저는 기존 의사 요소에 대해 두 구문 모두 지원합니다.</p>
</div>

<h2 id="표준_의사_요소_색인">표준 의사 요소 색인</h2>

<div class="index" id="index">
<ul>
 <li>{{CSSxRef("::after", "::after (:after)")}}</li>
 <li>{{CSSxRef("::backdrop")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::before", "::before (:before)")}}</li>
 <li>{{CSSxRef("::cue")}}</li>
 <li>{{CSSxRef("::cue-region")}}</li>
 <li>{{CSSxRef("::first-letter", "::first-letter (:first-letter)")}}</li>
 <li>{{CSSxRef("::first-line", "::first-line (:first-line)")}}</li>
 <li>{{CSSxRef("::grammar-error")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::marker")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::part", "::part()")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::placeholder")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("::selection")}}</li>
 <li>{{CSSxRef("::slotted", "::slotted()")}}</li>
 <li>{{CSSxRef("::spelling-error")}} {{Experimental_Inline}}</li>
</ul>
</div>

<table class="standard-table">
 <tbody>
  <tr>
   <th>브라우저</th>
   <th>최하위 버전</th>
   <th>지원</th>
  </tr>
  <tr>
   <td rowspan="2">Internet Explorer</td>
   <td>8.0</td>
   <td><code>:pseudo-element</code></td>
  </tr>
  <tr>
   <td>9.0</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
  <tr>
   <td rowspan="2">Firefox (Gecko)</td>
   <td>1.0 (1.0)</td>
   <td><code>:pseudo-element</code></td>
  </tr>
  <tr>
   <td>1.0 (1.5)</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
  <tr>
   <td rowspan="2">Opera</td>
   <td>4.0</td>
   <td><code>:pseudo-element</code></td>
  </tr>
  <tr>
   <td>7.0</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
  <tr>
   <td>Safari (WebKit)</td>
   <td>1.0 (85)</td>
   <td><code>:pseudo-element ::pseudo-element</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/CSS/Pseudo-classes">의사 클래스</a></li>
</ul>
