---
title: Element.clientHeight
slug: Web/API/Element/clientHeight
---

{{ APIRef('DOM') }}

`읽기 전용 속성인 Element.clientHeight은` 엘리먼트의 내부 높이를 픽셀로 반환합니다. 이 내부 높이라는 것은 내부 여백(padding)을 포함하지만, 수평 스크롤바의 높이, 경계선, 또는 외부 여백(margin)은 포함하지 않습니다.

`clientHeight` 는 CSS상의 높이 + CSS상의 내부 여백 - 수평 스크롤바의 높이(존재하는 경우에만)로 계산됩니다.

> **참고:** 이 속성은 integer로 반올림됩니다. 소수점이 포함된 값이 필요하다면, {{ domxref("element.getBoundingClientRect()") }}을 사용하시기 바랍니다.

## 구문

```js
var h = element.clientHeight;
```

`h는` 엘리먼트의 높이를 나타내는 픽셀 단위의 integer입니다.

## 예

![Image:Dimensions-client.png](dimensions-client.png)

## 명세서

{{Specifications}}

### 주의

`clientHeight` 는 Internet Explorer 의 객체 모델에서 소개된 속성입니다.

## 같이 보기

- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("Element.scrollHeight")}}
- [Determining the dimensions of elements](/ko/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [MSDN Determining the dimensions of elements](/ko/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
