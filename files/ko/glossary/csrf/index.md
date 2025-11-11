---
title: 교차 사이트 요청 위조 (CSRF)
slug: Glossary/CSRF
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**교차 사이트 요청 위조**(Cross-Site Request Forgery, CSRF)는 신뢰할 수 있는 사용자를 사칭해 웹 사이트에 원하지 않는 명령을 보내는 공격입니다.

예를 들면, 다른 곳으로 이동하려 하는 링크 뒤 {{glossary("URL")}}에 악성 매개변수를 포함하는 식으로 할 수 있습니다.

```html
<img src="https://www.example.com/index.php?action=delete&id=123" />
```

`https://www.example.com`에 수정할 수 있는 권한이 있는 사용자의 경우, `<img>` 요소는 자신이 `https://www.example.com`에 없더라도, 눈치채지 못한 상태로 `https://www.example.com`에서 작업을 실행합니다.

CSRF를 방지하는 방법에는 {{glossary("REST", "RESTful API")}} 구현, 보안 토큰 추가 등 여러가지 방법이 있습니다.

## 같이 보기

- 위키백과의 [교차 사이트 요청 위조](https://en.wikipedia.org/wiki/Cross-site_request_forgery)
- [예방 조치](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
