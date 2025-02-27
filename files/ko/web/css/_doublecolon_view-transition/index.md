---
title: ::view-transition
slug: Web/CSS/::view-transition
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{CSSRef}}{{SeeCompatTable}}

**`::view-transition`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 모든 [뷰 전환](/ko/docs/Web/API/View_Transitions_API) 스냅샷 그룹을 포함하고, 페이지의 모든 다른 콘텐츠 위에 위치하는 뷰 전환의 오버레이의 루트를 나타냅니다.

뷰 전환이 이루어지는 동안, `::view-transition` 는 [뷰 전환 의사 요소 트리](/ko/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) 에 기술된 것처럼 연관된 의사 요소 트리에 포함됩니다. 이는 트리의 최상위 레벨 노드이며 하나 또는 하나 이상의 {{cssxref("::view-transition-group")}} 를 자식 요소로 가집니다.

`::view-transition` 는 UA 스타일시트에서 다음과 같은 스타일을 기본으로 부여 받습니다.

```css
html::view-transition {
  position: fixed;
  inset: 0;
}
```

모든 {{cssxref("::view-transition-group")}} 의사 요소는 뷰 전환 루트에 상대적으로 위치합니다.

## 구문

```css
::view-transition {
  /* ... */
}
```

## Examples

```css
::view-transition {
  background-color: rgb(0 0 0 / 25%);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [뷰 전환 API](/ko/docs/Web/API/View_Transitions_API)
- [뷰 전환 API와 부드럽고 간단한 트랜지션](https://developer.chrome.com/docs/web-platform/view-transitions/)
