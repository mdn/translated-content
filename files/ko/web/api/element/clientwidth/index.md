---
title: Element.clientWidth
slug: Web/API/Element/clientWidth
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.Element.clientWidth
---
{{APIRef("DOM")}}

**`Element.clientWidth`** 속성은 인라인 요소나 CSS 상에 존재하지 않는 요소에 대해서는 0을 나타내고, 그렇지 않다면 엘리먼트의 내부 너비를 픽셀로 나타냅니다. 내부 너비는 안쪽 여백(패딩)을 포함하지만, 테두리, 바깥 여백(마진) 그리고 수직 스크롤바의 너비는 포함하지 않습니다.

`clientWidth`를 루트 요소(`<html>` 요소 또는 [호환 모드](/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) 상에서의 `<body>` 요소)에서 사용하면 스크롤바를 제외한 뷰포트의 너비를 반환합니다. [이 방식은 `clientWidth`의 특별한 사용법입니다.](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientwidth)

> **참고:** 이 속성은 integer로 반올림됩니다. 소수점이 포함된 값이 필요하다면 {{ domxref("element.getBoundingClientRect()") }}를 사용하시기 바랍니다.

## 값

number.

## 구문

```js
var w = element.clientWidth;
```

`w` 는 요소의 너비를 나타내는 픽셀 단위의 integer입니다.

## 예제

![](dimensions-client.png)

## 명세서

{{Specifications}}

### 참고

`clientWidth`는 MS IE DHTML 요소 모델에서 처음 도입되었습니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Determining
  the dimensions of elements](/ko/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
