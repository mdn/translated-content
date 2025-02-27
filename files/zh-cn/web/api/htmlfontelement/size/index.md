---
title: HTMLFontElement：size 属性
slug: Web/API/HTMLFontElement/size
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{deprecated_header}}{{ APIRef("HTML DOM") }}

已过时的 **`HTMLFontElement.size`** 属性是一个反映 [`size`](/zh-CN/docs/Web/HTML/Element/font#size) HTML 属性的字符串。包含从 1 到 7 的字体大小或相对于默认值 3 的数字，例如 -2 或 +1。

字符串的格式必须遵循以下 HTML 微语法之一：

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">微语法</th>
      <th scope="col">描述</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>有效的尺寸数字字符串</td>
      <td><em>1 到 7 之间的整数</em></td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <td>相对尺寸字符串</td>
      <td>
        <em>+x 或 -x，x 是相对于 3 的数字（结果应该是 1-7 之间）</em>
      </td>
      <td>
        <code>+2<br />-1</code>
      </td>
    </tr>
  </tbody>
</table>

## 值

一个字符串。

## 示例

```js
// 假设在 HTML 中存在 <font id="f"> 元素
const f = document.getElementById("f");
f.size = "6";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("HTMLFontElement")}} 接口。
