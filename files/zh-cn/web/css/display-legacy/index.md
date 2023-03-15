---
title: <display-legacy>
slug: Web/CSS/display-legacy
---

{{CSSRef}}

CSS 2 使用单个关键字来指定 display 的属性，对于相同布局模式的 block 级和 inline 级变体需要使用单独的关键字。本文详述这些关键字。

## 语法

- `inline-block`

  - : 元素会产生一个块元素盒子，并且像内联盒子一样（表现得更像一个被替换的元素），可以融入到周围内容中。

    等同于 `inline flow-root`。

- `inline-table`

  - : 在 HTML 中， `inline-table` 没有直接对应关系。它表现为一个 HTML {{HTMLElement("table")}} 元素，但是又表现为一个不同于块级盒子的内联盒子。表盒子内部是一个块级上下文。

    等同于 `inline table`。

- `inline-flex`

  - : 元素表现为一个内联元素，并对内容采用弹性盒子模型进行布局。

    等同于 `inline flex`。

- `inline-grid`

  - : 元素表现为一个内联元素，并对内容采用网格模型进行布局。

    等同于 `inline grid`。

### 形式语法

{{CSSSyntax}}

## 示例

在下面的例子中，我们使用 inline-flex 关键字（遗留关键字），创建一个 inline flex 的容器。

### HTML

```html
<div class="container">
  <div>Flex Item</div>
  <div>Flex Item</div>
</div>

Not a flex item
```

### CSS

```css
.container {
  display: inline-flex;
}
```

### 结果

{{EmbedLiveSample("示例", 300, 150)}}

新的语法中，使用两个关键字来创建 inline flex 容器，inline 用来指定外部显示类型，flex 用来指定内部显示类型。

```css
.container {
  display: inline flex;
}
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
