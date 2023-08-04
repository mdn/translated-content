---
title: "<html>: HTML 문서 / 루트 요소"
slug: Web/HTML/Element/html
---

{{HTMLSidebar}}

**HTML `<html>` 요소**는 HTML 문서의 루트(최상단 요소)를 나타내며, "루트 요소"라고도 부릅니다. 모든 다른 요소는 `<html>` 요소의 후손이어야 합니다.

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
        하나의 {{HTMLElement("head")}} 요소와 그 뒤를 따르는 하나의
        {{HTMLElement("body")}} 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        <code>&#x3C;html></code> 요소 내부의 첫 번째 것이 주석이 아니라면 시작
        태그를 생략할 수 있습니다.<br /><code>&#x3C;html></code> 요소 바로 뒤에
        주석이 따라오지 않는다면 종료 태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>없음. <code>&#x3C;html></code>이 문서의 루트 요소입니다.</td>
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
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 역할</th>
      <td>{{domxref("HTMLHtmlElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("manifest")}} {{deprecated_inline}}
  - : 지역적으로 캐시되어야하는 리소스를 가리키는 매니페스트 리소스의 URI를 나타냅니다. 자세한 내용은 [애플리케이션 캐시 사용하기](/ko/docs/HTML/Using_the_application_cache)를 보세요.
- {{htmlattrdef("version")}} {{deprecated_inline}}
  - : 현재 문서를 제어하는 HTML 문서 타입 정의의 버전을 나타냅니다. 하지만 이미 문서 타입 선언이 버전을 나타내고 있기 떄문에 이 속성은 필요하지 않습니다.
- {{htmlattrdef("xmlns")}}
  - : 문서의 {{glossary("XML")}} {{glossary("네임스페이스")}}를 지정합니다. 기본값은 `"http://www.w3.org/1999/xhtml"`입니다. XML {{glossary("parser", "구문 분석기")}}로 분석한 문서에는 필수이고, `text/html` 문서에서는 선택사항입니다.

## 예제

```html
<!doctype html>
<html lang="ko">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

## 접근성 고려사항

`html` 요소의 [`lang`](/ko/docs/Web/HTML/Global_attributes#lang) 특성에 [유효한 IETF 언어 식별 태그](https://www.ietf.org/rfc/bcp/bcp47.txt)를 지정하면 스크린 리더가 음성 표현에 사용할 언어를 선택할 때 도움이 됩니다. 언어 식별 태그는 페이지의 주 언어를 가리켜야 합니다. 아무런 값도 지정하지 않을 시 보통 운영체제의 언어 설정을 따라가므로, 잘못된 발음을 사용할 수 있습니다.

또한 `<html>` 요소에 유효한 `lang` 선언이 존재해야 {{htmlelement("title")}}과 같은 {{htmlelement("head")}} 내부의 중요한 메타데이터를 정확한 발음으로 표현할 수 있습니다.

- [MDN Understanding WCAG, Guideline 3.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.1_%E2%80%94_Readable_Make_text_content_readable_and_understandable)
- [Understanding Success Criterion 3.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/meaning-doc-lang-id.html)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- MathML 최상위 요소 {{MathMLElement("math")}}
- SVG 최상위 요소 {{SVGElement("svg")}}
