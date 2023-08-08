---
title: "<param>: 객체 매개변수 요소"
slug: Web/HTML/Element/param
---

{{HTMLSidebar}}

**HTML `<param>` 요소**는 {{HTMLElement("object")}} 요소의 매개변수를 정의합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>없음.</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        없음. {{Glossary("empty element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{HTMLElement("object")}}. 모든
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >
        이전에 위치해야 함.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLParamElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("name")}}
  - : 매개변수의 이름.
- {{ htmlattrdef("value") }}
  - : 매개변수의 값.

### Deprecated attributes

- {{htmlattrdef("type")}} {{deprecated_inline}}
  - : Only used if the `valuetype` is set to `ref`. Specifies the MIME type of values found at the URI specified by value.
- {{htmlattrdef("valuetype")}} {{deprecated_inline}}

  - : Specifies the type of the `value` attribute. Possible values are:

    - `data`: Default value. The value is passed to the object's implementation as a string.
    - `ref`: The value is a URI to a resource where run-time values are stored.
    - `object`: An ID of another {{HTMLElement("object")}} in the same document.

## 예제

{{HTMLElement("object")}} 페이지의 예제를 확인해주세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("object")}}
