---
title: '@supports'
slug: Web/CSS/@supports
tags:
  - At-rule
  - CSS
  - Layout
  - Reference
  - Web
translation_of: Web/CSS/@supports
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>@supports</code></strong> <a href="/ko/docs/Web/CSS" title="CSS">CSS</a> <a href="/ko/docs/Web/CSS/At-rule" title="en/CSS/At-rule">@규칙</a>은 주어진 하나 이상의 CSS 기능을 브라우저가 지원하는지에 따라 다른 스타일 선언을 할 수 있는 방법을 제공합니다.</span> 이를 기능 쿼리(feature query)라고 부릅니다. <code>@supports</code>는 스타일의 최상위 단계, 또는 다른 <a href="/ko/docs/Web/CSS/At-rule#조건부_그룹_규칙">조건부 그룹 규칙</a>에 중첩해 위치할 수 있습니다.</p>

<pre class="brush: css; no-line-numbers">@supports (display: grid) {
  div {
    display: grid;
  }
}</pre>

<pre class="brush: css; no-line-numbers">@supports not (display: grid) {
  div {
    float: right;
  }
}</pre>

<p>JavaScript에서, <code>@supports</code>는 CSS 객체 모델 인터페이스 {{DOMxRef("CSSSupportsRule")}}로 접근할 수 있습니다.</p>

<h2 id="Syntax" name="Syntax">구문</h2>

<p><code>@supports</code> @규칙은 하나의 선언 블록을 특정 기능의 브라우저 지원 조건과 연결할 수 있습니다.<em> 지원 조건은 하나 이상의 키-값 쌍을 논리곱(<code>and</code>), 논리합(<code>or</code>), 부정(<code>not</code>)으로 연결해 구성합니다. 괄호로 묶어 우선순위를 </em>지정할 수도 있습니다.</p>

<h3 id="선언_구문">선언 구문</h3>

<p>가장 기본적인 지원 조건은 단순한 선언(속성 이름과 그 값)입니다. 선언은 괄호로 묶여야 합니다. 다음 예제는 브라우저가 {{cssxref("transform-origin")}} 속성의 값으로 <code>5% 5%</code>가 유효하다고 여길 때 통과합니다.</p>

<pre class="brush:css">@supports (transform-origin: 5% 5%) {}</pre>

<h3 id="함수_구문">함수 구문</h3>

<p>두 번째 기본적인 지원 조건은 지원 함수로, 모든 브라우저가 함수 구문을 지원하지만 지원 함수 자체는 아직 표준화 중입니다.</p>

<h4 id="selector()" name="selector()"><code>selector()</code> {{experimental_inline}}</h4>

<p>브라우저가 주어진 선택자를 지원하는지 판별합니다. 다음 예제는 브라우저가 <a href="/ko/docs/Web/CSS/Child_combinator">자식 결합자</a>를 지원할 때 통과합니다.</p>

<pre class="brush: css">@supports selector(A &gt; B) {}
</pre>

<h3 id="not_연산자"><code>not</code> 연산자</h3>

<p><code>not</code> 연산자를 어떤 표현식 앞에 붙이면 그 반대 결과를 낳는 새로운 표현식을 생성합니다. 다음 예제는 브라우저가 {{cssxref("transform-origin")}} 속성의 값으로 <code>10em 10em 10em</code>이 <strong>유효하지 않다</strong>고 여길 때 통과합니다.</p>

<pre class="brush:css">@supports not (transform-origin: 10em 10em 10em) {}</pre>

<p>다른 연산자와 마찬가지로, 선언의 복잡도와 관계 없이 <code>not</code> 연산자를 적용할 수 있습니다. 다음 두 예시는 모두 유효한 구문입니다.</p>

<pre class="brush:css">@supports not (not (transform-origin: 2px)) {}
@supports (display: grid) and (not (display: inline-grid)) {}</pre>

<div class="note style-wrap">
<p><strong>참고:</strong> 최상위 <code>not</code> 연산자는 괄호로 감싸지 않아도 괜찮습니다. <code>and</code>, <code>or</code> 등 다른 연산자와 함께 사용할 때는 괄호가 필요합니다.</p>
</div>

<h3 id="and_연산자"><code>and</code> 연산자</h3>

<p><code>and</code> 연산자는 두 표현식의 논리곱으로부터 새로운 표현식을 생성합니다. 새로운 표현식은 두 구성 표현식이 <strong>모두 참일 때만</strong> 참을 반환합니다. 다음 예제는 두 개의 구성 표현식이 동시에 참이어야만 통과합니다.</p>

<pre class="brush: css">@supports (display: table-cell) and (display: list-item) {}</pre>

<p>다수의 논리곱은 괄호 없이 병치할 수 있습니다. 다음 두 예시는 모두 유효한 구문입니다.</p>

<pre class="brush: css">@supports (display: table-cell) and (display: list-item) and (display:run-in) {}
@supports (display: table-cell) and ((display: list-item) and (display:run-in)) {}</pre>

<h3 id="or_연산자"><code>or</code> 연산자</h3>

<p><code>or</code> 연산자는 두 표현식의 논리합으로부터 새로운 표현식을 생성합니다. 새로운 표현식은 두 구성 표현식 중 <strong>어느 한 쪽이라도 참이면</strong> 참을 반환합니다. 다음 예제는 두 개의 구성 표현식 중 하나라도 참이면 통과합니다.</p>

<pre class="brush:css;">@supports (transform-style: preserve) or (-moz-transform-style: preserve) {}
</pre>

<p>다수의 논리합은 괄호 없이 병치할 수 있습니다. 다음 두 예시는 모두 유효한 구문입니다.</p>

<pre class="brush:css">@supports (transform-style: preserve) or (-moz-transform-style: preserve) or
          (-o-transform-style: preserve) or (-webkit-transform-style: preserve) {}

@supports (transform-style: preserve-3d) or ((-moz-transform-style: preserve-3d) or
          ((-o-transform-style: preserve-3d) or (-webkit-transform-style: preserve-3d))) {}</pre>

<div class="note style-wrap">
<p><strong>참고</strong>: <code>and</code>와 <code>or</code> 연산자를 같이 사용할 때는 괄호를 사용해 연산자 적용 순서를 정의해야 합니다. 그렇지 않으면 조건이 유효하지 않으므로 @-규칙 전체를 무시합니다.</p>
</div>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="주어진_CSS_속성의_지원_여부_판별">주어진 CSS 속성의 지원 여부 판별</h3>

<pre class="brush:css;">@supports (animation-name: test) {
    … /* 애니메이션 속성을 접두사 없이 사용할 수 있을 때 CSS 적용 */
    @keyframes { /* 다른 @-규칙을 중첩 가능 */
      …
    }
}
</pre>

<h3 id="주어진_CSS_속성_및_접두사_버전의_지원_여부_판별">주어진 CSS 속성 및 접두사 버전의 지원 여부 판별</h3>

<pre class="brush:css;">@supports ( (perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or
            (-ms-perspective: 10px) or (-o-perspective: 10px) ) {
    … /* 접두사가 붙더라도 3D 변형을 지원하면 CSS 적용 */
}
</pre>

<h3 id="특정_CSS_속성의_미지원_여부_판별">특정 CSS 속성의 미지원 여부 판별</h3>

<pre class="brush:css;">@supports not ((text-align-last: justify) or (-moz-text-align-last: justify) ){
    … /* text-align-last: justify를 대체할 CSS */
}</pre>

<h3 id="사용자_정의_속성_지원_여부_판별">사용자 정의 속성 지원 여부 판별</h3>

<pre class="brush: css">@supports (--foo: green) {
  body {
    color: var(--varName);
  }
}</pre>

<h3 id="선택자_지원_여부_판별_(예_CSSxRef(is_is()))">선택자 지원 여부 판별 (예: {{CSSxRef(":is", ":is()")}})</h3>

<p>{{SeeCompatTable}}</p>

<pre class="brush: css">/* :is()를 지원하지 않는 브라우저에서는 무시함 */
:is(ul, ol) &gt; li {
  … /* :is() 선택자를 지원할 때 적용할 CSS */
}

@supports not selector(:is(a, b)) {
  /* :is()를 지원하지 않을 때 대체할 CSS */
  ul &gt; li,
  ol &gt; li {
    … /* :is()를 지원하지 않을 때 적용할 CSS */
  }
}

@supports selector(:nth-child(1n of a, b)) {
  /* @supports로 먼저 묶지 않으면 :nth-child()의 of 구문을
     지원하지 않는 브라우저에서 스타일을 잘못 적용할 수 있음 */
  :is(:nth-child(1n of ul, ol) a,
  details &gt; summary) {
    … /* :is() 선택자와 :nth-child()의 of 구문을 지원할 때 적용할 CSS */
  }
}
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("css.at-rules.supports")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>CSSOM 클래스 {{ domxref("CSSSupportsRule") }}과, JavaScript를 통해 동일한 판별을 수행할 수 있는 {{ domxref("CSS.supports") }} 메서드</li>
</ul>
