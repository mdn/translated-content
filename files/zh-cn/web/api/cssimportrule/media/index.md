---
title: CSSImportRule：媒体属性
slug: Web/API/CSSImportRule/media
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

{{domxref("CSSImportRule")}} 接口的只读属性 **`media`** 返回一个 {{domxref("MediaList")}} 对象，
该对象包含关联样式表的 `media` 属性的值。

## 值

返回一个 {{domxref("MediaList")}} 对象。

可以通过传递一个包含 `media` 属性的字符串来设置 `media` 的值，例如 `"print"`。

## 示例

### 获取媒体属性

以下样式表包含一个 {{cssxref("@import")}} 规则。因此，CSS 规则列表中的第一个项目将是一个 `CSSImportRule`。`media` 属性返回一个 {{domxref("MediaList")}} 对象，其中包括 `mediaText` 属性，其值为 `screen`。

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].media); // MediaList 对象
```

### 设置媒体属性

要更改关联样式表的 `media` 属性，请将 `media` 的值设置为包含新值的字符串。

```js
const myRules = document.styleSheets[0].cssRules;
myRules[0].media = "print";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
