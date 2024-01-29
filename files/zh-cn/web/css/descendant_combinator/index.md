---
title: 后代选择器
slug: Web/CSS/Descendant_combinator
---

{{CSSRef}}

**后代组合器**（通常用单个空格（" "）字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。利用后代组合器的选择器称为*后代选择器*。

```css
/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}
```

从技术上讲，后代组合器是两个选择器之间的一个或多个 {{Glossary("CSS")}} 空格字符——空格字符和/或四个控制字符之一：回车、换页、换行和制表符在没有其他组合器的情况下。此外，组成组合器的空白字符可以包含任意数量的 CSS 注释。

## 语法

```plain
selector1 selector2 {
  /* property declarations */
}
```

## Examples

### CSS

```css
li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
```

### HTML

```html
<ul>
  <li>
    <div>Item 1</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
  <li>
    <div>Item 2</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
</ul>
```

### Result

{{EmbedLiveSample("Examples", "100%", 160)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- [Child combinator](/zh-CN/docs/Web/CSS/Child_combinator)
