---
title: align-content
slug: Web/CSS/align-content
tags:
  - CSS
  - CSS Box Alignment
  - CSS Property
  - Reference
translation_of: Web/CSS/align-content
---
<p><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>align-content</code></strong> 속성은 콘텐츠 사이와 콘텐츠 주위 빈 공간을 <a href="/ko/docs/Web/CSS/CSS_Flexible_Box_Layout">플렉스박스</a>의 교차축, <a href="/ko/docs/Web/CSS/CSS_Grid_Layout">그리드</a>의 블록 축을 따라 배치하는 방식을 결정합니다.</p>

<p>아래의 대화형 예제는 그리드 레이아웃을 사용해 이 속성의 값을 시연합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/align-content.html")}}</div>



<p>이 속성은 한 줄로만 이루어진 플렉스 컨테이너에는 아무 효과도 없습니다. (<code>flex-wrap: nowrap</code> 등)</p>

<h2 id="구문">구문</h2>

<pre class="brush:css no-line-numbers notranslate">/* Basic positional alignment */
/* align-content does not take left and right values */
align-content: center;     /* Pack items around the center */
align-content: start;      /* Pack items from the start */
align-content: end;        /* Pack items from the end */
align-content: flex-start; /* Pack flex items from the start */
align-content: flex-end;   /* Pack flex items from the end */

/* Normal alignment */
align-content: normal;

/* Baseline alignment */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* Distributed alignment */
align-content: space-between; /* Distribute items evenly
                                 The first item is flush with the start,
                                 the last is flush with the end */
align-content: space-around;  /* Distribute items evenly
                                 Items have a half-size space
                                 on either end */
align-content: space-evenly;  /* Distribute items evenly
                                 Items have equal space around them */
align-content: stretch;       /* Distribute items evenly
                                 Stretch 'auto'-sized items to fit
                                 the container */

/* Overflow alignment */
align-content: safe center;
align-content: unsafe center;

/* Global values */
align-content: inherit;
align-content: initial;
align-content: unset;
</pre>

<h3 id="값">값</h3>

<dl>
 <dt><code>start</code></dt>
 <dd>플렉스/그리드 항목을 한 덩어리로 뭉쳐서 정렬 컨테이너 교차축의 시작 모서리에 배치합니다.</dd>
 <dt><code>end</code></dt>
 <dd>플렉스/그리드 항목을 한 덩어리로 뭉쳐서 정렬 컨테이너 교차축의 끝 모서리에 배치합니다.</dd>
 <dt><code>flex-start</code></dt>
 <dd>플렉스 항목을 한 덩어리로 뭉치고, 플렉스 컨테이너의 교차 시작점에 따라 정렬 컨테이너 모서리에 배치합니다.<br>
 플렉스 레이아웃 항목에만 적용됩니다. 플렉스 컨테이너의 자식이 아닌 항목에 대해서는 <code>start</code>로 취급합니다.</dd>
 <dt><code>flex-end</code></dt>
 <dd>플렉스 항목을 한 덩어리로 뭉치고, 플렉스 컨테이너의 교차 끝점에 따라 정렬 컨테이너 모서리에 배치합니다.<br>
 플렉스 레이아웃 항목에만 적용됩니다. 플렉스 컨테이너의 자식이 아닌 항목에 대해서는 <code>end</code>로 취급합니다.</dd>
 <dt><code>center</code></dt>
 <dd>플렉스/그리드 항목을 한 덩어리로 뭉쳐서 정렬 컨테이너 교차축의 중앙에 배치합니다.</dd>
 <dt><code>normal</code></dt>
 <dd><code>align-content</code>를 지정하지 않았을 때처럼, 플렉스/그리드 항목을 한 덩어리로 뭉쳐서 기본 위치에 배치합니다.</dd>
 <dt><code>baseline<br>
 first baseline</code><br>
 <code>last baseline</code></dt>
 <dd><img alt='the baseline is the line upon which most letters "sit" and below which descenders extend.' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typography_Line_Terms.svg/410px-Typography_Line_Terms.svg.png" style="height: 110px; width: 410px;"></dd>
 <dd>Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box’s first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.<br>
 <code>first baseline</code>의 대체 정렬은 <code>start</code>이며 <code>last baseline</code>의 대체 정렬은 <code>end</code>입니다.</dd>
 <dt><code>space-between</code></dt>
 <dd>정렬 컨테이너의 교차축을 따라 항목을 고르게 배치합니다. 이웃한 항목간의 거리가 동일해집니다. 첫 항목은 정렬 컨테이너 교차축의 시작점에, 마지막 항목은 정렬 컨테이너 교차축의 종료점에 붙입니다.</dd>
 <dt><code>space-around</code></dt>
 <dd>정렬 컨테이너의 교차축을 따라 항목을 고르게 배치합니다. 이웃한 항목간의 거리가 동일해집니다. 첫 항목 이전 여백과 마지막 항목 이후 여백은 각 항목간 거리의 절반이 됩니다.</dd>
 <dt><code>space-evenly</code></dt>
 <dd>정렬 컨테이너의 교차축을 따라 항목을 고르게 배치합니다. 이웃한 항목간의 거리, 첫 항목 이전 여백, 마지막 항목 이후 여백이 모두 같아집니다.</dd>
 <dt><code>stretch</code></dt>
 <dd>모든 항목의 교차축 방향 크기의 합이 정렬 컨테이너보다 작은 경우, 모든 <code>auto</code> 크기의 항목이 동일(비례하지 않음)하게 커져서 정렬 컨테이너의 교차축 방향을 가득 채웁니다. 단, 항목에 지정한 {{cssxref("max-height")}}/{{cssxref("max-width")}} 등의 크기 제한은 준수합니다.</dd>
 <dt><code>safe</code></dt>
 <dd>정렬 키워드와 함께 사용합니다. 주어진 키워드로 인해 항목이 정렬 컨테이너 밖으로 오버플로하게 되어 데이터가 유실될 수 있으면 항목 정렬에 <code>start</code>를 대신 사용합니다.</dd>
 <dt><code>unsafe</code></dt>
 <dd>정렬 키워드와 함께 사용합니다. 컨테이너와 항목의 상대적 크기 및 오버플로로 인한 데이터 유실에 상관하지 않고 주어진 정렬을 준수합니다.</dd>
</dl>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css; highlight[4] notranslate">#container {
  height:200px;
  width: 240px;
  align-content: center; /* Can be changed in the live sample */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div &gt; div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div id="container" class="flex"&gt;
  &lt;div id="item1"&gt;1&lt;/div&gt;
  &lt;div id="item2"&gt;2&lt;/div&gt;
  &lt;div id="item3"&gt;3&lt;/div&gt;
  &lt;div id="item4"&gt;4&lt;/div&gt;
  &lt;div id="item5"&gt;5&lt;/div&gt;
  &lt;div id="item6"&gt;6&lt;/div&gt;
&lt;/div&gt;

&lt;div class="row"&gt;
  &lt;label for="display"&gt;display: &lt;/label&gt;
  &lt;select id="display"&gt;
    &lt;option value="flex"&gt;flex&lt;/option&gt;
    &lt;option value="grid"&gt;grid&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;div class="row"&gt;
  &lt;label for="values"&gt;align-content: &lt;/label&gt;
  &lt;select id="values"&gt;
    &lt;option value="normal"&gt;normal&lt;/option&gt;
    &lt;option value="stretch"&gt;stretch&lt;/option&gt;
    &lt;option value="flex-start"&gt;flex-start&lt;/option&gt;
    &lt;option value="flex-end"&gt;flex-end&lt;/option&gt;
    &lt;option value="center" selected&gt;center&lt;/option&gt;
    &lt;option value="space-between"&gt;space-between&lt;/option&gt;
    &lt;option value="space-around"&gt;space-around&lt;/option&gt;
    &lt;option value="space-evenly"&gt;space-evenly&lt;/option&gt;

    &lt;option value="start"&gt;start&lt;/option&gt;
    &lt;option value="end"&gt;end&lt;/option&gt;
    &lt;option value="left"&gt;left&lt;/option&gt;
    &lt;option value="right"&gt;right&lt;/option&gt;

    &lt;option value="baseline"&gt;baseline&lt;/option&gt;
    &lt;option value="first baseline"&gt;first baseline&lt;/option&gt;
    &lt;option value="last baseline"&gt;last baseline&lt;/option&gt;

    &lt;option value="safe center"&gt;safe center&lt;/option&gt;
    &lt;option value="unsafe center"&gt;unsafe center&lt;/option&gt;
    &lt;option value="safe right"&gt;safe right&lt;/option&gt;
    &lt;option value="unsafe right"&gt;unsafe right&lt;/option&gt;
    &lt;option value="safe end"&gt;safe end&lt;/option&gt;
    &lt;option value="unsafe end"&gt;unsafe end&lt;/option&gt;
    &lt;option value="safe flex-end"&gt;safe flex-end&lt;/option&gt;
    &lt;option value="unsafe flex-end"&gt;unsafe flex-end&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;
</pre>

<div class="hidden">
<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">var values = document.getElementById('values');
var display = document.getElementById('display');
var container = document.getElementById('container');

values.addEventListener('change', function (evt) {
  container.style.alignContent = evt.target.value;
});

display.addEventListener('change', function (evt) {
  container.className = evt.target.value;
});
</pre>
</div>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample("예제", 260, 290)}}</p>

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
   <td>{{SpecName("CSS3 Box Alignment", "#propdef-align-content", "align-content")}}</td>
   <td>{{Spec2("CSS3 Box Alignment")}}</td>
   <td>Adds the [ first | last ]? baseline, start, end, left, right, unsafe | safe values.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Flexbox", "#align-content", "align-content")}}</td>
   <td>{{Spec2("CSS3 Flexbox")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>


<h3 id="플렉스_레이아웃_지원">플렉스 레이아웃 지원</h3>

<p>{{Compat("css.properties.align-content.flex_context")}}</p>

<h3 id="그리드_레이아웃_지원">그리드 레이아웃 지원</h3>

<p>{{Compat("css.properties.align-content.grid_context")}}</p>
</div>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Basic Concepts of Flexbox</a></em></li>
 <li>CSS Flexbox Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Aligning items in a flex container</a></em></li>
 <li>CSS Grid Guide: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box alignment in CSS Grid layouts</a></em></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment">CSS Box Alignment</a></li>
</ul>

<div>{{CSSRef}}</div>
