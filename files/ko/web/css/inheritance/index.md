---
title: 상속
slug: Web/CSS/inheritance
tags:
  - CSS
  - Guide
  - Inheritance
  - Layout
  - Web
translation_of: Web/CSS/inheritance
---
<div>{{cssref}}</div>

<p>MDN 내 각 <a href="/ko/docs/Web/CSS/CSS_Reference">CSS 속성(property) 정의</a> 페이지의 요약절은 그 속성이 기본(default)으로 상속되는지("Inherited: Yes") 혹은 상속되지 않는지("Inherited: no") 쓰여 있습니다. 이 상속 여부는 요소의 속성에 어떤 값이 지정되지 않을 때 일어나는 일을 제어합니다.</p>

<h2 id="Inherited_properties" name="Inherited_properties">상속되는 속성</h2>

<p>요소의 <strong>상속되는 속성</strong>에 값이 지정되지 않은 경우, 요소는 부모 요소의 해당 속성의 <a href="/ko/docs/Web/CSS/computed_value" title="computed value">계산값</a>을 얻습니다. 오직 문서의 루트 요소만 속성의 요약절에 주어진 <a href="/ko/docs/Web/CSS/initial_value" title="initial value">초기값</a>을 얻습니다.</p>

<p>상속되는 속성의 대표적인 예는 {{ Cssxref("color") }} 속성입니다. 주어진 스타일 규칙:</p>

<pre class="brush: css">p { color: green }</pre>

<p>과 마크업:</p>

<pre class="brush: html">&lt;p&gt;This paragraph has &lt;em&gt;emphasized text&lt;/em&gt; in it.&lt;/p&gt;</pre>

<p><code>em</code> 요소는  <code>p</code> 요소로부터 {{ Cssxref("color") }} 속성값을 상속했기 때문에, "emphasized text"는 녹색으로 보입니다. 속성의 초기값(페이지가 어떤 색을 지정하지 않았을 때 루트 요소에 사용된 색)을 얻지 <em>않</em>습니다.</p>

<h2 id="Non-inherited_properties" name="Non-inherited_properties">상속되지 않는 속성</h2>

<p>요소의 <strong>상속되지 않는 속성</strong>(Mozilla 코드에서는 가끔 <strong>reset 속성</strong>으로 불림)에 어떤 값이 지정되지 않는 경우, 요소는 그 속성의 <a href="/ko/docs/Web/CSS/initial_value" title="initial value">초기값</a>을 얻습니다(속성의 요약절에 지정된 대로).</p>

<p>상속되지 않는 속성의 대표적인 예는 {{ Cssxref("border") }} 속성입니다. 주어진 스타일 규칙:</p>

<pre class="brush: css"> p { border: medium solid }</pre>

<p>과 마크업:</p>

<pre class="brush: html">  &lt;p&gt;This paragraph has &lt;em&gt;emphasized text&lt;/em&gt; in it.&lt;/p&gt;</pre>

<p>"emphasized text"는 테두리가 없습니다({{ Cssxref("border-style") }}의 초기값이 <code>none</code>이기 때문에).</p>

<h2 id="Notes" name="Notes">참고</h2>

<p>{{ Cssxref("inherit") }} 키워드는 작성자가 명시적으로 상속을 지정할 수 있게 합니다. 상속되는 속성과 상속되지 않는 속성 모두에 작동합니다.</p>

<h2 id="See_Also" name="See_Also">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/CSS/CSS_Reference" title="CSS Reference">CSS 참고서</a></li>
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
 <li>{{ Cssxref("inherit") }}</li>
</ul>
