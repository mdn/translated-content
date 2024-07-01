---
title: HTMLMediaElement.currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.currentSrc`** 属性包含所选媒体源的绝对 URL 路径。例如当程序会根据用户显示器分辨率选择不同媒体文件时会用到这个属性，显然它是只读的。当 **`networkState`** 值为 **`EMPTY`** 时，本属性值为空字符串（empty string）.

## 语法

```plain
var mediaUrl = audioObject.currentSrc;
```

### 值

一个 {{domxref("DOMString")}} 对象包含所选媒体源的绝对 URL 路径。当 `networkState` ＝＝ `EMPTY 时，其值为空字符串（empty string）`; 否则，它会是 {{domxref("HTMLSourceElement")}} 所包含媒体列表中的一个，或者是 {{HTMLElement("source")}} 标签的 src 值。

## 示例

```js
var obj = document.createElement("video");
console.log(obj.currentSrc); // ""
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- The interface defining it, {{domxref("HTMLMediaElement")}}.
