---
title: HSTS
slug: Glossary/HSTS
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**HTTP Strict Transport Security**를 사용하면 웹 사이트가 브라우저에 HTTP를 사용하여 사이트를 불러와서는 안 되며, 대신 HTTP를 사용하여 사이트에 접근하려는 모든 시도를 HTTPS 요청으로 자동 변환해야 함을 알릴 수 있습니다. 서버가 보낸 리소스와 함께 하나의 HTTP 헤더인 {{HTTPHeader("Strict-Transport-Security")}}로 구성됩니다.

다시 말해, URL에서 프로토콜을 HTTP에서 HTTPS로 변경하는 것이 작동하도록(더 안전함) 브라우저에 알리고 모든 요청에 대해 이를 수행하도록 요청합니다.

## 같이 보기

- {{HTTPHeader("Strict-Transport-Security")}}
- OWASP 문서 [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- 위키피디아 [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
