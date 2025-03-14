---
title: HTTP/2
slug: Glossary/HTTP_2
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**HTTP/2** 는 [HTTP 네트워크 프로토콜](/ko/docs/conflicting/Web/HTTP)의 주요 개정판입니다.

HTTP/2의 주요 목표는 "지연 시간"을 감소시키는 것입니다. 전체 요청과 응답 멀티플렉싱을 가능하게 하여 {{glossary("latency", "대기 시간")}}을 줄이고, HTTP 헤더 필드를 효율적으로 압축함으로써 프로토콜 오버헤드를 최소화하고, 요청에 대한 우선 순위를 결정하고 서버 푸시 지원을 추가하는 것입니다.

HTTP/2는 어떤 방식으로도 HTTP의 어플리케이션 의미를 수정하지 않습니다. HTTP 메서드, 상태 코드, URI, 헤더 필드와 같은 HTTP 1.1의 핵심 개념은 그대로 유지하는 대신, HTTP/2는 전체 프로세스를 관리하는 클라이언트-서버 사이의 데이터의 형식(프레임)과 전송 방식을 수정하여 새로운 프레임 계층 내에서 어플리케이션 복잡성을 숨깁니다. 결과적으로, 기존의 모든 어플리케이션은 수정 과정을 거치지 않고 전달될 수 있습니다.

## 같이 보기

- [MDN의 HTTP 설명](/ko/docs/Web/HTTP)
- 위키피디아의 [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2)
- [용어 사전](/ko/docs/Glossary)

  - {{glossary("HTTP")}}
  - {{glossary("Latency")}}
