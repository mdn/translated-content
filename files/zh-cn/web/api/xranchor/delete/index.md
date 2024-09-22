---
title: XRAnchor：delete() 方法
slug: Web/API/XRAnchor/delete
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("XRAnchor")}} 接口的 **`delete()`** 方法可删除锚点。当应用程序不再希望接收到锚点的更新时，这会非常有用。

## 语法

```js-nolint
delete()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 移除所有锚点

```js
let anchorsCollection = new Set();

// 创建锚点后，将其添加到 anchorsCollection.add(anchor) 中

for (const anchor of anchorsCollection) {
  anchor.delete();
}

anchorsCollection.clear();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
