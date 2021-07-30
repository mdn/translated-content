---
title: 쌓임 맥락
slug: Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
tags:
  - Advanced
  - CSS
  - Guide
  - Reference
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
---
<div>{{cssref}}</div>

<p><span class="seoSummary"><strong>쌓임 맥락</strong>(stacking context)은 가상의 Z축을 사용한 HTML 요소의 3차원 개념화입니다.</span> Z축은 사용자 기준이며, 사용자는 뷰포트 혹은 웹페이지를 바라보고 있을 것으로 가정합니다. 각각의 HTML 요소는 자신의 속성에 따른 우선순위를 사용해 3차원 공간을 차지합니다.</p>

<h2 id="쌓임_맥락">쌓임 맥락</h2>

<p>이전 글 <a href="/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index">z-index 사용하기</a>에서 보았듯, 특정 요소의 렌더링 순서는 자신의 <code>z-index</code> 속성 값에 영향을 받습니다. 이는 그 요소들이 가진 특별한 속성으로 인해 <strong>쌓임 맥락</strong>이 생성되기 때문입니다.</p>

<p>쌓임 맥락은, 문서 어디에서나, 다음 조건을 만족하는 요소가 생성합니다.</p>

<ul>
 <li>문서의 루트 요소. (<code>&lt;html&gt;</code>)</li>
 <li>{{cssxref("position")}}이 <code>absolute</code> 또는 <code>relative</code>이고, {{cssxref("z-index")}}가 <code>auto</code>가 아닌 요소.</li>
 <li>{{cssxref("position")}}이 <code>fixed</code> 또는 <code>sticky</code>인 요소. (<code>sticky</code>는 모든 모바일 브라우저에서는 해당하지만 구형 데스크톱 브라우저에서는 해당하지 않음)</li>
 <li>플렉스({{cssxref("flexbox")}}) 컨테이너의 자식 중 {{cssxref("z-index")}}가 <code>auto</code>가 아닌 요소.</li>
 <li>그리드({{cssxref("grid")}}) 컨테이너의 자식 중 {{cssxref("z-index")}}가 <code>auto</code>가 아닌 요소.</li>
 <li>{{cssxref("opacity")}}가 1보다 작은 요소. (<a href="http://www.w3.org/TR/css3-color/#transparency">불투명도 명세</a> 참고)</li>
 <li>{{cssxref("mix-blend-mode")}}가 <code>normal</code>이 아닌 요소.</li>
 <li>다음 속성 중 하나라도 <code>none</code>이 아닌 값을 가진 요소.
  <ul>
   <li>{{cssxref("transform")}}</li>
   <li>{{cssxref("filter")}}</li>
   <li>{{cssxref("perspective")}}</li>
   <li>{{cssxref("clip-path")}}</li>
   <li>{{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}</li>
  </ul>
 </li>
 <li>{{cssxref("isolation")}}이 <code>isolate</code>인 요소.</li>
 <li>{{cssxref("-webkit-overflow-scrolling")}}이 <code>touch</code>인 요소.</li>
 <li>{{cssxref("will-change")}}의 값으로, 초깃값이 아닐 때 새로운 쌓임 맥락을 생성하는 속성을 지정한 요소.</li>
 <li>{{cssxref("contain")}}이 <code>layout</code>, <code>paint</code>, 또는 둘 중 하나를 포함하는 값(<code>strict</code>, <code>content</code> 등)인 요소.</li>
</ul>

<p>쌓임 맥락 안의 자식 요소는 이전에 설명했던 규칙을 동일하게 사용해 쌓입니다. 중요한 것은, 자식의 <code>z-index</code> 값은 부모에게만 의미가 있다는 점입니다. 하나의 쌓임 맥락은 부모 쌓임 맥락 안에서 통째로 하나의 단위로 간주됩니다.</p>

<p>요약하면,</p>

<ul>
 <li>쌓임 맥락이 다른 쌓임 맥락을 포함할 수 있고, 함께 계층 구조를 이룹니다.</li>
 <li>쌓임 맥락은 형제 쌓임 맥락과 완전히 분리됩니다. 쌓임을 처리할 땐 자손 요소만 고려합니다.</li>
 <li>각각의 쌓임 맥락은 독립적입니다. 어느 요소의 콘텐츠를 쌓은 후에는 그 요소를 통째 부모 쌓임 맥락 안에 배치합니다.</li>
</ul>

<div class="note"><strong>참고:</strong> 모든 요소가 쌓임 맥락을 생성하는 건 아니므로, 쌓임 맥락의 계층 구조는 HTML 요소 계층 구조의 부분집합입니다. 자신의 쌓임 맥락을 만들지 않은 요소는 '부모 쌓임 맥락에 의해 <strong>동화된다</strong>'라고 표현할 수 있겠습니다.</div>

<h2 id="예시"><strong>예시</strong></h2>

<p><img alt="Example of stacking rules modified using z-index" class="internal" src="/@api/deki/files/913/=Understanding_zindex_04.png"></p>

<p>위의 예시에서, 모든 요소는 각자의 포지션과 <code>z-index</code>로 인해 자신의 쌓임 맥락을 형성합니다. 쌓임 맥락의 계층 구조는 다음과 같습니다.</p>

<ul>
 <li>루트
  <ul>
   <li>DIV #1</li>
   <li>DIV #2</li>
   <li>DIV #3
    <ul>
     <li>DIV #4</li>
     <li>DIV #5</li>
     <li>DIV #6</li>
    </ul>
   </li>
  </ul>
 </li>
</ul>

<p>DIV #4, DIV #5, DIV #6은 DIV #3의 자식이므로, DIV #3 내부에서만 셋의 쌓임을 처리했다는 것을 이해하는게 중요합니다. DIV #3 내부의 요소의 쌓기와 렌더링이 끝난 후에는, 전체 DIV #3을 루트 요소의 쌓임 맥락 하에서 형제 DIV와 쌓습니다.</p>

<div class="note">
<p><strong>참고:</strong></p>

<ul>
 <li>DIV #4는 DIV #1보다 z-index 속성 값이 더 크지만 DIV #1보다 아래에 렌더링 되었다. 왜냐하면 DIV #1의 z-index 속성 값인 5는 뿌리 엘리먼트의 쌓임 맥락 안에서 유효하나 DIV #4의 z-index 속성 값인 6은 DIV #3의 쌓임 맥락 안에서만 유효하기 때문이다. DIV #4는 자신이 속하는 DIV #3의 z-index 속성 값이 4이므로 DIV #1 아래에 쌓였다.</li>
 <li>같은 이유로 DIV #2는 DIV #5 아래에 렌더링 되었다. DIV #5는 DIV #2보다 z-index 값이 작지만 뿌리 엘리먼트의 쌓임 맥락안에서 유효한 DIV #5가 속한 DIV #3의 z-index 값이 DIV #2의 z-index 값 보다 더 크기 때문이다.</li>
 <li>DIV #3의 z-index 속성 값인 4는 DIV #4, DIV #5, DIV #6의 z-index 속성값과 독립적이다. 왜냐하면 다른 쌓임 맥락에 속해있기 때문이다.</li>
 <li>렌더링 순서를 이해하는 쉬운 방법은 z-index를 "버전 번호" 처럼 생각하는 것이다. 자식 엘리먼트는 부모 엘리먼트 버전 번호의 마이너 버전이다. 이 방법은 왜 z-index가 1인 DIV #5가 z-index가 2인 DIV #2 위에 쌓였는지, z-index가 6인 DIV #4가 z-index가 5인 DIV #1 아래에 쌓였는지 이해하게 해준다. 우리 예제에서는
  <ul>
   <li>뿌리 엘리먼트
    <ul>
     <li>DIV #2 - z-index가 2</li>
     <li>DIV #3 - z-index가 4
      <ul>
       <li>DIV #5 - z-index가 1인데 z-index가 4인 엘리먼트 아래에서 쌓였으므로 렌더링 순서는 4.1이다.</li>
       <li>DIV #6 - z-index가 3인데 z-index가 4인 엘리먼트 아래에서 쌓였으므로 렌더링 순서는 4.3이다.</li>
       <li>DIV #4 - z-index가 6인데 z-index가 4인 엘리먼트 아래에서 쌓였으므로 렌더링 순서는 4.6이다.</li>
      </ul>
     </li>
     <li>DIV #1 - z-index가 5</li>
    </ul>
   </li>
  </ul>
 </li>
</ul>
</div>

<h2 id="예제">예제</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate"><code>&lt;div id="div1"&gt;
  &lt;h1&gt;Division Element #1&lt;/h1&gt;
  &lt;code&gt;position: relative;&lt;br/&gt;
  z-index: 5;&lt;/code&gt;
&lt;/div&gt;

&lt;div id="div2"&gt;
  &lt;h1&gt;Division Element #2&lt;/h1&gt;
  &lt;code&gt;position: relative;&lt;br/&gt;
  z-index: 2;&lt;/code&gt;
&lt;/div&gt;

&lt;div id="div3"&gt;
  &lt;div id="div4"&gt;
    &lt;h1&gt;Division Element #4&lt;/h1&gt;
    &lt;code&gt;position: relative;&lt;br/&gt;
    z-index: 6;&lt;/code&gt;
  &lt;/div&gt;

  &lt;h1&gt;Division Element #3&lt;/h1&gt;
  &lt;code&gt;position: absolute;&lt;br/&gt;
  z-index: 4;&lt;/code&gt;

  &lt;div id="div5"&gt;
    &lt;h1&gt;Division Element #5&lt;/h1&gt;
    &lt;code&gt;position: relative;&lt;br/&gt;
    z-index: 1;&lt;/code&gt;
  &lt;/div&gt;

  &lt;div id="div6"&gt;
    &lt;h1&gt;Division Element #6&lt;/h1&gt;
    &lt;code&gt;position: absolute;&lt;br/&gt;
    z-index: 3;&lt;/code&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<h3 id="Division_Element_.231" name="Division_Element_.231">CSS</h3>

<pre class="brush: css notranslate"><code>* {
  margin: 0;
}
html {
  padding: 20px;
  font: 12px/20px Arial, sans-serif;
}
div {
  opacity: 0.7;
  position: relative;
}
h1 {
  font: inherit;
  font-weight: bold;
}
#div1,
#div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#div1 {
  z-index: 5;
  margin-bottom: 190px;
}
#div2 {
  z-index: 2;
}
#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}
#div4,
#div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}
#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: center;
}</code></pre>

<h3 id="결과">결과</h3>

<p>{{ EmbedLiveSample('예제', '100%', '396') }}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index">Stacking without the z-index property</a>: The stacking rules that apply when <code>z-index</code> is not used.</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float">Stacking with floated blocks</a>: How floating elements are handled with stacking.</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index">Using z-index</a>: How to use <code>z-index</code> to change default stacking.</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1">Stacking context example 1</a>: 2-level HTML hierarchy, <code>z-index</code> on the last level</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2">Stacking context example 2</a>: 2-level HTML hierarchy, <code>z-index</code> on all levels</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3">Stacking context example 3</a>: 3-level HTML hierarchy, <code>z-index</code> on the second level</li>
</ul>

<div class="originaldocinfo">
<h2 id="Original_Document_Information" name="Original_Document_Information">Original Document Information</h2>

<ul>
 <li>Author(s): Paolo Lombardi</li>
 <li>This article is the English translation of an article I wrote in Italian for <a class="external" href="http://www.yappy.it">YappY</a>. I grant the right to share all the content under the <a class="external" href="http://creativecommons.org/licenses/by-sa/2.0/">Creative Commons: Attribution-Sharealike license</a>.</li>
 <li>Last Updated Date: July 9, 2005</li>
</ul>
</div>
