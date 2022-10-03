---
title: <cite>
slug: Web/HTML/Element/cite
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
  - 인용
  - 출처
translation_of: Web/HTML/Element/cite
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML <code>&lt;cite&gt;</code> 요소</strong>는 저작물의 출처를 표기할 때 사용하며, 제목을 반드시 포함해야 합니다.</span> 적절한 맥락 아래에서는 출처를 축약해서 표기할 수 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/cite.html", "tabbed-standard")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC">콘텐츠 카테고리</a></th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠">플로우 콘텐츠</a>, <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠">구문 콘텐츠</a>, 뚜렷한 콘텐츠.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠">구문 콘텐츠</a>.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠">구문 콘텐츠</a>를 허용하는 모든 요소.</td>
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

<p>이 요소는 <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>만 포함합니다.</p>

<h2 id="사용_일람">사용 일람</h2>

<p><code>&lt;cite&gt;</code> 요소의 저작물로는 다음과 같은 예제를 들 수 있습니다.</p>

<div class="threecolumns" id="creative-works">
<ul>
 <li>책</li>
 <li>논문</li>
 <li>에세이</li>
 <li>시</li>
 <li>악보</li>
 <li>음악</li>
 <li>대본</li>
 <li>영화</li>
 <li>TV 쇼</li>
 <li>게임</li>
 <li>조각</li>
 <li>그림</li>
 <li>연극</li>
 <li>공연</li>
 <li>오페라</li>
 <li>뮤지컬</li>
 <li>전시회</li>
 <li>판례</li>
 <li>컴퓨터 프로그램</li>
 <li>웹사이트</li>
 <li>웹페이지</li>
 <li>블로그 글과 댓글</li>
 <li>게시판 글과 댓글</li>
 <li>트윗</li>
 <li>Facebook 글</li>
 <li>성명서</li>
 <li>기타 등등</li>
</ul>
</div>

<p>W3C 명세는 <code>&lt;cite&gt;</code> 요소로 저작물의 출처를 표기할 때 저작자도 표기할 수 있음을 명시하고 있습니다. 그러나 정반대로, WHATWG 명세는 사람 이름을 어떤 상황에서도 <strong>절대</strong> 포함하지 말아야 한다고 적혀있다는 점을 알아두는 것이 좋습니다.</p>

<p>{{htmlelement("blockquote")}}, {{htmlelement("q")}} 요소가 가진 인용문의 출처를 나타내려면 {{htmlattrxref("cite", "blockquote")}} 특성을 사용하세요.</p>

<p>보통 브라우저는 <code>&lt;cite&gt;</code> 요소를 그릴 때 기울임꼴로 표현합니다. 기울임꼴을 제거하려면 CSS {{cssxref("font-style")}} 속성을 <code>&lt;cite&gt;</code>에 적용하세요.</p>

<h2 id="예제">예제</h2>

<pre class="brush: html">&lt;p&gt;More information can be found in &lt;cite&gt;[ISO-0000]&lt;/cite&gt;.&lt;/p&gt;</pre>

<h3 id="결과">결과</h3>

<p><cite>{{EmbedLiveSample("예제", 640, 60)}}</cite></p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>{{Compat("html.elements.cite")}}</div>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>긴 인용문을 위한 {{HTMLElement("blockquote")}} 요소.</li>
 <li>인라인 인용문을 위한 {{HTMLElement("q")}} 요소.</li>
</ul>
