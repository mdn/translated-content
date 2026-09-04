---
title: <display-listitem>
slug: Web/CSS/Reference/Values/display-listitem
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

`list-item` 关键字会使元素生成一个 `::marker` 伪元素，其内容由元素的 {{CSSxRef("list-style")}} 属性指定（例如，一个项目符号），同时为其自身内容生成一个指定类型的主盒子。

## 语法

`list-item` 的单独值将导致元素的行为类似于列表元素。其可以与 {{CSSxRef("list-style-type")}} 和 {{CSSxRef("list-style-position")}} 一起使用。

`list-item` 也可以与任意的 {{CSSxRef("&lt;display-outside&gt;")}} 关键字和 {{CSSxRef("&lt;display-inside&gt;")}} 中的 `flow` 或 `flow-root` 关键字组合使用。

> [!NOTE]
> 在支持双值语法的浏览器中，如果未指定内部值，则值默认为 `flow`。如果未指定外部值，则主体盒子将具有 `block` 的外部显示类型。

## 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div class="fake-list">我将显示为列表项</div>
```

### CSS

```css
.fake-list {
  display: list-item;
  list-style-position: inside;
}
```

### 结果

{{EmbedLiveSample("示例", "100%", 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("display")}}
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
