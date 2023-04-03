---
title: Element.clientLeft
slug: Web/API/Element/clientLeft
---
{{ APIRef("DOM") }}

엘리먼트의 왼쪽 테두리의 너비 (픽셀 단위)입니다. 엘리먼트의 텍스트 방향이 오른쪽에서 왼쪽이고 오버플로로 인해 왼쪽 수직 스크롤 막대가 렌더링되는 경우 수직 스크롤 막대의 너비가 포함됩니다. `clientLeft`는 왼쪽 여백 또는 왼쪽 패딩을 포함하지 않습니다. `clientLeft`는 읽기 전용입니다.

[`layout.scrollbar.side` 환경 설정](http://kb.mozillazine.org/Layout.scrollbar.side)이 1 또는 3으로 설정되고 텍스트 방향이 RTL로 설정된 경우 세로 스크롤 막대가 왼쪽에 배치되며 이는 clientLeft가 계산되는 방식에 영향을줍니다.

> **참고:** 이 속성은 값을 정수로 반올림합니다. 소수점 단위 값이 필요할 경우, {{ domxref("element.getBoundingClientRect()") }}을 사용하십시오.

## Syntax

```js
var left = element.clientLeft;
```

## Example

padding-top

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## Notes

`clientLeft` was first introduced in the MS IE DHTML object model.

The position of the vertical scrollbar in right–to–left text direction set on the element will depend on the [`layout.scrollbar.side` preference](http://kb.mozillazine.org/Layout.scrollbar.side)

When element has `display: inline`, then `clientLeft` returns `0` regardless of the element's border.
