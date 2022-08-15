---
title: CSS 기본 박스 모델 입문
slug: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
tags:
  - CSS
  - CSS Box Model
  - Guide
  - Layout
translation_of: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
---
<div>{{CSSRef}}</div>

<p>문서의 레이아웃을 계산할 때, 브라우저의 렌더링 엔진은 표준 <strong>CSS 기본 박스 모델</strong>에 따라 각각의 요소를 사각형 박스로 표현합니다. CSS는 박스의 크기, 위치, 속성(색, 배경, 테두리 모양 등)을 결정합니다.</p>

<p>하나의 박스는 네 부분(영역)으로 이루어집니다. 각 영역을 콘텐츠 영역, 안쪽 여백(패딩) 영역, 테두리 영역, 그리고 바깥 여백(마진) 영역이라고 부릅니다.</p>

<p><img alt="CSS Box model" src="https://mdn.mozillademos.org/files/8685/boxmodel-(3).png" style="height: 384px; width: 548px;"></p>

<p><a id="content-area" name="content-area"><strong>콘텐츠 영역</strong></a>(content area)은 콘텐츠 경계(content edge)가 감싼 영역으로, 글이나 이미지, 비디오 등 요소의 실제 내용을 포함합니다. 콘텐츠 영역의 크기는 콘텐츠 너비(콘텐츠 박스 너비)와 콘텐츠 높이(콘텐츠 박스 높이)입니다. 배경색과 배경 이미지를 가지고 있기도 합니다.</p>

<p>{{cssxref("box-sizing")}} 속성의 값이 기본값인 <code>content-box</code>이며 요소가 블록 레벨 요소인 경우, 콘텐츠 영역의 크기를 {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}}, {{cssxref("max-height")}} 속성을 사용해 사용해 명시적으로 설정할 수 있습니다.</p>

<p><a id="padding-area" name="padding-area"><strong>안쪽 여백 영역</strong></a>(패딩 영역, padding area)은 안쪽 여백 경계(padding edge)가 감싼 영역으로, 콘텐츠 영역을 요소의 안쪽 여백까지 포함하는 크기로 확장합니다. 영역의 크기는 안쪽 여백 박스 너비와 안쪽 여백 박스 높이입니다.</p>

<p>안쪽 여백의 두께는 {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}와 단축 속성인 {{cssxref("padding")}}이 결정합니다.</p>

<p><a id="border-area" name="border-area"><strong>테두리 영역</strong></a>(border area)은 테두리 경계(border edge)가 감싼 영역으로, 안쪽 여백 영역을 요소의 테두리까지 포함하는 크기로 확장합니다. 영역의 크기는 테두리 박스 너비와 테두리 박스 높이입니다.</p>

<p>테두리의 두께는 {{cssxref("border-width")}}와 단축 속성인 {{cssxref("border")}}가 결정합니다. {{cssxref("box-sizing")}} 속성의 값이 <code>border-box</code>라면 테두리 영역의 크기를 {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}}, {{cssxref("max-height")}} 속성을 사용해 명시적으로 설정할 수 있습니다. 박스의 배경({{cssxref("background-color")}} 또는 {{cssxref("background-image")}})은 테두리의 바깥 경계까지 늘어나고, 그릴 땐 테두리에 가려집니다. 이 동작 방식은 {{cssxref("background-clip")}} 속성으로 바꿀 수 있습니다.</p>

<p><a id="margin-area" name="margin-area"><strong>바깥 여백 영역</strong></a>(마진 영역, margin area)은 바깥 여백 경계(margin edge)가 감싼 영역으로, 테두리 요소를 확장해 요소와 인근 요소 사이의 빈 공간까지 포함하도록 만듭니다. 영역의 크기는 바깥 여백 박스 너비와 바깥 여백 박스 높이입니다.</p>

<p>바깥 여백 영역의 크기는 {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}와 단축 속성인 {{cssxref("margin")}}이 결정합니다. <a href="/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">여백 상쇄</a>가 발생할 때는 요소 간에 바깥 여백이 공유되므로 여백 영역이 명확하게 결정되지 않습니다.</p>

<p>끝으로, 비대체 인라인 요소가 차지하는 공간의 크기(줄 높이에 기여하는 양)는, 요소 주위에 테두리와 안쪽 여백이 표시되더라도 {{cssxref("line-height")}} 속성으로 결정한다는 점을 주의하세요.</p>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Box', '#intro')}}</td>
   <td>{{Spec2('CSS3 Box')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ SpecName("CSS2.1","box.html#box-dimensions")}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Though more precisely worded, there is no practical change.</td>
  </tr>
  <tr>
   <td>{{ SpecName("CSS1","#formatting-model")}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

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
