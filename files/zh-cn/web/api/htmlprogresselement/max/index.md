---
title: HTMLProgressElement：max 属性
slug: Web/API/HTMLProgressElement/max
l10n:
  sourceCommit: 63c87435a30517357c17c6bf49785cf0c14991b0
---

{{APIRef("HTML DOM")}}

{{DOMxRef("HTMLProgressElement")}} 接口的 **`max`** 属性表示 {{HTMLElement("progress")}} 元素的范围的上限。

## 值

一个大于零的浮点数。默认值是 1.0。

## 示例

### HTML

```html
进度：<progress id="pBar"></progress> <span>0</span>%
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

console.log(`max 的默认值：${pBar.max}`);

pBar.max = 100;
pBar.value = 0;

setInterval(() => {
  pBar.value = pBar.value < pBar.max ? pBar.value + 1 : 0;

  span.textContent = Math.trunc(pBar.position * 100);
}, 100);
```

{{EmbedLiveSample("示例", "100%", 30)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
