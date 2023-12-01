---
title: "<head>: 문서 메타데이터 (헤더) 요소"
slug: Web/HTML/Element/head
---

{{HTMLSidebar}}

**HTML `<head>` 요소**는 기계가 식별할 수 있는 문서 정보(메타데이터)를 담습니다. 정보로는 문서가 사용할 [제목](/ko/docs/Web/HTML/Element/title), [스크립트](/ko/docs/Web/HTML/Element/script), [스타일 시트](/ko/docs/Web/HTML/Element/style) 등이 있습니다.

> **참고:** `<head>`의 주 목적은 기계 처리를 위한 정보이고, 사람이 읽을 수 있는 정보가 아닙니다. 최상위 제목, 작성자 목록 등 사람에게 보여야 할 정보는 {{HTMLElement("header")}} 요소를 사용하세요.

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
        <p>
          현재 문서가 {{HTMLElement("iframe")}}
          <a href="/ko/docs/Web/HTML/Element/iframe#srcdoc"><code>srcdoc</code></a> 문서거나, 제목 정보가
          더 높은 단계의 규약에 존재하는 경우(HTML 이메일의 제목처럼) 0개 이상의
          메타에이터 콘텐츠.
        </p>
        <p>
          이외에는 하나 이상의 메타데이터 콘텐츠. 단, 정확히 한 개의
          {{htmlelement("title")}} 요소를 포함해야 합니다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        <code>&#x3C;head></code> 요소 내의 첫 번째 것이 요소라면 여는 태그를
        생략할 수 있습니다.<br /><code>&#x3C;head></code> 요소 뒤의 첫 번째
        항목이 공백문자나 주석이 아니라면 닫는 태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>{{HTMLElement("html")}} 요소의 첫 번째 자식으로 배치.</td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >대응하는 역할 없음</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 요소</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLHeadElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 예제

```html
<!doctype html>
<html>
  <head>
    <title>문서 제목</title>
  </head>
</html>
```

## 참고

HTML5 호환 브라우저는 `<head>`가 없는 경우 자동으로 생성합니다. 하지만 [오래된 구형 브라우저에서는 그렇지 않습니다.](https://www.stevesouders.com/blog/2010/05/12/autohead-my-first-browserscope-user-test/)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `<head>` 안에 배치할 수 있는 요소

  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}
