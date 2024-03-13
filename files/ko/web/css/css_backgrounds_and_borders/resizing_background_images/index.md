---
title: 배경 이미지 크기 조정하기
slug: Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images
---

{{cssref}}

CSS 배경 이미지의 기본 설정값에서는 원본 이미지가 크기 변화 없이 바둑판식으로 배열됩니다. {{cssxref("background-size")}} 속성에 가로와 세로 크기를 지정해 크기를 바꿀 수 있습니다. 이미지는 원하는대로 확대할 수도, 줄일 수도 있습니다.

## 큰 이미지 바둑판식 배열

2982x2808의 커다란 Firefox 이미지를 가지고 있다고 해보겠습니다. 모종의 이유(끔찍하게 잘못된 사이트 디자인 등)로 300x300 픽셀 요소에 저 이미지 4개를 바둑판식으로 보여야 합니다. `background-size`와 고정값 150 픽셀로 목표를 달성할 수 있습니다.

### HTML

```html
<div class="tiledBackground"></div>
```

### CSS

```css
.tiledBackground {
  background-image: url(firefox_logo.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

### Result

{{EmbedLiveSample("큰_이미지_바둑판식_배열", 340, 340)}}

## 이미지 늘리기

가로와 세로 크기를 각각 지정할 수도 있습니다.

```css
background-size: 300px 150px;
```

결과는 다음과 같습니다.

![](ss2.png)

## 작은 이미지 키우기

반대로 배경 이미지를 키울 수도 있습니다. 다음 코드는 32x32 픽셀 파비콘을 300x300 픽셀로 늘린 결과입니다.

![](ss3.png)

```css
.square2 {
  background-image: url(favicon.png);
  background-size: 300px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
```

보시다시피 CSS는 이미지 파일 이름을 제외하면 동일합니다.

## 특별한 값: "contain" 과 "cover"

길이를 나타내는 {{cssxref("&lt;length&gt;")}} 값 대신, {{ cssxref("background-size") }} CSS 속성에 `contain` 과 `cover` 두개의 특별한 값을 지정할 수 있습니다. 살펴봅시다.

### `contain`

`contain` 값을 지정하면, 배경 이미지의 가로, 세로 모두 요소보다 작다는 조건하에 가능한 크게 조정됩니다. 이미지의 가로, 세로 비율은 유지됩니다. 따라서 배경 이미지의 크기는 요소의 크기보다 항상 작거나 같습니다. 아래 예제의 크기를 조절해서 실제로 어떻게 동작하는지 확인해보세요.

#### HTML

```html
<div class="bgSizeContain">
  <p>Try resizing this element!</p>
</div>
```

#### CSS

```css
.bgSizeContain {
  background-image: url(firefox_logo.png);
  background-size: contain;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}
```

#### 결과

{{ EmbedLiveSample('contain', 250, 250) }}

### `cover`

값을 `cover` 로 지정하면 배경이미지의 가로, 세로 길이 모두 요소보다 크다는 조건하에 가능한 배경 이미지를 작게 조정합니다. 가로, 세로 비율은 유지됩니다. 따라서 배경 이미지의 크기는 요소의 크기보다 항상 크거나 같습니다. 아래 예제의 크기를 조절해서 실제로 어떻게 동작하는지 확인해보세요.

#### HTML

```html
<div class="bgSizeCover">
  <p>Try resizing this element!</p>
</div>
```

#### CSS

```css
.bgSizeCover {
  background-image: url(firefox_logo.png);
  background-size: cover;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}
```

#### 결과

{{ EmbedLiveSample('cover', 250, 250) }}

## 같이 보기

- {{ cssxref("background-size") }}
- {{ cssxref("background") }}
- [Scaling of SVG backgrounds](/ko/docs/Web/CSS/Scaling_of_SVG_backgrounds)
