---
title: backface-visibility
slug: Web/CSS/backface-visibility
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`backface-visibility`** 속성은 요소의 뒷면이 사용자를 향할 때 보여야 하는지 지정합니다.

{{EmbedInteractiveExample("pages/css/backface-visibility.html")}}

요소의 뒷면은 앞면의 거울상입니다. 2D 상태에서는 볼 수 없지만 변형을 통해 3D 공간에서 회전되면 노출될 수 있습니다. (2D 변형에는 원근이 없으므로 효과가 없습니다.)

## 구문

```css
/* 키워드 값 */
backface-visibility: visible;
backface-visibility: hidden;

/* 전역 값 */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: unset;
```

`backface-visibility` 속성은 다음 목록의 키워드 중 하나를 선택해 지정할 수 있습니다.

### 값

- `visible`
  - : 뒷면이 사용자를 향하면 보입니다.
- `hidden`
  - : 뒷면이 사용자를 향해도 보이지 않습니다. 요소가 뒤를 향하면 사용자로부터 숨기는 것과 같습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 육면체의 뒷면 비교

아래 예제는 투명한 뒷면의 육면체와 불투명한 뒷면의 육면체를 하나씩 보입니다.

#### HTML

```html
<table>
  <tr>
    <th><code>backface-visibility: visible;</code></th>
    <th><code>backface-visibility: hidden;</code></th>
  </tr>
  <tr>
    <td>
      <div class="container">
        <div class="cube showbf">
          <div class="face front">1</div>
          <div class="face back">2</div>
          <div class="face right">3</div>
          <div class="face left">4</div>
          <div class="face top">5</div>
          <div class="face bottom">6</div>
        </div>
      </div>
      <p>
        Since all faces are partially transparent, the back faces (2, 4, 5) are
        visible through the front faces (1, 3, 6).
      </p>
    </td>
    <td>
      <div class="container">
        <div class="cube hidebf">
          <div class="face front">1</div>
          <div class="face back">2</div>
          <div class="face right">3</div>
          <div class="face left">4</div>
          <div class="face top">5</div>
          <div class="face bottom">6</div>
        </div>
      </div>
      <p>The three back faces (2, 4, 5) are hidden.</p>
    </td>
  </tr>
</table>
```

#### CSS

```css
/* Classes that will show or hide the
   three back faces of the "cube" */
.showbf div {
  backface-visibility: visible;
}

.hidebf div {
  backface-visibility: hidden;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 150px;
  height: 150px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 550px;
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
th,
p,
td {
  background-color: #eeeeee;
  margin: 0px;
  padding: 6px;
  font-family: sans-serif;
  text-align: left;
}
```

#### 결과

{{EmbedLiveSample('육면체의_뒷면_비교', '100%', 360)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 변형 사용하기](/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
