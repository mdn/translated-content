---
title: 컨테이닝 블록의 모든 것
slug: Web/CSS/Containing_block
tags:
  - CSS
  - Guide
  - Layout
  - Position
translation_of: Web/CSS/Containing_block
original_slug: Web/CSS/All_About_The_Containing_Block
---
<div>{{cssref}}</div>

<p>요소의 크기와 위치는 <strong>컨테이닝 블록</strong>(containing block)의 영향을 받곤 합니다. 대부분의 경우, 어떤 요소의 컨테이닝 블록은 가장 가까운 <a href="/ko/docs/Web/HTML/Block-level_elements">블록 레벨</a> 조상의 <a href="/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area">콘텐츠 영역</a>이나, 항상 그런 것은 아닙니다. <span class="seoSummary">이 글에서는 요소의 컨테이닝 블록을 결정하는 요인을 살펴보겠습니다.</span></p>

<p>사용자 에이전트(브라우저 등)는 문서를 그릴 때 모든 요소에 대해 상자(박스)를 생성합니다. 각각의 상자는 아래의 네 가지 영역으로 나눠집니다.</p>

<ol start="1">
 <li>콘텐츠 영역</li>
 <li>안쪽 여백(패딩) 영역</li>
 <li>테두리 영역</li>
 <li>바깥 여백(마진) 영역</li>
</ol>

<p><img alt="Diagram of the box model" src="https://mdn.mozillademos.org/files/16558/box-model.png" style="height: 300px; width: 544px;"></p>

<p>많은 개발자들은 요소의 컨테이닝 블록이 언제나 부모 요소의 콘텐츠 영역이라고 생각하지만, 사실 꼭 그렇지는 않습니다. 어떤 항목이 컨테이닝 블록을 결정짓나 알아보겠습니다.</p>

<h2 id="컨테이닝_블록의_효과">컨테이닝 블록의 효과</h2>

<p>컨테이닝 블록을 결정하는 요인에 뭐가 있는지 알아보기 전에, 애초에 컨테이닝 블록이 무슨 상관인지 알아두는게 유용하겠습니다.</p>

<p>요소의 크기와 위치는 컨테이닝 블록의 영향을 자주 받습니다. 백분율 값을 사용한 {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} 속성의 값과 절대적 위치(<code>absolute</code>나 <code>fixed</code> 등)로 설정된 요소의 오프셋 속성 값은 자신의 컨테이닝 블록으로부터 계산됩니다.</p>

<h2 id="컨테이닝_블록_식별">컨테이닝 블록 식별</h2>

<p>컨테이닝 블록의 식별 과정은 {{cssxref("position")}} 속성에 따라 완전히 달라집니다.</p>

<ol>
 <li><code>position</code><strong> </strong>속성이 <code><strong>static</strong></code>, <code><strong>relative</strong></code>, <strong><code>sticky</code></strong> 중 하나이면, 컨테이닝 블록은 가장 가까운 조상 <strong>블록 컨테이너</strong>(<code>inline-block</code>, <code>block</code>, <code>list-item</code> 등의 요소), 또는 가장 가까우면서 <strong>서식 맥락을 형성하는 조상 요소</strong>(<code>table</code>, <code>flex</code>, <code>grid</code>, 아니면 블록 컨테이너 자기 자신)의 콘텐츠 영역 경계를 따라 형성됩니다.</li>
 <li><code>position</code><strong> </strong>속성이 <code><strong>absolute</strong></code>인 경우, 컨테이닝 블록은 <code>position</code> 속성 값이 <code>static</code>이 아닌(<code>fixed</code>, <code>absolute</code>, <code>relative</code>, <code>sticky</code>) 가장 가까운 조상의 내부 여백 영역입니다.</li>
 <li><code>position</code><strong> </strong>속성이 <code><strong>fixed</strong></code>인 경우, 컨테이닝 블록은 {{glossary("viewport", "뷰포트")}}나 페이지 영역(페이지로 나뉘는 매체인 경우)입니다.</li>
 <li><code>position</code><strong> </strong>속성이 <code><strong>absolute</strong></code>나 <code><strong>fixed</strong></code>인 경우, 다음 조건 중 하나를 만족하는 가장 가까운 조상의 내부 여백 영역이 컨테이닝 블록이 될 수도 있습니다.
  <ol>
   <li>{{cssxref("transform")}}이나 {{cssxref("perspective")}} 속성이 <code>none</code>이 아님.</li>
   <li>{{cssxref("will-change")}} 속성이 <code>transform</code>이나 <code>perspective</code>임.</li>
   <li>{{cssxref("filter")}} 속성이 <code>none</code>임. (Firefox에선 <code>will-change</code>가 <code>filter</code>일 때도 적용)</li>
   <li>{{cssxref("contain")}} 속성이 <code>paint</code>임.</li>
  </ol>
 </li>
</ol>

<div class="note">
<p><strong>참고:</strong> 루트 요소({{HTMLElement("html")}})의 컨테이닝 블록은 <strong>초기 컨테이닝 블록</strong>이라고 불리는 사각형입니다. 초기 컨테이닝 블록은 뷰포트 또는 (페이지로 나뉘는 매체에선) 페이지 영역의 크기와 같습니다.</p>
</div>

<h2 id="컨테이닝_블록으로부터_백분율_값_계산하기">컨테이닝 블록으로부터 백분율 값 계산하기</h2>

<p>앞서 언급했듯, 특정 속성의 값이 백분율이라면 그 계산값은 요소의 컨테이닝 블록에 의해 결정됩니다. 이렇게 동작하는 속성으로 <strong>박스 모델 속성</strong>과 <strong>오프셋 속성</strong>이 있습니다.</p>

<ol start="1">
 <li>{{cssxref("height")}}, {{cssxref("top")}}, {{cssxref("bottom")}} 속성은 컨테이닝 블록의 <code>height</code>를 사용해 백분율을 계산합니다. 컨테이닝 블록의 <code>height</code>가 콘텐츠의 크기에 따라 달라질 수 있고, 컨테이닝 블록의 <code>position</code>이 <code>relative</code>거나 <code>static</code>이면 계산값은 <em>0</em>이 됩니다.</li>
 <li>{{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, {{cssxref("margin")}} 속성은 컨테이닝 블록의 <code>width</code>를 사용해 백분율을 계산합니다.</li>
</ol>

<h2 id="예제">예제</h2>

<p>모든 예제의 HTML코드는 다음과 같습니다.</p>

<pre class="brush: html">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;문단입니다!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>

<p>이하 예제는 모두 CSS만 변경합니다.</p>

<h3 id="예제_1">예제 1</h3>

<p>다음 예제에서 문단은 정적 위치를 가지고, 가장 가까운 블록 컨테이너는 {{HTMLElement("section")}}이므로 문단의 컨테이닝 블록도 <code>&lt;section&gt;</code>입니다.</p>

<div class="hidden">
<pre class="brush: html">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;문단입니다!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>
</div>

<pre class="brush: css">body {
  background: beige;
}

section {
  display: block;
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  width: 50%;   /* == 400px * .5 = 200px */
  height: 25%;  /* == 160px * .25 = 40px */
  margin: 5%;   /* == 400px * .05 = 20px */
  padding: 5%;  /* == 400px * .05 = 20px */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('예제_1','100%','300')}}</p>

<h3 id="예제_2">예제 2</h3>

<p>다음 예제에서 <code>&lt;section&gt;</code>은 <code>display: inline</code>으로 인해 블록 컨테이너가 아니고, 서식 문맥도 형성하지 않으므로 문단의 컨테이닝 블록은 {{HTMLElement("body")}} 요소입니다.</p>

<div class="hidden">
<pre class="brush: html">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;문단입니다!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>
</div>

<pre class="brush: css">body {
  background: beige;
}

section {
  display: inline;
  background: lightgray;
}

p {
  width: 50%;     /* == body 너비의 절반 */
  height: 200px;  /* 참고: 백분율 값이었으면 0 */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('예제_2','100%','300')}}</p>

<h3 id="예제_3">예제 3</h3>

<p>다음 예제에서는 <code>&lt;section&gt;</code>의 <code>position</code>이 <code>absolute</code>이기 때문에 문단의 컨테이닝 블록은 <code>&lt;section&gt;</code>입니다. 문단의 백분율 값은 컨테이닝 블록의 {{cssxref("padding")}} 값의 영향을 받겠지만, 컨테이닝 블록의 {{cssxref("box-sizing")}} 속성이 <code>border-box</code>였다면 그렇지 않을 것입니다.</p>

<div class="hidden">
<pre class="brush: html">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;문단입니다!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>
</div>

<pre class="brush: css">body {
  background: beige;
}

section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
}

p {
  position: absolute;
  width: 50%;   /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%;  /* == (160px + 30px + 30px) * .25 = 55px */
  margin: 5%;   /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%;  /* == (400px + 20px + 20px) * .05 = 22px */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('예제_3','100%','300')}}</p>

<h3 id="예제_4">예제 4</h3>

<p>다음 예제에서는 문단의 <code>position</code>이 <code>fixed</code>이므로 컨테이닝 블록은 초기 컨테이닝 블록(화면 매체에서는 뷰포트)입니다. 따라서 문단의 크기는 브라우저 창의 크기에 따라 변합니다.</p>

<div class="hidden">
<pre class="brush: html">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;문단입니다!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>
</div>

<pre class="brush: css">body {
  background: beige;
}

section {
  width: 400px;
  height: 480px;
  margin: 30px;
  padding: 15px;
  background: lightgray;
}

p {
  position: fixed;
  width: 50%;   /* == (50vw - (세로 스크롤바 너비)) */
  height: 50%;  /* == (50vh - (가로 스크롤바 높이)) */
  margin: 5%;   /* == (5vw - (세로 스크롤바 너비)) */
  padding: 5%;  /* == (5vw - (세로 스크롤바 너비)) */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('예제_4','100%','300')}}</p>

<h3 id="예제_5">예제 5</h3>

<p>다음 예제에서는 문단의 <code>position</code>이 <code>absolute</code>이므로, 컨테이닝 블록은 {{cssxref("transform")}} 속성이 <code>none</code>이 아닌 가장 가까운 조상, <code>&lt;section&gt;</code>입니다.</p>

<div class="hidden">
<pre class="brush: html">&lt;body&gt;
  &lt;section&gt;
    &lt;p&gt;문단입니다!&lt;/p&gt;
  &lt;/section&gt;
&lt;/body&gt;
</pre>
</div>

<pre class="brush: css">body {
  background: beige;
}

section {
  transform: rotate(0deg);
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  position: absolute;
  left: 80px;
  top: 30px;
  width: 50%;   /* == 200px */
  height: 25%;  /* == 40px */
  margin: 5%;   /* == 20px */
  padding: 5%;  /* == 20px */
  background: cyan;
}
</pre>

<p>{{EmbedLiveSample('예제_5','100%','300')}}</p>

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
 <li>모든 CSS 선언을 주어진 상태로 되돌리는 {{cssxref("all")}} 속성</li>
</ul>
