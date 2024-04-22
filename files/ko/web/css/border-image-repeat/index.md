---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
---

{{CSSRef}}

**`border-image-repeat`** [CSS](/ko/docs/Web/CSS) 속성은 원본 이미지의 [모서리 영역](/ko/docs/Web/CSS/border-image-slice#edge_region)을 요소의 [테두리 이미지](/ko/docs/Web/CSS/border-image) 크기에 맞춰 조절할 때 사용할 방법을 지정합니다.

{{EmbedInteractiveExample("pages/css/border-image-repeat.html")}}

## 구문

```css
/* 키워드 값 */
border-image-repeat: stretch;
border-image-repeat: repeat;
border-image-repeat: round;
border-image-repeat: space;

/* 세로방향 | 가로방향 */
border-image-repeat: round stretch;

/* 전역 값 */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: unset;
```

`border-image-repeat` 속성은 한 개 또는 두 개의 값을 사용해 지정할 수 있습니다.

- **한 개의 값**을 지정하면 **모든 네 면**이 같은 방식을 사용합니다.
- **두 개의 값**을 지정하면, 첫 번째 값은 **위와 아래**, 두 번째 값은 **왼쪽과 오른쪽 면**의 방식을 지정합니다.

### 값

- `stretch`
  - : 원본 이미지의 모서리 영역을 늘리거나 줄여 간격을 채웁니다.
- `repeat`
  - : 원본 이미지의 모서리 영역을 타일처럼 반복해 간격을 채웁니다. 크기가 맞지 않으면 마지막 이미지는 잘릴 수 있습니다.
- `round`
  - : 원본 이미지의 모서리 영역을 타일처럼 반복해 간격을 채웁니다. 크기가 맞지 않으면 늘어나거나 줄어들 수 있습니다.
- `space`
  - : 원본 이미지의 모서리 영역을 타일처럼 반복해 간격을 채웁니다. 크기가 맞지 않으면 각 타일에 균등하게 공백을 배치합니다.

### 형식 구문

{{csssyntax}}

## 예제

### CSS

```css
#bordered {
  width: 12rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 40px solid;
  border-image: url("border.png") 27;
  border-image-repeat: stretch; /* 라이브 샘플에서 바꿀 수 있습니다 */
}
```

```html hidden
<div id="bordered">저한테 다양한 테두리 반복 속성을 써보세요!</div>

<select id="repetition">
  <option value="stretch">stretch</option>
  <option value="repeat">repeat</option>
  <option value="round">round</option>
  <option value="space">space</option>
  <option value="stretch repeat">stretch repeat</option>
  <option value="space round">space round</option>
</select>
```

```js hidden
var repetition = document.getElementById("repetition");
repetition.addEventListener("change", function (evt) {
  document.getElementById("bordered").style.borderImageRepeat =
    evt.target.value;
});
```

{{EmbedLiveSample("예제", "auto", 200)}}

## 명세

{{Specifications}}{{cssinfo}}

## 브라우저 호환성

{{Compat}}
