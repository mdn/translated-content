---
title: Document：createEvent() 方法
slug: Web/API/Document/createEvent
l10n:
  sourceCommit: c024a4b59fb38fe8df1c9d117d5209c0c8c47b54
---

{{APIRef("DOM")}}

> [!WARNING]
> 与 `createEvent` 一起使用的许多方法（例如 `initCustomEvent`）已被弃用。请使用 [event 构造函数](/zh-CN/docs/Web/API/CustomEvent)代替。

创建指定类型的[事件](/zh-CN/docs/Web/API/Event)。应首先初始化返回的对象，然后将其传递给 {{domxref("EventTarget.dispatchEvent")}}。

## 语法

```js-nolint
createEvent(type)
```

### 参数

- `type`
  - : 表示要创建的事件类型的字符串。可能的事件类型包括 `"UIEvents"`、`"MouseEvents"`、`"MutationEvents"` 和 `"HTMLEvents"`。请参阅[备注](#备注)部分了解详细信息。

### 返回值

[Event](/zh-CN/docs/Web/API/Event) 对象。

## 示例

```js
// 创建事件
const event = document.createEvent("Event");

// 定义事件名称为 'build'。
event.initEvent("build", true, true);

// 监听事件。
elem.addEventListener(
  "build",
  (e) => {
    // e.target 与元素匹配
  },
  false,
);

// 目标可以是任何元素或其他 EventTarget。
elem.dispatchEvent(event);
```

## 备注

适合传递给 `createEvent()` 的事件类型字符串列于 [DOM 标准——参见步骤 2 中的表格](https://dom.spec.whatwg.org/#dom-document-createevent)。请记住，大多数事件对象现在都有构造函数，这是创建事件对象实例的现代推荐方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [创建和触发事件](/zh-CN/docs/Web/API/Document_Object_Model/Events)
