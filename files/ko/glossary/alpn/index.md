---
title: ALPN
slug: Glossary/ALPN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**애플리케이션 계층 프로토콜 협상** (**ALPN**)은 암호화된 연결을 협상하는 애플리케이션 계층 프로토콜을 식별하기 위한 {{Glossary("TLS")}} 확장 입니다([RFC 7301](https://www.rfc-editor.org/rfc/rfc7301)).

| 프로토콜                                      | 인증 시퀀스                                            |
| --------------------------------------------- | ------------------------------------------------------ |
| {{Glossary("HTTP", "HTTP/1.1")}}              | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| {{Glossary("HTTP 2", "HTTP/2")}}              | `0x68 0x32` ("h2")                                     |
| 일반 텍스트를 통한 HTTP/2 {{Glossary("TCP")}} | `0x68 0x32 0x63` ("h2c")                               |
| {{Glossary("HTTP 3", "HTTP/3")}}              | `0x68 0x33` ("h3")                                     |

## See also

- [성능 리소스 타이밍 `nextHopProtocol`](/ko/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) property
- [PerformanceObserver API](/ko/docs/Web/API/PerformanceObserver)
- [IANA 등록 ALPN 식별자](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)
