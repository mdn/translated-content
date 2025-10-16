---
title: enterkeyhint
slug: Web/HTML/Reference/Global_attributes/enterkeyhint
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes) **`enterkeyhint`** 是一个[枚举属性](/zh-CN/docs/Glossary/Enumerated)，定义虚拟键盘上回车键的操作标签（或图标）。

{{InteractiveExample("HTML Demo: enterkeyhint", "tabbed-shorter")}}

```html interactive-example
<input enterkeyhint="go" />

<p contenteditable enterkeyhint="go">https://example.org</p>
```

## 描述

[表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms)（如 [`<textarea>`](/zh-CN/docs/Web/HTML/Reference/Elements/textarea) 或 [`<input>`](/zh-CN/docs/Web/HTML/Reference/Elements/input) 元素）或使用 [`contenteditable`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/contenteditable) 的元素可以指定 [`inputmode`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/inputmode) 属性来控制使用哪种虚拟键盘。为了进一步改善用户体验，可以通过提供 `enterkeyhint` 属性来特别定制回车键，该属性指明回车键应如何标记（或应显示哪个图标）。回车键通常代表用户下一步要做的操作；典型的操作有：发送文本、插入新行或搜索。

如果没有提供 `enterkeyhint` 属性，用户代理可能会使用 [`inputmode`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/inputmode)、[`type`](/zh-CN/docs/Web/HTML/Reference/Elements/input#input_类型) 或 [`pattern`](/zh-CN/docs/Web/HTML/Reference/Elements/input#pattern) 属性中的上下文信息来显示合适的回车键标签（或图标）。

### 值

`enterkeyhint` 属性是一个[枚举](/zh-CN/docs/Glossary/Enumerated)属性，只接受以下值：

<table class="no-markdown">
  <thead>
    <tr>
      <th>值</th>
      <th>描述</th>
      <th>示例标签（取决于用户代理和用户语言）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterkeyhint="enter"</code></td>
      <td>通常是插入新行。</td>
      <td><kbd>return</kbd>、<kbd>↵</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="done"</code></td>
      <td>通常意味着没有其他输入内容，输入法编辑器（IME）将关闭。</td>
      <td><kbd>done</kbd>、<kbd>✅</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>通常是指将用户带到他们键入文本的目标位置。</td>
      <td><kbd>go</kbd>、<kbd>🡢</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>通常会将用户带到下一个可接受文本的字段。</td>
      <td><kbd>next</kbd>、<kbd>⇥</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>通常会将用户带到上一个可接受文本的字段。</td>
      <td><kbd>return</kbd>、<kbd>⇤</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>通常会将用户带到他们输入的文本的搜索结果中。</td>
      <td><kbd>search</kbd>、<kbd>🔍</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>通常是将文本传递给目标。</td>
      <td><kbd>send</kbd></td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 反射该属性的 [`HTMLElement.enterKeyHint`](/zh-CN/docs/Web/API/HTMLElement/enterKeyHint) 属性
- 全局属性 [`inputmode`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/inputmode)
- 全局属性 [`contenteditable`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/contenteditable)
- [`<input>`](/zh-CN/docs/Web/HTML/Reference/Elements/input) 元素的 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/input#input_types) 和 [`pattern`](/zh-CN/docs/Web/HTML/Reference/Elements/input#pattern) 属性
