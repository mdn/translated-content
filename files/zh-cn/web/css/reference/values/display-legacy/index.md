---
title: <display-legacy>
slug: Web/CSS/Reference/Values/display-legacy
---

CSS 2 为 `display` 属性使用单关键字的语法，对于相同布局模式的块级和行级变体要求使用各自的关键字。本文详述这些关键字。

## 语法

有效的 `<display-legacy>` 值：

- `inline-block`
  - : 元素将生成块级元素盒，将被视为单个行级盒（表现为替换元素）与周围内容构成内容流。

    等同于 `inline flow-root`。

- `inline-table`
  - : `inline-table` 在 HTML 中没有直接的对应关系。此值表现为 HTML {{HTMLElement("table")}} 元素，但是为行级盒而非块级盒。表格盒内部为块级上下文。

    等同于 `inline table`。

- `inline-flex`
  - : 元素表现为行级元素，并按弹性盒模型对其内容进行布局。

    等同于 `inline flex`。

- `inline-grid`
  - : 元素表现为行级元素，并按网格模型对其内容进行布局。

    等同于 `inline grid`。

### 形式语法

{{CSSSyntax}}

## 示例

在以下示例中，我们将用旧式关键字 inline-flex 创建行级弹性容器。

### HTML

```html
<div class="container">
  <div>弹性元素</div>
  <div>弹性元素</div>
</div>

非弹性元素
```

### CSS

```css
.container {
  display: inline-flex;
}
```

### 结果

{{EmbedLiveSample("示例", 300, 150)}}

在新的语法中，将使用两个值创建行级弹性容器，inline 用于外侧显示类型，flex 用于内侧显示类型。

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
