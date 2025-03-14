---
title: 크로스 사이트 스크립팅 (Cross-site scripting (XSS))
slug: Glossary/Cross-site_scripting
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

크로스 사이트 스크립팅 (XSS)은 공격자가 웹사이트에 악성 클라이언트 사이드 코드를 삽입할 수 있도록 하는 보안 취약점 공격입니다. 이 악성 코드는 피해자에 의해 실행되며 공격자가 접근 제어를 우회하고 사용자로 위장할 수 있게 만들어 줍니다. 오픈 웹 애플리케이션 보안 프로젝트에 따르면, XSS는 2017년에 [7번째로 흔한 웹 앱 취약점](<https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>)이었습니다.

웹 앱이 충분한 유효성 검사나 인코딩을 사용하지 않으면 이러한 공격은 성공하게 됩니다. 사용자의 브라우저는 신뢰할 수 없는 악성 스크립트를 탐지할 수 없고, 쿠키, 세션 토큰 또는 기타 민감한 사이트별 정보에 대한 접근 권한을 부여해버리거나 악성 스크립트가 {{glossary("HTML")}} 콘텐츠를 다시 작성할 수 있도록 합니다.

## 같이 보기

- [공격 유형: 크로스 사이트 스크립팅 (XSS)](/ko/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)
- 위키백과의 [크로스 사이트 스크립팅](https://en.wikipedia.org/wiki/Cross-site_scripting)
- [OWASP의 크로스 사이트 스크립팅](https://owasp.org/www-community/attacks/xss/)
- [크로스 사이트 스크립팅에 대한 다른 글](https://www.acunetix.com/blog/articles/dom-xss-explained/)
