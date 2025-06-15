---
title: 시도-응답 인증 (Challenge-response authentication)
slug: Glossary/Challenge
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

보안 프로토콜에서, '시도(challenge)'은 매번 다른 응답을 생성하기 위해 서버가 클라이언트에 전송하는 일부 데이터입니다. 시도-응답 프로토콜은 공격자가 이전 메시지를 듣고 나중에 다시 보내 원본 메시지와 동일한 자격 증명을 얻는 {{glossary("replay attack", "재전송 공격")}}에 맞서 싸우는 한가지 방법입니다.

[HTTP 인증 프로토콜](/ko/docs/Web/HTTP/Guides/Authentication)는 시도-응답 기반이지만, "Basic" 프로토콜은 실제 시도를 사용하지 않습니다(영역은 항상 동일함).

## 같이 보기

- 위키 백과의 [시도-응답 인증](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication)
