---
title: contain
slug: Web/CSS/contain
tags:
  - CSS
  - CSS Containment
  - CSS Property
  - Reference
  - Web
  - 'recipe:css-property'
translation_of: Web/CSS/contain
---
<div>{{CSSRef}}</div>

<p><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>contain</code></strong> 속성은 특정 요소와 콘텐츠가 문서 트리의 다른 부위와 독립되어있음을 나타낼 때 사용합니다. 브라우저는 이 정보를 사용해 레이아웃, 스타일, 페인트, 크기, 또는 그 조합의 계산을 전체 페이지 DOM 대신 일부에서만 수행할 수 있으므로 뚜렷한 성능 상 이점을 얻을 수 있습니다.</p>

<p><code>contain</code> 속성은 위젯 내부 콘텐츠가 외부에 부작용을 끼치는 것을 방지할 수 있으므로 서로 독립된 많은 양의 위젯이 존재하는 페이지에서 유용합니다.</p>

<div class="blockIndicator note">
<p><strong>참고:</strong> <code>paint</code>, <code>strict</code>, <code>content</code> 값을 설정할 경우 다음을 생성합니다.</p>

<ol>
 <li>새로운 <a href="/ko/docs/Web/CSS/All_About_The_Containing_Block">컨테이닝 블록</a> ({{cssxref("position")}} 속성이 <code>absolute</code> 또는 <code>fixed</code>인 자손을 위함).</li>
 <li>새로운 <a href="/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context">쌓임 맥락</a>.</li>
 <li>새로운 <a href="/ko/docs/Web/Guide/CSS/Block_formatting_context">블록 서식 맥락</a>.</li>
</ol>
</div>

<h2 id="구문">구문</h2>

<pre class="brush: css no-line-numbers notranslate">/* 키워드 값 */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: layout;
contain: style;
contain: paint;

/* 다중 값 */
contain: size paint;
contain: size layout paint;

/* 전역 값 */
contain: inherit;
contain: initial;
contain: unset;</pre>

<p><code>contain</code> 속성은 다음 방법 중 하나를 사용해 지정합니다.</p>

<ul>
 <li><code>none</code>, <code>strict</code>, <code>content</code> 키워드 중 하나를 사용.</li>
 <li><code>size</code>, <code>layout</code>, <code>style</code>, <code>paint</code> 키워드를 임의 순서로 하나 이상 사용.</li>
</ul>

<h3 id="값">값</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>아무것도 격리하지 않고 요소를 평범하게 렌더링합니다.</dd>
 <dt><code>strict</code></dt>
 <dd><code>style</code>을 제외한 모든 격리 규칙을 적용합니다. <code>contain: size layout paint</code>와 같습니다.</dd>
 <dt><code>content</code></dt>
 <dd><code>size</code>와 <code>style</code>을 제외한 모든 격리 규칙을 적용합니다. <code>contain: layout paint</code>와 같습니다.</dd>
 <dt><code>size</code></dt>
 <dd>요소의 크기를 계산할 때 자손의 크기는 고려하지 않아도 됨을 나타냅니다.</dd>
 <dt><code>layout</code></dt>
 <dd>요소 외부의 어느 것도 내부 레이아웃에 영향을 주지 않고, 그 반대도 성립함을 나타냅니다.</dd>
 <dt><code>style</code></dt>
 <dd>요소 자신과 자손 외에도 영향을 주는 속성이라도 그 영향 범위가 자신을 벗어나지 않음을 나타냅니다. 이 값은 명세에서 "제외 고려" 대상이므로 모든 브라우저가 지원하지 않을 수도 있음을 참고하세요.</dd>
 <dt><code>paint</code></dt>
 <dd>요소의 자손이 자신의 범위 바깥에 그려지지 않음을 나타냅니다. 이 값을 지정한 요소의 경우, 요소가 화면 밖에 위치할 경우 당연히 그 안의 자손도 화면 안에 들어오지 않을 것이므로 브라우저는 그 안의 요소를 고려하지 않아도 됩니다. 그러나 만약 자손이 범위 밖으로 넘칠 경우에는 요소의 테두리 상자에서 잘라냅니다.</dd>
</dl>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="간단한_레이아웃">간단한 레이아웃</h3>

<p>다음 마크업은 각각의 콘텐츠를 가진 여러 개의 글을 가정합니다.</p>

<pre class="brush: html notranslate">&lt;h1&gt;My blog&lt;/h1&gt;
&lt;article&gt;
  &lt;h2&gt;Heading of a nice article&lt;/h2&gt;
  &lt;p&gt;Content here.&lt;/p&gt;
&lt;/article&gt;
&lt;article&gt;
  &lt;h2&gt;Another heading of another article&lt;/h2&gt;
  &lt;img src="graphic.jpg" alt="photo"&gt;
  &lt;p&gt;More content here.&lt;/p&gt;
&lt;/article&gt;</pre>

<p>각 <code>&lt;article&gt;</code>과 <code>&lt;img&gt;</code>엔 테두리를 부여하고, 이미지는 모두 좌측으로 플로팅합니다.</p>

<pre class="brush: css notranslate">img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}</pre>

<p>{{EmbedLiveSample('간단한_레이아웃', '100%', '300')}}</p>

<h3 id="플로팅_간섭">플로팅 간섭</h3>

<p>첫 번째 글의 마지막에 다른 이미지를 넣게 되면 많은 양의 DOM 트리가 다시 레이아웃이나 페인트 과정을 거쳐야 하며, 두 번째 글의 레이아웃에도 간섭하게 됩니다.</p>

<pre class="brush: html notranslate">&lt;h1&gt;My blog&lt;/h1&gt;
&lt;article&gt;
  &lt;h2&gt;Heading of a nice article&lt;/h2&gt;
  &lt;p&gt;Content here.&lt;/p&gt;
  &lt;img src="i-just-showed-up.jpg" alt="social"&gt;
&lt;/article&gt;
&lt;article&gt;
  &lt;h2&gt;Another heading of another article&lt;/h2&gt;
  &lt;img src="graphic.jpg" alt="photo"&gt;
  &lt;p&gt;More content here.&lt;/p&gt;
&lt;/article&gt;</pre>

<div class="hidden">
<pre class="brush: css notranslate">img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}</pre>
</div>

<p>아래의 라이브 샘플에서, 플로팅 작동 방식으로 인해 첫 번째 이미지가 두 번째 글 안으로 들어가버린 모습을 볼 수 있습니다.</p>

<p>{{EmbedLiveSample('플로팅_간섭', '100%', '300')}}</p>

<h3 id="contain으로_수정하기"><code>contain</code>으로 수정하기</h3>

<p>각각의 <code>article</code>에 <code>contain: content</code>를 지정해주면, 새로운 요소를 추가할 때 그 하위 트리만 계산하고 바깥은 고려하지 않아도 된다는 것을 브라우저가 인식합니다.</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;h1&gt;My blog&lt;/h1&gt;
&lt;article&gt;
  &lt;h2&gt;Heading of a nice article&lt;/h2&gt;
  &lt;p&gt;Content here.&lt;/p&gt;
  &lt;img src="i-just-showed-up.jpg" alt="social"&gt;
&lt;/article&gt;
&lt;article&gt;
  &lt;h2&gt;Another heading of another article&lt;/h2&gt;
  &lt;img src="graphic.jpg" alt="photo"&gt;
  &lt;p&gt;More content here.&lt;/p&gt;
&lt;/article&gt;</pre>
</div>

<pre class="brush: css notranslate">img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
  contain: content;
}</pre>

<p>또한 첫 번째 이미지가 플로팅으로 인해 아래로 넘어가지 않고, 컨테이너 요소의 범위 안에 머무르는 것도 확인할 수 있습니다.</p>

<p>{{EmbedLiveSample('contain으로_수정하기', '100%', '330')}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.contain")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/CSS/CSS_Containment">CSS Containment</a></li>
 <li>CSS {{cssxref("position")}} 속성</li>
</ul>
