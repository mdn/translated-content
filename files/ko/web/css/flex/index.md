---
title: flex
slug: Web/CSS/flex
---

{{CSSRef}}

**`flex`** [CSS](/ko/docs/CSS) 속성은 하나의 플렉스 아이템이 자신의 컨테이너가 차지하는 공간에 맞추기 위해 크기를 키우거나 줄이는 방법을 설정하는 속성입니다. `flex`는 {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}, {{cssxref("flex-basis")}}의 [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)입니다.

{{EmbedInteractiveExample("pages/css/flex.html")}}

대부분의 경우, `flex`의 값에는 `auto`, `initial`, `none`이나 단위 없는 양의 수를 사용해야 합니다. 각 값의 적용 효과를 보려면 아래 플렉스 컨테이너의 크기를 조절해보세요.

기본적으로 플렉스 아이템은 콘텐츠의 최소 너비 미만으로 줄어들지 않습니다. {{cssxref("min-width")}}나 {{cssxref("min-height")}} 값을 지정해 바꿀 수 있습니다.

## 구문

```css
/* Keyword values */
flex: auto;
flex: initial;
flex: none;

/* One value, unitless number: flex-grow */
flex: 2;

/* One value, length or percentage: flex-basis */
flex: 10em;
flex: 30%;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial;
flex: unset;
```

`flex` 속성은 한 개에서 세 개의 값을 사용해 지정할 수 있습니다.

- **값이 한 개일 때**, 그 값은 다음 중 하나여야 합니다.

  - {{cssxref("&lt;number&gt;")}}를 지정하면 `<flex-grow>`입니다.
  - {{cssxref("&lt;length&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}를 지정하면 `<flex-basis>`입니다.
  - `none`, `auto`, `initial` 중 하나를 지정할 수 있습니다.

- **값이 두 개일때**, 첫 번째 값은 {{cssxref("&lt;number&gt;")}}여야 하며 `<flex-grow>`가 됩니다. 두 번째 값은 다음 중 하나여야 합니다.

  - {{cssxref("&lt;number&gt;")}}를 지정하면 `<flex-shrink>`입니다.
  - {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, 또는 `auto`를 지정하면 `<flex-basis>`입니다.

- **값이 세 개일 때**는 다음 순서를 따라야 합니다.

  1. `<flex-grow>` 에 사용할 {{cssxref("&lt;number&gt;")}}
  2. `<flex-shrink>` 에 사용할 {{cssxref("&lt;number&gt;")}}
  3. `<flex-basis>` 에 사용할 {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, 또는 `auto`

### 값

- `initial`
  - : 아이템 크기가 각각의 `width`와 `height` 속성에 따라 정해집니다. 플렉스 컨테이너의 크기를 넘지 않기 위해 최소 크기로 줄어들 수는 있지만, 남은 공간을 채우려 늘어나지는 않습니다. `flex: 0 1 auto`와 동일합니다.
- `auto`
  - : 아이템 크기가 각각의 `width`와 `height` 속성에 따라 정해집니다. 플렉스 컨테이너의 크기를 넘지 않기 위해 최소 크기로 줄어들 수 있으며, 남은 공간을 채우기 위해 늘어날 수도 있습니다. `flex: 1 1 auto`와 동일합니다.
- `none`
  - : 아이템 크기가 각각의 `width`와 `height` 속성에 따라 정해지며, 컨테이너의 크기에 관계 없이 변하지 않습니다. `flex: 0 0 auto`와 동일합니다.
- `<'flex-grow'>`
  - : 플렉스 아이템의 {{cssxref("flex-grow")}}를 지정합니다. 음수 값은 유효하지 않습니다. 생략 시 기본값은 `0`입니다.
- `<'flex-shrink'>`
  - : 플렉스 아이템의 {{cssxref("flex-shrink")}}를 지정합니다. 음수 값은 유효하지 않습니다. 생략 시 기본값은 `1`입니다.
- `<'flex-basis'>`
  - : 플렉스 아이템의 {{cssxref("flex-basis")}}를 지정합니다. `0`을 지정하려면 `<flex-grow>` 또는 `<flex-shrink>`로 읽히지 않도록 단위를 붙여야 합니다. 생략 시 기본값은 `auto`입니다.

> **참고:** 한 개 또는 두 개의 단위 없는 숫자 값을 사용할 때, `<flex-basis>`의 값은 `auto`가 아니라 `0`이 됩니다. 더 자세한 정보는 [플렉시블 박스 레이아웃 모듈](https://drafts.csswg.org/css-flexbox/#flex-common) 초안에서 확인할 수 있습니다.

### 형식 구문

{{csssyntax}}

## 예제

```css
#flex-container {
  display: flex;
  flex-direction: row;
}

#flex-container > .flex-item {
  flex: auto;
}

#flex-container > .raw-item {
  width: 5rem;
}
```

```html
<div id="flex-container">
  <div class="flex-item" id="flex">Flex box (click to toggle raw box)</div>
  <div class="raw-item" id="raw">Raw box</div>
</div>
```

```js hidden
var flex = document.getElementById("flex");
var raw = document.getElementById("raw");
flex.addEventListener("click", function () {
  raw.style.display = raw.style.display == "none" ? "block" : "none";
});
```

```css hidden
#flex-container {
  width: 100%;
  font-family: Consolas, Arial, sans-serif;
}

#flex-container > div {
  border: 1px solid #f00;
  padding: 1rem;
}

#flex-container > .raw-item {
  border: 1px solid #000;
}
```

### 결과

{{EmbedLiveSample('예제','100%','60')}}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS 플렉스박스 안내서: _[Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS 플렉스박스 안내서: _[Controlling Ratios of flex items along the main axis](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
