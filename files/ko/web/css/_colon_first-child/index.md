---
title: ":first-child"
slug: Web/CSS/:first-child
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:first-child`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 형제 요소 중 제일 첫 요소를 나타냅니다.

```css
/* Selects any <p> that is the first element
   among its siblings */
p:first-child {
  color: lime;
}
```

> **참고:** 초기 정의에서는 부모가 있는 요소만 선택할 수 있었습니다. Selectors Level 4부터는 이 제한이 사라졌습니다.

## 구문

{{csssyntax}}

## 예제

### 기본 예제

#### HTML

```html
<div>
  <p>This text is selected!</p>
  <p>This text isn't selected.</p>
</div>

<div>
  <h2>This text isn't selected: it's not a `p`.</h2>
  <p>This text isn't selected.</p>
</div>
```

#### CSS

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### 결과

{{EmbedLiveSample('기본_예제', 500, 200)}}

### 목록 스타일링

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### 결과

{{EmbedLiveSample('목록_스타일링')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{CSSxRef(":-moz-first-node")}} {{Non-standard_Inline}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
