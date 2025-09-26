---
title: BlobEvent：BlobEvent() 构造函数
slug: Web/API/BlobEvent/BlobEvent
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

**`BlobEvent()`** 构造函数返回一个新创建的带有关联 {{domxref("Blob")}} 的 {{domxref("BlobEvent")}} 对象。

## 语法

```js-nolint
new BlobEvent(type, options)
```

### 参数

- `type`
  - : 表示事件名的字符串。它区分大小写，浏览器总是将其设置为 `dataavailable`。
- `options`
  - : 一个对象，_除了在 {{domxref("Event/Event", "Event()")}} 中定义的属性之外_，还可以具有以下属性：
    - `data`
      - : 和事件关联的 {{domxref("Blob")}} 数据。
    - `timecode` {{optional_inline}}
      - : 用于初始化 blob 事件的 {{domxref("DOMHighResTimeStamp")}}。

### 返回值

一个新的 {{domxref("BlobEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("BlobEvent")}} 接口。
