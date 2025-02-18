---
title: ::target-text
slug: Web/CSS/::target-text
---

{{CSSRef}}{{SeeCompatTable}}

**`::target-text`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)代表了浏览器在支持[文本片段](/zh-CN/docs/Web/URI/Fragment/Text_fragments)技术时所滚动到的文字。它使得作者可以选择高亮一段文字的方式。

```css
::target-text {
  background-color: pink;
}
```

## 语法

```css
::target-text {
  /* ... */
}
```

## 示例

### 高亮文本片段

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

要实际查看 CSS 效果，请参考 [scroll-to-text 演示](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文本片段](/zh-CN/docs/Web/URI/Fragment/Text_fragments)
