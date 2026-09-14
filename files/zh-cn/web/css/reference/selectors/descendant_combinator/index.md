---
title: 后代选择器
slug: Web/CSS/Reference/Selectors/Descendant_combinator
---

**后代组合器**（通常用单个空格（" "）字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母、父母的父母，父母的父母的父母等）元素，则它们将被选择。利用后代组合器的选择器称为*后代选择器*。

```css
/* 列出“my-things”列表的子项 */
ul.my-things li {
  margin: 2em;
}
```

从技术上讲，后代组合器是两个选择器之间的一个或多个 {{Glossary("CSS")}} 空格字符——空格字符和/或四个控制字符之一：回车、换页、换行和制表符在没有其他组合器的情况下。此外，组成组合器的空白字符可以包含任意数量的 CSS 注释。

## 语法

```css
selector1 selector2 {
  /* 属性声明 */
}
```

## 示例

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
    <div>项目 1</div>
    <ul>
      <li>子项 A</li>
      <li>子项 B</li>
    </ul>
  </li>
  <li>
    <div>项目 2</div>
    <ul>
      <li>子项 A</li>
      <li>子项 B</li>
    </ul>
  </li>
</ul>
```

### 结果

{{EmbedLiveSample("示例", "100%", 160)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [子组合器](/zh-CN/docs/Web/CSS/Reference/Selectors/Child_combinator)
