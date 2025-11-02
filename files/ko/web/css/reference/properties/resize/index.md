---
title: resize
slug: Web/CSS/Reference/Properties/resize
original_slug: Web/CSS/resize
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

**`resize`** [CSS](/ko/docs/Web/CSS) 속성은 요소의 크기 조절 여부와 방향을 설정할 수 있습니다.

{{InteractiveExample("CSS Demo: resize")}}

```css interactive-example-choice
resize: both;
```

```css interactive-example-choice
resize: horizontal;
```

```css interactive-example-choice
resize: vertical;
```

```css interactive-example-choice
resize: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">Try resizing this element.</div>
</section>
```

```css interactive-example
#example-element {
  background: linear-gradient(135deg, #0ff 0%, #0ff 94%, #fff 95%);
  border: 3px solid #c5c5c5;
  overflow: auto;
  width: 250px;
  height: 250px;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
```

`resize` 는 다음 요소들에는 적용되지 않습니다.

- 인라인 요소
- {{cssxref("overflow")}} 속성이 `visible` 혹은 `clip` 로 설정된 블록 요소

## 구문

```css
/* 키워드 값 */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* 전역 값 */
resize: inherit;
resize: initial;
resize: revert;
resize: revert-layer;
resize: unset;
```

`resize` 속성은 다음 리스트에서 단일 키워드 값으로 지정됩니다.

### 값

- `none`
  - : 해당 요소는 사용자가 크기를 조절할 수 있는 방법을 제공하지 않습니다.
- `both`
  - : 해당 요소는 사용자가 크기를 조절하는 방법을 표시하며, 수평이나 수직 방향으로 모두 크기를 변경할 수 있습니다.
- `horizontal`
  - : 해당 요소는 사용자가 크기를 조절하는 방법을 표시하며, 이는 수평 방향입니다.
- `vertical`
  - : 해당 요소는 사용자가 크기를 조절하는 방법을 표시하며, 이는 수직 방향입니다.
- `block`
  - : 해당 요소는 사용자가 크기를 조절하는 방법을 표시하며, 이는 ({{cssxref("writing-mode")}} 와 {{cssxref("direction")}} 의 값에 따른) 수평이나 수직의 블록 방향입니다.
- `inline`
  - : 해당 요소는 사용자가 크기를 조절하는 방법을 표시하며, 이는 ({{cssxref("writing-mode")}} 와 {{cssxref("direction")}} 의 값에 따른) 수평이나 수직의 인라인 방향입니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 텍스트 영역 크기 조절을 비활성화하기

다수의 브라우저에서 {{HTMLElement("textarea")}} 요소는 기본적으로 크기 조절이 가능합니다. `resize` 속성을 이용하면 이 동작을 변경할 수 있습니다.

#### HTML

```html
<textarea>텍스트를 입력해 보세요.</textarea>
```

#### CSS

```css
textarea {
  resize: none; /* 크기 조절 불가 */
}
```

#### 결과

{{EmbedLiveSample("Disabling_resizability_of_text_areas","200","100")}}

### 임의의 요소의 조절하기

`resize` 속성을 이용하면 어떤 요소의 크기도 조절이 가능합니다. 아래 예제는 크기 조절이 가능한 {{HTMLElement("div")}}가 크기 조절이 가능한 단락 ({{HTMLElement("p")}} 요소)를 포함합니다.

#### HTML

```html
<div class="resizable">
  <p class="resizable">
    이 단락은 어느 방향으로든 크기 조절이 가능합니다. CSS `resize` 속성이 요소에
    `both` 로 설정되어 있습니다.
  </p>
</div>
```

#### CSS

```css
.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### 결과

{{EmbedLiveSample("Using_resize_with_arbitrary_elements","450","450")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("textarea")}}
