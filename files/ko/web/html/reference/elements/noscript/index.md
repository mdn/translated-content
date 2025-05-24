---
title: <noscript>
slug: Web/HTML/Reference/Elements/noscript
original_slug: Web/HTML/Element/noscript
---

{{HTMLSidebar}}

**HTML `<noscript>` 요소**는 페이지의 스크립트 유형을 지원하지 않거나, 브라우저가 스크립트를 비활성화한 경우 보여줄 HTML 구획을 정의합니다.

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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <p>
          스크립트가 비활성 상태이며 자신이 {{HTMLElement("head")}}
          요소의 자손인 경우, 순서대로
        </p>
        <ul>
          <li>0개 이상의 {{htmlelement("link")}} 요소</li>
          <li>0개 이상의 {{htmlelement("style")}} 요소</li>
          <li>0개 이상의 {{htmlelement("meta")}} 요소</li>
        </ul>
        <p>
          스크립트가 비활성 상태이나 <code>&#x3C;head></code> 요소의 자손이 아닌
          경우 모든 투명 콘텐츠. 단, 다른 <code>&#x3C;noscript></code> 요소는
          불가능합니다.
        </p>
        <p>그 외의 경우 플로우 콘텐츠와 구문 콘텐츠.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>불가능, 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        구문 콘텐츠를 허용하는 모든 요소, 또는 {{htmlelement("head")}}.
        단, 두 경우 모두 다른 <code>&#x3C;noscript></code> 요소가 존재하는 경우
        불가능합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)만 포함합니다.

## 예제

```html
<noscript>
  <!-- anchor linking to external file -->
  <a href="http://www.mozilla.com/">External Link</a>
</noscript>
<p>Rocks!</p>
```

### 스크립트 활성화 상태에서의 결과

Rocks!

### 스크립트 비활성화 상태에서의 결과

[External Link](http://www.mozilla.com/)

Rocks!

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
