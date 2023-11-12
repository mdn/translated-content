---
title: "@-규칙"
slug: Web/CSS/At-rule
---

{{cssref}}

**@-규칙**은 식별자(identifier)가 뒤따르는 at 기호('`@`' (`U+0040 COMMERCIAL AT`))로 시작하는 [CSS 문](/ko/docs/Web/CSS/Syntax#CSS_statements)이며 다음 세미콜론('`;`' (`U+003B SEMICOLON`)) 또는 다음 [CSS 블록](/ko/docs/Web/CSS/Syntax#CSS_declarations_blocks) 중 먼저 오는 쪽까지 모든 것을 포함합니다.

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

다음과 같이 식별자가 지정된 각각 다른 구문인 여러 at-규칙이 있습니다:

- {{cssxref("@charset")}} — 스타일 시트에 의해 사용되는 문자 집합을 정의함.
- {{cssxref("@import")}} — CSS 엔진에게 외부 스타일 시트를 포함하도록 알림.
- {{cssxref("@namespace")}} — CSS 엔진에게 모든 콘텐츠가 XML 네임스페이스로 시작하(prefix가 붙)는 것이 고려되어야 함을 알림.
- **_중첩 @-규칙_** — 중첩 문의 부분 집합으로, 조건부 그룹 규칙 속뿐만 아니라 스타일 시트의 문으로 사용될 수 있습니다:

  - {{cssxref("@media")}} — 장치가 미디어 질의(_media query_)를 사용하여 정의된 조건의 기준을 만족하면 해당 콘텐츠를 적용하는 조건부 그룹 규칙.
  - {{cssxref("@supports")}} — 브라우저가 주어진 조건의 기준을 만족하면 해당 콘텐츠를 적용하는 조건부 그룹 규칙.
  - {{cssxref("@document")}} {{experimental_inline}} — 스타일 시트가 적용되는 문서가 주어진 조건의 기준을 만족하면 해당 콘텐츠를 적용하는 조건부 그룹 규칙. _(CSS Spec 레벨 4로 연기됨)_
  - {{cssxref("@page")}} — 문서를 출력할 때 적용되는 레이아웃 변화의 양상(aspect)을 설명.
  - {{cssxref("@font-face")}} — 다운로드되는 외부 글꼴의 양상을 설명.
  - {{cssxref("@keyframes")}} — CSS 애니메이션 sequence 내 중간 단계의 양상을 설명.
  - {{cssxref("@counter-style")}} — 미리 정의된 스타일 집합의 일부가 아닌 특정 카운터 스타일을 정의. _(Candidate Recommendation 단계이지만, 작성 중인 현재 Gecko에서만 구현됨)_
  - {{cssxref("@font-feature-values")}} (`@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` 및 `@character-variant`와 함께)
    — OpenType에서 다르게 활성화된 기능에 대해 {{cssxref("font-variant-alternates")}}에서 일반 이름을 정의. _(Candidate Recommendation 단계이지만, 작성 중인 현재 Gekko에서만 구현됨)_

## 조건부 그룹 규칙

속성값과 마찬가지로, 각각의 @-규칙은 다른 구문이 있습니다. 그럼에도 불구하고, 그 중 몇몇은 조건부 그룹 규칙(**conditional group rules**)으로 불리는 특별한 범주로 분류될 수 있습니다. 이들 문은 공통 구문을 공유하고 그 각각은 _중첩 문_(_규칙 집합(ruleset)_ 또는 _중첩 @-규칙_ 중 하나)을 포함할 수 있습니다. 게다가, 그들은 모두 일반 semantic 의미를 전달합니다. 그들은 모두 어떤 유형의 조건을 링크합니다, 언제라도 **참** 또는 **거짓** 중 하나로 평가하는. 조건을 **참**으로 평가하면, 그룹 내 모든 문이 적용됩니다.

조건부 그룹 규칙은 [CSS 조건부 규칙 모듈 레벨 3](http://dev.w3.org/csswg/css3-conditional/)에서 정의되고 다음과 같습니다:

- {{cssxref("@media")}},
- {{cssxref("@supports")}},
- {{cssxref("@document")}}. _(CSS Spec 레벨 4로 연기됨)_

각 조건부 그룹은 또한 중첩 문을 포함할 수 있기에, 불특정한 양의 중첩이 있을 수 있습니다.

## 명세

{{Specifications}}
