---
title: NetworkInformation：change 事件
slug: Web/API/NetworkInformation/change_event
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{apiref("Network Information API")}} {{AvailableInWorkers}}

{{domxref("NetworkInformation")}} 接口的 **`change`** 事件在网络连接信息发生变化时被触发，并且该事件由 {{domxref("NetworkInformation")}} 对象接收。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

## 示例

```js
// 获取网络连接类型。
const type = navigator.connection.type;

function changeHandler(e) {
  // 在此处理网络连接类型的更改。
}

// 注册监听活动变更：
navigator.connection.onchange = changeHandler;

// 另一种方式：navigator.connection.addEventListener('change', changeHandler);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
