---
title: box-sizing
slug: Web/CSS/box-sizing
---

{{CSSRef}}

**`box-sizing`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 너비와 높이를 계산하는 방법을 지정합니다.

{{EmbedInteractiveExample("pages/css/box-sizing.html")}}

CSS 박스 모델의 기본값에서, 지정한 너비와 높이는 요소의 콘텐츠 박스 크기에만 적용됩니다. 요소에 테두리나 안쪽 여백이 있으면 너비와 높이에 더해서 화면에 그립니다. 따라서 크기를 설정할 때, 원하는 크기를 얻으려면 테두리나 안쪽 여백을 고려해야 합니다.

`box-sizing` 속성을 사용해 이 방식을 바꿀 수 있습니다.

- `content-box`는 기본 CSS 박스 크기 결정법을 사용합니다. 요소의 너비를 100 픽셀로 설정하면 콘텐츠 영역이 100 픽셀 너비를 가지고, 테두리와 안쪽 여백은 이에 더해집니다.
- `border-box`는 테두리와 안쪽 여백의 크기도 요소의 크기로 고려합니다. 너비를 100 픽셀로 설정하고 테두리와 안쪽 여백을 추가하면, 콘텐츠 영역이 줄어들어 총 너비 100 픽셀을 유지합니다. 대부분의 경우 이 편이 크기를 조절할 때 쉽습니다.

## 구문

`box-sizing` 속성은 다음 키워드 중 하나로 지정할 수 있습니다.

### 값

- `content-box`
  - : CSS 표준이 정의한 초기 기본값. {{Cssxref("width")}}와 {{Cssxref("height")}} 속성이 콘텐츠 영역만 포함하고 안팎 여백과 테두리는 포함하지 않습니다. 즉 `.box {width: 350px; border: 10px solid black;}`을 적용한 요소의 너비는 `370px`입니다.

요소의 크기는 너비 = 콘텐츠 너비, 높이 = 콘텐츠 높이로 계산하고 테두리와 안쪽 여백은 식에 넣지 않습니다.

- `border-box`

  - : {{Cssxref("width")}} 와 {{Cssxref("height")}} 속성이 안쪽 여백과 테두리는 포함하고, 바깥 여백은 포함하지 않습니다. 안쪽 여백과 테두리가 요소 상자 안에 위치함을 유의하세요. 즉 `.box {width: 350px; border: 10px solid black;}`을 적용한 요소의 너비는 `350px`입니다. 콘텐츠 영역의 크기는 음수일 수 없으므로 `border-box`를 사용해 요소를 사라지게 할 수는 없습니다.

  요소의 크기는 너비 = 테두리 + 안쪽 여백 + 콘텐츠 너비, 높이 = 테두리 + 안쪽 여백 + 콘텐츠 높이로 계산합니다.

### 형식 구문

{{csssyntax}}

## 예제

다음 예제는 두 개의 동일한 요소의 크기가 서로 다른 `box-sizing` 값으로 어떻게 달라지는지 보입니다.

### HTML

```html
<div class="content-box">Content box</div>
<br />
<div class="border-box">Border box</div>
```

### CSS

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* Total width: 160px + (2 * 20px) + (2 * 8px) = 216px
     Total height: 80px + (2 * 20px) + (2 * 8px) = 136px
     Content box width: 160px
     Content box height: 80px */
}

.border-box {
  box-sizing: border-box;
  /* Total width: 160px
     Total height: 80px
     Content box width: 160px - (2 * 20px) - (2 * 8px) = 104px
     Content box height: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

### 결과

{{EmbedLiveSample('예제', 'auto', 300)}}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 기본 박스 모델](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
