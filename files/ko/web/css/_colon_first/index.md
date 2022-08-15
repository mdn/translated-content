---
title: ':first'
slug: 'Web/CSS/:first'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Web
translation_of: 'Web/CSS/:first'
---
<div>{{CSSRef}}</div>

<p><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>:first</code></strong> <a href="/ko/docs/Web/CSS/Pseudo-classes">의사 클래스</a>는 {{cssxref("@page")}} <a href="/ko/docs/Web/CSS/At-rule">@-규칙</a>과 함께 사용되며, 출력 시의 첫 페이지를 나타냅니다.</p>

<pre class="brush: css no-line-numbers">/* Selects the first page when printing */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}</pre>

<div class="note"><strong>참고:</strong> :first 의사 클래스 안에서는 CSS  속성의 사용이 제한됩니다. 바깥 여백, {{cssxref("orphans")}}, {{cssxref("widows")}}와 페이지 넘김만 바꿀 수 있으며, 여백 지정 시 <a href="/ko/docs/Web/CSS/length#절대길이_단위">절대길이 단위</a>만 사용할 수 있습니다. 다른 모든 속성은 무시합니다.</div>

<h2 id="구문">구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;First Page.&lt;/p&gt;
&lt;p&gt;Second Page.&lt;/p&gt;
&lt;button&gt;출력!&lt;/button&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

p {
  page-break-after: always;
}
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">document.querySelector("button").addEventListener('click', () =&gt; {
  window.print();
});
</pre>

<h3 id="결과">결과</h3>

<p>"출력!" 버튼을 눌러 페이지 출력 화면을 확인해보세요. 첫 번째 페이지의 콘텐츠는 중앙 어딘가에 위치하고, 두 번째 페이지의 콘텐츠는 기본 위치에 존재해야 합니다.</p>

<p>{{ EmbedLiveSample('예제', '80%', '150px') }}</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.selectors.first")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{Cssxref("@page")}}</li>
 <li>페이지 관련 다른 의사 클래스: {{Cssxref(":left")}}, {{Cssxref(":right")}}</li>
</ul>
