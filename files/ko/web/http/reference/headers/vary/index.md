---
title: Vary
slug: Web/HTTP/Reference/Headers/Vary
original_slug: Web/HTTP/Headers/Vary
l10n:
  sourceCommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

**`Vary`** HTTP 응답 헤더는 요청 메시지의 메서드 및 URL을 제외하고 응답 내용에 영향을 준 부분을 설명합니다.
대부분 이 헤더는 [콘텐츠 협상](/ko/docs/Web/HTTP/Guides/Content_negotiation)이 사용 중일 때
캐시 키를 생성하는 데 사용됩니다.

{{HTTPStatus("304")}} `Not Modified` 응답과 "기본" 응답을 포함하여 지정된 URL에 대한 모든 응답에
동일한 `Vary` 헤더 값을 사용해야 합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Response header", "응답 헤더")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>아니오</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Vary: *
Vary: <header-name>, <header-name>, ...
```

## 지시어

- \*
  - : 요청 헤더 이외의 요소가 이 응답 생성에 영향을 미쳤음을 나타냅니다. 응답이 캐시할 수 없음을 의미합니다.
- \<header-name>
  - : 응답 생성에 영향을 줄 수 있는 요청 헤더 이름을 쉼표로 구분한 목록입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 호환성 노트

- [Vary with care – Vary header problems in IE6-9](https://docs.microsoft.com/archive/blogs/ieinternals/vary-with-care)

## 같이 보기

- [Understanding The Vary Header - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-using-vary-header)
- [컨텐츠 협상](/ko/docs/Web/HTTP/Guides/Content_negotiation)
