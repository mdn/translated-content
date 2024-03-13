---
title: element.scrollIntoView
slug: Web/API/Element/scrollIntoView
---

{{APIRef("DOM")}}

{{domxref("Element")}} 인터페이스의 **`scrollIntoView()`** 메소드는 `scrollIntoView()`가 호출 된 요소가 사용자에게 표시되도록 요소의 상위 컨테이너를 스크롤합니다.

## 문법

```js
element.scrollIntoView();
element.scrollIntoView(alignToTop); // Boolean parameter
element.scrollIntoView(scrollIntoViewOptions); // Object parameter
```

### 매개변수

- `alignToTop` {{optional_inline}}

  - : 불리언 값입니다.

    - `true`일 경우, 요소의 상단은 스크롤 가능한 조상 요소의 보이는 영역 상단에 정렬됩니다.
      `scrollIntoViewOptions: {block: "start", inline: "nearest"}`와 일치합니다.
      이 값이 기본 값입니다.
    - `false`일 경우, 요소의 하단은 스크롤 가능한 조상 요소의 보이는 영역 하단에 정렬됩니다.
      `scrollIntoViewOptions: {block: "end", inline: "nearest"}`와 일치합니다.

- `scrollIntoViewOptions` {{optional_inline}}
  {{experimental_inline}}

  - : 다음 속성을 포함하는 객체입니다.

    - `behavior` {{optional_inline}}
      - : 스크롤을 즉시 적용할지 아니면 부드러운 애니메이션을 적용할지 결정합니다. 이 옵션은 다음 값 중 하나의 문자열을 취해야 합니다.
        - `smooth`: 스크롤이 부드럽게 움직입니다.
        - `instant`: 스크롤이 단번에 즉시 적용됩니다.
        - `auto`: 스크롤 동작은 {{cssxref("scroll-behavior")}}의 계산된 값에 의해 결정됩니다.
    - `block` {{optional_inline}}
      - : 수직 정렬을 정의합니다.
        `start`, `center`, `end`, 또는
        `nearest` 중 하나입니다. 기본 값은 `start`입니다.
    - `inline` {{optional_inline}}
      - : 수평 정렬을 정의합니다.
        `start`, `center`, `end`, 또는
        `nearest` 중 하나입니다. 기본 값은 `nearest`입니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

## 참고

다른 요소의 레이아웃에 따라 위쪽 또는 아래쪽으로 완전히 스크롤되지 않을 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더보기

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
