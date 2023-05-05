---
title: Navigator.buildID
slug: Web/API/Navigator/buildID
---

{{ ApiRef("HTML DOM") }}

返回所使用浏览器的构建标识符。现代浏览器中，这个属性返回一个固定的时间戳作为私有的计量方法，比如 Firefox 64 及以后的版本返回 `20181001000000`。

## 语法

```js
buildID = navigator.buildID;
```

### 值

一个字符串，用来表示当前应用的构建标识。构建 ID 的格式为：`YYYYMMDDHHMMSS`。

## **示例**

```js
console.log(window.navigator.buildID);
```

## 规范

未得到任何公共标准支持。

## 浏览器兼容性

{{Compat}}
