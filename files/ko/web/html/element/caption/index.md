---
title: "<caption>: 표 설명 요소"
slug: Web/HTML/Element/caption
---

{{HTMLSidebar}}

**HTML `<caption>` 요소**는 표의 설명 또는 제목을 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/caption.html", "tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        바로 뒤에 스페이스나 주석이 오지 않으면 닫는 태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>{{htmlelement("table")}} 요소. 첫 번째 자식이어야 합니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLTableCaptionElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have one of the following values:

    - `left`
      - : The caption is displayed to the left of the table.
    - `top`
      - : The caption is displayed above the table.
    - `right`
      - : The caption is displayed to the right of the table.
    - `bottom`
      - : The caption is displayed below the table.

    > **Warning:** Do not use this attribute, as it has been deprecated. The {{HTMLElement("caption")}} element should be styled using the [CSS](/ko/docs/Web/CSS) properties {{cssxref("caption-side")}} and {{cssxref("text-align")}}.

## 사용 일람

`<caption>` 요소는 부모 {{htmlelement("table")}} 요소의 첫 번째 자식이어야 합니다.

`<caption>` 요소를 가진 `<table>` 요소가 만약 {{HTMLElement("figure")}} 요소의 유일한 자식인 경우, {{htmlelement("figcaption")}}을 대신 사용하세요.

## 예제

다음의 간단한 예제는 설명을 포함한 표를 보입니다.

```html
<table>
  <caption>
    Example Caption
  </caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>user1@sample.com</td>
  </tr>
  <tr>
    <td>user2</td>
    <td>user2@sample.com</td>
  </tr>
</table>
```

```css hidden
caption {
  caption-side: top;
  align: right;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  border: 1px solid black;
}
```

{{EmbedLiveSample('예제', 650, 100)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
