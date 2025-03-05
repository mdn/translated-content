---
title: 사이트 보안
slug: Web/Security/Practical_implementation_guides
original_slug: Web/Security/Securing_your_site
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}

사이트 보안을 위해 할 수 있는 것은 많이 있습니다. 이 문서는 더 유용한 정보를 제공하는 다른 문서의 링크를 포함한 여러 가지 제안 사항을 제공합니다.

> [!NOTE]
> 이 문서는 작성 중에 있어 완성되지 않았으며, 문서의 제안 사항을 따르더라도 사이트가 완전히 안전하다는 보장은 없습니다.

## 사용자 정보 보안

- [양식 자동 완성을 끄는 법](/ko/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
  - : Gecko는 양식 필드의 자동 완성을 지원합니다. 즉, 양식의 값을 기억하고 있다가 다음에 사이트를 방문할 때 자동으로 불러올 수 있습니다. 특정 데이터 유형의 경우, 이 기능을 비활성화할 수 있습니다.
- [사생활과 :visited 선택자](/ko/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : 이 문서에서는 악의적인 사이트가 사용자의 검색 기록을 파악하는 기능을 제거하는 `getComputedStyle()` 메서드의 변경 사항에 대해 설명합니다.
- [보안 알고리즘을 이용한 해쉬 암호](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) (OWASP)
  - : 암호를 일반 텍스트로 저장하면 공격자가 사이트 사용자의 정확한 암호를 알고 유출하여 잠재적으로 사용자를 위험에 빠뜨릴 수 있습니다. 오래되었거나 안전하지 않은 해쉬 알고리즘(예: md5)을 사용하는 경우에도 동일한 문제가 발생할 수 있습니다. 메시지 다이제스트 알고리즘(예: md5와 sha) 대신 암호별 해쉬 알고리즘(예: Argon2, PBKDF2, scrypt 또는 bcrypt)을 사용해야 합니다. 이 문서는 암호를 저장 사용할 때 사용할 모범 사례를 보여줍니다.

## 콘텐츠 보안

- [서버 MIME 유형을 올바르게 구성하기](/ko/docs/Learn/Server-side/Configuring_server_MIME_types)
  - : 잘못된 MIME 유형이 사이트에 잠재적인 보안 문제를 일으킬 수 있는 몇 가지 상황이 있습니다. 이 문서는 그 중 일부를 설명하고 올바른 MIME 유형으로 파일을 제공하도록 서버를 구성하는 방법을 보여줍니다.
- [HTTP Strict Transport Security](/ko/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : `Strict-Transport-Security:` [HTTP](/ko/docs/Web/HTTP) 헤더를 사용하면 웹사이트를 HTTPS를 통해서만 접근할 수 있음을 지정할 수 있습니다.
- [HTTP 접근 제어](/ko/docs/Web/HTTP/CORS)
  - : Cross-Origin Resource Sharing 표준은 다른 도메인에서 로드할 수 있는 콘텐츠를 지정하는 방법을 제공합니다. 이를 사용하여 사이트가 부적절하게 사용되는 것을 방지할 수 있습니다. 또한 이를 사용하여 다른 사이트에서 사용하도록 명시적으로 허용된 리소스를 설정할 수 있습니다.
- [콘텐츠 보안 정책](/ko/docs/Web/HTTP/CSP)
  - : {{Glossary("Cross-site_scripting", "교차 사이트 스크립팅(XSS)")}}과 데이터 삽입 공격을 포함한 특정 유형의 공격을 감지하고 완화하는 데 도움이 되는 추가 보안 계층입니다. 이러한 공격은 데이터 도용부터 사이트 손상 또는 맬웨어 배포까지, 모든 곳에 사용됩니다. 코드는 피해자에 의해 실행되며 공격자는 접근 제어를 우회하고 사용자를 가장할 수 있습니다.
- [X-Frame-Options 응답 헤더](/ko/docs/Web/HTTP/Headers/X-Frame-Options)
  - : `X-Frame-Options:` [HTTP](/ko/docs/Web/HTTP) 응답 헤더는 브라우저가 {{ HTMLElement("frame") }}에서 페이지를 렌더링하도록 허용해야 하는지의 여부를 나타내는 데 사용할 수 있습니다. 사이트는 이를 이용하여 콘텐츠가 다른 사이트에 포함되지 않도록 함으로써 [클릭재킹](/ko/docs/Glossary/Clickjacking) 공격을 피할 수 있습니다.
- 웹사이트 구성을 통한 접근 제어
  - : 사이트를 보호하는 가장 좋은 방법입니다. 특정 IP를 무시하고, 웹사이트의 특정 영역에 대한 접근을 제한하고, 다른 파일을 보호하고, 이미지 핫링크로부터 보호하는 등의 작업을 할 수 있습니다. 예를 들어 .htaccess 파일은 [Apache HTTP Server](https://httpd.apache.org/)에서 호스팅되는 웹 사이트에 사용됩니다.

## 같이 보기

- [공개 웹 애플리케이션 보안 프로젝트 (OWASP)](https://owasp.org/)
- [Mozilla 웹 보안 치트 시트](https://infosec.mozilla.org/guidelines/web_security.html#web-security-cheat-sheet)
- [OWASP의 교차 사이트 스크립팅](https://owasp.org/www-community/attacks/xss/)
