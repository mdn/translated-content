---
title: Window：back() 方法
slug: Web/API/Window/back
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}{{ Non-standard_header() }}{{deprecated_header}}

{{domxref("window")}} 接口上过时的非标准方法 `back()` 会将窗口返回到历史记录中的前一个记录。这是 Firefox 特有的方法，已在 Firefox 31 中删除。

> [!NOTE]
> 请使用标准的 {{domxref("history.back")}} 方法。

## 语法

```js-nolint
back()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

这个简单的示例通过调用 `back()` 来处理“返回”按钮的点击操作。

```js
function handleMyBackButton() {
  if (canGoBack) {
    window.back();
  }
}
```

## 规范

不属于任何规范。

## 浏览器兼容性

这种非标准方法只在 Firefox 中实现过，并在 Firefox 31 中被删除。

## 参见

- {{domxref("History.back()")}}
- {{domxref("History.forward()")}}
