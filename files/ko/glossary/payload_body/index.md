---
title: 페이로드 본문 (Payload body)
slug: Glossary/Payload_body
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

HTTP 메시지 **페이로드 본문(payload body)** 은 {{HTTPHeader("Transfer-Encoding", "전송 인코딩")}}이 적용되기 이전에 HTTP 메시지 본문(있는 경우)으로 전송되는 데이터의 '정보'('페이로드') 부분입니다. 전송 인코딩을 사용하지 않으면, '페이로드 본문(payload body)'와 '메시지 본문(message body)'은 동일합니다!

예를 들어, 이 응답의 메시지 본문에는 페이로드 본문인 "Mozilla Developer Network"만 포함되어 있습니다.

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

대조적으로, 아래 응답은 '전송 인코딩'을 사용하여 페이로드 본문을 청크로 인코딩합니다. 전송된 페이로드 본문(정보)은 여전히 Mozilla Developer Network이지만, 메시지 본문에는 청크를 구분하기 위한 추가 데이터가 포함되어 있습니다.

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

자세한 정보를 보려면 [RFC 7230, section 3.3: Message Body](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3)와 [RFC 7230, section 3.3.1: Transfer-Encoding](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.1)을 참조하세요.
