---
title: SMTP
slug: Glossary/SMTP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**SMTP**(Simple Mail Transfer Protocol)는 새로운 이메일을 전송할 때 사용하는 {{glossary("protocol", "프로토콜")}}입니다. {{glossary("POP")}}나 {{glossary("NNTP")}}처럼, SMTP도 {{glossary("state machine", "상태 기계")}} 기반 프로토콜입니다.

SMTP는 상대적으로 직관적입니다. 복잡함을 유발하는 주요 원인은 다양한 인증 방법([GSSAPI](http://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface), [CRAM-MD5](http://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](http://en.wikipedia.org/wiki/NTLM), MSN, AUTH LOGIN, AUTH PLAIN 등)을 지원하고, 오류 응답 처리, 인증 실패(서버에서 어떤 방법을 지원한다고 주장했으나 사실 아닐 때 등) 시 처리가 있습니다.

## 같이 보기

- 위키백과의 [SMTP](https://en.wikipedia.org/wiki/SMTP)
- [용어 사전](/ko/docs/Glossary)

  - {{glossary("NNTP")}}
  - {{glossary("POP")}}
  - {{glossary("protocol")}}
  - {{Glossary("state machine")}}
