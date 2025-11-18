---
title: ::view-transition-image-pair
slug: Web/CSS/Reference/Selectors/::view-transition-image-pair
original_slug: Web/CSS/::view-transition-image-pair
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{SeeCompatTable}}

**`::view-transition-image-pair`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 컨테이너의 [뷰 전환](/ko/docs/Web/API/View_Transition_API)의 오래된 뷰 상태와 새로운 뷰 상태, 전환의 전후를 나타냅니다.

뷰 전환이 이루어지는 동안, `::view-transition-image-pair` 는 [뷰 전환 의사 요소 트리](/ko/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) 에 기술된 것처럼 연관된 의사 요소 트리에 포함됩니다. 이는 {{cssxref("::view-transition-group")}} 의 자식 요소로만 존재합니다. 자식 요소로 {{cssxref("::view-transition-new")}} 또는 {{cssxref("::view-transition-old")}}를 가질 수 있으며, 둘 다 가질 수도 있습니다.

`::view-transition-image-pair` 는 UA 스타일시트에서 다음과 같은 스타일을 기본으로 부여 받습니다.

```css
:root::view-transition-image-pair(*) {
  position: absolute;
  inset: 0;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}
```

뷰 전환이 이루어지는 동안, `::view-transition-image-pair` 의 뷰 전환 스타일시트에 {{cssxref("isolation", "isolation: isolate")}}가 설정되어 있어 그 자식 요소들이 다른 시각적인 결과물에 영향을 주지 않고 비정상적인 블렌드 모드로 혼합될 수 있습니다.

## 구문

```css-nolint
::view-transition-image-pair(<pt-name-selector>) {
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
::view-transition-image-pair(root) {
  isolation: auto;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [뷰 전환 API](/ko/docs/Web/API/View_Transition_API)
- [뷰 전환 API와 부드럽고 간단한 트랜지션](https://developer.chrome.com/docs/web-platform/view-transitions/)
