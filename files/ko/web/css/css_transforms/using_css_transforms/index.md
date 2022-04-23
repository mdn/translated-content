---
title: CSS 변형 사용하기
slug: Web/CSS/CSS_Transforms/Using_CSS_transforms
tags:
  - 3D
  - Advanced
  - CSS
  - CSS Transforms
  - Graphics
  - Guide
translation_of: Web/CSS/CSS_Transforms/Using_CSS_transforms
---
{{CSSRef}}

**CSS 변형**(transform)은 좌표공간을 변형함으로써 일반적인 문서 흐름을 방해하지 않고 콘텐츠의 형태와 위치를 바꿉니다. 본 가이드는 변형 사용법의 기초를 제시합니다.

CSS 변형은 HTML 요소에 선형 아핀 변형(affine linear transformation)을 적용하는 여러 개의 CSS 속성을 조합해 구현합니다. 변형은 평면과 3D 공간에서의 회전, 확대, 이동, 비틀기를 포함합니다.

> **경고:** [박스 모델](/ko/docs/Web/CSS/CSS_Box_Model)에 따라 배치된 요소만 `transform`을 적용할 수 있습니다. 한 가지 예를 들자면, `display: block` 속성을 가진 요소는 박스 모델을 따릅니다.

## CSS 변형 속성

CSS 변형을 정의할 때 중요한 두 가지 속성은 {{cssxref("transform")}}과 {{cssxref("transform-origin")}}입니다.

- {{cssxref("transform-origin")}}
  - : 원점의 위치를 지정합니다. 기본값은 요소의 중심이며 변경할 수 있습니다. 회전, 확대, 비틀기 등 하나의 점을 기준으로 하는 변형에서 사용합니다.
- {{cssxref("transform")}}
  - : 요소에 적용할 변형을 지정합니다. 여러 개의 변형 목록을 공백으로 구분하여 대입하면 순차적으로 합성한 결과물을 적용합니다. 합성은 오른쪽부터 왼쪽으로 진행합니다.

## 예제

다음 이미지는 변형하지 않은 MDN 로고입니다.

![MDN Logo](https://mdn.mozillademos.org/files/12539/Screen%20Shot%202016-02-16%20at%2015.53.54.png)

### 회전

MDN 로고를 90도 회전합니다.

```html
<img style="transform: rotate(90deg);
            transform-origin: bottom left;"
     src="https://mdn.mozillademos.org/files/12539/Screen%20Shot%202016-02-16%20at%2015.53.54.png">
```

{{EmbedLiveSample('회전', 'auto', 240) }}

### 비틀고 옮기기

MDN 로고를 10도 비틀고 X축으로 150픽셀 옮깁니다.

```html
<img style="transform: skewx(10deg) translatex(150px);
            transform-origin: bottom left;"
     src="https://mdn.mozillademos.org/files/12539/Screen%20Shot%202016-02-16%20at%2015.53.54.png">
```

{{EmbedLiveSample('비틀고_옮기기') }}

## 3D 전용 CSS 속성

3D 공간에서의 CSS 변환은 좀 더 복잡합니다. 우선 원근감을 부여해 3D 공간을 설정한 후에, 2D 요소가 그 안에서 어떻게 행동할지 설정해야 합니다..

### 원근

처음으로 정할 항목은 {{cssxref("perspective")}}입니다. 우리가 입체라고 느낄 수 있는 건 원근감 덕분입니다. 요소가 관찰자에서 멀어질 수록 더 작게 보입니다.

#### Setting perspective

This example shows a cube with the perspective set at different positions. How quick the cube shrinks is defined by the {{ cssxref("perspective") }} property. The smaller its value is, the deeper the perspective is.

##### HTML

The HTML below creates four copies of the same box, with the perspective set at different values.

```html
<table>
  <tbody>
    <tr>
      <th><code>perspective: 250px;</code>
      </th>
      <th><code>perspective: 350px;</code>
      </th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers250">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers350">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th><code>perspective: 500px;</code>
      </th>
      <th><code>perspective: 650px;</code>
      </th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers500">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers650">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

##### CSS

The CSS establishes classes that can be used to set the perspective to different distances. It also includes classes for the container box and the cube itself, as well as each of its faces.

```css
/* Shorthand classes for different perspective values */
.pers250 {
  perspective: 250px;
}

.pers350 {
  perspective: 350px;
}

.pers500 {
  perspective: 500px;
}

.pers650 {
  perspective: 650px;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 200px;
  height: 200px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* Define each face based on direction */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Make the table a little nicer */
th, p, td {
  background-color: #EEEEEE;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
}
```

##### Result

{{EmbedLiveSample('Setting_perspective', 660, 700)}}

다음으로는 {{cssxref("perspective-origin")}} 속성으로 관찰자의 위치를 정해야 합니다. 기본값은 중앙으로, 언제나 충분한 위치는 아닙니다.

#### Changing the perspective origin

This example shows cubes with popular `perspective-origin` values.

##### HTML

```html
<section>

<figure>
  <figcaption><code>perspective-origin: top left;</code></figcaption>
    <div class="container">
     <div class="cube potl">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
     </div>
    </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: top;</code></figcaption>
   <div class="container">
    <div class="cube potm">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: top right;</code></figcaption>
  <div class="container">
    <div class="cube potr">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: left;</code></figcaption>
  <div class="container">
    <div class="cube poml">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: 50% 50%;</code></figcaption>
  <div class="container">
    <div class="cube pomm">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: right;</code></figcaption>
  <div class="container">
    <div class="cube pomr">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: bottom left;</code></figcaption>
  <div class="container">
    <div class="cube pobl">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: bottom;</code></figcaption>
  <div class="container">
    <div class="cube pobm">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: bottom right;</code></figcaption>
  <div class="container">
    <div class="cube pobr">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: -200% -200%;</code></figcaption>
  <div class="container">
    <div class="cube po200200neg">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: 200% 200%;</code></figcaption>
  <div class="container">
    <div class="cube po200200pos">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: 200% -200%;</code></figcaption>
  <div class="container">
    <div class="cube po200200">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

</section>
```

##### CSS

```css
/* perspective-origin values (unique per example) */
.potl {
  perspective-origin: top left;
}
.potm {
  perspective-origin: top;
}
.potr {
  perspective-origin: top right;
}
.poml {
  perspective-origin: left;
}
.pomm {
  perspective-origin: 50% 50%;
}
.pomr {
  perspective-origin: right;
}
.pobl {
  perspective-origin: bottom left;
}
.pobm {
  perspective-origin: bottom;
}
.pobr {
  perspective-origin: bottom right;
}
.po200200neg {
  perspective-origin: -200% -200%;
}
.po200200pos {
  perspective-origin: 200% 200%;
}
.po200200 {
  perspective-origin: 200% -200%;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 100px;
  height: 100px;
  margin: 24px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective: 300px;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* Define each face based on direction */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}
.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}
.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}
.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}
.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Make the layout a little nicer */
section {
  background-color: #EEE;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

##### Result

{{EmbedLiveSample('Changing_the_perspective_origin', '100%', 700)}}

모든 과정을 마쳤다면 3D 공간의 요소를 작업할 수 있습니다.

## 더 보기

- [Using device orientation with 3D Transforms](/en-US/docs/Web/Guide/Events/Using_device_orientation_with_3D_transforms "Using Deviceorientation In 3D Transforms")
