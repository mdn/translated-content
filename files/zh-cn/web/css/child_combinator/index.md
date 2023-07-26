---
title: 子组合器
slug: Web/CSS/Child_combinator
---

{{CSSRef("Selectors")}}

**子组合器**（`>`）被放在两个 CSS 选择器之间。它只匹配那些被第二个选择器匹配的元素，这些元素是被第一个选择器匹配的元素的直接子元素。

```css
/* 选择属于“my-things”类的无序列表（ul）的直接子列表元素（li） */
ul.my-things > li {
  margin: 2em;
}
```

被第二个选择器匹配的元素必须是被第一个选择器匹配的元素的直接子元素。这比[后代组合器](/zh-CN/docs/Web/CSS/Descendant_combinator)更严格，后者匹配所有被第二个选择器匹配的元素，这些元素存在被第一个选择器匹配的祖先元素，无论在 DOM 上有多少“跳”。

## 语法

```css
元素 1 > 元素 2 { 样式声明 }
```

## 示例

### CSS

```css
span {
  background-color: aqua;
}

div > span {
  background-color: yellow;
}
```

### HTML

```html
<div>
  <span>
    1 号 span，在 div 中。
    <span>2 号 span，在 div 中的 span 中。</span>
  </span>
</div>
<span>3 号 span，不在 div 中。</span>
```

### 运行结果

{{EmbedLiveSample("Examples", "100%", 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [后代组合器](/zh-CN/docs/Web/CSS/Descendant_combinator)
