---
title: 엔티티 헤더
slug: Glossary/Entity_header
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

> [!WARNING]
> HTTP/1.1 명세는 더 이상 엔티티, 엔티티 헤더 또는 엔티티 본문을 참조하지 않습니다. 일부 필드는 이제 {{glossary("Representation header")}} 필드라고 합니다.

엔티티 헤더는 HTTP 메시지의 페이로드(예: 메시지 본문에 대한 메타데이터)를 나타내는 {{glossary("HTTP_header", "HTTP 헤더")}}입니다. {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}} 등과 같은 헤더는 엔티티 헤더에 포함됩니다. 엔티티 헤더는 HTTP 요청 및 응답 모두에 존재할 수 있습니다.

엔티티 헤더가 요청이나 응답 헤더가 아님에도 불구하고, 이러한 용어로 종종 포함됩니다.

다음 예제에서, {{HTTPHeader("Content-Length")}}는 엔티티 헤더지만, {{HTTPHeader("Host")}}와 {{HTTPHeader("User-Agent")}}는 request 헤더입니다.

```http
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## 같이 보기

- {{Glossary("Representation header")}}
