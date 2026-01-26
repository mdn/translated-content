---
title: If-None-Match
slug: Web/HTTP/Reference/Headers/If-None-Match
original_slug: Web/HTTP/Headers/If-None-Match
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

**`If-None-Match`** HTTP 요청 헤더는 요청을 조건부로 만듭니다. {{HTTPMethod("GET")}} 및 {{HTTPMethod("HEAD")}} 메서드의 경우, 서버는 요청된 리소스에 주어진 값과 일치하는 {{HTTPHeader("ETag")}}가 없는 경우에만 {{HTTPStatus("200")}} 상태와 함께 요청된 리소스를 반환합니다. 다른 메서드의 경우, 최종적으로 존재하는 리소스의 {{HTTPHeader("ETag")}}가 나열된 값 중 어느 것과도 일치하지 않는 경우에만 요청이 처리됩니다.

{{HTTPMethod("GET")}} 및 {{HTTPMethod("HEAD")}} 메서드에서 조건이 실패하면 서버는 HTTP 상태 코드 304(Not Modified)를 반환해야 합니다. 서버 측 변경 사항을 적용하는 메서드의 경우 상태 코드 412(Precondition Failed)가 사용됩니다. 304 응답을 생성하는 서버는 동일한 요청에 대해 200(OK) 응답으로 전송되는 다양한 헤더 필드(Cache-Control, Content-Location, Date, ETag, Expires 등) 중 하나를 생성해야 합니다.

저장된 {{HTTPHeader("ETag")}}와의 비교는 약한 비교 알고리즘을 활용하므로, 콘텐츠가 같다면 두 파일이 바이트 단위로 완전히 일치하지 않아도 동일하다고 판단합니다. 예를 들어, 푸터(footer)의 생성 날짜가 다른 두 페이지는 여전히 동일하다고 판단합니다.

서버에서 지원한다면, {{HTTPHeader("If-Modified-Since")}}와 함께 사용할 경우 **`If-None-Match`** 가 우선 적용됩니다.

두 가지 일반적인 사용 사례가 있습니다.

- {{HTTPMethod("GET")}} 및 {{HTTPMethod("HEAD")}} 메서드의 경우, 연결된 {{HTTPHeader("ETag")}}가 있는 캐시된 개체를 업데이트합니다.
- 다른 메서드, 특히 {{HTTPMethod("PUT")}}의 경우, `If-None-Match`가 `*` 값과 함께 사용되면 이는 아직 생성되지 않은 것으로 알려진 파일을 저장하는 데 활용될 수 있으며, 이전에 다른 업로드가 발생하지 않았다는 것을 보장합니다. 더불어 이전에 업로드한 데이터가 손실될 수 있으며 이 문제는 [lost update problem](https://www.w3.org/1999/04/Editing/#3.1)의 한 형태입니다.

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

## 구문

```http
If-None-Match: "<etag_value>"
If-None-Match: "<etag_value>", "<etag_value>", …
If-None-Match: *
```

## 지시어

- \<etag_value>
  - : 개체 태그는 요청된 리소스를 고유하게 식별합니다. 이는 큰따옴표 사이에 위치한 {{Glossary("ASCII")}} 문자열로 표현되며(예: `"675af34563dc-tr34"`), 앞에 `W/`를 추가하여 약한 비교 알고리즘의 사용이 필요함을 나타낼 수 있습니다(`If-None-Match`에서는 해당 알고리즘만을 사용하므로 무의미합니다).
- `*`
  - : 별표(asterisk)는 리소스를 나타내는 특수 값입니다. 이는 리소스를 업로드할 때, 특히 {{HTTPMethod("PUT")}}을 사용하여, 동일한 식별자를 가진 다른 리소스가 이미 업로드되었는지를 확인할 때에만 유용합니다.

## 예제

```http
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
