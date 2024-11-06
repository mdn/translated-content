---
title: ":not()"
slug: Web/CSS/:not
---

{{ CSSRef() }}

부정(**negation**) [CSS 가상 클래스](/ko/docs/Web/CSS/Pseudo-classes) `:not(X)`는 인수로 간단한 선택자(selector) *X*를 취하는 기능 표기법입니다. 인수로 표시되지 않은 요소와 일치합니다. *X*는 다른 부정 선택자를 포함해서는 안 됩니다.

> **참고:** **주의:**- 쓸모없는 선택자는 이 가상 클래스를 사용하여 작성될 수 있습니다. 예를 들어, `:not(*)`은 임의 요소가 아닌 모든 요소와 일치합니다. 그래서 규칙이 결코 적용되지 않습니다.
>
> - 다른 규칙을 다시 작성할 수 있습니다. 가령 `foo:not(bar)`는 간단한 `foo`와 같은 요소와 일치합니다. 그럼에도 불구하고 첫 요소의 [명시도](/ko/docs/Web/CSS/Specificity)가 더 높습니다.
> - `:not(foo){}`는 **{{HTMLElement("html")}} 및 {{HTMLElement("body")}} 포함** 뭐든지 `foo`가 아닌 것과 일치합니다.
> - 이 선택자는 한 요소에만 적용됩니다. 따라서 모든 조상(ancestor)을 제외하는 데 사용할 수 없습니다. 예를 들어, `body :not(table) a`는 {{HTMLElement("tr")}} 요소가 선택자의 `:not()` 부분과 일치하기 때문에, 여전히 표 내부 링크에 적용됩니다.

## 구문

```
:not(selector) { style properties }
```

## 예제

```css
p:not(.classy) {
  color: red;
}
body :not(p) {
  color: green;
}
```

위의 CSS 및 아래 HTML이 주어진다면...

```html
<p>Some text.</p>
<p class="classy">Some other text.</p>
<span>One more text<span></span></span>
```

이 같은 출력을 얻습니다:

{{ EmbedLiveSample('Examples', '', '', '', 'Web/CSS/:not') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
