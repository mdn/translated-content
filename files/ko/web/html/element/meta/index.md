---
title: "<meta>: 문서 레벨 메타데이터 요소"
slug: Web/HTML/Element/meta
---

{{HTMLSidebar}}

**HTML `<meta>` 요소**는 {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}과 같은 다른 메타관련 요소로 나타낼 수 없는 {{glossary("Metadata", "메타데이터")}}를 나타냅니다.

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a
          href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        메타데이터 콘텐츠.
        <code
          ><a href="/ko/docs/Web/HTML/Global_attributes/itemprop"
            >itemprop</a
          ></code
        >이 존재하면
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >
        및
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th>가능한 콘텐츠</th>
      <td>
        없음. {{Glossary("empty element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th>태그 생략</th>
      <td>
        빈 요소이므로 여는 태그는 존재해야 하고 닫는 태그는 존재해선 안됩니다.
      </td>
    </tr>
    <tr>
      <th>가능한 부모 요소</th>
      <td>
        <code>&#x3C;meta charset></code>, <code>&#x3C;meta http-equiv></code>인
        경우 {{htmlelement("head")}} 요소.
        <a href="/ko/docs/Web/HTML/Element/meta#http-equiv"><code>http-equiv</code></a>가 인코딩 선언이
        아닌 경우 <code>&#x3C;head></code> 내의
        {{htmlelement("noscript")}} 요소도 가능합니다.
      </td>
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
      <th>DOM 인터페이스</th>
      <td>{{domxref("HTMLMetaElement")}}</td>
    </tr>
  </tbody>
</table>

`meta` 요소가 제공하는 메타데이터는 다음 네 유형 중 하나입니다.

- [`name`](/ko/docs/Web/HTML/Element/meta#name) 특성을 지정하면 전체 페이지에 적용되는 "문서 레벨 메타데이터"를 제공합니다.
- [`http-equiv`](/ko/docs/Web/HTML/Element/meta#http-equiv) 특성을 지정하면 유사한 이름의 HTTP 헤더가 제공하는 정보와 동일한 "프래그마 지시문"이 됩니다.
- [`charset`](/ko/docs/Web/HTML/Element/meta#charset) 특성을 지정하면 문서 인코딩에 사용한 문자 인코딩을 나타내는 "문자 집합 선언"이 됩니다.
- [`itemprop`](/ko/docs/Web/HTML/Global_attributes#itemprop) 특성을 지정하면 "사용자 정의 메타데이터"를 제공합니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

> **참고:** [`name`](/ko/docs/Web/HTML/Element/meta#name) 특성은 `<meta>` 요소에 대해 특정한 의미를 가집니다. 하나의 `<meta>` 요소에서, [`itemprop`](/ko/docs/Web/HTML/Element/meta#itemprop) 특성을 [`name`](/ko/docs/Web/HTML/Element/meta#name), [`http-equiv`](/ko/docs/Web/HTML/Element/meta#http-equiv) 또는 [`charset`](/ko/docs/Web/HTML/Element/meta#charset) 특성과 함께 설정할 수 없습니다.

- {{htmlattrdef("charset")}}
  - : 페이지의 문자 인코딩을 선언합니다. 이 특성이 존재할 경우, 그 값은 반드시 문자열 "`utf-8`"의 대소문자 구분 없는 {{glossary("ASCII")}} 표현이어야 합니다.
- {{htmlattrdef("content")}}
  - : [`http-equiv`](/ko/docs/Web/HTML/Element/meta#http-equiv) 또는 [`name`](/ko/docs/Web/HTML/Element/meta#name) 특성의 값을 담습니다.
- {{htmlattrdef("http-equiv")}}

  - : 프래그마 지시문을 정의합니다. 특성의 이름(`http-equiv(alent)`)에서 알 수 있듯이, 가능한 값은 특정 HTTP 헤더입니다.

    - `content-security-policy`

      현재 페이지의 [콘텐츠 정책](/ko/docs/Web/HTTP/Headers/Content-Security-Policy)을 정의할 수 있습니다. 대부분의 콘텐츠 정책은 허용하는 서버 출처와 스크립트 엔드포인트를 지정해 사이트 간 스크립트 공격 방어에 도움을 줍니다.

    - `content-type`

      지정할 경우, `content` 특성의 값은 반드시 "`text/html; charset=utf-8`"이어야 합니다. **참고:** `text/html` [MIME 유형](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)으로 제공하는 문서에서만 사용할 수 있으며, XML MIME 유형의 문서에서는 사용할 수 없습니다.

    - `default-style`

      기본 [CSS 스타일 시트](/ko/docs/Web/CSS) 세트의 이름을 지정합니다.

    - `x-ua-compatible`

      지정할 경우, `content` 특성의 값은 반드시 "`IE=edge`"여야 합니다. 사용자 에이전트는 이 프래그마를 무시해야 합니다.

    - `refresh` 다음을 지정합니다.

      - [`content`](/ko/docs/Web/HTML/Element/meta#content) 특성에 양의 정수 값을 설정한 경우, 페이지를 다시 불러오기 전까지의 초 단위 대기시간.
      - [`content`](/ko/docs/Web/HTML/Element/meta#content) 특성이 양의 정수 값을 가지고 그 뒤를 문자열 `;url=`과 유효한 URL이 뒤따른다면, 해당 URL로 이동하기 전까지의 초 단위 대기시간.

      > > **경고:**
      >
      > `refresh` 값을 지정한 페이지의 경우 새로고침 사이 간격이 너무 짧을 우려가 있습니다. 스크린 리더 등의 보조 기술로 탐색하는 사용자는 자동 새로고침 이전에 페이지의 내용을 읽고 이해하지 못할 수 있습니다. 또한 저시력 사용자에게 있어, 갑작스럽고 사전 안내도 없는 콘텐츠 업데이트는 어지러울 수 있습니다.
      >
      > - [MDN Understanding WCAG, Guideline 2.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_—_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
      > - [MDN Understanding WCAG, Guideline 3.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.2_—_Predictable_Make_Web_pages_appear_and_operate_in_predictable_ways)
      > - [Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
      > - [Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
      > - [Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- {{htmlattrdef("name")}}

  - : `name`과 `content` 특성을 함께 사용하면 문서의 메타데이터를 이름-값 쌍으로 제공할 수 있습니다. `name`은 이름, `content`는 값을 담당합니다.

    [표준 메타데이터 이름](/ko/docs/Web/HTML/Element/meta/name) 문서에서 HTML 명세에 포함된 표준 메타데이터 목록을 살펴보세요.

## 예제

```html
<meta charset="utf-8" />

<!-- 3초 후 리다이렉트 -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
