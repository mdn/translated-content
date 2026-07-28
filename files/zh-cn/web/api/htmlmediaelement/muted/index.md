---
title: HTMLMediaElement：muted 属性
slug: Web/API/HTMLMediaElement/muted
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.muted`** 属性用于指示媒体元素是否处于静音状态。

## 值

布尔值。`true` 表示静音，`false` 表示未静音。

## 示例

```js
const obj = document.createElement("video");
console.log(obj.muted); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.muted` 属性的接口
- {{domxref("HTMLMediaElement.defaultMuted")}}
- {{domxref("HTMLMediaElement.volume")}}
