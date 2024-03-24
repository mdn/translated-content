---
title: 고정 활성화 (Sticky activation)
slug: Glossary/Sticky_activation
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**고정 활성화(Sticky activation)** 또는 sticky user activation(고정 사용자 활성화)는 사용자가 버튼을 누르거나, 마우스를 이동하거나, 메뉴를 사용하거나, 기타 사용자 상호 작용을 수행했음을 나타내는 창 상태입니다.

사용자가 현재 페이지와 상호 작용 중이거나 페이지 로드 이후 터치, 포인터 또는 키보드 상호 작용을 완료할 경우 페이지는 '사용자 활성화'로 생각합니다. 고정 사용자 활성화를 사용하면, ({{Glossary("Transient activation", "일시적 활성화")}}와 달리) 활성화가 설정되어 있으면 세션 기간 동안 재설정되지 않습니다.

'고정 활성화'가 필요한 API의 예는 [사용자 활성화로 제한되는 기능](/ko/docs/Web/Security/User_activation)을 참조하세요.

현재 창의 고정 활성화 상태에 프로그래밍 방식으로 접근하려면 {{domxref("UserActivation.hasBeenActive")}} 속성을 참조하세요.

## 같이 보기

- [HTML Living Standard > Sticky activation](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
- {{Glossary("Transient activation")}}
- {{domxref("UserActivation.hasBeenActive")}}
