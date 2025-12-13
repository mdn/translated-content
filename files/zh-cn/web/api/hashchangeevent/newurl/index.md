---
title: HashChangeEvent：newURL 属性
short-title: newURL
slug: Web/API/HashChangeEvent/newURL
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("HTML DOM")}}

{{domxref("HashChangeEvent")}} 接口的 **`newURL`** 只读属性返回窗口正在导航到的新 URL。

## 值

字符串。

## 示例

```js
window.addEventListener("hashchange", (event) => {
  console.log(`哈希已从 ${event.newURL} 更改`);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
