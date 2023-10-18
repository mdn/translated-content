---
title: white-space
slug: Web/CSS/white-space
---

{{CSSRef}}

CSS **`white-space`** 属性用于设置如何处理元素内的{{Glossary("whitespace", "空白字符")}}。

{{EmbedInteractiveExample("pages/css/white-space.html")}}

这个属性指定了两件事：

- 空白字符是否[合并](#合并空白字符)，以及如何合并。
- 是否换行，以及如何换行。

> **备注：** 要使单词可以在*其内部*被截断，请使用 {{CSSxRef("overflow-wrap")}}、{{CSSxRef("word-break")}} 或 {{CSSxRef("hyphens")}} 代替。

## 语法

```css
/* 单个关键字值 */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

/* white-space-collapse 和 text-wrap 简写值 */
white-space: collapse balance;
white-space: preserve nowrap;

/* 全局值 */
white-space: inherit;
white-space: initial;
white-space: revert;
white-space: revert-layer;
white-space: unset;
```

### 值

`white-space` 属性可以被指定为从下面的值列表中选择的单个关键字，或者是表示 {{CSSxRef("white-space-collapse")}} 和 {{cssxref("text-wrap")}} 属性的简写的两个值。

- `normal`
  - : 连续的空白符会被[合并](#合并空白字符)。源码中的换行符会被当作空白符来处理。并根据填充行框盒子的需要来换行。
- `nowrap`
  - : 和 `normal` 一样[合并](#合并空白字符)空白符，但阻止源码中的文本换行。
- `pre`
  - : 连续的空白符会被保留。仅在遇到换行符或 {{HTMLElement("br")}} 元素时才会换行。
- `pre-wrap`
  - : 连续的空白符会被保留。在遇到换行符或 {{HTMLElement("br")}} 元素时，或者根据填充行框盒子的需要换行。
- `pre-line`
  - : 连续的空白符会被[合并](#合并空白字符)。在遇到换行符或 {{HTMLElement("br")}} 元素时，或者根据填充行框盒子的需要换行。
- `break-spaces`

  - : 与 `pre-wrap` 的行为相同，除了：

    - 任何保留的空白序列总是占用空间，包括行末的。
    - 每个保留的空白字符后（包括空白字符之间）都可以被截断。
    - 这样保留的空间占用空间而不会挂起，从而影响盒子的固有尺寸（最小内容——`min-content`——大小和最大内容——`max-content`——大小）。

下面的表格总结了各种 `white-space` 关键字值的行为：

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>换行符</th>
      <th>空格和制表符</th>
      <th>文本换行</th>
      <th>行末空格</th>
      <th>行末的其他空白分隔符</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>normal</code></th>
      <td>合并</td>
      <td>合并</td>
      <td>换行</td>
      <td>移除</td>
      <td>挂起</td>
    </tr>
    <tr>
      <th><code>nowrap</code></th>
      <td>合并</td>
      <td>合并</td>
      <td>不换行</td>
      <td>移除</td>
      <td>挂起</td>
    </tr>
    <tr>
      <th><code>pre</code></th>
      <td>保留</td>
      <td>保留</td>
      <td>不换行</td>
      <td>保留</td>
      <td>不换行</td>
    </tr>
    <tr>
      <th><code>pre-wrap</code></th>
      <td>保留</td>
      <td>保留</td>
      <td>换行</td>
      <td>挂起</td>
      <td>挂起</td>
    </tr>
    <tr>
      <th><code>pre-line</code></th>
      <td>保留</td>
      <td>合并</td>
      <td>换行</td>
      <td>移除</td>
      <td>挂起</td>
    </tr>
    <tr>
      <th><code>break-spaces</code></th>
      <td>保留</td>
      <td>保留</td>
      <td>换行</td>
      <td>换行</td>
      <td>换行</td>
    </tr>
  </tbody>
</table>

> **备注：** **空格**和**其他空白分隔符**之间存在区别。定义如下：
>
> - 空格
>   - : 空格（U+0020）、制表符（U+0009）和分段符（例如换行）
> - 其他空白分隔符
>   - : Unicode 中定义的所有其他空格分隔符（已定义为空格的分隔符除外）。
>
> 如果空白字符被*挂起*，那么它可能会影响框的固有尺寸的测量结果。

## 合并空白字符

{{cssxref("white-space-collapse")}} 属性的页面解释了[浏览器合并空白字符的算法](/zh-CN/docs/Web/CSS/white-space-collapse#合并空白字符)。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 基础示例

```css
code {
  white-space: pre;
}
```

### \<pre> 元素内的换行

```css
pre {
  white-space: pre-wrap;
}
```

### 试试看

```html hidden
<div id="css-code" class="box">
  p { white-space:
  <select>
    <option>normal</option>
    <option>nowrap</option>
    <option>pre</option>
    <option>pre-wrap</option>
    <option>pre-line</option>
    <option>break-spaces</option>
    <option>preserve nowrap</option>
  </select>
  }
</div>
<div id="results" class="box">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

```css hidden
.box {
  width: 300px;
  padding: 16px;
}

#css-code {
  background-color: rgb(220, 220, 220);
  font-size: 16px;
  font-family: monospace;
}

#css-code select {
  font-family: inherit;
}

#results {
  background-color: rgb(230, 230, 230);
  overflow-x: scroll;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
const select = document.querySelector("#css-code select");
const results = document.querySelector("#results p");
select.addEventListener("change", (e) => {
  results.setAttribute("style", `white-space: ${e.target.value}`);
});
```

{{EmbedLiveSample("试试看", "100%", 350)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义单词如何在*其内部*被截断的属性：{{CSSxRef("overflow-wrap")}}、{{CSSxRef("word-break")}}、{{CSSxRef("hyphens")}}
