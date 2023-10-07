---
title: <datalist>
slug: Web/HTML/Element/datalist
---

{{HTMLSidebar}}

**HTML `<datalist>` 요소**는 다른 컨트롤에서 고를 수 있는 가능한, 혹은 추천하는 선택지를 나타내는 {{htmlelement("option")}} 요소 여럿을 담습니다.

{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}

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
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 또는 0개 이상의 {{htmlelement("option")}} 요소.
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
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href="/ko/docs/Web/Accessibility/ARIA/Roles/listbox_role"
          ><code>listbox</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLDataListElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 예제

```html
<label for="myBrowser">아래 목록에서 브라우저를 선택하세요:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 폴리필

[datalist-polyfill](https://github.com/mfranzke/datalist-polyfill)을 추가해 구형 브라우저에서 `<datalist>` 지원을 추가하세요.

## 같이 보기

- {{HTMLElement("input")}} 요소와 [`list`](/ko/docs/Web/HTML/Element/input#list) 특성
- {{HTMLElement("option")}} 요소
