---
title: Location
slug: Web/HTTP/Headers/Location
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Location`** 응답 헤더는 리다이렉트 할 페이지의 URL을 나타냅니다. 이 헤더는 `3xx` (redirection) 또는 `201` (created) 응답 상태와 함께 제공됩니다.

리다이렉션의 경우, `Location`이 가리키는 페이지를 가져오기 위해 새 요청을 만드는데 사용하는 HTTP 메서드는 원본 메서드와 리다이렉션의 종류에 따라 달라집니다.

- {{HTTPStatus("303")}} (See Other) 응답 코드는 항상 {{HTTPMethod("GET")}} 메서드를 사용합니다.
- {{HTTPStatus("307")}} (Temporary Redirect), {{HTTPStatus("308")}} (Permanent Redirect)은 원본 요청에서 사용한 메서드를 변경하지 않습니다.
- {{HTTPStatus("301")}} (Moved Permanently), {{HTTPStatus("302")}} (Found)는 대부분 메서드를 변경하지 않지만, 오래된 사용자 에이전트는 변경할 수도 있습니다.

위의 상태 코드 중 하나가 포함된 모든 응답은 `Location` 헤더를 보냅니다.

리소스 생성의 경우, 새로 만들어진 리소스의 URL을 나타냅니다.

`Location`과 {{HTTPHeader("Content-Location")}}는 서로 다릅니다.
`Location`은 리다이렉션의 대상이나 새로 만들어진 리소스의 URL을 나타냅니다. {{HTTPHeader("Content-Location")}}는 추가적인 콘텐츠 협상이 없는 콘텐츠 협상이 발생했을 때, 리소스에 접근하는데 사용할 다이렉트 URL을 나타냅니다. `Location`은 응답과 관련된 헤더지만, {{HTTPHeader("Content-Location")}}은 반환된 엔티티와 연관되어 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Response header", "응답 헤더")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>아니요</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Location: <url>
```

## 지시어

- \<url>
  - : 요청 URL의 상대 경로 또는 절대 경로

## 예제

```http
Location: /index.html
```

## 기술 사양

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Content-Location")}}
- `Location` 헤더를 포함하는 응답 상태: {{HTTPStatus("201")}},
  {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}},
  {{HTTPStatus("307")}}, {{HTTPStatus("308")}}
