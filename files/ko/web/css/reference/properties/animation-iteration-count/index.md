---
title: animation-iteration-count
slug: Web/CSS/Reference/Properties/animation-iteration-count
original_slug: Web/CSS/animation-iteration-count
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

**`animation-iteration-count`** [CSS](/ko/docs/Web/CSS) 속성은 애니메이션 시퀀스가 끝나기 전에 재생되는 횟수를 설정합니다.

{{InteractiveExample("CSS Demo: animation-iteration-count")}}

```css interactive-example-choice
animation-iteration-count: 0;
```

```css interactive-example-choice
animation-iteration-count: 2;
```

```css interactive-example-choice
animation-iteration-count: 1.5;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div>Animation <span id="playstatus"></span></div>
  <div id="example-element">Select a count to start!</div>
</section>
```

```css interactive-example
#example-element {
  align-items: center;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333;
  color: white;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  margin: auto;
  margin-left: 0;
  width: 150px;
}

#playstatus {
  font-weight: bold;
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

```js interactive-example
"use strict";

window.addEventListener("load", () => {
  const el = document.getElementById("example-element");
  const status = document.getElementById("playstatus");

  function update() {
    status.textContent = "delaying";
    el.className = "";
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.className = "animating";
      });
    });
  }

  el.addEventListener("animationstart", () => {
    status.textContent = "playing";
  });

  el.addEventListener("animationend", () => {
    status.textContent = "finished";
  });

  const observer = new MutationObserver(() => {
    update();
  });

  observer.observe(el, {
    attributes: true,
    attributeFilter: ["style"],
  });

  update();
});
```

모든 애니메이션 속성을 한 번에 설정한다면 단축 속성 {{cssxref("animation")}}를 사용하면 편리합니다.

## 구문

```css
/* Keyword value */
animation-iteration-count: infinite;

/* <number> values */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* Multiple values */
animation-iteration-count: 2, 0, infinite;

/* Global values */
animation-iteration-count: inherit;
animation-iteration-count: initial;
animation-iteration-count: revert;
animation-iteration-count: revert-layer;
animation-iteration-count: unset;
```

**`animation-iteration-count`** 속성은 값으로 하나 혹은 여러 개의 쉼표로 구분한 값을 지정합니다.

### 값

- `infinite`
  - : 애니메이션이 계속 반복됩니다.
- `{{cssxref("&lt;number&gt;")}}`
  - : 애니메이션이 반복되는 횟수입니다. 기본값은 1로 지정되어 있습니다. 애니메이션 주기의 일부분만 재생하기 위해 정수가 아닌 값을 지정할 수 있습니다. 예를 들어, `0.5`는 애니메이션 주기의 절반만 재생합니다. 음수 값은 유효하지 않습니다.

> [!NOTE]
> `animation-*` 속성에 여러 개의 쉼표로 구분된 값을 지정하면 {{cssxref("animation-name")}} 속성에 지정된 애니메이션에 할당되는 값의 수에 따라 다른 방식으로 지정됩니다. 자세한 내용은 [여러 애니메이션 속성 값 설정](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values)을 참조하십시오.

> [!NOTE]
> [CSS 스크롤 기반 애니메이션](/ko/docs/Web/CSS/CSS_scroll-driven_animations)을 만들 때, `animation-iteration-count` 속성을 지정하면 타임라인이 진행되는 동안 애니메이션이 해당 횟수만큼 반복됩니다. `animation-iteration-count` 속성을 지정하지 않으면, 애니메이션은 한 번만 실행됩니다. `infinite`는 스크롤 기반 애니메이션에서 유효한 값이지만 애니메이션이 작동하지 않게 됩니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 반복 횟수 설정하기

이 애니메이션은 10번 실행됩니다.

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-iteration-count: 10;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### 결과

애니메이션을 확인하려면 직사각형에 마우스를 가져가세요.

{{EmbedLiveSample("Setting iteration count","100%","250")}}

다른 예제들은 [CSS animations](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations)을 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 애니메이션 사용하기](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- 애니메이션과 관련된 다른 CSS 속성: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
