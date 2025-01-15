---
title: NavigatorUAData：toJSON() 方法
slug: Web/API/NavigatorUAData/toJSON
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("NavigatorUAData")}} 接口的 **`toJSON()`** 方法是一个*序列化器*，它返回 `NavigatorUAData` 对象的*低熵*属性的 JSON 表示形式。

> [!NOTE]
> 术语*高熵*和*低熵*是指这些值揭示的有关浏览器的信息量。此方法返回的低熵值是那些不会泄露能够识别用户的信息的值。高熵值只能通过 {{domxref("NavigatorUAData.getHighEntropyValues()")}} 方法返回。

## 语法

```js-nolint
toJSON()
```

### 参数

无。

### 返回值

一个 JSON 对象。

## 示例

以下示例将 JSON 对象打印到控制台。

```js
console.log(navigator.userAgentData.toJSON());
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
