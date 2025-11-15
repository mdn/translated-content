---
title: 접근성을 위한 미디어 쿼리 사용하기
slug: Web/CSS/Guides/Media_queries/Using_for_accessibility
original_slug: Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility
l10n:
  sourceCommit: f7daf15512ea736498837b68bcc36d82d6a323f4
---

**미디어쿼리**(**Media Queries**)는 장애를 가진 사용자가 웹사이트를 더 쉽게 이해할 수 있도록 도울 수 있습니다.

## 애니메이션 동작 축소하기(Reduced Motion)

깜빡이거나 반짝이는 애니메이션은 주의력결핍 과잉행동증후군(ADHD)와 같은 인지 문제를 가진 사람들에게 문제가 될 수 있습니다. 이러한 종류의 애니메이션 동작들은 전정편두통, 뇌전증, 편두통과 광과민증을 유발할 수 있습니다.

또한, 이 애니메이션 동작을 줄이는 방법을 통해 배터리가 부족한 사람이나 보급형 스마트폰 및 컴퓨터를 사용하는 사람들에게 도음을 줄 수 있습니다.

### 문법

- `no-preference`
  - : 사용자가 시스템에 관련된 설정을 하지 않았다는 것을 의미합니다.
- `reduce`
  - : 사용자가 시스템에 애니메이션 동작을 최소화하도록 설정하였다는 것을 의미합니다. 가급적이면 필수적이지 않은 동작은 모두 제거됩니다.

### 예제

이 예제는 [접근성 환경 설정](/ko/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)에서 축소 모션을 활성화시키지 않았다면 난잡한 애니메이션이 실행됩니다.

#### HTML

```html
<div class="animation">animated box</div>
```

#### CSS

```css
.animation {
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
```

`prefers-reduced-motion` 의 값은 "none" 이 아닌 `reduce` 입니다. 이 설정은 모든 애니메이션이 삭제되어야 한다는 것이 아니라, `* {animation: none !important;}` 을 사용하여야 달성할 수 있다는 것을 의미합니다. 오히려, 사용자는 애니메이션이 기능이나 전달될 정보가 필수적이지 않는 한 사용자의 상호 작용으로 트리거되는 애니메이션을 포함한 모션 애니메이션이 비활성화되는 것을 기대합니다 (참고: [WCAG: 상호작용으로부터의 애니메이션](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

## 같이 보기

- [`prefers-contrast`](/ko/docs/Web/CSS/@media/prefers-contrast): 유저의 대비 선호도를 기반으로한 페이지 스타일 조정
- [`prefers-reduced-transparency`](/ko/docs/Web/CSS/@media/prefers-reduced-transparency)
- [`prefers-color-scheme`](/ko/docs/Web/CSS/@media/prefers-color-scheme)
- [`inverted-colors`](/ko/docs/Web/CSS/@media/inverted-colors)
- [모션 민감도를 고려한 축소된 모션 디자인](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
