---
title: HTMLProgressElement：value 属性
slug: Web/API/HTMLProgressElement/value
l10n:
  sourceCommit: 63c87435a30517357c17c6bf49785cf0c14991b0
---

{{APIRef("HTML DOM")}}

{{DOMxRef("HTMLProgressElement")}} 接口的 **`value`** 属性表示 {{HTMLElement("progress")}} 元素的当前进度。

## 值

一个浮点数。如果未在进度条上设置 {{DOMxRef("HTMLProgressElement.max", "max")}} 值，则该值的范围在 0.0 和 1.0 之间。如果设置了 `max` 值，则 `value` 范围在 `0` 和 `max` 之间。

如果 {{DOMxRef("HTMLProgressElement")}} 对象上未设置 `value` 属性，则进度条仍然不确定。

## 示例

### HTML

```html
确定的进度条：<progress id="pBar"></progress> <span>0</span>%
<br />
不确定的进度条：<progress></progress>
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

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
