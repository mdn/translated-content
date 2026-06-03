---
title: MediaList
slug: Web/API/MediaList
---

{{APIRef("CSSOM")}}

**`MediaList`** 接口表示样式表的媒体查询，例如使用了 `media` 属性的{{htmlelement("link")}} 元素。

> [!NOTE]
> `MediaList` 是一个实时列表；使用以下属性或方法更新列表会立刻更新文档的表现。

## 属性

- {{domxref("MediaList.mediaText")}}
  - : 一个字符串转化器，返回一个{{domxref("DOMString")}}，以文本形式表示 `MediaList`，也可以通过这个方法设置新的 `MediaList`。
- {{domxref("MediaList.length")}} {{readonlyInline}}
  - : 返回 `MediaList` 中媒体查询的数量。

## 方法

- {{domxref("MediaList.appendMedium()")}}
  - : 向 `MediaList` 中添加一个媒体查询。
- {{domxref("MediaList.deleteMedium()")}}
  - : 从 `MediaList` 中移除一个媒体查询。
- {{domxref("MediaList.item()")}}
  - : 一个获取函数，返回一个{{domxref("CSSOMString")}}，表示文本形式的媒体查询，需要提供媒体查询在 `MediaList` 中的索引位置。

## 示例

下述例子会在控制台记录 `MediaList` 的文本表示，其来自应用到当前文档的第一个样式表。

```js
const stylesheets = document.styleSheets;
let stylesheet = stylesheets[0];
console.log(stylesheet.media.mediaText);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
