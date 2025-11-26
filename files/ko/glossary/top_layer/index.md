---
title: 최상위 계층 (Top layer)
slug: Glossary/Top_layer
l10n:
  sourceCommit: 9fa28f84a3aef826a30d402e63153b63db739a89
---

{{GlossarySidebar}}

**최상위 계층(top layer)** 은 뷰포트의 전체 너비와 높이에 걸쳐 있고 웹 문서에 표시된 다른 모든 레이어 위에 위치하는 특정 레이어입니다. 페이지의 다른 모든 콘텐츠 위에 표시되어야 하는 요소를 포함하기 위해 브라우저에서 생성됩니다.

최상위 레이어에 배치된 요소는 해당 {{cssxref("::backdrop")}} 의사 요소와 마찬가지로 새로운
[스태킹 컨텍스트(stacking context)](/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_context)를 생성합니다.

최상위 레이어에 표시되는 요소는 아래와 같습니다.

- 전체 화면 요소입니다. 즉, 성공적인 {{domxref("Element.requestFullscreen()")}} 호출로 인해 전체 화면 모드로 표시되는 요소입니다.
- 성공적인 {{domxref("HTMLDialogElement.showModal()")}} 호출을 통해 모달로 표시되는 {{htmlelement("dialog")}} 요소입니다.
- 성공적인 {{domxref("HTMLElement.showPopover()")}} 호출을 통해 표시된 Popover 요소입니다.

Chrome과 같은 일부 브라우저는 특수 DOM 트리 항목 내 최상위 레이어에 배치된 요소를 표시합니다. 예를 들면,

![크롬 개발자 도구에 표시된 것처럼 최상위 레이어의 요소](top_layer_devtools.png)

최상위 계층은 내부 브라우저 개념이므로 코드에서 직접 조작할 수 없습니다. CSS 및 JavaScript를 사용하여 최상위 레이어에 배치된 요소를 타겟팅할 수 있지만, 최상위 레이어 자체를 타겟팅할 수는 없습니다.

## 같이 보기

- [스태킹 컨텍스트(stacking context)](/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Fullscreen API](/ko/docs/Web/API/Fullscreen_API)
- {{htmlelement("dialog")}} 요소, {{domxref("HTMLDialogElement")}} 인터페이스
- [Popover API](/ko/docs/Web/API/Popover_API)
- {{CSSXref(":fullscreen")}} 의사 클래스
