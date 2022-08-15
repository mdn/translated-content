---
title: Comments
slug: Web/CSS/Comments
tags:
  - CSS
  - Reference
translation_of: Web/CSS/Comments
---
<div>{{CSSRef}}</div>

<p>CSS <strong>주석</strong>은 코드에 설명을 넣거나, 브라우저가 스타일 시트의 특정 부분을 읽지 못하도록 방지할 때 사용합니다. 주석은 문서의 레이아웃에 영향을 주지 않습니다.</p>

<h2 id="구문">구문</h2>

<p>주석은 스타일 시트에서 공백이 위치할 수 있는 곳 어디에나 넣을 수 있습니다. 한 줄로도, 여러 줄로도 사용할 수 있습니다.</p>

<pre class="syntaxbox">/* Comment */</pre>

<h2 id="예제">예제</h2>

<pre class="brush:css">/* 한 줄 주석 */

/*
여러
줄을
차지하는
주석
*/

/* 아래와 같이 사용하면
   스타일을 숨길 수 있음 */
/*
span {
  color: blue;
  font-size: 1.5em;
}
*/
</pre>

<h2 id="참고">참고</h2>

<p>한 줄과 여러 줄 주석 모두 <code>/* */</code> 구문을 사용하며 다른 방법은 없습니다. 그러나 {{htmlelement("style")}} 요소를 사용하는 경우 <code>&lt;!-- --&gt;</code>를 이용해 구형 브라우저에게서 CSS를 숨길 수 있지만, 추천하는 방법은 아닙니다. <code>/* */</code> 주석 구문을 사용하는 대부분의 언어와 마찬가지로 주석을 중첩할 수는 없습니다. 즉 <code>/*</code>을 뒤따르는 첫 번째 <code>*/</code>이 주석을 끝냅니다.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="같이_보기">같이 보기</h2>

<ul>
  <li>CSS 주요 개념
    <ul>
      <li><a href="/ko/docs/Web/CSS/Syntax">CSS 문법</a></li>
      <li><a href="/ko/docs/Web/CSS/At-rule">@규칙</a></li>
      <li><a href="/ko/docs/Web/CSS/Comments">주석</a></li>
      <li><a href="/ko/docs/Web/CSS/Specificity">명시도</a></li>
      <li><a href="/ko/docs/Web/CSS/inheritance">상속</a></li>
      <li><a href="/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">박스 모델</a></li>
      <li><a href="/ko/docs/Web/CSS/Layout_mode">레이아웃 모드</a></li>
      <li><a href="/ko/docs/Web/CSS/Visual_formatting_model">시각적 서식 모델</a></li>
      <li><a href="/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">마진 중첩</a></li>
      <li>값
        <ul>
          <li><a href="/ko/docs/Web/CSS/initial_value">초깃값</a></li>
          <li><a href="/ko/docs/Web/CSS/computed_value">계산값</a></li>
          <li><a href="/ko/docs/Web/CSS/resolved_value">결정값</a></li>
          <li><a href="/ko/docs/Web/CSS/specified_value">지정값</a></li>
          <li><a href="/ko/docs/Web/CSS/used_value">사용값</a></li>
          <li><a href="/ko/docs/Web/CSS/actual_value">실제값</a></li>
        </ul>
      </li>
      <li><a href="/ko/docs/Web/CSS/Value_definition_syntax">값 정의 구문</a></li>
      <li><a href="/ko/docs/Web/CSS/Shorthand_properties">단축 속성</a></li>
      <li><a href="/ko/docs/Web/CSS/Replaced_element">대체 요소</a></li>
    </ul>
  </li>
</ul>
