---
title: <base>
slug: Web/HTML/Element/base
---

{{HTMLSidebar}}

**HTML `<base>` 요소**는 문서 안의 모든 상대 {{glossary("URL")}}이 사용할 기준 URL을 지정합니다. 문서에는 하나의 `<base>` 요소만 존재할 수 있습니다.

문서의 기준 URL을 스크립트에서 접근해야할 땐 {{domxref('document.baseURI')}}을 사용할 수 있습니다. 문서에 `<base>` 요소가 존재하지 않을 때 `baseURI`의 기본값은 {{domxref("location.href")}}입니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>메타데이터 콘텐츠.</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        없음. {{Glossary("empty element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>닫는 태그는 존재해선 안됩니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        다른 <code>&#x3C;base></code> 요소를 포함하지 않는
        {{htmlelement("head")}} 요소.
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
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLBaseElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

> **경고:** 다음 특성 중 하나라도 지정한 경우, 상대 URL을 특성에 사용한 모든 요소보다 `<base>`가 앞에 위치해야 합니다.

- {{htmlattrdef("href")}}
  - : 문서 내 상대 URL이 사용할 기준 URL. 절대 및 상대 URL을 사용할 수 있습니다.
- {{htmlattrdef("target")}}

  - : `target` 속성을 명시하지 않은 {{htmlelement("a")}}, {{htmlelement("area")}}, 또는 {{htmlelement("form")}} 요소가 탐색을 유발했을 때, 그 결과를 보여줄 기본 {{glossary("browsing context", "브라우징 맥락")}}. **키워드**나 **저작자 정의 이름**으로 지정합니다.

  다음 키워드는 특별한 의미를 갖습니다.

  - `_self` (기본값): 결과를 현재 브라우징 맥락에 보여줍니다.
  - `_blank`: 결과를 새로 생성한, 이름 없는 브라우징 맥락에 보여줍니다.
  - `_parent`: 현재 페이지가 프레임 안에 존재하는 경우, 결과를 현재 브라우징 맥락의 부모에 보여줍니다. 부모가 없으면 `_self`와 동일합니다.
  - `_top`: 결과를 최상위 브라우징 맥락에 보여줍니다. 최상위 브라우징 맥락이란 현재 맥락의 조상 중 부모가 없는 맥락입니다. 현재 맥락이 부모를 가지지 않으면 `_self`와 동일합니다.

## 사용 일람

### 다중 `<base>` 요소

`<base>` 요소가 여러 개 존재하는 경우 첫 `href`와 첫 `target`만 사용하며 나머지는 모두 무시합니다.

### 페이지 내부 앵커

`<a href="#some-id">`처럼, 문서 프래그먼트를 가리키는 링크 주소도 `<base>`를 사용해 처리하므로, 기준 URL 뒤에 프래그먼트를 붙인 주소로 HTTP 요청을 유발합니다. 예를 들어,

1. `<base href="https://example.com">`을 가정
2. `<a href="#anchor">Anker</a>`를 가정
3. 2번의 링크는 `https://example.com/#anchor`를 가리킵니다.

### Open Graph

[Open Graph](https://ogp.me/) 태그는 `<base>`를 인식하지 않으므로 항상 온전한 형태의 절대 URL을 지정해야 합니다.

```html
<meta property="og:image" content="https://example.com/thumbnail.jpg" />
```

## 예제

```html
<base href="http://www.example.com/page.html" />
<base target="_blank" />
<base target="_target" href="http://www.example.com/page.html" />
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
