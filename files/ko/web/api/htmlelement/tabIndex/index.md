---
title: "HTMLElement: tabIndex 속성"
slug: Web/API/HTMLElement/tabIndex
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`tabIndex`** 는 현재 요소의 탭 순서를 나타내는 {{DOMxRef("HTMLElement")}} 인터페이스입니다.

탭 순서는 다음과 같습니다.

1. `tabIndex`가 양수인 요소인 경우.
   동일한 `tabIndex`값을 가진 요소들은 나타나는 순서대로 탐색되어야 합니다.
   탐색은 가장 낮은 `tabIndex`에서 가장 높은 `tabIndex`로 진행됩니다.
2. `tabIndex` 속성을 지원하지 않거나 지원하면서 `tabIndex`를 `0`으로 지정한 요소들은 나타나는 순서대로 탐색됩니다.

비활성화된 요소들은 탭 순서에 참여하지 않습니다.

값은 순차적일 필요가 없으며, 특정 값으로 시작할 필요도 없습니다. 값은 음수일 수도 있지만, 각 브라우저는 매우 큰 값을 잘라냅니다.

## 값

정수

## 예제

```js
const b1 = document.getElementById("button1");

b1.tabIndex = 1;
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Accessibility of keyboard-navigable JavaScript widgets](/ko/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- HTML 전역 특성 [`tabindex`](/ko/docs/Web/HTML/Global_attributes/tabindex)
