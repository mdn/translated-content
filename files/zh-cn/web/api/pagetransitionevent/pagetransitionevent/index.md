---
title: PageTransitionEvent：PageTransitionEvent() 构造函数
slug: Web/API/PageTransitionEvent/PageTransitionEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("HTML DOM")}}

**`PageTransitionEvent()`** 构造函数创建一个新 {{domxref("PageTransitionEvent")}} 对象，用于（在页面加载或卸载时在 {{domxref("window")}} 对象上触发的）{{domxref("Window/pageshow_event", "pageshow")}} 或 {{domxref("Window/pagehide_event", "pagehide")}} 事件。

> [!NOTE]
> Web 开发者通常不需要调用此构造函数，因为浏览器在触发 {{domxref("Window/pageshow_event", "pageshow")}} 或 {{domxref("Window/pagehide_event", "pagehide")}} 事件时会创建相应对象。

## 语法

```js-nolint
new PageTransitionEvent(type, options)
```

### 参数

- `type`
  - : 一个表示事件名称的字符串。其大小写敏感，且浏览器通常将其设置为 `pageshow` 或 `pagehide`。
- `options` {{optional_inline}}
  - : 一个对象，_除在 {{domxref("Event/Event", "Event()")}} 定义的属性外_，还具有以下属性：
    - `persisted` {{optional_inline}}
      - : 一个表明文档是否由缓存加载的布尔值。

### 返回值

一个新的 {{domxref("PageTransitionEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`pageshow`](/zh-CN/docs/Web/API/Window/pageshow_event) 事件
- [`pagehide`](/zh-CN/docs/Web/API/Window/pagehide_event) 事件
