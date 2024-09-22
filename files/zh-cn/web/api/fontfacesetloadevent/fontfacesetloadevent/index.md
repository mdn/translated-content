---
title: FontFaceSetLoadEvent：FontFaceSetLoadEvent() 构造函数
slug: Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

**`FontFaceSetLoadEvent()`** 构造函数创建一个新的 {{domxref("FontFaceSetLoadEvent")}} 对象，每当 {{domxref("FontFaceSet")}} 加载时就会触发该对象。

## 语法

```js-nolint
new FontFaceSetLoadEvent(type)
new FontFaceSetLoadEvent(type, options)
```

### 参数

- `type`
  - : 包含事件名称的字符串。它区分大小写，且浏览器总是将其设置为 `loading`、`loadingdone` 或 `loadingerror`。
- `options` {{optional_inline}}
  - : 一个对象，_除了在 {{domxref("Event/Event", "Event()")}} 中定义的属性之外_，该对象还具有以下属性：
    - `fontfaces` {{optional_inline}}
      - : 一个 {{domxref("FontFace")}} 实例数组，默认值是空数组。

### 返回值

一个新的 {{domxref("FontFaceSetLoadEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
