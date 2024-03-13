---
title: 첫 사용에 대한 신뢰 (Trust On First Use, TOFU)
slug: Glossary/TOFU
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**첫 사용에 대한 신뢰 (Trust On First Use, TOFU)** 는 클라이언트가 알 수 없는 서버와 신뢰 관계를 생성해야 하는 보안 모델입니다. 이를 위해, 클라이언트는 로컬에 저장된 식별자(예, 공개 키)를 찾습니다. 식별자가 발견되면, 클라이언트는 연결을 설정할 수 있습니다. 식별자가 발견되지 않으면, 클라이언트는 사용자에게 클라이언트가 식별자를 신뢰해야 하는지 결정하라는 메시지를 표시할 수 있습니다.

TOFU는 브라우저가 리디렉션 규칙을 따르는 {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})의 SSH 프로토콜에서 사용됩니다.

## 같이 보기

- 위키백과의 [TOFU](https://en.wikipedia.org/wiki/Trust_on_first_use)
