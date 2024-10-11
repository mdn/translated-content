---
title: "Document: createTouch() 方法"
short-title: createTouch()
slug: Web/API/Document/createTouch
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.Document.createTouch
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{Non-standard_header}}

The **`Document.createTouch()`**方法创建并返回一个新的{{DOMxRef("Touch")}}对象。

> [!NOTE]
> 建议使用 {{domxref("TouchEvent.TouchEvent", "TouchEvent()")}} 构造函数。

## 语法

```js-nolint
createTouch(view, target, identifier, pageX, pageY, screenX, screenY)
```

### 语法

> [!NOTE]
> 所有参数都是可选的。

- `view`
  - : 发生触摸的{{DOMxRef("window")}}。
- `target`
  - : 触摸的{{DOMxRef("EventTarget")}}。
- `identifier`
  - : {{DOMxRef("Touch.identifier")}}的值。
- `pageX`
  - : {{DOMxRef("Touch.pageX")}}的值。
- `pageY`
  - : {{DOMxRef("Touch.pageY")}}的值。
- `screenX`
  - : {{DOMxRef("Touch.screenX")}}的值。
- `screenY`
  - : {{DOMxRef("Touch.screenY")}}的值。

> [!NOTE]
> 该方法的先前版本包括以下附加参数，
> 但这些参数未包含在下面列出的任何标准中。
> 因此，这些参数应被视为不推荐使用。

- `clientX`
  - : {{DOMxRef("Touch.clientX")}}的值。
- `clientY`
  - : {{DOMxRef("Touch.clientY")}}的值。
- `radiusX`
  - : {{DOMxRef("Touch.radiusX")}}的值。
- `radiusY`
  - : {{DOMxRef("Touch.radiusY")}}的值。
- `rotationAngle`
  - : {{DOMxRef("Touch.rotationAngle")}}的值。
- `force`
  - : {{DOMxRef("Touch.force")}}的值。

### 返回值

- `touch`
  - : 按照输入参数的描述配置的{{DOMxRef("Touch")}}对象。

## 例子

此示例说明了如何使用`Document.createTouch()`方法创建{{DOMxRef("Touch")}}对象。

在下面的代码片段中，为`target`元素创建了两个{{DOMxRef("Touch")}}对象。

```js
const target = document.getElementById("target");

const touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
const touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);
```

## 规范

此功能不是任何当前规范的一部分。它不再有望成为标准。

## 浏览器兼容性

{{Compat}}

## 相关阅读

- [触摸事件](/zh-CN/docs/Web/API/Touch_events)
- {{DOMxRef("TouchList")}}
- {{DOMxRef("Touch")}}
- {{DOMxRef("Document.createTouchList()")}}
