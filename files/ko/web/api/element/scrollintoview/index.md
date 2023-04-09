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

- `alignToTop` {{optional_inline}}

  - : A boolean value:

    - If `true`, the top of the element will be aligned to the top of the
      visible area of the scrollable ancestor. Corresponds to
      `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. This is
      the default value.
    - If `false`, the bottom of the element will be aligned to the bottom
      of the visible area of the scrollable ancestor. Corresponds to
      `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `scrollIntoViewOptions` {{optional_inline}}
  {{experimental_inline}}

  - : An Object with the following properties:

    - `behavior` {{optional_inline}}
      - : Defines the transition animation.
        One of `auto` or `smooth`. Defaults to `auto`.
    - `block` {{optional_inline}}
      - : Defines vertical alignment.
        One of `start`, `center`, `end`, or
        `nearest`. Defaults to `start`.
    - `inline` {{optional_inline}}
      - : Defines horizontal alignment.
        One of `start`, `center`, `end`, or
        `nearest`. Defaults to `nearest`.

## 예제

```js
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
```

## Notes

다른 요소의 레이아웃에 따라 위쪽 또는 아래쪽으로 완전히 스크롤되지 않을 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더보기

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
