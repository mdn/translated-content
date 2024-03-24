---
title: <wbr>
slug: Web/HTML/Element/wbr
---

{{HTMLSidebar}}

**HTML `<wbr>` 요소**는 현재 요소의 줄 바꿈 규칙을 무시하고 브라우저가 줄을 바꿀 수 있는 위치를 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/wbr.html", "tabbed-shorter")}}

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
        없음. {{glossary("empty element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >대응하는 역할 없음</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 참고

UTF-8 인코딩을 사용한 페이지의 `<wbr>` 은 `U+200B ZERO-WIDTH SPACE` 코드 포인트처럼 동작합니다. 특히, {{glossary("Unicode")}} bidi BN 코드 포인트처럼 행동하므로 {{glossary("bidi")}} 정렬의 영향을 받지 않습니다. 즉 `<div dir=rtl>123,<wbr>456</div>`의 줄이 바뀌지 않은 경우, `456,123`이 아니라 `123,456`으로 나타납니다.

같은 이유로 인해 `< wbr >` 요소로 인한 줄바꿈으로는 붙임표가 나타나지 않습니다. 줄의 끝에 하이픈이 필요한 경우 소프트 하이픈 문자 개체(soft hyphen character entity, `& shy;`)를 사용하세요.

`<wbr>`은 Internet Explorer 5.5에서 처음 구현됐고, HTML5가 정식으로 정의했습니다.

## 예제

URL의 줄을 바꿀 때, 문장 부호 다음에 잘린 경우 독자가 URL이 끝난 것으로 혼동할 수 있으므로, *[The Yahoo Style Guide](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/)*는 [URL의 줄바꿈을 문장 부호 이전에 하라](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses)고 추천합니다.

```html
<p>
  http://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("overflow-wrap")}}
- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
- {{htmlelement("br")}} 요소
