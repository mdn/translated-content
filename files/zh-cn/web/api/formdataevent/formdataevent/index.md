---
title: FormDataEvent：FormDataEvent() 构造函数
slug: Web/API/FormDataEvent/FormDataEvent
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}

**`FormDataEvent()`** 构造函数创建一个新的 {{domxref("FormDataEvent")}} 对象。

## 语法

```js-nolint
new FormDataEvent(type, formEventInit)
```

### 参数

- `type`
  - : 包含事件名称的字符串。它区分大小写，且浏览器总是将其设置为 `formdata`。
- `options`
  - : 一个对象，该对象*除了在 {{domxref("Event/Event", "Event()")}} 中定义的属性之外*，还可以具有以下属性：
    - `formData`
      - : 一个预填充 {{domxref("FormDataEvent")}} 的 {{domxref("FormData")}} 对象，然后可以通过 {{domxref("FormDataEvent.formData")}} 属性访问该对象。

### 返回值

一个新的 {{domxref("FormDataEvent")}} 对象。

## 示例

```js
const fd = new FormData();
fd.append("test", "test");

const fdEv = new FormDataEvent("formdata", { formData: fd });

for (const value of fdEv.formData.values()) {
  console.log(value);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FormDataEvent")}}
