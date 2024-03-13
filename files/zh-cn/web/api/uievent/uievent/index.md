---
title: UIEvent()
slug: Web/API/UIEvent/UIEvent
---

{{APIRef("DOM Events")}}

**`UIEvent()`** 作为构造函数，可用于构造一个新的 {{domxref("UIEvent")}} 对象。

## 语法

```
event = new UIEvent(typeArg [, UIEventInit])
```

### Values

- `typeArg`
  - : 传递的是一个 {{domxref("DOMString")}}类型的字符串，用来命名且重新发布的事件。
- `UIEventInit` {{optional_inline}}

  - : 是 `UIEventInit` 集合，它拥有以下属性：

    - **`detail`**: 可选，默认为 long 类型的 0 数值，用来标记事件的关联值。{{domxref("UIEvent.detail")}} 列出了标准事件的语义。
    - **`view`**: 可选，默认为 null，类型为 {{domxref("WindowProxy")}}, 用来关联{{domxref("Window")}} 与 event 本身。
    - **`sourceCapabilities`**: {{non-standard_inline}} 一个 {{domxref("InputDeviceCapabilities")}} 类型的接口实例 (对象)，用来提供物理设备的触摸信息。

    > **备注：** `UIEventInit` 合集依然接受从{{domxref("Event.Event", "EventInit")}} 定义来的合集。

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{domxref("UIEvent")}}, the interface of the objects it constructs.
