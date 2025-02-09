---
title: Accept
slug: Web/HTTP/Headers/Accept
---

{{HTTPSidebar}}

**`Accept`** 요청 HTTP 헤더는 [MIME 타입](/ko/docs/Web/HTTP/MIME_types)으로 표현되는, 클라이언트가 이해 가능한 컨텐츠 타입이 무엇인지를 알려줍니다. [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)을 이용해, 서버는 제안 중 하나를 선택하고 사용하며 {{HTTPHeader("Content-Type")}} 응답 헤더로 클라이언트에게 선택된 타입을 알려줍니다. 브라우저는 요청이 이루어진 컨텍스트에 따라 해당 헤더에 대해 적당한 값들을 설정합니다: CSS 스타일시트를 불러오게 되면, 이미지, 비디오 혹은 스크립트를 불러올 때와 다른 값이 요청에 대해 설정됩니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## 디렉티브

- `<MIME_type>/<MIME_subtype>`
  - : `text/html`와 같이 단일의 간격한 [MIME 타입](/ko/docs/Web/HTTP/MIME_types).
- `<MIME_type>/*`
  - : 서버 타입을 갖지 않는 MIME 타입. `image/*` 은 `image/png`, `image/svg`, `image/gif` 그리고 어떤 다른 이미지 타입들과도 일치하게 됩니다.
- `*/*`
  - : 모든 MIME 타입
- `;q=` (q-인자 가중치)
  - : 사용되는 모든 값들은 *weight*라고 부르는 상대적인 [품질 값](/ko/docs/Glossary/Quality_values)을 사용하여 표현되는 선호 순서로 대체됩니다.

## 예제

```
Accept: text/html

Accept: image/*

Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- HTTP [컨텐츠 협상](/ko/docs/Web/HTTP/Content_negotiation)
- 컨텐츠 현상의 결과에 대한 헤더: {{HTTPHeader("Content-Type")}}
- 다른 유사한 헤더들: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
