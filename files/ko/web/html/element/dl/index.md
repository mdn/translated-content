---
title: <dl>
slug: Web/HTML/Element/dl
tags:
  - Element
  - HTML
  - HTML grouping content
  - 'HTML:Flow content'
  - 'HTML:Palpable Content'
  - Reference
  - Web
translation_of: Web/HTML/Element/dl
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;dl&gt;</code> 요소</strong>는 설명 목록을 나타냅니다. <code>&lt;dl&gt;</code>은 {{htmlelement("dt")}}로 표기한 용어와 {{htmlelement("dd")}} 요소로 표기한 설명 그룹의 목록을 감싸서 설명 목록을 생성합니다. 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용합니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/dl.html", "tabbed-standard")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC">콘텐츠 카테고리</a></th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠">플로우 콘텐츠</a>. <code>&lt;dl&gt;</code>의 자식 중 이름-값 그룹이 있으면 뚜렷한 콘텐츠.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td>
    <p>하나 이상의 {{htmlelement("dt")}} 요소와 하나 이상의 {{htmlelement("dd")}} 요소로 구성한 그룹 0개 이상. 선택적으로 {{htmlelement("script")}}와 {{htmlelement("template")}}을 혼합 가능.<br>
     또는, 하나 이상의 {{htmlelement("div")}}. 선택적으로 {{htmlelement("script")}}, {{htmlelement("template")}} 혼합 가능.</p>
   </td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠">플로우 콘텐츠</a>를 허용하는 모든 요소.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>{{ARIARole("group")}}, {{ARIARole("presentation")}}</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLDListElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="특성">특성</h2>

<p>이 요소는 <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>을 포함합니다.</p>

<h2 id="예제">예제</h2>

<h3 id="하나의_용어와_하나의_정의">하나의 용어와 하나의 정의</h3>

<pre class="brush: html">&lt;dl&gt;
  &lt;dt&gt;Firefox&lt;/dt&gt;
  &lt;dd&gt;
    Mozilla 재단과 수 백명의
    자원봉사자가 개발한 무료
    오픈소스 크로스 플랫폼
    그래픽 웹 브라우저.
  &lt;/dd&gt;

  &lt;!-- 다른 용어 및 정의 --&gt;
&lt;/dl&gt;
</pre>

<p>{{EmbedLiveSample("하나의_용어와_하나의_정의")}}</p>

<h3 id="여러_개의_용어와_하나의_정의">여러 개의 용어와 하나의 정의</h3>

<pre class="brush: html">&lt;dl&gt;
  &lt;dt&gt;Firefox&lt;/dt&gt;
  &lt;dt&gt;Mozilla Firefox&lt;/dt&gt;
  &lt;dt&gt;Fx&lt;/dt&gt;
  &lt;dd&gt;
    Mozilla 재단과 수 백명의
    자원봉사자가 개발한 무료
    오픈소스 크로스 플랫폼
    그래픽 웹 브라우저.
  &lt;/dd&gt;

  &lt;!-- 다른 용어 및 정의 --&gt;
&lt;/dl&gt;
</pre>

<p>{{EmbedLiveSample("여러_개의_용어와_하나의_정의")}}</p>

<h3 id="하나의_용어와_여러_개의_정의">하나의 용어와 여러 개의 정의</h3>

<pre class="brush: html">&lt;dl&gt;
  &lt;dt&gt;Firefox&lt;/dt&gt;
  &lt;dd&gt;
    Mozilla 재단과 수 백명의
    자원봉사자가 개발한 무료
    오픈소스 크로스 플랫폼
    그래픽 웹 브라우저.
  &lt;/dd&gt;
  &lt;dd&gt;
    붉은 판다, 레서 판다, 랫서 판다,
    혹은 "Firefox"는 초식성 포유류이다.
    몸 길이는 애완용 고양이보다 약간
    큰 정도인 60cm다.
  &lt;/dd&gt;

  &lt;!-- 다른 용어 및 정의 --&gt;
&lt;/dl&gt;
</pre>

<p>{{EmbedLiveSample("하나의_용어와_여러_개의_정의")}}</p>

<h3 id="여러_개의_용어와_여러_개의_정의">여러 개의 용어와 여러 개의 정의</h3>

<p>위의 예제를 결합하여 여러 용어를 여러 정의와 연결하는 것도 가능합니다.</p>

<h3 id="메타데이터">메타데이터</h3>

<p><code>&lt;dl&gt;</code>은 메타데이터를 키-값 쌍으로 표시할 때도 유용합니다.</p>

<pre class="brush: html">&lt;dl&gt;
  &lt;dt&gt;Name&lt;/dt&gt;
  &lt;dd&gt;Godzilla&lt;/dd&gt;
  &lt;dt&gt;Born&lt;/dt&gt;
  &lt;dd&gt;1952&lt;/dd&gt;
  &lt;dt&gt;Birthplace&lt;/dt&gt;
  &lt;dd&gt;Japan&lt;/dd&gt;
  &lt;dt&gt;Color&lt;/dt&gt;
  &lt;dd&gt;Green&lt;/dd&gt;
&lt;/dl&gt;
</pre>

<p>팁: 아래처럼 키-값 구분자를 CSS로 지정하면 편리합니다.</p>

<pre class="brush: css">dt:after {
  content: ": ";
}</pre>

<p>{{EmbedLiveSample("메타데이터")}}</p>

<h3 id="이름-값_그룹을_htmlelementdiv로_감싸기">이름-값 그룹을 {{htmlelement("div")}}로 감싸기</h3>

<p>{{glossary("WHATWG")}} HTML에서는 <code>&lt;dl&gt;</code> 안 각각의 이름-값 그룹을 {{htmlelement("div")}}로 감쌀 수 있습니다. 마이크로데이터를 사용할 때, 그룹에 전역 특성을 적용할 때, 아니면 스타일을 적용할 때 유용할 수 있습니다.</p>

<pre class="brush: html">&lt;dl&gt;
  &lt;div&gt;
    &lt;dt&gt;Name&lt;/dt&gt;
    &lt;dd&gt;Godzilla&lt;/dd&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;dt&gt;Born&lt;/dt&gt;
    &lt;dd&gt;1952&lt;/dd&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;dt&gt;Birthplace&lt;/dt&gt;
    &lt;dd&gt;Japan&lt;/dd&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;dt&gt;Color&lt;/dt&gt;
    &lt;dd&gt;Green&lt;/dd&gt;
  &lt;/div&gt;
&lt;/dl&gt;
</pre>

<h2 id="참고">참고</h2>

<p>페이지에서 들여쓰기를 하기 위한 목적으로 <code>&lt;dl&gt;</code> (또는 {{htmlelement("ul")}}) 요소를 사용하지 마세요. 작동할 수는 있으나 좋지 않은 방법이고, 설명 목록의 원래 목적을 흐립니다.</p>

<p>용어의 들여쓰기를 수정하려면 <a href="/ko/docs/Web/CSS">CSS</a> {{cssxref("margin")}} 속성을 사용하세요.</p>

<h2 id="접근성_고려사항">접근성 고려사항</h2>

<p>각각의 스크린 리더는 <code>&lt;dl&gt;</code>을 다르게 표현합니다. iOS의 VoiceOver 등 일부 스크린 리더는 <code>&lt;dl&gt;</code>의 콘텐츠를 리스트로 표현하지 않습니다. 따라서, 각 아이템의 콘텐츠는 리스트 그룹 내 다른 항목과의 관계를 표현할 수 있는 방식으로 작성해야 합니다.</p>

<ul>
 <li><a href="https://s.codepen.io/aardrian/debug/NzGaKP">CodePen - HTML Buddies: dt &amp; dd</a></li>
</ul>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("html.elements.dl")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{HTMLElement("dt")}} 요소</li>
 <li>{{HTMLElement("dd")}} 요소</li>
</ul>
