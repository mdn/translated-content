---
title: "`page-break-after` CSS 属性"
short-title: page-break-after
slug: Web/CSS/Reference/Properties/page-break-after
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{deprecated_header}}

> [!WARNING]
> 此属性已被 {{cssxref("break-after")}} 属性取代。

**`page-break-after`** [CSS](/zh-CN/docs/Web/CSS) 属性调整当前元素*之后*的分页符。

{{InteractiveExample("CSS 演示：page-break-after")}}

```css interactive-example-choice
page-break-after: auto;
```

```css interactive-example-choice
page-break-after: always;
```

```html interactive-example
<div>
  <p>在打印文档或显示打印预览时，可以注意到此属性的效果。</p>
  <button id="print-btn">显示打印预览</button>
  <div class="box-container">
    <div class="box">属性之前的内容</div>
    <div class="box" id="example-element">带有 'page-break-after' 的内容</div>
    <div class="box">属性之后的内容</div>
  </div>
</div>
```

```css interactive-example
.box {
  border: solid #5b6dcd 5px;
  background-color: #5b6dcd;
  margin: 10px 0;
  padding: 5px;
}

#example-element {
  border: solid 5px #ffc129;
  background-color: #ffc129;
  color: black;
}
```

```js interactive-example
const btn = document.getElementById("print-btn");

btn.addEventListener("click", () => {
  window.print();
});
```

## 语法

```css
/* 关键字值 */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* 全局值 */
page-break-after: inherit;
page-break-after: initial;
page-break-after: revert;
page-break-after: revert-layer;
page-break-after: unset;
```

此属性适用于生成盒子的块级元素。它不会作用于不会生成盒子的空 {{HTMLElement("div")}}。

### 值

- `auto`
  - : 初始值。自动分页（既不强制也不禁止）。
- `always`
  - : 始终在元素之后强制分页。
- `avoid`
  - : 避免在元素之后分页。
- `left`
  - : 在元素之后强制分页，使下一页格式化为左页。左页是位于书脊左侧的页面，或双面打印中的纸张背面。
- `right`
  - : 在元素之后强制分页，使下一页格式化为右页。右页是位于书脊右侧的页面，或双面打印中的纸张正面。
- `recto`
  - : 若页面从左到右推进，则行为类似 `right`。若页面从右到左推进，则行为类似 `left`。
- `verso`
  - : 若页面从左到右推进，则行为类似 `left`。若页面从右到左推进，则行为类似 `right`。

## 分页别名

`page-break-after` 属性现为旧版属性，已被 {{cssxref("break-after")}} 取代。

出于兼容性原因，浏览器应将 `page-break-after` 视为 `break-after` 的别名。这可确保使用 `page-break-after` 的站点继续按预期工作。一部分值应按如下方式建立别名：

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 在脚注之后设置分页

```css
/* 在脚注之后转到新页 */
div.footnotes {
  page-break-after: always;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("break-before")}}、{{cssxref("break-after")}}、{{cssxref("break-inside")}}
- {{cssxref("page-break-before")}}、{{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}、{{cssxref("widows")}}
