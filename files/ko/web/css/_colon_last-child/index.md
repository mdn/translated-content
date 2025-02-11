---
title: :last-child
slug: Web/CSS/:last-child
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:last-child`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 형제 요소 중 제일 마지막 요소를 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-last-child.html", "tabbed-shorter")}}

## 구문

```
:last-child
```

## 예제

### 기본 예제

#### HTML

```html
<div>
  <p>This text isn't selected.</p>
  <p>This text is selected!</p>
</div>

<div>
  <p>This text isn't selected.</p>
  <h2>This text isn't selected: it's not a `p`.</h2>
</div>
```

#### CSS

```css
p:last-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### 결과

{{EmbedLiveSample('Basic_example', 500, 200)}}

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

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

#### 결과

{{EmbedLiveSample('Styling_a_list')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- {{CSSxRef(":-moz-last-node")}} {{Non-standard_Inline}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":nth-child")}}
