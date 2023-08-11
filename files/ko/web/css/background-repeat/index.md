---
title: background-repeat
slug: Web/CSS/background-repeat
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`background-repeat`** 속성은 배경 이미지의 반복 방법을 지정합니다. 가로축 및 세로축을 따라 반복할 수 있고, 아예 반복하지 않을 수도 있습니다.

{{EmbedInteractiveExample("pages/css/background-repeat.html")}}

반복한 이미지는 기본값에선 요소 크기에 따라 잘릴 수 있지만, 잘리지 않도록 배경 이미지 크기를 조절하거나(`round`) 끝에서 끝까지 고르게 분배(`space`)할 수 있습니다.

## 구문

```css
/* 키워드 값 */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* 2개 값 구문: 가로 | 세로 */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* 전역 값 */
background-repeat: inherit;
background-repeat: initial;
background-repeat: unset;
```

### 값

- `<repeat-style>`

  - : 한 개 값 구문은 두 개 값 구문의 단축 형태입니다.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><strong>한 개 값</strong></td>
          <td><strong>두 개 값</strong></td>
        </tr>
        <tr>
          <td><code>repeat-x</code></td>
          <td><code>repeat no-repeat</code></td>
        </tr>
        <tr>
          <td><code>repeat-y</code></td>
          <td><code>no-repeat repeat</code></td>
        </tr>
        <tr>
          <td><code>repeat</code></td>
          <td><code>repeat repeat</code></td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td><code>space space</code></td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td><code>round round</code></td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td><code>no-repeat no-repeat</code></td>
        </tr>
      </tbody>
    </table>

    두 개 값 구문의 앞쪽은 가로 반복 방법을, 뒤쪽은 세로 반복 방법을 설정합니다. 각 방법의 동작 방식은 아래 표와 같습니다.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>요소의 배경 영역을 채울 때까지 이미지를 반복합니다. 마지막 반복 이미지가 넘칠 경우 잘라냅니다.</td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>요소가 잘리지 않을 만큼 이미지를 반복합니다. 제일 처음과 마지막 반복 이미지는 요소의 양쪽 끝에 고정되고, 각 이미지 사이에 남은 여백을 고르게 분배합니다. 잘리지 않고 배치할 수 있는 이미지가 단 한 장인 경우가 아니라면 {{cssxref("background-position")}} 속성은 무시합니다. <code>space</code>를 사용했는데 이미지가 잘리는 경우는 그 크기가 너무 커서 한 장 조차 넣을 수 없는 경우뿐입니다.</td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>가용 영역이 늘어나면 반복 이미지도 늘어나 여백을 남기지 않습니다. 이미지를 하나 더 추가할 공간이 생기면 (남은 공간 >= 이미지 너비의 절반) 비로소 반복 횟수를 하나 추가합니다. 이 때, 원래 존재하던 이미지는 모두 줄어들어 새로운 이미지를 위한 공간을 확보합니다. 예시: 원래 너비가 260px이고, 세 번 반복된 이미지는 각자 300px 너비가 될 때까지 늘어날 수 있습니다. 그 후에는 이미지를 추가하고, 각자 225px로 줄어듭니다.</td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>이미지를 반복하지 않습니다. 따라서 배경 이미지 영역이 다 차지 않을 수 있습니다. 반복하지 않은 이미지의 위치는 {{cssxref("background-position")}} CSS속성이 설정합니다.</td>
        </tr>
      </tbody>
    </table>

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<ol>
  <li>
    no-repeat
    <div class="one"></div>
  </li>
  <li>
    repeat
    <div class="two"></div>
  </li>
  <li>
    repeat-x
    <div class="three"></div>
  </li>
  <li>
    repeat-y
    <div class="four"></div>
  </li>
  <li>
    space
    <div class="five"></div>
  </li>
  <li>
    round
    <div class="six"></div>
  </li>
  <li>
    repeat-x, repeat-y (multiple images)
    <div class="seven"></div>
  </li>
</ol>
```

### CSS

```css
/* Shared for all DIVS in example */
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url(starsolid.gif);
  width: 160px;
  height: 70px;
}

/* Background repeats */
.one {
  background-repeat: no-repeat;
}
.two {
  background-repeat: repeat;
}
.three {
  background-repeat: repeat-x;
}
.four {
  background-repeat: repeat-y;
}
.five {
  background-repeat: space;
}
.six {
  background-repeat: round;
}

/* Multiple images */
.seven {
  background-image: url(starsolid.gif),
    url(https://developer.mozilla.org/static/img/favicon32.png);
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

### 결과

{{EmbedLiveSample('예제', 240, 560)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [한 번에 여러 배경 사용하기](/ko/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
