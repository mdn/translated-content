---
title: 전송 계층 보안 (TLS)
slug: Glossary/TLS
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

이전에 {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}로 알려진 **Transport Layer Security** (**TLS**)는 어플리케이션들이 네트워크 상에서 안전하게 통신하기 위해 사용된 {{Glossary("protocol", "프로토콜")}}이며, 이메일, 웹 브라우징, 메시징, 그리고 다른 프로토콜들의 감청을 통한 정보의 변형을 방지합니다. SSL과 TLS 모두 네트워크 상에서 보안을 제공하는 암호화 프로토콜을 사용해 네트워크에 보안을 제공함으로써 통신 개인정보 보호를 보장하는 클라이언트 / 서버 프로토콜입니다. 서버와 클라이언트가 TLS로 통신을 할때, 어떠한 제 3자도 메시지를 변형시키거나 감청할 수 없도록 합니다.

모든 최신 브라우저들은 안전한 연결을 하기 위해서 서버가 자신의 신원을 확인하는 유효한 {{Glossary("Digital certificate", "디지털 인증서")}}를 제공하도록 요구하는 TLS 프로토콜을 지원합니다. 클라이언트와 서버 둘 다 각자 개별 디지털 인증서를 제공하면, 서로를 상호 인증해줄 수 있습니다.

> [!NOTE]
> TLS 1.0 와 1.1은 2020년 초부터 대부분의 브라우저에서 지원하지 않을 예정입니다. 웹 브라우저가 TLS 1.2 나 TLS 1.3을 지원하는지 확인해보는 것이 좋습니다. Firefox는 버전 74 이후로 구 TLS 버전을 사용해서 서버에 연결을 시도할 경우 [보안 연결 실패](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) 오류를 반환합니다([Firefox bug 1606734](https://bugzil.la/1606734)).

## 같이 보기

- 위키백과의 [전송 계층 보안](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [RFC 8446](https://datatracker.ietf.org/doc/html/rfc8446) (The Transport Layer Security Protocol, Version 1.3)
- [RFC 5246](https://datatracker.ietf.org/doc/html/rfc5246) (The Transport Layer Security Protocol, Version 1.2)
- [전송 계층 보안](/ko/docs/Web/Security/Transport_Layer_Security)
- [OWASP: Transport Layer Protection Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html)
- [용어 사전](/ko/docs/Glossary)
  - {{Glossary("HTTPS")}}
  - {{Glossary("SSL")}}
