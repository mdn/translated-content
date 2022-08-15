---
title: Line-based placement with CSS Grid
slug: Web/CSS/CSS_Grid_Layout/Line-based_placement_with_CSS_grid
tags:
  - CSS
  - CSS Grids
  - Guide
translation_of: Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid
---
<p><a href="/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_레이아웃의_기본_개념">그리드 레이아웃의 기본 개념을 다룬 문서</a>에서 라인 번호를 사용하여 그리드에 아이템을 배치하는 방법을 잠깐 살펴본 적이 있습니다. 이번 문서에서는 이 기본적 기능이 어떻게 작동하는지를 자세히 살펴보겠습니다.</p>

<p>그리드를 연구할 때는 번호가 매겨진 라인부터 시작하는 것이 가장 논리적일 겁니다. 왜냐하면, 그리드 레이아웃을 쓸 때마다 거기엔 항상 번호가 매겨진 라인이 있기 때문입니다. 행과 열의 각 라인에는 번호가 매겨져 있으며, 라인에 번호를 매길 때는 1번부터 시작합니다. 그리드 라인은 문서의 작성 모드를 기준으로 번호가 매겨진다는 것을 명심하십시오. 영어와 같이 왼쪽에서 오른쪽으로 읽히는 언어로 쓰인 문서에서는 1번 라인이 그리드의 맨 왼쪽에 위치합니다. 반대로 오른쪽에서 왼쪽으로 읽히는 언어의 문서에서는 1번 라인이 그리드의 맨 오른쪽에 위치하게 됩니다. 문서 작성 모드와 그리드 사이의 상호 작용에 대해서는 나중에 자세히 알아보겠습니다.</p>

<h2 id="간단한_예제">간단한 예제</h2>

<p>아주 간단한 예로, 세 개의 세로 열 트랙과 세 개의 가로 행 트랙으로 구성된 그리드의 예를 들어보겠습니다. 여기엔 각 방향으로 4개의 라인이 있습니다.</p>

<p>그리드 컨테이너 안에는 네 개의 자식 요소가 있습니다. 이것들을 아무런 조건 없이 그대로 그리드 위에 위치시키면, 자동 배치 규칙에 따라 각 아이템은 처음에 있는 네 개의 셀 위에 놓이게 됩니다. 여기서 <a href="/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Firefox의 Grid Highlighter</a>를 사용하면 그리드의 열과 행이 어떻게 정의되어 있는지 확인하실 수 있습니다.</p>

<p><img alt="Our Grid highlighted in DevTools" src="https://mdn.mozillademos.org/files/14663/3_hilighted_grid.png" style="height: 296px; width: 900px;"></p>

<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: css">.wrapper {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, 100px);
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;One&lt;/div&gt;
   &lt;div class="box2"&gt;Two&lt;/div&gt;
   &lt;div class="box3"&gt;Three&lt;/div&gt;
   &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('간단한_예제', '300', '330') }}</p>

<h2 id="라인_번호로_아이템_배치하기">라인 번호로 아이템 배치하기</h2>

<p>아이템들을 그리드 위 어느 곳에 자리 잡게 할지 조정할 때는 라인을 기준으로 배치할 수 있습니다. 우선 아래 예제에서는 첫 번째 아이템을 그리드의 맨 왼쪽부터 시작해서 하나의 열 트랙에 자리하도록 하였습니다. 또한, 그리드 상단에 있는 첫 번째 행부터 시작해서 네 번째 행까지 확장하도록 하였습니다.</p>

<div id="Line_Number">
<pre class="brush: css">.box1 {
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 1;
   grid-row-end: 4;
}
</pre>

<p>몇몇 아이템의 위치를 지정해주면, 그리드에 있는 나머지 다른 아이템들은 자동 배치 규칙에 따라 연달아 놓이게 됩니다. 이 규칙은 나중에 가이드에서 어떻게 작동하는지 자세히 살펴볼 예정입니다만, 그리드와 작업하시면 자리를 지정하지 않은 아이템은 그리드의 비어있는 셀에 자동 배치되는 것을 자주 목격하실 수 있습니다.</p>

<p>각 아이템을 개별적으로 지정해서 행과 열 트랙에 걸쳐 네 개의 아이템들을 모두 배치할 수 있습니다. 원하시면 여기에 몇몇 셀들을 그냥 비워 둘 수도 있습니다. 그리드 레이아웃의 장점 중 하나는, 비어 있는 공간으로 다른 요소가 떠올라 채워지는 것을 막기 위해 마진을 써서 밀어낼 필요가 없어서, 흰 여백이 들어간 디자인을 쉽게 구현할 수 있다는 점입니다.</p>

<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;One&lt;/div&gt;
   &lt;div class="box2"&gt;Two&lt;/div&gt;
   &lt;div class="box3"&gt;Three&lt;/div&gt;
   &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box2 {
   grid-column-start: 3;
   grid-column-end: 4;
   grid-row-start: 1;
   grid-row-end: 3;
}
.box3 {
   grid-column-start: 2;
   grid-column-end: 3;
   grid-row-start: 1;
   grid-row-end: 2;
}
.box4 {
   grid-column-start: 2;
   grid-column-end: 4;
   grid-row-start: 3;
   grid-row-end: 4;
}
</pre>

<p>{{ EmbedLiveSample('Line_Number', '300', '330') }}</p>
</div>

<div id="Grid_Shorthands">
<h2 id="grid-column과_grid-row_단축용법"><code>grid-column</code>과 <code>grid-row</code> 단축용법</h2>

<p>앞의 예제에선 각 아이템을 배치하기 위해 상당히 많은 코드가 작성되었습니다. 그래서 여기엔 분명 {{glossary("shorthand properties", "단축용법")}}이 있을 거란 예상을 충분히 할 수 있습니다. 실제 {{cssxref("grid-column-start")}}와 {{cssxref("grid-column-end")}} 프로퍼티는 {{cssxref("grid-column")}}으로 합칠 수 있으며, {{cssxref("grid-row-start")}}와 {{cssxref("grid-row-end")}}는 {{cssxref("grid-row")}} 프로퍼티로 정의할 수 있습니다.</p>

<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;One&lt;/div&gt;
   &lt;div class="box2"&gt;Two&lt;/div&gt;
   &lt;div class="box3"&gt;Three&lt;/div&gt;
   &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
   grid-column: 1 / 2;
   grid-row: 1 / 4;
}
.box2 {
   grid-column: 3 / 4;
   grid-row: 1 / 3;
}
.box3 {
   grid-column: 2 / 3;
   grid-row: 1 /  2;
}
.box4 {
   grid-column: 2 / 4;
   grid-row: 3 / 4;
}
</pre>

<p>{{ EmbedLiveSample('Grid_Shorthands', '300', '330') }}</p>
</div>

<h3 id="기본_폭(spans)">기본 폭(spans)</h3>

<p>위 예제에선, 프로퍼티의 사용법을 설명하려고 모든 행과 열의 마지막 라인을 지정하였습니다. 하지만, 아이템이 오직 하나의 트랙만 차지한다면 <code>grid-column-end</code>와 <code>grid-row-end</code> 값은 생략할 수 있습니다. 그리드는 기본적으로 하나의 트랙에 걸치게 돼 있습니다. 이 말은 처음의 장황했던 예제가 다음처럼 단축될 수도 있습니다:</p>

<div id="End_Lines">
<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;One&lt;/div&gt;
   &lt;div class="box2"&gt;Two&lt;/div&gt;
   &lt;div class="box3"&gt;Three&lt;/div&gt;
   &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
   grid-column-start: 1;
   grid-row-start: 1;
   grid-row-end: 4;
}
.box2 {
   grid-column-start: 3;
   grid-row-start: 1;
   grid-row-end: 3;
}
.box3 {
   grid-column-start: 2;
   grid-row-start: 1;
}
.box4 {
   grid-column-start: 2;
   grid-column-end: 4;
   grid-row-start: 3;
}
</pre>

<p>{{ EmbedLiveSample('End_Lines', '300', '330') }}</p>
</div>

<p>또한, 단축용법을 사용했던 예제 중 오직 하나의 트랙에 걸쳐 있는 아이템의 경우에는 뒤로 누운 슬래쉬와 두 번째 값을 생략하고 다음처럼 정의할 수 있습니다.</p>

<div id="New_Shorthand">
<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;One&lt;/div&gt;
   &lt;div class="box2"&gt;Two&lt;/div&gt;
   &lt;div class="box3"&gt;Three&lt;/div&gt;
   &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
   grid-column: 1 ;
   grid-row: 1 / 4;
}
.box2 {
   grid-column: 3 ;
   grid-row: 1 / 3;
}
.box3 {
   grid-column: 2 ;
   grid-row: 1 ;
}
.box4 {
   grid-column: 2 / 4;
   grid-row: 3 ;
}
</pre>

<p>{{ EmbedLiveSample('New_Shorthand', '300', '330') }}</p>
</div>

<h2 id="grid-area_프로퍼티"><code>grid-area</code> 프로퍼티</h2>

<p>우리는 여기서 한 발 더 나가 각 영역을 단 하나의 프로퍼티인 {{cssxref("grid-area")}}로 정의할 수도 있습니다. <code>grid-area</code> 값의 순서는 다음과 같습니다.</p>

<ul>
 <li>grid-row-start</li>
 <li>grid-column-start</li>
 <li>grid-row-end</li>
 <li>grid-column-end</li>
</ul>

<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;One&lt;/div&gt;
   &lt;div class="box2"&gt;Two&lt;/div&gt;
   &lt;div class="box3"&gt;Three&lt;/div&gt;
   &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
   grid-area: 1 / 1 / 4 / 2;
}
.box2 {
   grid-area: 1 / 3 / 3 / 4;
}
.box3 {
   grid-area: 1 / 2 / 2 / 3;
}
.box4 {
   grid-area: 3 / 2 / 4 / 4;
}
</pre>

<p>{{ EmbedLiveSample('grid-area_프로퍼티', '300', '330') }}</p>

<p><code>grid-area</code> 값의 순서는 약간 이상하게 보일 수도 있는데, 예를 들어 마진과 패딩을 단축용법을 써서 지정할 때의 순서와 완전 정반대입니다. 하지만, 그리드가 CSS 문서 작성 모드(CSS Writing Modes) 표준 명세서에 정의된 문서 흐름과 관련된 방향을 채용해서 사용한다는 것을 알게 되면 이해하기 쉽습니다. 차후에 그리드가 문서 작성 모드에 따라 어떻게 작용하는지 알아볼 예정입니다만, 개념상 다음과 같이 문서 흐름과 관련된 네 가지 방향이 있습니다:</p>

<ul>
 <li>block-start</li>
 <li>block-end</li>
 <li>inline-start</li>
 <li>inline-end</li>
</ul>

<p>예를 들자면, 영문으로 쓰인 문서는 왼쪽에서 오른쪽으로 읽습니다. 이 경우 block-start는 그리드 컨테이너의 맨 위쪽에 있는 가로 행 라인이 차지하고, block-end는 컨테이너의 매 마지막 행에 있는 라인에 해당합니다. inline-start는 항상 현재의 문서 작성 모드에 따라 텍스트가 써지는 시작 지점이기 때문에 맨 왼쪽에 있는 세로 열 라인이 여기에 해당하고, inline-end는 그리드의 오른쪽 마지막 끝에 있는 세로 열 라인이 됩니다.</p>

<p><code>grid-area</code> 프로퍼티를 써서 그리드 영역을 지정할 땐, 우선 시작 라인인 <code>block-start</code>와 <code>inline-start</code>를 먼저 정의하고, 나중에 마지막 라인으로 <code>block-end</code>와 <code>inline-end</code>를 정의합니다. 이것은 보통 우리가 top, right, bottom 그리고 left 순서의 물리적 프로퍼티를 사용하는 데 익숙하다는 점을 생각하면 이상하게 보일 수도 있지만, 웹사이트의 문서 작성 모드가 여러 방향일 수 있다는 점을 고려하면 이해가 쉬우실 겁니다.</p>

<h2 id="거꾸로_세기">거꾸로 세기</h2>

<p>우리는 또한 그리드의 블록(block)과 인라인(inline) 지점의 끝에서부터 거꾸로 셀 수도 있는데, 영문 문서의 경우 이것은 맨 오른쪽 세로 열 라인과 마지막 가로 행 라인이 여기에 해당합니다. 이 라인들은 <code>-1</code>로 지칭할 수 있으며, 여기서 거꾸로 셀 수도 있습니다. 그래서 끝에서 두 번째 라인은 <code>-2</code>가 됩니다. 한 가지 주의할 점은, 여기서 말하는 마지막 라인은 <em>명시적으로</em> <code>grid-template-columns</code>와 <code>grid-template-rows</code>로 정의한 그리드에 있는 마지막 라인을 가리키며, 이 바깥에 있는 <em>잠재적 그리드</em>에 추가된 행이나 열을 고려하지는 않습니다.</p>

<p>다음 예제에는 아이템을 배치할 때 그리드의 오른쪽과 아래에서부터 작업을 시작해서 이전에 작성했던 레이아웃을 거꾸로 뒤집어 보았습니다.</p>

<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;One&lt;/div&gt;
   &lt;div class="box2"&gt;Two&lt;/div&gt;
   &lt;div class="box3"&gt;Three&lt;/div&gt;
   &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
   grid-column-start: -1;
   grid-column-end: -2;
   grid-row-start: -1;
   grid-row-end: -4;
}
.box2 {
   grid-column-start: -3;
   grid-column-end: -4;
   grid-row-start: -1;
   grid-row-end: -3;
}
.box3 {
   grid-column-start: -2;
   grid-column-end: -3;
   grid-row-start: -1;
   grid-row-end: -2;
}
.box4 {
   grid-column-start: -2;
   grid-column-end: -4;
   grid-row-start: -3;
   grid-row-end: -4;
}
</pre>

<p>{{ EmbedLiveSample('거꾸로_세기', '300', '330') }}</p>

<h3 id="그리드_전체에_걸치도록_아이템_늘리기">그리드 전체에 걸치도록 아이템 늘리기</h3>

<p>아이템을 그리드 전체에 걸치도록 늘리려 할 때 유용한 방법으로 다음과 같이 그리드의 시작과 끝의 라인을 지정해줄 수 있습니다:</p>

<pre class="brush: css">.item {
  grid-column: 1 / -1;
}
</pre>

<h2 id="경계_여백_혹은_간격">경계 여백 혹은 간격</h2>

<p>CSS 그리드 표준 명세서에는 {{cssxref("grid-column-gap")}}과 {{cssxref("grid-row-gap")}} 프로퍼티를 써서 열과 행 트랙 사이에 경계 여백을 정의해 줄 수 있는 기능이 포함되어 있습니다. 이것은 다중 칼럼 레이아웃에 있는 {{cssxref("column-gap")}} 프로퍼티와 비슷하게 작용해서 트랙 사이의 간격을 지정합니다.</p>

<p>간격은 오직 그리드의 트랙 사이에서만 위치하고, 컨테이너의 위나 아래 혹은 왼쪽과 오른쪽에 공간을 추가하지 않습니다. 이전 예제에 있는 그리드 컨테이너에 여기에 소개한 프로퍼티를 사용하여 간격을 추가한 모습을 아래에서 확인하실 수 있습니다.</p>

<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;One&lt;/div&gt;
   &lt;div class="box2"&gt;Two&lt;/div&gt;
   &lt;div class="box3"&gt;Three&lt;/div&gt;
   &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
   grid-column: 1 ;
   grid-row: 1 / 4;
}
.box2 {
   grid-column: 3 ;
   grid-row: 1 / 3;
}
.box3 {
   grid-column: 2 ;
   grid-row: 1 ;
}
.box4 {
   grid-column: 2 / 4;
   grid-row: 3 ;
}
.wrapper {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
     grid-column-gap: 20px;
     grid-row-gap: 1em;
}
</pre>

<p>{{ EmbedLiveSample('경계_여백_혹은_간격', '300', '350') }}</p>

<h3 id="그리드_간격의_단축용법">그리드 간격의 단축용법</h3>

<p>앞서 소개한 두 개의 프로퍼티 또한 단축용법인 {{cssxref("grid-gap")}}으로 표현해 줄 수 있습니다. 만약에 <code>grid-gap</code> 값으로 하나만 지정하면, 열과 행 간격 모두에 같이 적용됩니다. 그리고 두 개의 값을 지정하면, 처음 것은 <code>grid-row-gap</code>에 사용되고 두 번째 것은 <code>grid-column-gap</code>에 사용됩니다.</p>

<pre class="brush: css">.wrapper {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
     grid-gap: 1em 20px;
}
</pre>

<p>라인을 기준으로 한 아이템 배치 관점에서 보면, 이 간격은 마치 라인에 너비를 더한 것처럼 작용합니다. 특정 라인을 시작으로 배치되는 아이템은 간격 다음에 있는 지점에서부터 놓이게 되며, 간격을 차지하거나 그 안에 배치될 수 없습니다. 만약에 경계 여백이 일반 트랙처럼 작용하길 원하시면, 대신에 해당 목적의 트랙을 따로 지정해서 사용하길 바랍니다.</p>

<h2 id="span_키워드_사용법"><code>span</code> 키워드 사용법</h2>

<p>번호를 붙여서 시작과 마지막 라인을 지정하는 법과 더불어, 시작 라인을 지정한 후 원하는 만큼의 영역을 가로질러 확장하는 트랙의 수를 지정해서 사용하실 수도 있습니다.</p>

<div class="hidden">
<pre class="brush: css">* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper &gt; div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
</pre>
</div>

<pre class="brush: html">&lt;div class="wrapper"&gt;
   &lt;div class="box1"&gt;One&lt;/div&gt;
   &lt;div class="box2"&gt;Two&lt;/div&gt;
   &lt;div class="box3"&gt;Three&lt;/div&gt;
   &lt;div class="box4"&gt;Four&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="brush: css">.box1 {
  grid-column: 1;
  grid-row: 1 / span 3;
}
.box2 {
   grid-column: 3;
   grid-row: 1 / span 2;
}
.box3 {
   grid-column: 2;
   grid-row: 1;
}
.box4 {
   grid-column: 2 / span 2;
   grid-row: 3;
}
</pre>

<p>{{ EmbedLiveSample('span_키워드_사용법', '300', '330') }}</p>

<p>또한, <code>grid-row-start</code>/<code>grid-row-end</code> 그리고 <code>grid-column-start/grid-column-end</code> 값에도 <code>span</code> 키워드가 쓰일 수 있습니다. 다음의 두 예제에서는 서로 같은 그리드 영역을 만듭니다. 첫 번째 예제에서는 가로 열의 시작 라인을 지정한 후에, 마지막 라인은 3개의 라인을 가로질러 위치하도록 설정하였습니다. 그래서 영역은 1번 라인부터 시작해서 3개의 라인을 가로질러 4번 라인까지 차지하게 됩니다.</p>

<pre>.box1 {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: span 3;
}
</pre>

<p>두 번째 예제에선, 아이템이 끝나는 지점에 있는 마지막 라인을 지정한 다음 시작 라인을 <code>span 3</code>으로 설정하였습니다. 이 얘기는 아이템이 지정한 마지막 가로 열 라인으로부터 위쪽으로 확장해야 한다는 뜻입니다. 이렇게 하면, 영역은 4번 라인부터 시작해서 3개의 라인을 가로질러 1번 라인까지 차지하게 됩니다.</p>

<pre>.box1 {
    grid-column-start: 1;
    grid-row-start: span 3;
    grid-row-end: 4;
}
</pre>

<p>그리드 라인을 기준으로 아이템을 배치하는 법에 익숙해지시려면, 다양한 수의 열로 이뤄진 그리드에 아이템들을 배치하시면서 몇 가지 일반적 레이아웃을 만들어보는 여러 시도를 해보시기 바랍니다. 여기서 주의할 점은 모든 아이템의 위치를 일일이 지정하지 않았다면, 나머지 아이템들은 자동 배치 규칙에 따라 배치된다는 것을 명심하시기 바랍니다. 이런 레이아웃이 원하시는 것일 수도 있지만, 만약에 의도치 않은 곳에 아이템이 표시된다면, 해당 아이템의 위치를 지정해 주었는지 꼭 확인해 보십시오.</p>

<p>또한, 그리드에 배치된 아이템들은 원하시면 명확히 지정해서 서로 자리가 겹치게 할 수도 있다는 것을 잊지 마십시오. 이렇게 하면 특이하고 멋진 효과를 만들어 낼 수도 있습니다만, 만약에 시작 혹은 마지막 라인을 잘못 지정해 놓았다면, 의도치 않은 곳에서 서로 겹쳐 버리는 결과를 가져올 수도 있습니다. <a href="/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Firefox Grid Highlighter</a>는 배우시면서 매우 유용하게 사용될 수 있는데, 특히나 그리드가 상당히 복잡한 경우에는 더 그렇습니다.</p>

<section id="Quick_links">
<ol>
 <li><a href="/ko/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><a href="/ko/docs/Web/CSS/Reference"><strong>CSS Reference</strong></a></li>
 <li><a href="/ko/docs/Web/CSS/CSS_Grid_Layout">CSS 그리드 레이아웃</a></li>
 <li data-default-state="open"><a href="#"><strong>가이드</strong></a>
  <ol>
   <li><a href="/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_레이아웃의_기본_개념">그리드 레이아웃의 기본 개념</a></li>
   <li><a href="/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_레이아웃과_다른_레이아웃_방법과의_관계">다른 레이아웃 방법과의 관계</a></li>
   <li><a href="/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_그리드의_라인을_기준으로_한_아이템_배치">라인을 기준으로 한 아이템 배치</a></li>
   <li><a href="/ko/docs/Web/CSS/CSS_Grid_Layout/그리드_템플릿_영역">그리드 템플릿 영역</a></li>
   <li><a href="/ko/docs/Web/CSS/CSS_Grid_Layout/이름이_주어진_그리드_라인을_이용한_레이아웃">이름이 주어진 그리드 라인을 이용한 레이아웃</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">Auto-placement in grid layout</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box alignment in grid layout</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">Grids, logical values and writing modes</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS Grid Layout and Accessibility</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS Grid Layout and Progressive Enhancement</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">Realizing common layouts using grids</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>프로퍼티</strong></a>
  <ol>
   <li><a href="/en-US/docs/Web/CSS/grid">grid</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-area">grid-area</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-auto-columns">grid-auto-columns</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-auto-flow">grid-auto-flow</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-auto-rows">grid-auto-rows</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-column">grid-column</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-column-end">grid-column-end</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-column-gap">grid-column-gap</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-column-start">grid-column-start</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-gap">grid-gap</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-row">grid-row</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-row-end">grid-row-end</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-row-gap">grid-row-gap</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-row-start">grid-row-start</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-template">grid-template</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-template-areas">grid-template-areas</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-template-columns">grid-template-columns</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-template-rows">grid-template-rows</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>용어집</strong></a>
  <ol>
   <li><a href="/en-US/docs/Glossary/Grid">Grid</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_lines">Grid lines</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_tracks">Grid tracks</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_cell">Grid cell</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_areas">Grid areas</a></li>
   <li><a href="/en-US/docs/Glossary/Gutters">Gutters</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_Axis">Grid Axis</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_rows">Grid row</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_column">Grid column</a></li>
  </ol>
 </li>
</ol>
</section>
