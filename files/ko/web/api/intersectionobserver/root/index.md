---
title: IntersectionObserver.root
slug: Web/API/IntersectionObserver/root
tags:
  - API
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - Property
  - Reference
translation_of: Web/API/IntersectionObserver/root
---
{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}} 인터페이스의 **`root`** 읽기 전용 속성은 {{glossary("bounding box", "바운딩 박스")}}를 주시 대상의 {{glossary("viewport", "뷰포트")}}로 취급하는 {{domxref("Element")}} 또는 {{domxref("Document")}}를 나타냅니다.

`root`가 `null`이면 문서의 실제 뷰포트 바운딩 박스를 사용합니다.

## 값

대상 요소가 얼마나 보이는지 판별할 때, 그 뷰포트 경계로서 바운딩 박스를 가져오는 {{domxref("Element")}} 또는 {{domxref("Document")}} 객체입니다.

이 뷰포트 경계에 {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} 생성자로 제공한 여백 설정을 적용한 직사각형 영역과, 대상 요소의 경계에서 그 위에 겹치는 다른 요소의 경계를 뺐을 때의 직사각형 영역을 대상 요소에서 볼 수 있는 영역으로 취급합니다.

`root`가 `null`이면 현재 문서를 루트로, 그 뷰포트(문서에서 지금 보이는 영역)를 루트 경계로 사용합니다.

## 예제

CSS {{cssxref("border")}} 속성을 사용해서 교차 감지기의 루트 요소에 2픽셀 초록색 테두리를 추가하는 예제입니다.

```js
observer.root.style.border = "2px solid #44aa44";
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Intersection Observer API로 요소가 보여진 시간 측정하기](/ko/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
