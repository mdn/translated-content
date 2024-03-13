---
title: 애플리케이션 컨텍스트 (Application Context)
slug: Glossary/Application_context
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**애플리케이션 컨텍스트**는 [매니페스트](/ko/docs/Web/Manifest)가 적용된 최상위 [탐색 컨텍스트](/ko/docs/Glossary/Browsing_context)입니다.

사용자 에이전트가 딥 링크로 이동하라는 요청을 받은 결과로 애플리케이션 컨텍스트가 생성된 경우, 사용자 에이전트는 대체가 활성화된 딥 링크로 즉시 이동해야 합니다. 그렇지 않으면, 애플리케이션 컨텍스트가 생성될 때 사용자 에이전트는 교체가 활성화된 시작 URL로 즉시 이동해야 합니다.

시작 URL이 반드시 start_url 멤버의 값일 필요는 없다는 점에 유의하세요. 애플리케이션이 홈 화면에 추가되거나 북마크에 추가될 때 사용자 또는 사용자 에이전트가 이를 변경할 수 있습니다.

## 같이 보기

- [프로그레스브 웹 앱 (PWA)](/ko/docs/Web/Progressive_web_apps)
- [scope](/ko/docs/Web/Manifest/scope)
