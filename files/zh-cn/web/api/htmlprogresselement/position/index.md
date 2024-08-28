---
title: HTMLProgressElement：position 属性
slug: Web/API/HTMLProgressElement/position
l10n:
  sourceCommit: 2b1417faf65c87bb164a0e75043c1fb53f43a848
---

{{APIRef("HTML DOM")}}

{{DOMxRef("HTMLProgressElement")}} 接口的 **`position`** 只读属性返回 {{HTMLElement("progress")}} 元素的当前进度。

## 值

对于确定的进度条返回当前值除以最大值的结果，也就是说，它是介于 `0.0` 和 `1.0` 之间的分数。

对于不确定的进度条该值总是 `-1`。

## 示例

### HTML

```html
确定的进度条：<progress id="pBar"></progress>位置： <span>0</span>
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

pBar.max = 100;
pBar.value = 0;

setInterval(() => {
  pBar.value = pBar.value < pBar.max ? pBar.value + 1 : 0;

  span.textContent = pBar.position;
}, 100);
```

{{EmbedLiveSample("示例", "100%", 30)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
