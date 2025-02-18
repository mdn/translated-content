---
title: ::view-transition-group
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{CSSRef}}{{SeeCompatTable}}

**`::view-transition-group`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 단일 뷰 전환 스냅샷 그룹을 나타냅니다.

뷰 전환이 이루어지는 동안, `::view-transition` 는 [뷰 전환 의사 요소 트리](/ko/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) 에 기술된 것처럼 연관된 의사 요소 트리에 포함됩니다. 이는 {{cssxref("::view-transition")}}의 자식으로만 존재하며, {{cssxref("::view-transition-image-pair")}} 를 자식으로 가집니다.

`::view-transition-group` 는 UA 스타일시트에서 다음과 같은 스타일을 기본으로 부여 받습니다.

```css
html::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

기본적으로 선택된 요소는 오래된 뷰 상태를 나타내는 {{cssxref("::view-transition-old")}} 의사 요소의 크기와 위치를 반영하지만, 오래된 뷰 상태가 없는 경우에 새로운 뷰 상태를 나타내는 {{cssxref("::view-transition-new")}} 의사 요소의 크기위 위치를 반영하게 됩니다.

오래된 뷰 상태와 새로운 뷰 상태가 동시에 존재한다면, 뷰 전환 스타일 시트의 스타일은 이 의사 요소의 {{cssxref("width", "너비")}} 와 {{cssxref("height", "높이")}}를 오래된 뷰 상태의 테두리 박스로부터 새로운 뷰 상태의 테두리 박스로의 애니메이션을 진행합니다.

> [!NOTE]
> 뷰 전환 스타일은 뷰 전환이 이루어지는 동안 동적으로 생성됩니다. 더 많은 정보는 [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) 와 [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) 섹션 명세서를 참고하여 확인할 수 있습니다.

더불어, 요소의 변형은 오래된 뷰 상태의 화면 공간 변형에서 새로운 뷰 상태의 화면 공간으로 애니메이션이 진행됩니다. 이러한 스타일은 애니메이션이 진행된 속성 값이 전환을 시작할 때 결정되므로 동적으로 생성됩니다.

## 구문

```css-nolint
::view-transition-group(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` 는 다음 값들을 가질 수 있습니다.

- `*`
  - : 의사 요소를 모든 뷰 전환 그룹에 대해 일치하도록 합니다.
- `root`
  - : 의사 요소를 사용자 에이전트가 생성한 기본 `root` 뷰 전환 그룹과 일치하도록 합니다. 이 그룹은 페이지 전체의 뷰 전환을 포함하고, {{cssxref("view-transition-name")}} 속성을 통해 고유한 뷰 전환 그룹에 할당되지 않은 모든 요소를 포함합니다.
- {{cssxref("custom-ident")}}
  - : {{cssxref("view-transition-name")}} 속성을 통해 의사 요소를 주어진 {{cssxref("custom-ident")}} 로부터 할당받아 생성된 특정 뷰 전환 그룹과 일치하도록 합니다.

## 예제

```css
view-transition-group(embed-container) {
  animation-duration: 0.3s;
  animation-timing-function: ease;
  z-index: 1;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [뷰 전환 API](/ko/docs/Web/API/View_Transitions_API)
- [뷰 전환 API와 부드럽고 간단한 트랜지션](https://developer.chrome.com/docs/web-platform/view-transitions/)
