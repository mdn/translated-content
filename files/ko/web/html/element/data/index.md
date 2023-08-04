---
title: <data>
slug: Web/HTML/Element/data
---

{{HTMLSidebar}}

**HTML `<data>` 요소**는 주어진 콘텐츠를 기계가 읽을 수 있는 해석본과 연결합니다. 콘텐츠가 시간 혹은 날짜 관련 정보라면 대신 {{htmlelement("time")}} 요소를 사용하세요.

{{EmbedInteractiveExample("pages/tabbed/data.html", "tabbed-shorter")}}

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
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
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
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLDataElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다

- {{htmlattrdef("value")}}
  - : 기계가 읽을 수 있는 형태의 콘텐츠 해석본.

## 예제

밑의 예제는 상품의 이름을 표시하면서, 각각의 상품 번호도 연결합니다.

```html
<p>새로운 상품들</p>
<ul>
  <li><data value="398">미니 케찹</data></li>
  <li><data value="399">점보 케찹</data></li>
  <li><data value="400">메가 점보 케찹</data></li>
</ul>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- HTML {{HTMLElement("time")}} 요소.
