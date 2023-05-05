---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
l10n:
  sourceCommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

{{HTTPSidebar}}

**`Content-Length`** 헤더는 수신자에게 전송되는 메시지 본문의 크기(바이트)를 나타냅니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>
        {{Glossary("Request header", "요청 헤더")}},
        {{Glossary("Response header", "응답 헤더")}},
        {{Glossary("Payload header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>네</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>네</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Content-Length: <length>
```

## 지시어

- \<length>
  - : 8진수에 대한 십진수 단위의 길이.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Transfer-Encoding")}}
