---
title: HTMLElement.offsetParent
slug: Web/API/HTMLElement/offsetParent
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetParent`** 읽기전용 프라퍼티는 가장 가까운 (포함 계층에서 가장 가까운) 위치가 정해진 포함하는 엘리먼트 객체에 대한 참조를 반환한다. `offsetParent`는 엘리먼트의 위치가 정해지지 않으면 가장 가까운 테이블 또는 테이블 셀, 루트 엘리먼트 (표준 준수 모드에서는 `html`; quirks 렌더링 모드에서는 `body`) 를 반환한다.
엘리먼트의 `style.display`가 "none"으로 설정되면 null을 반환한다. `offsetParent`는 {{domxref("HTMLElement.offsetTop","offsetTop")}}과 {{domxref("HTMLElement.offsetLeft","offsetLeft")}}가 그것의 패딩 모서리에 상대적이기 때문에 유용하다.

## 문법

```js
parentObj = element.offsetParent;
```

- \_parentObj는 현재 엘리먼트가 그 안에서 offset된 엘리먼트의 객체 참조이다. \_is an object reference to the element in which the current element is offset.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
