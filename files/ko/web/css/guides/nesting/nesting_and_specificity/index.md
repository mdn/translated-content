---
title: CSS nesting and specificity
slug: Web/CSS/Guides/Nesting/Nesting_and_specificity
original_slug: Web/CSS/CSS_nesting/Nesting_and_specificity
l10n:
  sourceCommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

`&` 중첩 선택자의 {{cssxref('specificity')}} 는 연관되어 있는 선택자 목록 중 가장 큰 명시도를 가진 것을 사용하여 계산됩니다. 이는 {{cssxref(':is',':is()')}} 함수를 사용할 때 명시도가 계산되는 방식과 동일합니다.

```html
<b class="foo">
  <c>Blue text</c>
</b>
```

## `&` 중첩 문법

```css-nolint
#a, b {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

## `:is()` 문법

```css
:is(#a, b) {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

이 예제에서 id 선택자 (`#a`) 는 [`1-0-0`](/ko/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) 의 명시도를 보유하고 있고, 타입 선택자 (`b`) 는 `0-0-1` 의 명시도를 보유하고 있습니다. `#a` id 선택자가 전혀 사용되지 않았더라도 [`&` 중첩 선택자](/ko/docs/Web/CSS/Nesting_selector) 와 `:is()` 가상 클래스는 모두 `1-0-0` 의 명시도를 보유합니다.

`.foo` 클래스 선택자는 `0-1-0` 의 명시도를 보유하고 있습니다. 이는 `& c` 의 총 명시도를 `1-0-1` 로 만들고 `.foo c` 의 명시도를 `0-1-1` 로 만들며, 따라서 `color: blue;` 가 채택됩니다.

## 같이 보기

- [CSS 중첩](/ko/docs/Web/CSS/CSS_nesting) 모듈
- [`&` 중첩 선택자](/ko/docs/Web/CSS/Nesting_selector)
- [CSS 중첩 사용하기](/ko/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [중첩 @-규칙](/ko/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
