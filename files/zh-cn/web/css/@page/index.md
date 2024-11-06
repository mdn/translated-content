---
title: "@page"
slug: Web/CSS/@page
l10n:
  sourceCommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{CSSRef}}

**`@page`** at 规则是一种 CSS 规则，用于修改打印页面的不同方面。它的目标是修改页面的尺寸、方向和页边距。`@page` at 规则可用于针对打印输出中的所有页面，也可使用其各种伪类来针对一个子集。

## 语法

```css
/* 针对所有页面 */
@page {
  size: 8.5in 9in;
  margin-top: 4in;
}

/* 针对所有偶数页面 */
@page :left {
  margin-top: 4in;
}

/* 针对所有奇数页面 */
@page :right {
  size: 11in;
  margin-top: 4in;
}

/* 针对所有设置了 `page: wide;` 选择器的页面 */
@page wide {
  size: a4 landscape;
}

@page {
  /* 右上方的空白框显示页码 */
  @top-right {
    content: "Page " counter(pageNumber);
  }
}
```

### 页面属性

`@page` at 规则只能包含[页面描述符](#页面描述符)和[边距 at 规则](#边距_at_规则)。以下描述符至少已在一个浏览器中实现：

- [`margin`](/zh-CN/docs/Web/CSS/margin)
  - : 指定页边距。也可使用部分页边距属性 [`margin-top`](/zh-CN/docs/Web/CSS/margin-top)、[`margin-right`](/zh-CN/docs/Web/CSS/margin-right)、[`margin-bottom`](/zh-CN/docs/Web/CSS/margin-bottom) 和 [`margin-left`](/zh-CN/docs/Web/CSS/margin-left)。
- [`page-orientation`](/zh-CN/docs/Web/CSS/@page/page-orientation)
  - : 指定文档在页面上的方向，允许它进行正常的布局和格式化或者也可以将其向左或向右旋转。
- [`size`](/zh-CN/docs/Web/CSS/@page/size)
  - : 指定页面框包含块的目标大小和方向。通常情况下，一个页面框渲染到一页纸上时，它也会指定目标页的大小。

规范中提到以下 CSS 属性可通过 @page at 规则应用于页面框。但目前还*没有*任何用户代理支持这些属性。

<details>
<summary>剩余页面属性</summary>

| 特性            | CSS 属性              |
| --------------- | --------------------- |
| bidi 属性       | direction             |
| background 属性 | background-color      |
|                 | background-image      |
|                 | background-repeat     |
|                 | background-attachment |
|                 | background-position   |
|                 | background            |
| border 属性     | border-top-width      |
|                 | border-right-width    |
|                 | border-bottom-width   |
|                 | border-left-width     |
|                 | border-width          |
|                 | border-top-color      |
|                 | border-right-color    |
|                 | border-bottom-color   |
|                 | border-left-color     |
|                 | border-color          |
|                 | border-top-style      |
|                 | border-right-style    |
|                 | border-bottom-style   |
|                 | border-left-style     |
|                 | border-short-style    |
|                 | border-top            |
|                 | border-right          |
|                 | border-bottom         |
|                 | border-left           |
|                 | border                |
| counter 属性    | counter-reset         |
|                 | counter-increment     |
| 颜色            | color                 |
| font 属性       | font-family           |
|                 | font-size             |
|                 | font-style            |
|                 | font-variant          |
|                 | font-weight           |
|                 | font                  |
| height 属性     | height                |
|                 | min-height            |
|                 | max-height            |
| 行高            | line-height           |
| margin 属性     | margin-top            |
|                 | margin-right          |
|                 | margin-bottom         |
|                 | margin-left           |
|                 | margin                |
| outline 属性    | outline-width         |
|                 | outline-style         |
|                 | outline-color         |
|                 | outline               |
| padding 属性    | padding-top           |
|                 | padding-right         |
|                 | padding-bottom        |
|                 | padding-left          |
|                 | padding               |
| 引号            | quotes                |
| text 属性       | letter-spacing        |
|                 | text-align            |
|                 | text-decoration       |
|                 | text-indent           |
|                 | text-transform        |
|                 | white-space           |
|                 | word-spacing          |
| 可见性          | visibility            |
| width 属性      | width                 |
|                 | min-width             |
|                 | max-width             |

</details>

## 描述

@page 规则定义了页面盒子的属性。可以通过 CSS 对象模型接口 {{domxref("CSSPageRule")}} 访问 `@page` at 规则。

> [!NOTE]
> W3C 正在讨论如何处理和视图窗口有关的 {{cssxref("&lt;length&gt;")}} 的单位：`vh`、`vm`、`vmin` 和 `vmax`。目前，请不要在 `@page` at 规则中使用它们。

### 相关属性

`@page` at 规则允许用户为规则指定一个名称，然后在声明中使用 `page` 属性调用该名称。

- {{Cssxref("page")}}
  - : 允许选择器使用用户定义的**命名页面**。

## 形式语法

{{csssyntax}}

其中 `<page-body>` 包含：

- 页面属性
- 页面边距属性

且 `<pseudo-selector>` 代表这些伪类：

- [`:blank`](https://drafts.csswg.org/css-page/#blank-pseudo)
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## 边距 at 规则

> [!WARNING]
> 还没有任何用户代理实现边距 at 规则（截至 2023 年 8 月）。

边距 at 规则用于 `@page` at 规则内部。它们分别针对文档打印页面的不同部分，根据样式块中设置的属性值对打印页面的区域进行样式设置：

```css
@page {
  @top-left {
    /* 页面边距属性 */
  }
}
```

**`@top-left`** 以文档的左上角为目标，并根据页面边距属性设置应用更改。

其余边距 at 规则包含：

```css-nolint
@top-left-corner
@top-left
@top-center
@top-right
@top-right-corner
@bottom-left-corner
@bottom-left
@bottom-center
@bottom-right
@bottom-right-corner
@left-top
@left-middle
@left-bottom
@right-top
@right-middle
@right-bottom
```

### 页面边距属性

页面边距属性是一组可以在任何单个边距 at 规则中设置的 CSS 属性。它们包括：

<details>
<summary>页面边距属性</summary>

| 特性            | CSS 属性              |
| --------------- | --------------------- |
| bidi 属性       | direction             |
| background 属性 | background-color      |
|                 | background-image      |
|                 | background-repeat     |
|                 | background-attachment |
|                 | background-position   |
|                 | background            |
| border 属性     | border-top-width      |
|                 | border-right-width    |
|                 | border-bottom-width   |
|                 | border-left-width     |
|                 | border-width          |
|                 | border-top-color      |
|                 | border-right-color    |
|                 | border-bottom-color   |
|                 | border-left-color     |
|                 | border-color          |
|                 | border-top-style      |
|                 | border-right-style    |
|                 | border-bottom-style   |
|                 | border-left-style     |
|                 | border-short-style    |
|                 | border-top            |
|                 | border-right          |
|                 | border-bottom         |
|                 | border-left           |
|                 | border                |
| counter 属性    | counter-reset         |
|                 | counter-increment     |
| 内容            | content               |
| 颜色            | color                 |
| font 属性       | font-family           |
|                 | font-size             |
|                 | font-style            |
|                 | font-variant          |
|                 | font-weight           |
|                 | font                  |
| height 属性     | height                |
|                 | min-height            |
|                 | max-height            |
| 行高            | line-height           |
| margin 属性     | margin-top            |
|                 | margin-right          |
|                 | margin-bottom         |
|                 | margin-left           |
|                 | margin                |
| outline 属性    | outline-width         |
|                 | outline-style         |
|                 | outline-color         |
|                 | outline               |
| padding 属性    | padding-top           |
|                 | padding-right         |
|                 | padding-bottom        |
|                 | padding-left          |
|                 | padding               |
| 引号            | quotes                |
| text 属性       | letter-spacing        |
|                 | text-align            |
|                 | text-decoration       |
|                 | text-indent           |
|                 | text-transform        |
|                 | white-space           |
|                 | word-spacing          |
| 竖直对齐        | vertical-align        |
| 可见性          | visibility            |
| width 属性      | width                 |
|                 | min-width             |
|                 | max-width             |
| z-index         | z-index               |

</details>

## 具名页面

具名页面可以在打印时以声明方式执行每页布局和添加[页面分隔符](/zh-CN/docs/Web/CSS/CSS_fragmentation)。

可使用 {{Cssxref("page")}} 属性应用命名页面。这样，用户就可以创建不同的页面配置，用于打印布局。

在 [`page`](/zh-CN/docs/Web/CSS/page#示例) 示例中可以找到这方面的例子。

## 示例

### 使用 size 属性更改页面方向

本例显示了如何以 `landscape` 格式将多个 `<section>` 分割成单个页面，每页打印时有 20% 的页边距。

#### HTML

```html
<button>打印该页面</button>
<article>
  <section>
    <h2>标题</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
  <section>
    <h2>标题</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
  <section>
    <h2>标题</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
      facilis vitae voluptatibus odio consequuntur optio placeat? Id, nam sequi
      aut in dolorem dolores, laudantium, quasi totam ipsam aliquam quibusdam
      velit.
    </p>
  </section>
</article>
```

#### CSS

```css
@page {
  size: landscape;
  margin: 20%;
}

section {
  page-break-after: always;
  break-after: page;
}

@media print {
  button {
    display: none;
  }
}
```

```css hidden
body {
  font-family: "Helvetica", sans-serif;
  background-color: silver;
}

article {
  width: 100%;
}

section {
  display: grid;
  background-color: white;
  border-radius: 0.6rem;
  justify-items: center;
  padding: 1rem;
  width: 50%;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
  margin: 0 auto;
  margin-block-end: 1.5rem;
  border: 1px dashed;
}
```

#### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  window.print();
});
```

#### 结果

单击打印按钮将启动一个打印对话框，其中的 HTML 部分被分割成单独的页面。

{{ EmbedLiveSample('使用 size 属性更改页面方向', '100%', 520) }}

### @page 伪类示例

请参考 `@page` 的各种[伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)以获取示例。

- [`:blank`](https://drafts.csswg.org/css-page/#blank-pseudo)
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- `@page` [`size`](/zh-CN/docs/Web/CSS/@page/size) 描述符
- {{Cssxref("page")}} 属性
- 参阅 Bugzilla 中的 [\[META\] CSS Paged Media Module Level 3](https://bugzilla.mozilla.org/show_bug.cgi?id=286443) 工单，以追踪该主题（例如：基于页面的计数器，等等）的进展
- [CSS 分页媒体](/zh-CN/docs/Web/CSS/CSS_paged_media)模块
- [Paged.js：W3C 分页媒体 polyfill](https://pagedjs.org/documentation/1-the-big-picture)
