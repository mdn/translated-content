---
title: HTMLTableColElement：span 属性
slug: Web/API/HTMLTableColElement/span
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

{{domxref("HTMLTableColElement")}} 接口的 **`span`** 只读属性表示 {{htmlelement("col")}} 或 {{htmlelement("colgroup")}} 必须横跨的列数；这使得该列占据表中多列的空间。它反映 [`span`](/zh-CN/docs/Web/HTML/Reference/Elements/col#span) 属性。

## 值

一个表示列数的正数。

> [!NOTE]
> 设置新值时，该值将被*限制为*最接近的严格正数（最多 1000）。

## 示例

示例提供了两个按钮来修正主体第一个单元格的列跨度。

### HTML

```html
<table>
  <colgroup>
    <col />
    <col span="2" class="multiColumn" />
  </colgroup>
  <thead>
    <th></th>
    <th scope="col">C1</th>
    <th scope="col">C2</th>
    <th scope="col">C3</th>
    <th scope="col">C4</th>
  </thead>
  <tbody>
    <tr>
      <th scope="row">行 1</th>
      <td>cell</td>
      <td>cell</td>
      <td>cell</td>
      <td>cell</td>
    </tr>
  </tbody>
</table>
<button id="increase">增加列跨度</button>
<button id="decrease">减少列跨度</button>
<div>第一个 &lt;col&gt; 横跨 <output>2</output> 个实际列。</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td,
table {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### CSS

```css
.multiColumn {
  background-color: #d7d9f2;
}
```

### JavaScript

```js
// 获取相关接口元素
const col = document.querySelectorAll("col")[1];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  col.span = col.span + 1;

  // 更新显示
  output.textContent = col.span;
});

decreaseButton.addEventListener("click", () => {
  col.span = col.span - 1;

  // 更新显示
  output.textContent = col.span;
});
```

### 结果

{{EmbedLiveSample("示例", "100%", 175)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLTableCellElement.colSpan")}}
