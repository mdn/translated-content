---
title: "@keyframes"
slug: Web/CSS/@keyframes
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{CSSRef}}

**`@keyframes`** [@규칙](/ko/docs/Web/CSS/At-rule)은 개발자가 애니메이션 중간중간의 특정 지점들을 거칠 수 있는 키프레임들을 설정함으로써 CSS 애니메이션 과정의 중간 절차를 제어할 수 있게 합니다. 이를 통해 브라우저가 [transitions](/ko/docs/Web/CSS/CSS_transitions)으로 애니메이션을 처리하는 것 보다 더 세밀하게 중간 동작들을 제어할 수 있습니다.

## 구문

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

### 값

- {{cssxref("custom-ident")}}
  - : keyframe 목록을 식별하는 이름입니다. 이 이름은 CSS 구문에서 생성된 식별자와 일치해야 합니다.
- `from`
  - : 시작 offset인 `0%` 입니다.
- `to`
  - : 마지막 offset인 `100%` 입니다.
- {{cssxref("&lt;percentage&gt;")}}
  - : 전체 애니메이션 시간 중 명시된 keyframe이 발생해야 하는 시점의 %입니다.
- `<timeline-range-name>` {{cssxref("&lt;percentage&gt;")}} {{experimental_inline}}
  - : 지정된 {{cssxref("animation-range")}} 를 통과한 시간 중 지정된 키 프레임이 발생해야 하는 시간의 백분율입니다. 타임라인 범위를 사용하는 애니메이션의 종류에 대한 자세한 사항은 [CSS 스크롤 기반 애니메이션](/ko/docs/Web/CSS/CSS_scroll-driven_animations)을 참고하세요.

## 설명

키프레임을 사용하려면 `@keyframes` 룰을 애니메이션과 키프레임 리스트를 매칭시킬 {{ cssxref("animation-name") }} 속성으로 사용할 이름과 함께 생성합니다. 각 `@keyframes` 룰은 키프레임 선택자의 스타일 리스트를 포함하고 있고, 각 리스트는 각 키프레임이 생성되고 키프레임의 스타일 정보를 포함하고 있는 지점에서 사용할 %로 구성됩니다.

키프레임의 %를 꼭 순서대로 나열하지 않더라도, %의 순서대로 처리됩니다.

JavaScript는 `@keyframes` @규칙을 CSS 오브젝트 모델 인터페이스인 {{domxref("CSSKeyframesRule")}}를 통해서 접근할 수 있습니다.

### 유효한 키프레임 리스트

만약 키프레임이 시작 상태와 끝 애니메이션(이는 `0%`/`from` 과 `100%`/`to`를 말합니다)을 명시하지 않는다면, 브라우저는 처음과 마지막에 현재 존재하는 요소의 스타일을 사용합니다. 이는 요소의 애니메이션을 초기 상태에서 다시 시작하고 되돌아가는 데 사용될 수 있습니다.

만약 키 프레임 룰에 애니메이션이 되지 않는 속성을 포함하면 무시되지만, 애니메이션을 지원하는 속성들은 애니메이션이 됩니다.

### 중복 처리

만약 한개의 이름에 대해서 여러개의 키프레임 셋이 존재하면, 파서가 마지막으로 마주치는 키프레임 셋만 유효합니다. `@keyframes` 룰은 캐스케이드 되지 않기 때문에 한개의 룰 셋 이상을 적용하지 않습니다.

만약 애니메이션들의 시간 offset이 중복된 경우, 해당 %에 대한 모든 `@keyframes` 규칙들이 해당 프레임에 적용됩니다. 동일한 % 값을 가진 여러 `@keyframes` 규칙들은 캐스케이드 됩니다.

### 키 프레임에 속성이 누락된 경우

어떤 키 프레임에도 정의되지 않은 속성들은 중간에 가능한 곳에 삽입되며, 삽입이 가능하지 않은 애니메이션들은 제외됩니다. 예시는 아래와 같습니다.

```css
@keyframes identifier {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%,
  72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
}
```

여기 {{ cssxref("top") }} 속성은 `0%`, `30%`, `100%` 키 프레임을 이용하여 애니메이션 됩니다. {{ cssxref("left") }} 속성은 `0%`, `68%`, `72%`, `100%` 키 프레임을 사용해 애니메이션 됩니다.

### 키 프레임이 여러번 정의 된 경우

키프레임이 여러 번 정의되었지만 영향을 받는 모든 속성이 각 키프레임에 있는 것은 아니라면 이러한 키프레임에 지정된 모든 값이 고려됩니다. 예시는 아래와 같습니다.

```css
@keyframes identifier {
  0% {
    top: 0;
  }
  50% {
    top: 30px;
    left: 20px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
```

이 예제를 보면 `50%` 키프레임에서는 `top: 10px`과 `left: 20px` 만 적용됩니다.

{{ non-standard_inline }} 키 프레임 효과 연속은 Firefox 14부터 지원됩니다. 이 의미는 위 예제의 경우 50% 키 프레임에서 왼쪽 : 20px 값이 고려된다는 의미입니다. 이러한 기능이 스펙에는 아직 정의가 되어있진 않지만, 현재 도입에 대한 토론이 진행 중입니다.

### 키프레임에서의 `!important`

키프레임에서 `!important` 속성을 이용한 정의는 모두 무시됩니다.

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  50% {
    margin-top: 150px !important;
  } /* ignored */
  to {
    margin-top: 100px;
  }
}

@keyframes important2 {
  from {
    margin-top: 50px;
    margin-bottom: 100px;
  }
  to {
    margin-top: 150px !important; /* ignored */
    margin-bottom: 50px;
  }
}
```

## 형식 구문

{{csssyntax}}

## 예제

[CSS 애니메이션](/en-US/CSS/CSS_animations)에서 예제를 참고하세요.

### CSS 애니메이션 예제

예제는 [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations)와 [스크롤 기반 애니메이션으로 스크롤의 요소들 애니메이션 하기](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)를 참고하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("animation-range")}}
- [CSS 스크롤 기반 애니메이션](/ko/docs/Web/CSS/CSS_scroll-driven_animations)
- [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [스크롤 기반 애니메이션으로 스크롤의 요소들 애니메이션 하기](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- {{domxref("AnimationEvent")}}
