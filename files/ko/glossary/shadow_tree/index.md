---
title: 쉐도우 트리 (Shadow tree)
slug: Glossary/Shadow_tree
l10n:
  sourceCommit: cebbd9095ac12557c55157355181672027fffc14
---

{{GlossarySidebar}}

**쉐도우 트리 (Shadow tree)** 는 최상위 [노드](/ko/docs/Glossary/Node/DOM)가 **쉐도우 루트(shadow root)** 인 {{Glossary("DOM")}} 노드의 숨겨진 집합입니다. 쉐도우 루트는 **쉐도우 DOM(shadow DOM)** 의 최상위 노드이며 일반 문서의 DOM 트리의 일부가 아닙니다.

쉐도우 루트는 **호스트** 라고 하는 특정 DOM 노드를 통해 다른 노드 트리에 연결됩니다. 이 호스트는 다른 쉐도우 트리의 일부일 수 있습니다. 쉐도우 루트 호스트의 노드 트리를 **라이트 트리(light tree)** 라고도 합니다.

쉐도우 트리의 숨겨진 DOM 노드는 일반적으로 쉐도우 트리 외부에 적용된 어떤 것에도 영향을 받지 않으며 그 반대도 마찬가지입니다. 쉐도우 DOM이 끝나고 일반 DOM이 시작되는 **shadow 경계** 는 통과할 수 있지만, 의도적으로 표시했을 때만 가능한 부분입니다.

- 외부에서 쉐도우 트리 노드를 스크립팅하려면 특별한 [Shadow DOM API](/ko/docs/Web/API/Web_components/Using_shadow_DOM)에 접근해야 합니다.
- [CSS 스코핑](/ko/docs/Web/CSS/CSS_scoping) 및 [CSS 쉐도우 부분](/ko/docs/Web/CSS/CSS_shadow_parts)을 통해 외부에서 쉐도우 트리 스타일을 지정할 수 있습니다.

## 같이 보기

- [쉐도우 DOM 사용하기](/ko/docs/Web/API/Web_components/Using_shadow_DOM)
- {{domxref("Element.shadowRoot")}} 및 {{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot")}}
- {{HTMLElement("slot")}}
- {{Glossary("accessibility_tree", "접근성 트리(Accessibility tree)")}}
