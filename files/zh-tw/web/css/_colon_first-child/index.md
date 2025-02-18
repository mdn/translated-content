---
title: :first-child
slug: Web/CSS/:first-child
---

{{CSSRef}}

`:first-child`是[CSS](/zh-TW/docs/Web/CSS)當中的一種[偽類別（pseudo-class）](/zh-TW/docs/Web/CSS/Pseudo-classes)，代表任何身為長子的元素（親元素的第一個子元素）。

## 語法

{{csssyntax}}

## 範例

### 範例 1

#### HTML 內文

```html
<div>
  <span>This span is limed!</span>
  <span>This span is not. :(</span>
</div>
```

#### CSS 內文

```css
span:first-child {
  background-color: lime;
}
```

呈現效果如下：

{{EmbedLiveSample('範例_1',300,50)}}

### 範例 2 - 使用 UL

#### HTML 內文

```html
<ul>
  <li>List 1</li>
  <li>List 2</li>
  <li>List 3</li>
</ul>
```

#### CSS 內文

```css
li {
  color: red;
}
li:first-child {
  color: green;
}
```

呈現效果如下：

{{EmbedLiveSample('範例_2_-_使用_UL',300,100)}}

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref(":last-child")}}
- {{cssxref(":nth-child")}}
- {{cssxref(":last-of-type")}}
