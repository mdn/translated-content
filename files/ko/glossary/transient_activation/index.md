---
title: 임시 활성화 (Transient activation)
slug: Glossary/Transient_activation
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**임시 활성화(Transient activation)** (또는 '임시 사용자 활성화')는 사용자가 최근에 버튼을 눌렀거나, 마우스를 움직였거나, 메뉴를 사용했거나, 다른 사용자 상호작용을 수행했음을 나타내는 창 상태입니다.

이 상태는 때때로 웹 API가 사용자 상호 작용에 의해 트리거되는 경우에만 작동할 수 있도록 하는 메커니즘으로 사용됩니다.
예를 들어, 스크립트는 '일시적 활성화'가 필요한 팝업을 임의로 시작할 수 없습니다. 이 팝업은 UI 요소의 이벤트 핸들러에서 트리거 되어야 합니다.

'일시적 활성화'가 필요한 API의 예는 [사용자 활성화로 제한되는 기능](/ko/docs/Web/Security/User_activation)을 참조하세요.

현재 창의 임시 활성화 상태에 프로그래밍 방식으로 접근하려면 {{domxref("UserActivation.isActive")}} 속성을 참조하세요.

> [!NOTE]
> 임시 활성화는 시간 초과 후 만료되며(추가 상호 작용으로 갱신되지 않은 경우) 일부 API에서 '사용'될 수도 있습니다. 처음 설정된 후에 재설정되지 않는 사용자 활성화에 대해서는 {{Glossary("Sticky activation", "고정 활성화")}}를 참조하세요.

## 같이 보기

- [HTML Living Standard > Transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
- {{Glossary("Sticky activation")}}
- {{domxref("UserActivation.isActive")}}
