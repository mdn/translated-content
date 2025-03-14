---
title: WindowProxy
slug: Glossary/WindowProxy
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**`WindowProxy`** 객체는 [`Window`](/ko/docs/Web/API/Window) 객체에 대한 래퍼입니다. 모든 [브라우징 컨텍스트](/ko/docs/Glossary/Browsing_context)에는 `WindowProxy` 객체가 존재합니다. `WindowProxy` 객체에 수행된 모든 작업은 현재 래핑된 기본 `Window` 객체에도 적용됩니다. 따라서, `WindowProxy` 객체와 상호 작용하는 것은 `Window` 객체와 직접 상호작용하는 것과 거의 동일합니다. 브라우징 컨텍스트를 탐색할 때, `WindowProxy`가 래핑하는 `Window` 객체가 변경됩니다.

## 같이 보기

- HTML 명세서: [WindowProxy 부분](https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object)
- Stack Overflow 질문: [WindowProxy 및 Window 객체?](https://stackoverflow.com/questions/16092835/windowproxy-and-window-objects)
