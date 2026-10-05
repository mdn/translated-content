---
title: Window：online 事件
slug: Web/API/Window/online_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

**`online`** 事件在浏览器获得网络访问并且 {{domxref("Navigator.onLine")}} 的值变为 `true` 时触发。

> [!NOTE]
> 不应使用此事件来判断特定网站是否可用。网络问题或防火墙仍可能阻止访问该网站。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名，或者设置事件处理器属性。

```js-nolint
addEventListener("online", (event) => { })

ononline = (event) => { }
```

## 事件类型

通用 {{domxref("Event")}}。

## 事件处理器别名

除了 `Window` 接口以外，事件处理器属性 `ononline` 同样可用于以下目标：

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 示例

```js
// addEventListener 版本
window.addEventListener("online", (event) => {
  console.log("你已连接到网络。");
});

// ononline 版本
window.ononline = (event) => {
  console.log("你已连接到网络。");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`offline`](/zh-CN/docs/Web/API/Window/offline_event)
