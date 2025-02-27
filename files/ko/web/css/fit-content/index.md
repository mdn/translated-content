---
title: fit-content
slug: Web/CSS/fit-content
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

**`fit-content`** 키워드는 {{cssxref("fit-content_function", "fit-content(stretch)")}}와 동일합니다. 실제로 이는 박스가 사용 가능한 공간을 사용하되, 절대 {{cssxref("max-content")}}보다 크지는 않음을 의미합니다.

{{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} 및 {{cssxref("max-height")}} 가 레이아웃된 박스의 크기로 사용된 경우, 최대 크기와 최소 크기는 콘텐츠의 크기를 참조합니다.

> [!NOTE]
> CSS Sizing 명세는 {{cssxref("fit-content_function", "fit-content()")}} 함수도 정의합니다. 이 페이지에서는 해당 키워드에 대해 설명합니다.

## 구문

```css
width: fit-content;
block-size: fit-content;
```

## 예제

### fit-content를 사용해 박스 크기 설정하기

#### HTML

```html
<div class="container">
  <div class="item">항목</div>
  <div class="item">더 많은 텍스트가 포함된 항목입니다.</div>
  <div class="item">
    텍스트가 더 많이 포함된 항목입니다. 텍스트가 줄바꿈되기를 기대하며 충분한
    양의 텍스트를 추가했습니다.
  </div>
</div>
```

#### CSS

```css
.container {
  border: 2px solid #ccc;
  padding: 10px;
  width: 20em;
}

.item {
  width: fit-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 결과

{{EmbedLiveSample("fit-content를 사용해 박스 크기 설정하기", "100%", 200)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 연관된 크기 설정 키워드: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- [CSS box sizing](/ko/docs/Web/CSS/CSS_box_sizing) 모듈
