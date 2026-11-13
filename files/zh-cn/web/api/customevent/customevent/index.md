---
title: CustomEvent：CustomEvent() 构造函数
slug: Web/API/CustomEvent/CustomEvent
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("DOM")}}

**`CustomerEvent()`** 构造函数创建一个新的 {{domxref("CustomEvent")}} 对象。

## 语法

```js-nolint
new CustomEvent(type)
new CustomEvent(type, options)
```

### 参数

- `type`
  - : 提供事件名称的字符串。事件名称区分大小写。
- `options` {{optional_inline}}
  - : 一个对象，_除 {{domxref("Event/Event", "Event()")}} 中定义的属性外_，该对象还可以具有以下属性：
    - `detail` {{optional_inline}}
      - : 与事件相关联的事件相关值。处理器可使用 {{domxref("CustomEvent.detail")}} 属性获取该值。默认为 `null`。

### 返回值

一个新的 {{domxref("CustomEvent")}} 对象。

## 示例

```js
// 创建自定义事件
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "猫",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "狗",
  },
});

// 添加合适的事件监听器
obj.addEventListener("animalfound", (e) => console.log(e.detail.name));

// 触发事件
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);

// 控制台中输出“猫”和“狗”
```

额外的示例可以在[创建和触发事件](/zh-CN/docs/Web/API/Document_Object_Model/Events)中找到。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CustomEvent")}}
- [创建和触发事件](/zh-CN/docs/Web/API/Document_Object_Model/Events)
