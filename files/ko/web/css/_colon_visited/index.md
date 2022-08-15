---
title: ':visited'
slug: 'Web/CSS/:visited'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Web
translation_of: 'Web/CSS/:visited'
---
<div>{{ CSSRef }}</div>

<p><strong><code>:visited</code></strong> <a href="/ko/docs/Web/CSS">CSS</a> <a href="/ko/docs/Web/CSS/Pseudo-classes" title="Pseudo-classes">의사 클래스</a>는 사용자가 방문한 적이 있는 링크를 나타냅니다. <code>:visited</code>가 바꿀 수 있는 스타일은 개인정보 보호를 위해 매우 제한적입니다.</p>

<pre class="brush: css no-line-numbers">/* 방문한 적이 있는 &lt;a&gt; 선택 */
a:visited {
  color: green;
}
</pre>

<p><code>:visited</code> 의사 클래스로 정의한 스타일은 자신보다 뒤에 위치하고 동등한 명시성을 가진 다른 링크 의사 클래스({{cssxref(":link")}}, {{cssxref(":hover")}}, {{cssxref(":active")}})가 덮어씁니다. 링크를 적절히 디자인하려면 <em>LVHA-순서(</em><code>:link</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code>)를 따라, <code>:visited</code> 규칙을 <code>:link</code> 뒤, <code>:hover</code>와 <code>:active</code> 앞에 배치하세요.</p>

<h2 id="스타일_제한">스타일 제한</h2>

<p>브라우저는 개인정보 보호를 위해 <code>:visited</code>에서 사용할 수 있는 스타일을 엄격히 제한하고 있습니다.</p>

<ul>
 <li>사용 가능한 CSS 속성은 {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}입니다.</li>
 <li>사용 가능한 SVG 속성은 {{SVGAttr("fill")}}과{{SVGAttr("stroke")}}입니다.</li>
 <li>허용 가능한 속성의 알파 채널 값은 무시하고, 대신 <code>:visited</code>가 아닐 때의 알파 채널을 사용합니다. 단, 그 값이 0일 땐 <code>:visited</code>의 스타일을 모두 무시합니다.</li>
 <li>사용자 입장에서는 방문한 링크의 색이 바뀐 것처럼 보일 때도, {{domxref("window.getComputedStyle()")}} 메서드는 거짓으로라도 항상 <code>:visited</code>가 아닐 때의 스타일을 반환합니다.</li>
</ul>

<div class="note">
<p><strong>참고:</strong> 스타일 제한에 관한 더 많은 정보와 이유에 대해서는 <a href="/ko/docs/Web/CSS/Privacy_and_the_:visited_selector">개인정보와 :visited 선택자</a> 문서를 참고하세요.</p>
</div>

<h2 id="구문">구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<p>기본적으로 색이 없거나 투명한 속성은 <code>:visited</code>로 수정할 수 없습니다. <code>:visited</code>가 수정 가능한 속성 중 브라우저가 기본값을 지정하는건 보통 <code>color</code>와 <code>column-rule-color</code> 뿐입니다. 따라서 다른 속성을 수정하고 싶다면 기본값을 직접 지정해야 합니다.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#test-visited-link"&gt;링크를 아직 방문하지 않으셨나요?&lt;/a&gt;&lt;br&gt;
&lt;a href=""&gt;이미 방문했습니다.&lt;/a&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a {
  /* 특정 속성에 투명하지 않은 기본값을 지정해
     :visited 상태로 바꿀 수 있도록 설정 */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}</pre>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample("예제")}}</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("css.selectors.visited")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/CSS/Privacy_and_the_:visited_selector">개인정보와 :visited 선택자</a></li>
 <li>링크 관련 의사 클래스: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}</li>
</ul>
