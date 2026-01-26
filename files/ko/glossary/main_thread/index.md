---
title: 메인 스레드 (Main thread)
slug: Glossary/Main_thread
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**메인 스레드(main thread)** 는 브라우저가 사용자 이벤트와 페인트를 처리하는 곳입니다. 기본적으로, 브라우저는 단일 스레드를 사용하여 페이지의 모든 JavaScript를 실행하고 레이아웃, 리플로우 및 가비지 컬렉션을 수행합니다. 오래 실행되는 JavaScript 함수가 스레드를 차단하여 페이지가 응답하지 않고, 사용자 경험이 저하될 수 있다는 것을 의미합니다.

[서비스 워커](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)와 같은 [웹 워커](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)를 의도적으로 사용하지 않는 한, JavaScript는 메인 스레드에서 실행되기 때문에, 스크립트로 인해 이벤트 처리 또는 페인팅이 지연되기 쉽습니다. 메인 스레드에 필요한 작업이 적을수록, 메인 스레드는 사용자 이벤트, 페인트에 더 많이 응답할 수 있으며, 일반적으로 사용자에게 응답할 수 있습니다.

## 같이 보기

- [비동기 JavaScript](/ko/docs/Learn_web_development/Extensions/Async_JS)
- [Web worker API](/ko/docs/Web/API/Web_Workers_API)
- [Service worker API](/ko/docs/Web/API/Service_Worker_API)
- [용어 사전](/ko/docs/Glossary)
  - {{Glossary("Thread")}}
