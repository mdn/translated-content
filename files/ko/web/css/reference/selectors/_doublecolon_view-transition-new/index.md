---
title: ::view-transition-new
slug: Web/CSS/Reference/Selectors/::view-transition-new
original_slug: Web/CSS/::view-transition-new
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{SeeCompatTable}}

**`::view-transition-new`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 전환 후의 상태를 나타내는 스냅샷, 즉 뷰 전환의 새로운 뷰 상태를 나타냅니다.

뷰 전환이 이루어지는 동안, `::view-transition-new` 는 [뷰 전환 의사 요소 트리](/ko/docs/Web/API/View_Transitions_API/Using#the_view_transition_pseudo-element_tree) 에 기술된 것처럼 연관된 의사 요소 트리에 포함됩니다. 이는 {{cssxref("::view-transition-image-pair")}} 의 자식 요소로만 존재하고, 다른 자식 요소는 가질 수 없습니다.

이 속성은 재배치된 요소이기 때문에, {{cssxref("object-fit")}} 와 {{cssxref("object-position")}} 같은 속성으로 조작할 수 있습니다. 이 요소의 자연 치수는 콘텐츠의 크기와 동일합니다.

UA 스타일시트에서 다음과 같은 스타일을 기본으로 부여 받습니다.

```css
:root::view-transition-old(*),
:root::view-transition-new(*) {
  position: absolute;
  inset-block-start: 0;
  inline-size: 100%;
  block-size: auto;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}

/* 2개의 이미지가 존재할 때 블렌딩을 위한 키프레임 */
@keyframes -ua-mix-blend-mode-plus-lighter {
  from {
    mix-blend-mode: plus-lighter;
  }
  to {
    mix-blend-mode: plus-lighter;
  }
}

@keyframes -ua-view-transition-fade-in {
  from {
    opacity: 0;
  }
}
```

> [!NOTE]
> 추가적인 뷰 전환 스타일은 `::view-transition-new` 의 애니메이션을 설정할 수 있습니다. 뷰 전환 스타일은 뷰 전환이 이루어지는 동안 동적으로 생성됩니다. 더 많은 정보는 [setup transition pseudo-elements](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements) 와 [update pseudo-element styles](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles) 섹션 명세서를 참고하여 확인할 수 있습니다.

## 구문

```css-nolint
::view-transition-new(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` 는 다음 값들을 가질 수 있습니다.

- `*`
  - : 의사 요소를 모든 뷰 전환 그룹에 대해 일치하도록 합니다.
- `root`
  - : 의사 요소를 사용자 에이전트가 생성한 기본 `root` 뷰 전환 스냅샷 그룹과 일치하도록 합니다. 이 그룹은 페이지 전체의 뷰 전환을 포함하고, {{cssxref("view-transition-name")}} 속성을 통해 고유한 뷰 전환 스냅샷 그룹에 할당되지 않은 모든 요소를 포함합니다.
- {{cssxref("custom-ident")}}
  - : {{cssxref("view-transition-name")}} 속성을 통해 의사 요소를 주어진 {{cssxref("custom-ident")}} 로부터 할당받아 생성된 특정 뷰 전환 스냅샷 그룹과 일치하도록 합니다.

## 예제

```css
figcaption {
  view-transition-name: figure-caption;
}

@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [뷰 전환 API](/ko/docs/Web/API/View_Transition_API)
- [뷰 전환 API와 부드럽고 간단한 트랜지션](https://developer.chrome.com/docs/web-platform/view-transitions/)
