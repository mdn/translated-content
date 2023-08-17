---
title: <optgroup>
slug: Web/HTML/Element/optgroup
---

{{HTMLSidebar}}

**HTML `<optgroup>` 요소**는 {{HTMLElement("select")}} 요소의 옵션을 묶을 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/optgroup.html", "tabbed-standard")}}

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
      <td>0개 이상의 {{htmlelement("option")}} 요소.</td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        여는 태그는 필수입니다. 바로 뒤따르는 요소가 다른
        <code>&#x3C;optgroup></code>이거나, 자신이 부모의 마지막 자식이라면 닫는
        태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>{{HTMLElement("select")}} 요소.</td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLOptGroupElement")}}</td>
    </tr>
  </tbody>
</table>

> **참고:** `<optgroup>` 요소는 중첩할 수 없습니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("disabled")}}
  - : 지정한 경우 모든 하위 옵션을 선택할 수 없습니다. 브라우저에서, 비활성화 옵션은 주로 회색으로 보이며, 클릭과 포커스 등 모든 이벤트를 받지 않습니다.
- {{htmlattrdef("label")}}
  - : 옵션 그룹의 이름. 브라우저가 그룹의 이름을 표시할 때 사용할 수 있습니다. 필수로 지정해야 합니다.

## 예제

```html
<select>
  <optgroup label="Group 1">
    <option>Option 1.1</option>
  </optgroup>
  <optgroup label="Group 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <optgroup label="Group 3" disabled>
    <option>Option 3.1</option>
    <option>Option 3.2</option>
    <option>Option 3.3</option>
  </optgroup>
</select>
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
