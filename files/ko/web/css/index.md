---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
tags:
  - CSS
  - Design
  - Landing
  - Layout
  - Reference
  - "l10n:priority"
  - 스타일시트
translation_of: Web/CSS
---

<div>{{CSSRef}}</div>

<p class="summary">
  <strong>Cascading Style Sheets</strong>(<strong>CSS</strong>)는 <a href="/ko/docs/Web/HTML">HTML</a>이나
  <a href="/ko/docs/Web/XML">XML</a>(XML의 방언인 <a href="/ko/docs/Web/SVG">SVG</a>,
  <a href="/ko/docs/Glossary/XHTML">XHTML</a> 포함)로 작성된 문서의 표시 방법을 기술하기 위한
  <a href="/ko/docs/Web/API/StyleSheet">스타일 시트</a> 언어입니다. CSS는 요소가 화면, 종이, 음성이나 다른 매체 상에
  어떻게 렌더링되어야 하는지 지정합니다.
</p>

<p>
  CSS는 <strong>오픈 웹</strong>의 핵심 언어 중 하나이며, <a href="https://w3.org/Style/CSS/#specs">W3C 명세</a>가 다양한
  브라우저의 표준으로 작동하고 있습니다. 과거에는 CSS 명세의 다양한 부분을 순차적으로 개발했으므로 CSS1, CSS2.1,
  CSS3처럼 버전을 붙이는 것이 가능했습니다. 그러나 공식 버전이 CSS4로 올라가지는 않을 것입니다.
</p>

<p>
  CSS3 이후, CSS 명세의 범위가 엄청나게 넓어짐에 따라 여러 CSS 모듈 사이의 차이도 너무나 커졌습니다. 그래서 이제는
  <a href="https://www.w3.org/Style/CSS/current-work">권고안을 모듈별로 개발하고 공개</a>하는 것이 더 효과적인
  상황입니다. 이제 W3C는 CSS 명세의 버전을 올리지 않고, 대신 주기적으로
  <a href="https://www.w3.org/TR/css/">CSS 명세 안정판</a>의 스냅샷을 생성하고 있습니다.
</p>

<h2 id="key_resources">중요한 자료</h2>

<dl>
  <dt>CSS 소개</dt>
  <dd>
    웹 개발이 처음이시라면 <a href="/ko/docs/Learn/Getting_started_with_the_web/CSS_basics">CSS 기본</a> 문서에서 CSS란
    무엇인지, 그리고 CSS의 사용법을 배워보세요.
  </dd>
  <dt>CSS 자습서</dt>
  <dd>
    MDN의 <a href="/ko/docs/Learn/CSS">CSS 학습지</a>는 기초 수준부터 숙련 레벨까지, 모든 기초를 망라하는 방대한
    자습서를 포함하고 있습니다.
  </dd>
  <dt>CSS 참고서</dt>
  <dd>
    MDN의 <a href="/ko/docs/Web/CSS/Reference">CSS 전체 참고서</a>는 숙련된 개발자를 위해 CSS의 모든 속성과 개념의
    설명을 제공합니다.
  </dd>
</dl>

<div class="callout">
  <h4 id="looking_to_become_a_front-end_web_developer">프런트엔드 웹 개발자가 되고자 하시나요?</h4>

  <p>목표를 달성하기 위한 모든 필수 정보가 들어있는 교육 과정을 준비했습니다.</p>

  <p>
    <a href="/ko/docs/Learn/Front-end_web_developer"><strong>시작하기</strong></a>
  </p>
</div>

<h2 class="Documentation" id="tutorials">자습서</h2>

<p>
  MDN <a href="/ko/docs/Learn/CSS">CSS 학습지</a>는 CSS를 처음부터 알려주는 모듈로 구성되어 있습니다. 사전 지식도
  필요하지 않습니다.
</p>

<dl>
  <dt><a href="/ko/docs/Learn/CSS/First_steps">CSS 첫걸음</a></dt>
  <dd>
    CSS(Cascading Style Sheets)는 웹 페이지에 스타일과 레이아웃을 적용할 때 사용합니다. 예시를 몇 가지 들자면 글꼴,
    색상, 크기를 조절하고, 콘텐츠의 간격을 조정하고, 페이지를 여러개의 열로 나누고, 애니메이션 등 장식을 추가할 수도
    있습니다. 이 모듈에서는 CSS의 기본적인 작동 원리와 구문의 생김새, HTML에 실제로 적용하는 법을 배우면서 다음 과정으로
    가는 길을 닦습니다.
  </dd>
  <dt><a href="/ko/docs/Learn/CSS/Building_blocks">CSS의 구성 블록</a></dt>
  <dd>
    <p>
      이 모듈은 <a href="/ko/docs/Learn/CSS/First_steps">CSS 첫걸음</a>이 끝난 곳부터 시작합니다. 이제 언어와 구문에
      익숙해졌고, 기본적인 사용법도 익혀봤으니 약간 더 깊게 들어갈 차례입니다. 이 모듈에서는 종속과 상속, 사용할 수 있는
      모든 선택자 유형, 단위와 크기, 배경과 테두리 스타일, 디버깅 등등 많은 것을 알아봅니다.
    </p>

    <p>
      여기의 목표는 여러분이 훌륭한 CSS를 작성할 수 있도록 도구를 제공하고,
      <a href="/ko/docs/Learn/CSS/Styling_text">텍스트 스타일링</a>나
      <a href="/ko/docs/Learn/CSS/CSS_layout">CSS 레이아웃</a>처럼 더 상세한 주제로 들어가기 전에 알고 있어야 할 필수
      이론을 익히는 것입니다.
    </p>
  </dd>
  <dt><a href="/ko/docs/Learn/CSS/Styling_text">텍스트 스타일링</a></dt>
  <dd>
    CSS 언어 기초를 다뤘으니, 다음 주제는 대표적인 CSS의 영역인 텍스트 스타일링에 집중합니다. 여기서는 글꼴 설정, 굵기,
    기울임꼴, 행간과 자간, 그림자 등 다양한 텍스트 기능을 배웁니다. 그 후 사용자 지정 글꼴을 페이지에 적용하는 법,
    그리고 리스트와 링크 스타일로 모듈을 마무리합니다.
  </dd>
  <dt><a href="/ko/docs/Learn/CSS/CSS_layout">CSS 레이아웃</a></dt>
  <dd>
    여기까지 왔으면 이미 CSS 기초, 텍스트 스타일링, 그리고 콘텐츠가 들어갈 박스를 조작하고 스타일을 적용하는 법을
    다뤘으니, 이번엔 박스를 뷰포트나 다른 박스에 상대적인 위치에 원하는 대로 배치하는 법을 알아봅니다. 필요한 사전
    지식은 모두 학습했으니 서로 다른 <code>display</code> 설정과 플렉스박스, CSS 그리드처럼 최신 레이아웃 방식, 위치
    조정처럼 CSS 레이아웃을 더 자세히 살펴보겠습니다. 마지막으로, 오래됐지만 여전히 알고 있으면 도움이 될만한 레이아웃
    방법도 몇 가지 둘러봅니다.
  </dd>
  <dt><a href="/ko/docs/Learn/CSS/Howto">일반적인 CSS 문제 해결하기</a></dt>
  <dd>이 모듈은 웹 페이지를 만들 때의 일반적인 문제를 CSS를 사용해서 해결하는 법을 설명합니다.</dd>
</dl>

<h2 id="참고서">참고서</h2>

<ul>
  <li>
    <a href="/ko/docs/Web/CSS/Reference">CSS 참고서</a>: 숙련된 웹 개발자를 위해 CSS의 모든 속성과 개념을 설명합니다.
  </li>
  <li>
    CSS 핵심 개념
    <ul>
      <li><a href="/ko/docs/Web/CSS/Syntax">언어 구문과 형태</a></li>
      <li>
        <a href="/ko/docs/Web/CSS/Specificity">명시도</a>, <a href="/ko/docs/Web/CSS/inheritance">상속</a>,
        <a href="/ko/docs/Web/CSS/Cascade">종속</a>
      </li>
      <li>
        <a href="/ko/docs/Web/CSS/CSS_Values_and_Units">CSS 단위와 값</a>,
        <a href="/ko/docs/Web/CSS/CSS_Functions">CSS 함수 표기법</a>
      </li>
      <li>
        <a href="/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">박스 모델</a>과
        <a href="/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">여백 상쇄</a>
      </li>
      <li><a href="/ko/docs/Web/CSS/Containing_block">컨테이닝 블록</a></li>
      <li>
        <a href="/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context">쌓임 맥락</a>과
        <a href="/ko/docs/Web/Guide/CSS/Block_formatting_context">블록 서식 맥락</a>
      </li>
      <li>
        <a href="/ko/docs/Web/CSS/initial_value">초기 값</a>, <a href="/ko/docs/Web/CSS/computed_value">계산 값</a>,
        <a href="/ko/docs/Web/CSS/used_value">사용 값</a>, <a href="/ko/docs/Web/CSS/actual_value">실제 값</a>
      </li>
      <li><a href="/ko/docs/Web/CSS/Shorthand_properties">CSS 단축 속성</a></li>
      <li><a href="/ko/docs/Web/CSS/CSS_Flexible_Box_Layout">CSS 플렉스박스 레이아웃</a></li>
      <li><a href="/ko/docs/Web/CSS/CSS_Grid_Layout">CSS 그리드 레이아웃</a></li>
      <li><a href="/ko/docs/Web/CSS/CSS_Selectors">CSS 선택자</a></li>
      <li><a href="/ko/docs/Web/CSS/Media_Queries">미디어 쿼리</a></li>
      <li><a href="/ko/docs/Web/CSS/animation">애니메이션</a></li>
    </ul>
  </li>
</ul>

<h2 class="Tools" id="cookbook">쿡북</h2>

<p>
  <a href="/ko/docs/Web/CSS/Layout_cookbook">CSS 레이아웃 쿡북</a>은 여러분의 웹 사이트에서도 사용할 일이 생길지 모르는,
  흔히 쓰이는 레이아웃 패턴을 모아놓은 문서입니다. 프로젝트에서 사용할 기초 코드에 더해, 레이아웃 명세를 사용하는 각기
  다른 방법과 개발자로서 결정할 수 있는 선택지도 제공합니다.
</p>

<h2 class="Tools" id="tools_for_css_development">CSS 개발 도구</h2>

<ul>
  <li>
    CSS가 유효한지 검사하는
    <a href="http://jigsaw.w3.org/css-validator/">W3C CSS Validation 서비스</a>. 매우 유용한 디버깅 도구입니다.
  </li>
  <li>
    <a href="/ko/docs/Tools">Firefox 개발자 도구</a>를 사용하면 <a href="/ko/docs/Tools/Page_Inspector">검사기</a>와
    <a href="/ko/docs/Tools/Style_Editor">스타일 편집기</a>를 통해 페이지의 CSS를 살펴보고, 실시간으로 편집할 수
    있습니다.
  </li>
  <li>
    Firefox의 <a href="https://addons.mozilla.org/ko/firefox/addon/web-developer/">Web Developer 확장</a>을 사용해서
    주시하는 사이트의 CSS를 추적하고 실시간으로 편집할 수 있습니다.
  </li>
  <li>웹 커뮤니티에서는 <a href="/ko/docs/Web/CSS/Tools">다른 여러 가지 CSS 도구</a>도 만들었습니다.</li>
</ul>

<h2 id="see_also">같이 보기</h2>

<ul>
  <li>
    <a href="/ko/docs/Web/Demos_of_open_web_technologies#CSS">CSS 데모</a>: 최신 CSS 기술을 사용한 데모를 탐색하며
    영감을 얻어보세요.
  </li>
  <li>
    CSS를 많이 적용하는 웹 언어: <a href="/ko/docs/Web/HTML">HTML</a>, <a href="/ko/docs/Web/SVG">SVG</a>,
    <a href="/ko/docs/Glossary/XHTML">XHTML</a>, <a href="/ko/docs/Web/XML">XML</a>
  </li>
  <li><a href="https://stackoverflow.com/questions/tagged/css">Stack Overflow의 CSS 질문 목록</a></li>
</ul>
