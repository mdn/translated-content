---
title: scroll-padding
slug: Web/CSS/Reference/Properties/scroll-padding
original_slug: Web/CSS/scroll-padding
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

**`scroll-padding`** [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties)은 {{cssxref("padding")}} 속성이 요소의 안쪽 여백을 설정하는 것처럼, 요소의 모든 측면에서의 스크롤 안쪽 여백을 한번에 정의합니다.

{{InteractiveExample("CSS Demo: scroll-padding")}}

```css interactive-example-choice
scroll-padding: 0;
```

```css interactive-example-choice
scroll-padding: 20px;
```

```css interactive-example-choice
scroll-padding: 2em;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="scroller" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example .info {
  inline-size: 100%;
  padding: 0.5em 0;
  font-size: 90%;
  writing-mode: vertical-rl;
}

.scroller {
  text-align: left;
  height: 250px;
  width: 270px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: y mandatory;
}

.scroller > div {
  flex: 0 0 250px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.scroller > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

`scroll-padding-*` 속성은 스크롤 포트의 최적화된 가시 영역에 대한 오프셋을 설정합니다. 이 영역은 사용자의 시야에 요소를 위치시키기 위한 타겟 영역으로 사용됩니다. 이는 작성자는 다른 콘텐츠 (위치가 고정된 툴바 혹은 사이드바 등)에 가려진 스크롤 포트의 영역을 제외하거나 타겟 요소와 스크롤 포트 가장자리 사이에 더 많은 여백을 둘 수 있습니다.

## 구성 속성

이 속성은 다음 CSS 속성의 단축 속성입니다.

- {{CSSXref("scroll-padding-bottom")}}
- {{CSSXref("scroll-padding-left")}}
- {{CSSXref("scroll-padding-right")}}
- {{CSSXref("scroll-padding-top")}}

## 구문

```css
/* 키워드 값 */
scroll-padding: auto;

/* <length> 값 */
scroll-padding: 10px;
scroll-padding: 1em 0.5em 1em 1em;
scroll-padding: 10%;

/* 전역 값 */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: revert;
scroll-padding: revert-layer;
scroll-padding: unset;
```

### 값

- {{cssxref("&lt;length-percentage&gt;")}}
  - : 유효한 {{cssxref("&lt;length&gt;")}} 혹은 {{cssxref("&lt;percentage&gt;")}} 값인 스크롤 포트의 가장자리로부터 상응하는 안쪽 간격입니다.
- `auto`
  - : 사용자 에이전트로부터 설정된 오프셋 값입니다. 이 값은 일반적으로 `0px` 이지만, 0이 아닌 값이 더 적합하다고 판단될 경우 사용자 에이전트가 이를 자유롭게 감지하고 다른 값을 사용할 수 있습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 스크롤 스냅](/ko/docs/Web/CSS/CSS_scroll_snap)
- [CSS 스크롤 스냅으로 능숙하게 스크롤 제어하기](https://web.dev/articles/css-scroll-snap)
