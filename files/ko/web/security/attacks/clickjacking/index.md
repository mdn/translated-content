---
title: 클릭재킹 (Clickjacking)
slug: Web/Security/Attacks/Clickjacking
original_slug: Glossary/Clickjacking
l10n:
  sourceCommit: ede0057ebf9c1dc646242d019803a567acbb2995
---

{{GlossarySidebar}}

클릭재킹(Clickjacking)은 웹사이트 사용자를 속여 자신도 모르게 악성 링크를 클릭하도록 하는 인터페이스 기반 공격입니다. 클릭재킹을 통해, 공격자는 악성 링크를 웹사이트의 버튼이나 합법적인 페이지에 삽입합니다. 감염된 {{glossary("Site", "사이트")}}에서 사용자가 합법적인 링크를 클릭할 때마다, 공격자는 해당 사용자의 기밀 정보를 얻게 되고, 궁극적으로 인터넷에서 사용자의 개인 정보를 손상시킵니다.

[콘텐츠 보안 정책(frame-ancestors)](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) 및 [Set-Cookie 속성](/ko/docs/Web/HTTP/Headers/Set-Cookie#attributes)를 구현하면 클릭재킹을 방지할 수 있습니다.

## 같이 보기

- [웹 보안: 클릭재킹 방지](/ko/docs/Web/Security#clickjacking_protection)
- 위키백과의 [클릭재킹](https://en.wikipedia.org/wiki/Clickjacking)
- OWASP의 [클릭재킹](https://owasp.org/www-community/attacks/Clickjacking)
