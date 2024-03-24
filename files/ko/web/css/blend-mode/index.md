---
title: <blend-mode>
slug: Web/CSS/blend-mode
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`<blend-mode>`** [자료형](/ko/docs/Web/CSS/CSS_Types)은 요소가 겹칠 경우 색상이 어떻게 나타나야 하는지 정의합니다. {{cssxref("background-blend-mode")}}와 {{cssxref("mix-blend-mode")}} 속성에서 사용합니다.

최종 색상은 혼합 모드를 적용한 레이어 각각의 픽셀 하나씩에 대해 전경색과 배경색을 취한 후 모드에 따라 계산을 수행하여 나온 새로운 값입니다.

## 구문

`<blend-mode>` 자료형은 다음 키워드 값 중 하나를 선택해 지정합니다.

### Values

- `normal`
  - : 배경색에 상관하지 않고 최상단 색을 사용합니다.
    두 장의 불투명한 종이를 겹친 것과 같습니다.
- `multiply`
  - : 최종 색은 전경과 배경색을 곱한 값입니다.
    검은 레이어는 최종 레이어를 검은 색으로 만들고, 하얀 레이어는 아무런 변화도 주지 않습니다.
    투명한 필름에 프린트한 이미지를 서로 겹친 것과 같습니다.
- `screen`
  - : 최종 색은 전경과 배경색을 각각 반전한 후 서로 곱해 나온 값을 다시 반전한 값입니다.
    검은 레이어는 아무런 변화도 주지 않고, 하얀 레이어는 최종 레이어를 하얗게 만듭니다.
    프로젝터 두 대로 이미지를 겹친 것과 같습니다.
- `overlay`
  - : 배경색이 더 어두운 경우 `multiply`, 더 밝은 경우 `screen`을 적용합니다.
    `hard-light`와 같지만 배경과 전경을 뒤집은 것입니다.
- `darken`
  - : 최종 색은 각각의 색상 채널에 대해 제일 어두운 값을 취한 결과입니다.
- `lighten`
  - : 최종 색은 각각의 색상 채널에 대해 제일 밝은 값을 취한 결과입니다.
- `color-dodge`
  - : 최종 색은 배경색을 전경색의 역으로 나눈 결과입니다.
    검은 전경색은 아무런 변화도 주지 않습니다. 전경색이 배경색의 역인 경우 제일 밝은 색이 됩니다.
    `screen`과 유사하지만, 전경색의 밝기가 배경색과 동일하기만 해도 최대의 밝기를 가진 색을 반환합니다.
- `color-burn`
  - : 최종 색은 배경색을 반전한 후 전경색으로 나누고, 다시 반전한 결과입니다.
    하얀 전경색은 아무런 변화도 주지 않습니다. 전경색이 배경색의 역인 경우 결과는 검은색입니다.
    `multiply`와 유사하지만, 전경색의 밝기가 배경색의 역과 동일하기만 해도 검은색을 반환합니다.
- `hard-light`
  - : 전경색이 더 어두운 경우 `multiply`, 더 밝은 경우 `screen`을 적용합니다.
    `overlay`와 같지만 배경과 전경을 뒤집은 것입니다.
    배경색에 스포트라이트를 "강렬하게" 비춘 효과와 유사합니다.
- `soft-light`
  - : `hard-light`와 유사하지만 더 부드럽습니다.
    `hard-light`와 비슷하게 동작합니다.
    배경색에 스포트라이트를 산란시켜 비춘 효과와 유사합니다.
- `difference`
  - : 최종 색은 두 색상 중 더 어두운 색을 밝은 색에서 뺀 결과입니다.
    검은 레이어는 아무런 변화도 주지 않고, 흰 레이어로는 다른 레이어의 색을 반전한 효과를 냅니다.
- `exclusion`
  - : `difference`와 유사하지만 더 적은 대비를 가진 색을 반환합니다.
    `difference`와 마찬가지로 검은 레이어는 아무런 변화도 주지 않고, 흰 레이어로는 다른 레이어의 색을 반전한 효과를 냅니다.
- `hue`
  - : 최종 색은 전경색의 색조를 가지며 배경색의 채도와 밝기를 가집니다.
- `saturation`
  - : 최종 색은 전경색의 채도를 가지며 배경색의 색조와 밝기를 가집니다.
    색조 없는 순수한 회색 배경으로는 아무런 효과도 없습니다.
- `color`
  - : 최종 색은 전경색의 색조와 채도를 가지며 배경색의 밝기를 가집니다.
    회색조를 유지하므로 전경을 색칠할 때 사용할 수 있습니다.
- `luminosity`
  - : 최종 색은 전경색의 밝기를 가지며 배경색의 색조와 채도를 가집니다.
    `color`와 동일하지만 배경과 전경을 뒤집은 것입니다.

## Description

For each pixel among the layers to which it is applied, a blend mode takes the colors of the foreground and the background, performs a calculation on them, and returns a new color value.

Changes between blend modes are not interpolated. Any change occurs immediately.

## Formal syntax

{{csssyntax}}

## Examples

### Example using "normal"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: normal;
}
```

{{ EmbedLiveSample('Example using "normal"', "300", "350") }}

### Example using "multiply"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: multiply;
}
```

{{ EmbedLiveSample('Example using "multiply"', "300", "350") }}

### Example using "screen"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

{{ EmbedLiveSample('Example using "screen"', "300", "350") }}

### Example using "overlay"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: overlay;
}
```

{{ EmbedLiveSample('Example using "overlay"', "300", "350") }}

### Example using "darken"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: darken;
}
```

{{ EmbedLiveSample('Example using "darken"', "300", "350") }}

### Example using "lighten"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: lighten;
}
```

{{ EmbedLiveSample('Example using "lighten"', "300", "350") }}

### Example using "color-dodge"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color-dodge;
}
```

{{ EmbedLiveSample('Example using "color-dodge"', "300", "350") }}

### Example using "color-burn"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color-burn;
}
```

{{ EmbedLiveSample('Example using "color-burn"', "300", "350") }}

### Example using "hard-light"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: hard-light;
}
```

{{ EmbedLiveSample('Example using "hard-light"', "300", "350") }}

### Example using "soft-light"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: soft-light;
}
```

{{ EmbedLiveSample('Example using "soft-light"', "300", "350") }}

### Example using "difference"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: difference;
}
```

{{ EmbedLiveSample('Example using "difference"', "300", "350") }}

### Example using "exclusion"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: exclusion;
}
```

{{ EmbedLiveSample('Example using "exclusion"', "300", "350") }}

### Example using "hue"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: hue;
}
```

{{ EmbedLiveSample('Example using "hue"', "300", "350") }}

### Example using "saturation"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: saturation;
}
```

{{ EmbedLiveSample('Example using "saturation"', "300", "350") }}

### Example using "color"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color;
}
```

{{ EmbedLiveSample('Example using "color"', "300", "350") }}

### Example using "luminosity"

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: luminosity;
}
```

{{ EmbedLiveSample('Example using "luminosity"', "300", "350") }}

### Blend mode comparison

In the following example, we have a `<div>` with two background images set on it — a Firefox logo on top of a linear gradient. Below it, we have a provided a `<select>` menu that allows you to change the `background-blend-mode` applied to the `<div>`, allowing you to compare the different blend mode effects.

#### HTML

```html
<div></div>
<p>Choose a blend-mode:</p>
<select>
  <option selected>normal</option>
  <option>multiply</option>
  <option>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background:
    url(https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png)
      no-repeat center,
    linear-gradient(to bottom, blue, orange);
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const divElem = document.querySelector("div");

selectElem.addEventListener("change", () => {
  divElem.style.backgroundBlendMode = selectElem.value;
});
```

#### Result

{{EmbedLiveSample('Blend_mode_comparison', '100%', 400)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}

Description to various blend modes on other website:

- [Blend modes](https://en.wikipedia.org/wiki/Blend_modes) on Wikipedia
- [Blending modes in Adobe Photoshop](https://helpx.adobe.com/photoshop/using/blending-modes.html) by Adobe
