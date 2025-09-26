---
title: Window：find() 方法
slug: Web/API/Window/find
l10n:
  sourceCommit: 0ca4542a9482bb74999f39d829465a2b50de222b
---

{{ApiRef}}{{Non-standard_Header}}

> [!NOTE]
> 未来版本的 Gecko 对 `Window.find()` 的支持可能会发生变化。参见 [Firefox bug 672395](https://bugzil.la/672395)。

**`Window.find()`** 方法在窗口中按顺序查找字符串。

## 语法

```js-nolint
find(aString, aCaseSensitive, aBackwards, aWrapAround, aWholeWord, aSearchInFrames, aShowDialog)
```

### 参数

- `aString`
  - : 将要搜索的文本字符串。
- `aCaseSensitive`
  - : 布尔值，如果为 `true`，表示区分大小写搜索。
- `aBackwards`
  - : 布尔值。如果为 `true`，表示从后往前搜索。
- `aWrapAround`
  - : 布尔值。如果为 `true`，表示循环搜索。
- `aWholeWord`
  - : 布尔值。如果为 `true`，表示全词搜索。
- `aSearchInFrames`
  - : 布尔值。如果为 `true`，表示在框架（frame）中搜索。
- `aShowDialog`
  - : 布尔值。如果为 `true`，则会弹出一个搜索对话框。

### 返回值

如果找到指定的字符串，则返回 `true`，否则返回 `false`。

## 示例

### JavaScript

```js
function findString(text) {
  document.querySelector("#output").textContent = `找到了字符串？${window.find(
    text,
  )}`;
}
```

### HTML

```html
<p>苹果、香蕉和橙子。</p>
<button type="button" onClick='findString("苹果")'>搜索苹果</button>
<button type="button" onClick='findString("香蕉")'>搜索香蕉</button>
<button type="button" onClick='findString("橙子")'>搜索橙子</button>

<p id="output"></p>
```

### 结果

{{EmbedLiveSample("示例")}}

## 备注

在某些浏览器中，`Window.find()` 会选择（高亮）找到的内容。

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}
