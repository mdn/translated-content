---
title: <slot>
slug: Web/HTML/Element/slot
---

{{HTMLSidebar}}

**HTML `<slot>` 요소**는 웹 컴포넌트 사용자가 자신만의 마크업으로 채워 별도의 DOM 트리를 생성하고, 컴포넌트와 함께 표현할 수 있는 웹 컴포넌트 내부의 플레이스홀더입니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#투명_콘텐츠_모델"
          >투명</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">이벤트</th>
      <td>{{event("slotchange")}}</td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLSlotElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("name")}}
  - : 슬롯의 이름.

## 예제

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0;
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <code class="name"
        >&lt;<slot name="element-name">NEED NAME</slot>&gt;</code
      >
      <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

> **참고:** 온전한 예제는 [element-details](https://github.com/mdn/web-components-examples/tree/master/element-details)([라이브로 보기](https://mdn.github.io/web-components-examples/element-details/))에서 볼 수 있습니다. 설명은 [템플릿과 슬롯 사용하기](/ko/docs/Web/Web_Components/Using_templates_and_slots)에서 확인할 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
