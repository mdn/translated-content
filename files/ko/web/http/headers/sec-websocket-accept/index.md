---
title: Sec-WebSocket-Accept
slug: Web/HTTP/Headers/Sec-WebSocket-Accept
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**Sec-WebSocket-Accept** 헤더는 웹소켓 오프닝 핸드셰이크에 사용됩니다. 이는 응답 헤더에 나타납니다. 즉, 이 헤더는 서버가 웹소켓 연결을 시작할 의향을 알리기 위해 서버에서 클라이언트로 전송하는 헤더입니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Response header", "요청 헤더")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>아니요</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Sec-WebSocket-Accept: <hashed key>
```

## 지시어

- \<hashed key>
  - : 서버는 핸드셰이크 요청에서 전송된 Sec-WebSocket-Key의 값을 가져와서 `258EAFA5-E914-47DA-95CA-C5AB0DC85B11`을 덧붙이고, 새 값의 SHA-1 값을 가져온 다음, [base64](/ko/docs/Glossary/Base64)로 인코딩합니다.

## 예제

```http
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

## 명세서

{{Specifications}}

## 같이 보기

- {{HTTPHeader("Sec-WebSocket-Key")}}

## 브라우저 호환성

{{Compat}}
