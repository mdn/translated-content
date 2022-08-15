---
title: CSS 다단 레이아웃 사용
slug: Web/CSS/CSS_Columns/Using_multi-column_layouts
tags:
  - Advanced
  - CSS
  - Guide
  - Multi-columns
translation_of: Web/CSS/CSS_Columns/Using_multi-column_layouts
original_slug: CSS3_Columns
---
<p>{{CSSRef("CSS Multi-columns")}}</p>

<p><span class="seoSummary"><strong>CSS 다단(multi-column) 레이아웃</strong>은 다단 텍스트 정의가 쉽도록 <em>블록 레이아웃 모드</em>를 확장합니다.</span> 사람들은 줄이 너무 긴 경우 텍스트 읽는데 어려움이 있습니다; 한 줄 끝에서 다음 줄 시작까지 눈에 옮기기 너무 긴 경우, 어느 줄을 읽고 있었는 지를 잊어버립니다. 그러므로, 큰 화면을 최대로 쓰기 위해서는, 너비가 제한된 텍스트 단을 나란히 놓아야 합니다, 바로 신문이 하는 것처럼.</p>

<p>불행하게도 이는 CSS 및 HTML로 하기는 고정 위치에서 강제 단 바꿈 또는 텍스트에 허용되는 마크업의 심한 제한 혹은 위대한(heroic) 스크립팅 사용 없이는 불가능합니다. 이 제한은 전통 블록 레이아웃 모드를 확장하는 새로운 CSS 속성 추가로 해결됐습니다.</p>

<h2 id="단_사용">단 사용</h2>

<h3 id="단_수와_너비">단 수와 너비</h3>

<p>두 CSS 속성은 많은 단을 보일 지 여부와 방법을 제어합니다: {{ Cssxref("column-count") }} 및 {{ Cssxref("column-width") }}.</p>

<p><code>column-count</code> 속성은 단 수를 특정한 수로 설정합니다. 가령,</p>

<h2 id="예_1">예 1</h2>

<h3 id="HTML">HTML</h3>

<div id="column_count">
<pre class="brush: html">&lt;div id="col"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#col {
-moz-column-count: 2;
-webkit-column-count: 2;
column-count: 2;
}
</pre>
</div>

<h3 id="결과">결과</h3>

<p>두 단에 콘텐츠를 표시합니다 (다단 준수 브라우저를 사용 중인 경우):</p>

<p>{{EmbedLiveSample('column_count','700px', '', '')}}</p>

<p><code>column-width</code> 속성은 희망 최소 단 너비를 설정합니다. <code>column-count</code>도 설정되지 않은 경우, 그러면 브라우저는 자동으로 이용 가능한 너비에 맞게 많은 단을 만듭니다.</p>

<h2 id="예_2">예 2</h2>

<h3 id="HTML_2">HTML</h3>

<div id="column_width">
<pre class="brush: html">&lt;div id="wid"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&lt;/div&gt;
</pre>

<h3 id="CSS_2">CSS</h3>

<pre class="brush: css">#wid {
-moz-column-width: 100px;
-webkit-column-width: 100px;
column-width: 100px;
}
</pre>
</div>

<h3 id="결과_2">결과</h3>

<p>{{ EmbedLiveSample('column_width','700px', '', '') }}</p>

<p>정확한 세부사항은 <a class="external" href="http://www.w3.org/TR/css3-multicol/">CSS3 스펙</a>에 설명되어 있습니다.</p>

<p>다단 블록에서, 콘텐츠는 필요에 따라 한 단에서 다음 단으로 자동으로 흐릅니다. 모든 HTML, CSS 및 DOM 기능은 단 내에서 지원됩니다, 편집 및 인쇄 중일 때.</p>

<h3 id="columns_단축"><code>columns</code> 단축</h3>

<p>대부분, 웹 디자이너는 두 CSS 속성({{ cssxref("column-count") }} 또는 {{ cssxref("column-width") }}) 중 하나를 사용합니다. 이러한 속성에 대한 값이 겹치지 않기에, 종종 {{ cssxref("columns") }} 단축을 쓰는 게 편리합니다. 가령.</p>

<p><code>column-width:12em</code> CSS 선언은 다음으로 대체될 수 있습니다:</p>

<h2 id="예_3">예 3</h2>

<h3 id="HTML_3">HTML</h3>

<div id="column_short">
<pre class="brush: html">&lt;div id="col_short"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&lt;/div&gt;
</pre>

<h3 id="CSS_3">CSS</h3>

<pre class="brush: css">#col_short {
-moz-column-width: 12em;
-moz-columns: 12em;
-webkit-columns: 12em;
columns: 12em;
}
</pre>
</div>

<h3 id="결과_3">결과</h3>

<p>{{EmbedLiveSample('column_short','700px', '', '')}}</p>

<p><code>column-count:4</code> CSS 선언은 다음으로 대체될 수 있습니다:</p>

<h2 id="예_4">예 4</h2>

<h3 id="HTML_4">HTML</h3>

<div id="four_columns">
<pre class="brush: html">&lt;div id="columns_4"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&lt;/div&gt;
</pre>

<h3 id="CSS_4">CSS</h3>

<pre class="brush: css">#columns_4{
-moz-column-count: 4;
-moz-columns: 4;
-webkit-columns: 4;
columns: 4;
}
</pre>
</div>

<h3 id="결과_4">결과</h3>

<p>{{ EmbedLiveSample('four_columns','700px', '', '') }}</p>

<p><code>column-width:8em</code> 및 <code>column-count:12</code> 두 CSS 선언은 다음으로 대체될 수 있습니다:</p>

<h2 id="예_5">예 5</h2>

<h3 id="HTML_5">HTML</h3>

<div id="twelve_columns">
<pre class="brush: html">&lt;div id="columns_12"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&lt;/div&gt;
</pre>

<h3 id="CSS_5">CSS</h3>

<pre class="brush: css">#columns_12 {
-moz-columns: 12 8em;
-webkit-columns: 12 8em;
columns: 12 8em;
}
</pre>
</div>

<h3 id="결과_5">결과</h3>

<p>{{ EmbedLiveSample('twelve_columns','700px', '', '') }}</p>

<h3 id="높이_균형">높이 균형</h3>

<p>CSS3 Column 스펙은 단 높이는 균형을 이루어야 함을 요구합니다: 즉, 브라우저는 각 단의 콘텐츠 높이가 거의 같도록 자동으로 최대 단 높이를 설정합니다. Firefox는 이를 행합니다.</p>

<p>그러나, 일부 상황에서는 최대 단 높이를 명시해서 설정하는 것도 유용하고 그 다음 첫 단에서 시작하여 필요한 만큼 많은 단을 생성하며, 어쩌면 오른쪽으로 넘치는 콘텐츠를 배치합니다. 따라서, 높이가 제한되는 경우, 다단 블록에 CSS {{ cssxref("height") }} 또는 {{ cssxref("max-height") }} 속성을 설정하여, 각 단은 그 높이 및 더 이상 새로운 단을 추가하기 전까지 늘 수 있습니다. 이 모드 역시 레이아웃에 대해서 훨씬 더 효율이 좋습니다.</p>

<h3 id="단_간격">단 간격</h3>

<p>단 사이 간격이 있습니다. 기본 권장값은 <code>1em</code>입니다. 이 크기는 {{ Cssxref("column-gap") }} 속성을 다단 블록에 적용하여 바꿀 수 있습니다:</p>

<h2 id="예_6">예 6</h2>

<h3 id="HTML_6">HTML</h3>

<div id="col_gap">
<pre class="brush: html">&lt;div id="column_gap"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum&lt;/div&gt;
</pre>

<h3 id="CSS_6">CSS</h3>

<pre class="brush: css">#column_gap {
-webkit-column-count: 5;
-moz-column-count: 5;
column-count: 5;
-moz-column-gap: 2em;
-webkit-column-gap: 2em;
column-gap: 2em;
}
</pre>
</div>

<h3 id="결과_6">결과</h3>

<p>{{ EmbedLiveSample('col_gap','700px', '', '') }}</p>

<h2 id="우아한_강등">우아한 강등</h2>

<p>단 속성은 단을 지원하지 않는 브라우저에 의해 그냥 무시됩니다. 따라서 비지원 브라우저에서는 1단으로 표시하고 지원하는 브라우저에서는 다단을 사용하는 레이아웃을 만드는 게 그런 대로 쉽습니다.</p>

<p>모든 브라우저가 이러한 접두어 없는 속성을 지원하는 것은 아님을 주의하세요. 오늘날 대부분의 브라우저에서 이 기능을 사용하기 위해서, 각 속성은 세 번({{ property_prefix("-moz") }} 접두어로 한 번, {{ property_prefix("-webkit") }} 접두어로 한 번 그리고 접두어 없이 한 번) 작성되어야 합니다.</p>

<h2 id="결론">결론</h2>

<p>CSS3 단(column)은 웹 개발자가 화면 영역(real estate)을 최대한 쓸 수 있게 돕는 원시(primitive) 레이아웃입니다. 상상력이 풍부한 개발자는 많은 단 사용법을 찾을 지도 모릅니다, 특히 자동 높이 균형 기능 가지고.</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a class="external" href="http://weblogs.mozillazine.org/roc/archives/2005/03/gecko_18_for_we.html" rel="freelink">http://weblogs.mozillazine.org/roc/a...18_for_we.html</a></li>
</ul>
