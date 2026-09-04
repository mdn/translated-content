---
title: HashChangeEvent：oldURL 属性
short-title: oldURL
slug: Web/API/HashChangeEvent/oldURL
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("HTML DOM")}}

{{domxref("HashChangeEvent")}} 接口的 **`oldURL`** 只读属性返回窗口导航前的先前 URL。

## 值

字符串。

## 示例

```js
window.addEventListener("hashchange", (event) => {
  console.log(`哈希已从 ${event.oldURL} 更改`);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
