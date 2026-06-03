---
title: data-*
slug: Web/SVG/Reference/Attribute/data-*
original_slug: Web/SVG/Attribute/data-*
l10n:
  sourceCommit: 335dda2e9a42f5e9257ee398437cd984f6cabb45
---

{{SVGRef}}

**`data-*`** SVG 특성은 사용자 정의 데이터 특성이라고 불립니다. 이 특성은 스크립팅 목적으로 사용되며, 표준 특성으로는 공유할 수 없는 정보를 SVG 마크업과 그 결과로 출력된 DOM 공유할 수 있게 합니다. 사용자 정의 데이터는 특성이 속한 요소의 {{domxref("SVGElement")}} 인터페이스를 통해 가능하며 {{domxref("SVGElement.dataset")}} 속성을 통해 사용할 수 있습니다.

`*` 는 [명명을 위한 XML 규칙들](https://www.w3.org/TR/REC-xml/#NT-Name) 에서 허용하는 어떠한 문자열로도 대체가 가능하지만, 아래와 같은 제한 사항들이 있습니다.

- `xml` 로 시작할 수 없습니다.
- 세미콜론 (`;`, `U+003A`) 이 허용되지 않습니다.
- 대문자 `A` 부터 `Z` 는 사용하지 않습니다.

> [!NOTE]
> {{domxref("SVGElement.dataset")}} 속성은 `SVGElement.dataset.testValue` 를 통해 `data-test-value` 특성을 제공하는 {{domxref("DOMStringMap")}} 속성입니다. 하이픈 문자 (`-`, `U+002D`) 는 제거되고 다음 문자는 대문자로 변환되며, {{Glossary("camel_case", "카멜 케이스")}} 형식이 됩니다.

이 특성은 어느 SVG 요소에도 적용 가능합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("SVGElement")}}
- {{domxref("SVGElement.dataset")}} 속성은 스크립트에서 이러한 특성들로 접근할 때 사용됩니다.
- [데이터 특성 사용하기](/ko/docs/Web/HTML/How_to/Use_data_attributes)
