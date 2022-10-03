---
title: <embed>
slug: Web/HTML/Element/embed
tags:
  - HTML
  - HTML 포함된 컨텐츠
  - HTML5
  - 레퍼런스
  - 요소
  - 웹
translation_of: Web/HTML/Element/embed
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;embed&gt;</code> 요소</strong>는 외부 어플리케이션이나 대화형 컨텐츠와의 통합점을 나타냅니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/embed.html", "tabbed-standard")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<ul class="htmlelt">
 <li><dfn><a href="/en-US/docs/HTML/Content_categories" title="HTML/Content_categories">컨텐츠 범주</a></dfn> <a href="/en-US/docs/HTML/Content_categories#Flow_content" title="HTML/Content categories#Flow content">플로우 컨텐츠</a>, <a href="/en-US/docs/HTML/Content_categories#Phrasing_content" title="HTML/Content categories#Phrasing content">구문 컨텐츠</a>, 포함된 컨텐츠, 대화형 컨텐츠, palpable 컨텐츠.</li>
 <li><dfn>허용된 컨텐츠</dfn> 없음. 이것은 {{Glossary("empty element")}}.</li>
 <li><dfn>태그 생략</dfn> 시작 태그는 있어야 하며, 종료태그는 있어서는 안됩니다.</li>
 <li><dfn>허용된 부모 요소</dfn> 포함된 컨텐츠를 허용하는 모든 요소</li>
 <li><dfn>DOM 인터페이스</dfn> {{domxref("HTMLEmbedElement")}}</li>
</ul>

<h2 id="속성">속성</h2>

<p><span style="line-height: 21px;">이 요소는 </span><a href="https://developer.mozilla.org/en-US/docs/HTML/Global_attributes" style="line-height: 21px;" title="HTML/Global attributes">전역 속성</a>을 포함합니다.</p>

<dl>
 <dt>{{htmlattrdef("height")}}</dt>
 <dd>리소스의 표시될 높이 길이를 CSS 픽셀로 지정</dd>
 <dt>{{htmlattrdef("src")}}</dt>
 <dd>포함된 리소스의 URL</dd>
 <dt>{{htmlattrdef("type")}}</dt>
 <dd>인스턴스화할 플러그인을 고르기 위해 사용되는 MIME 타입</dd>
 <dt>{{htmlattrdef("width")}}</dt>
 <dd>리소스의 표시될 가로 길이를 CSS 픽셀로 지정</dd>
</dl>

<h2 id="예제">예제</h2>

<pre class="brush: html">&lt;embed type="video/quicktime" src="movie.mov" width="640" height="480"&gt;
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.elements.embed")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>다양한 타입의 포함된 컨텐츠를 위해 사용되는 다른 요소들 {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}}, and {{HTMLElement("video")}}.</li>
</ul>
