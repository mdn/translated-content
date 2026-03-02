---
title: Document：open() 方法
slug: Web/API/Document/open
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`Document.open()`** 方法可打开文档以供{{domxref("Document.write", "写入", "", "1")}}。

这将会有一些连带的影响。例如：

- 此时已注册到文档、文档中的节点或文档的 window 的所有事件监听器会被清除。
- 文档中的所有节点会被清除。

## 语法

```js-nolint
open()
```

### 参数

无。

### 返回值

`Document` 对象实例。

## 示例

以下的简单代码会打开文档，并用一些不同的 HTML 片段替换其内容，然后再次关闭。

```js
document.open();
document.write("<p>你好，世界！</p>");
document.write("<p>我是一条鱼</p>");
document.write("<p>数字为 42</p>");
document.close();
```

## 备注

在页面加载后调用 {{domxref("document.write()")}} 时，会自动调用 `document.open()`。

### 内容安全

该方法与其他属性一样受[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)的限制，会改变文档的来源的方法调用不会起作用。

## 三个参数的 document.open()

`document.open()` 有一个鲜为人知且很少使用的三参数版本，它是 {{domxref("Window.open()")}} 的别名（详见其页面）。

例如，该调用会在新窗口中打开 github.com，并将其 opener 设置为 `null`：

```js
document.open("https://www.github.com", "", "noopener=true");
```

## 两个参数的 document.open()

浏览器曾支持具有以下签名的双参数 `document.open()`：

```js
document.open(type, replace);
```

`type` 指定要写入的数据的 MIME 类型（例如 `text/html`），如果设置了 replace（即 `"replace"` 字符串），新文档历史记录会替换当前写入文档的记录。

这种形式现已过时；它不会抛出错误，而是直接转发到 `document.open()`（相当于无参数形式的调用）。历史替换行为现在总是会发生。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document")}}
- {{domxref("Window.open()")}}
