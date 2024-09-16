---
title: "HTMLElement: tabIndex 속성"
slug: Web/API/HTMLElement/tabIndex
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`tabIndex`** 는 현재 요소의 탭 순서를 나타내는 {{DOMxRef("HTMLElement")}} 인터페이스입니다.

탭 순서의 흐름

1. `tabIndex`가 정수인 요소인 경우.
   동일한 `tabIndex`값을 가진 요소는 차례대로 나타난 순서로 표시됩니다.
   이 순서는 `tabIndex` 요소의 가장 낮은 값에서 가장 높은 값으로 진행됩니다.
2. `tabIndex` 속성을 지원하지 않거나 지원하지만 `tabIndex` 값이 `0`인 경우에는 순서대로 표시됩니다.

disabled 속성을 가진 요소는 탭 순서에 들어가지 않습니다.

값이 순서대로 부여되지 않아도 되며 특정 값으로 시작되어도 됩니다. 음수인 경우라면 각 브라우저에서 매우 큰 값으로 정돈하여 나타냅니다.

## 값

정수

## 예제

```js
const b1 = document.getElementById("button1");

b1.tabIndex = 1;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Accessibility of keyboard-navigable JavaScript widgets](/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- HTML 전역 특성 [`tabindex`](/ko/docs/Web/HTML/Global_attributes/tabindex)
