---
title: "<template>: 콘텐츠 템플릿 요소"
slug: Web/HTML/Element/template
---

{{HTMLSidebar}}

**HTML `<template>` 요소**는 페이지를 불러온 순간 즉시 그려지지는 않지만, 이후 JavaScript를 사용해 인스턴스를 생성할 수 있는 {{glossary("HTML")}} 코드를 담을 방법을 제공합니다.

템플릿은 콘텐츠 조각을 나중에 사용하기 위해 담아놓는 컨테이너로 생각하세요. 페이지를 불러오는 동안 구문 분석기가 `<template>` 요소의 콘텐츠도 읽기는 하지만, 이는 유효성을 검증하기 위함이며 렌더링 하기 위함은 아닙니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#메타데이터_콘텐츠"
          >메타데이터 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#스크립트_지원_요소"
          >스크립트 지원 요소</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>제한 없음.</td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        메타데이터 콘텐츠, 구문 콘텐츠, 또는 스크립트 지원 요소를 허용하는 모든
        요소. 또한, <a href="/ko/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> 특성이 없는
        {{htmlelement("colgroup")}} 요소도 가능.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLTemplateElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

다만, {{domxref("HTMLTemplateElement")}}는 읽기 전용 {{domxref("HTMLTemplateElement.content", "content")}} 속성을 가집니다. `content`는 템플릿이 담고 있는 DOM 하위 트리를 나타내는 {{domxref("DocumentFragment")}}입니다.

## 예제

우선 예제의 HTML부터 보겠습니다.

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- 존재하는 데이터는 선택적으로 여기에 포함됩니다 -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

먼저, 나중에 JavaScript 코드를 사용해 컨텐츠를 삽입할 테이블이 있습니다. 그 다음 테이블의 열을 표현하는 HTML 조각의 구조를 설명하는 템플릿이 옵니다.

이제 테이블이 생성되었고 템플릿이 정의되었으므로, JavaScript 를 사용해 템플릿을 사용해 구성된 열을 기반으로 각 열을 테이블로 삽입합니다.

```js
// 템플릿 엘리먼트의 컨텐츠 존재 유무를 통해
// 브라우저가 HTML 템플릿 엘리먼트를 지원하는지 확인합니다
if ("content" in document.createElement("template")) {
  // 기존 HTML tbody 와 템플릿 열로 테이블을 인스턴스화합니다
  var t = document.querySelector("#productrow");

  // 새로운 열을 복제하고 테이블에 삽입합니다
  var tb = document.querySelector("tbody");
  var clone = document.importNode(t.content, true);
  td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tb.appendChild(clone);

  // 새로운 열을 복제하고 테이블에 삽입합니다
  var clone2 = document.importNode(t.content, true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans 2";

  tb.appendChild(clone2);
} else {
  // HTML 템플릿 엘리먼트를 지원하지 않으므로
  // 테이블에 열을 추가하는 다른 방법을 찾습니다.
}
```

결과는 JavaScript 를 통해 추가된 두 개의 새로운 열을 포함하는 기존 HTML 테이블입니다.

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("예제", 500, 120)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [템플릿과 슬롯 사용하기](/ko/docs/Web/Web_Components/Using_templates_and_slots)
