---
title: <mark>
slug: Web/HTML/Element/mark
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
translation_of: Web/HTML/Element/mark
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;mark&gt;</code> 요소</strong>는 현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타냅니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/mark.html", "tabbed-shorter")}}</div>



<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a></th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠">플로우 콘텐츠</a>, <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠">구문 콘텐츠</a>, 뚜렷한 콘텐츠.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠">구문 콘텐츠</a>.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠">구문 콘텐츠</a>를 허용하는 모든 요소.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>모두</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="특성">특성</h2>

<p>이 요소는 <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>을 포함합니다.</p>

<h2 id="사용_일람">사용 일람</h2>

<p>일반적인 <code>&lt;mark&gt;</code> 요소의 사용처는 다음과 같습니다.</p>

<ul>
 <li>인용문({{HTMLElement("q")}}, {{HTMLElement("blockquote")}})에서는, 원본엔 별도 표시가 없으나 특별히 봐야 하는 부분을, 그리고 원저자는 특별히 중요하다고는 생각하지 않았으나 주시해야 할 필요가 있는 부분을 표시합니다. 형광펜을 사용해 중요해 보이는 책에 강조 표시를 추가하는 것처럼 생각하면 됩니다.</li>
 <li>다른 경우, <code>&lt;mark&gt;</code>는 문서 콘텐츠에서 사용자의 현재 행동과 관련 있는 부분을 나타낼 때 사용합니다. 예를 들어, 현재 검색 키워드를 강조 표시할 때 사용할 수 있습니다.</li>
 <li><code>&lt;mark&gt;</code>를 표시만을 위한 용도로 사용하지 마세요. {{htmlelement("span")}}과 적절한 CSS를 대신 사용해야 합니다.</li>
</ul>

<div class="blockIndicator note">
<p><code>&lt;mark&gt;</code>와 {{HTMLElement("strong")}} 요소의 차이점을 기억하세요. 텍스트에서, <code>&lt;mark&gt;</code>는 연관성을 가진 부분을, <code>&lt;strong&gt;</code>은 중요도를 가진 부분을 나타낼 때 사용합니다.</p>
</div>

<h2 id="예제">예제</h2>

<h3 id="관심_부분_표시하기">관심 부분 표시하기</h3>

<p>첫 예제의 <code>&lt;mark&gt;</code> 요소는 인용문에서 사용자가 관심을 가질 텍스트를 강조할 때 사용합니다.</p>

<pre class="brush: html">&lt;blockquote&gt;
  It is a period of civil war. Rebel spaceships, striking from a
  hidden base, have won their first victory against the evil
  Galactic Empire. During the battle, &lt;mark&gt;Rebel spies managed
  to steal secret plans&lt;/mark&gt; to the Empire’s ultimate weapon,
  the DEATH STAR, an armored space station with enough power to
  destroy an entire planet.
&lt;/blockquote&gt;</pre>

<p>{{EmbedLiveSample("관심_부분_표시하기", 650, 130)}}</p>

<h3 id="상황에_맞는_구절_식별">상황에 맞는 구절 식별</h3>

<p>다음 예제는 글의 검색 결과를 강조할 용도로 <code>&lt;mark&gt;</code>를 사용합니다.</p>

<pre class="brush: html">&lt;p&gt;It is a dark time for the Rebellion. Although the Death
Star has been destroyed, &lt;mark class="match"&gt;Imperial&lt;/mark&gt;
troops have driven the Rebel forces from their hidden base and
pursued them across the galaxy.&lt;/p&gt;

&lt;p&gt;Evading the dreaded &lt;mark class="match"&gt;Imperial&lt;/mark&gt;
Starfleet, a group of freedom fighters led by Luke Skywalker
has established a new secret base on the remote ice world of
Hoth.&lt;/p&gt;</pre>

<p>다른 <code>&lt;mark&gt;</code>와 검색 결과 표시를 구별하기 위해 사용자 지정 클래스 <code>"match"</code>를 추가로 적용했습니다.</p>

<p>{{EmbedLiveSample("상황에_맞는_구절_식별", 650, 130)}}</p>

<h2 id="접근성_고려사항">접근성 고려사항</h2>

<p>대부분의 스크린 리더는 기본값에서 <code>&lt;mark&gt;</code> 요소의 존재를 표현하지 않습니다. 그러나 CSS {{cssxref("content")}} 속성과 {{cssxref("::before")}}, {{cssxref("::after")}} 의사 요소를 사용하면 소리내어 읽도록 할 수 있습니다.</p>

<pre class="brush: css">mark::before,
mark::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

mark::before {
  content: " [강조 시작] ";
}

mark::after {
  content: " [강조 끝] ";
}
</pre>

<p>스크린 리더 사용자 일부는 지나치게 자세한 안내를 유발할 수 있는 콘텐츠의 표현을 의도적으로 꺼놓습니다. 그러므로 이 방식을 남용해선 안되며, 콘텐츠의 이해에 강조표시의 유무가 꼭 필요할 때만 사용해야 합니다.</p>

<ul>
 <li><a href="https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/">Short note on making your mark (more accessible) | The Paciello Group</a></li>
 <li><a href="http://adrianroselli.com/2017/12/tweaking-text-level-styles.html">Tweaking Text Level Styles | Adrian Roselli</a></li>
</ul>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.elements.mark")}}</p>
