---
title: "Window: devicePixelRatio 속성"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

{{domxref("Window")}} 인터페이스의 **`devicePixelRatio`** 는 현재 디스플레이 장치에 대한 '물리적 픽셀' 해상도와 'CSS 픽셀' 해상도의 비율을 반환합니다.

이 값은 픽셀 크기의 비율로도 해석될 수 있습니다. 하나의 'CSS 픽셀' 크기와 하나의 '물리적 픽셀' 크기를 비교한 값입니다. 간단히 말해서, 이것은 브라우저에 단일 CSS 픽셀을 그리기 위해 화면의 실제 픽셀 중 몇 개를 사용해야 하는지 알려줍니다.

이것은 표준 디스플레이에서 렌더링하는 것과 더 많은 화면 픽셀을 사용하여 더 선명한 이미지를 생성하는 HiDPI 혹은 Retina 디스플레이에서 렌더링하는 것의 차이를 다룰 때 유용합니다.

{{domxref("Window.matchMedia", "window.matchMedia()")}}를 사용하여 `devicePixelRatio`의 값이 변경되는지 확인할 수 있습니다. (예를 들어 사용자가 픽셀 밀도가 다른 디스플레이로 창을 드래그하는 경우 발생할 수 있습니다.) [아래 예시](#화면_해상도_혹은_줌_레벨_변경_모니터링)를 참고하시길 바랍니다.

## 값

디스플레이의 물리적 픽셀 해상도와 CSS 픽셀 해상도의 비율을 나타내는 배정밀도 부동 소수점 값입니다. 값이 1이면 기존 96 DPI (일부 플랫폼에서는 76 DPI) 디스플레이를 의미하며, 값이 2이면 HiDPI/Retina 디스플레이로 예측됩니다. 비정상적으로 해상도가 낮은 디스플레이의 경우 혹은 화면의 픽셀 깊이가 표준 해상도인 96 혹은 76 DPI의 두 배보다 높은 경우 다른 값이 반환될 수도 있습니다.

## 예제

### `<canvas>`에서 해상도 수정하기

retina 화면에서 {{htmlelement("canvas")}}가 매우 흐릿하게 보일 수 있습니다. 선명한 이미지를 위해 추가 픽셀 밀도를 얼마나 많이 추가해야 하는지 결정하려면 `window.devicePixelRatio`를 사용하시길 바랍니다.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 디스플레이 크기 (css 픽셀) 를 설정합니다.
const size = 200;
canvas.style.width = `${size}px`;
canvas.style.height = `${size}px`;

// 메모리에서 실제 크기를 설정합니다. (추가 픽셀 밀도를 고려한 스케일 조정)
const scale = window.devicePixelRatio; // retina 화면에서 1로 변경하면 캔버스가 흐릿하게 표시됩니다.
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

// 좌표계를 정규화하여 CSS 픽셀을 사용합니다.
ctx.scale(scale, scale);

ctx.fillStyle = "#bada55";
ctx.fillRect(10, 10, 300, 300);
ctx.fillStyle = "#ffffff";
ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

const x = size / 2;
const y = size / 2;

const textString = "I love MDN";
ctx.fillText(textString, x, y);
```

[![retina 디스플레이에 표시된 이미지에 대한 다른 devicePixelRatio 값의 효과를 나란히 비교합니다.](devicepixelratio_diff.png)](devicepixelratio_diff.png)

### 화면 해상도 혹은 줌 레벨 변경 모니터링

이 예제에서 미디어 쿼리를 설정하고 장치 해상도가 변하는 시점을 관찰하여 새 해상도를 기록합니다.

#### HTML

```html
<div id="container">
  <p>
    이 예제는 페이지를 확대하거나 축소할 때 (혹은 다른 배율이 적용된 화면으로 이동할 때) <code>devicePixelRatio</code> 속성 값에 미치는 영향를 보여줍니다.</p>
    <p>시도해보고 어떤 일이 일어나는지 지켜보시길 바랍니다!</p>
  </p>
</div>
<div id="output"></div>
```

#### CSS

```css
body {
  font:
    22px arial,
    sans-serif;
}

#container {
  border: 2px solid #22d;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #a9f;
}
```

#### JavaScript

문자열 `mqString`은 현재 디스플레이 해상도가 특정 `px`당 장치 도트 수와 일치하는지 확인하는 미디어 쿼리로 설정됩니다.

`media` 변수는 미디어 쿼리 문자열로 초기화되는 {{domxref("MediaQueryList")}} 객체입니다. 문서에 대해 `mqString`을 실행한 결과가 변하면 `media` 객체의 `change` 이벤트가 발생하고 코드가 새 해상도를 기록합니다.

해상도가 변할때 마다, 예제에서는 새로운 해상도에 기반하여 새 미디어 쿼리와 새 `MediaQueryList` 인스턴스를 생성해야 합니다.

```js
let remove = null;
const output = document.querySelector("#output");

const updatePixelRatio = () => {
  if (remove != null) {
    remove();
  }
  const mqString = `(resolution: ${window.devicePixelRatio}dppx)`;
  const media = matchMedia(mqString);
  media.addEventListener("change", updatePixelRatio);
  remove = () => {
    media.removeEventListener("change", updatePixelRatio);
  };

  output.textContent = `devicePixelRatio: ${window.devicePixelRatio}`;
};

updatePixelRatio();
```

#### 결과

예제를 테스트하기 위해 페이지를 확대하거나 축소해보고 `devicePixelRatio`의 기록된 값에 차이가 있는지 확인하길 바랍니다.

{{EmbedLiveSample("화면_해상도_혹은_줌_레벨_변경_모니터링", "100%", 300)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries)
- [미디어 쿼리 사용하기](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS `resolution` media query](/ko/docs/Web/CSS/@media/resolution)
- {{cssxref("image-resolution")}} 속성
