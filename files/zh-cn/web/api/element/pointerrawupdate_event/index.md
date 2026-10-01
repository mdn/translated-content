---
title: Element：pointerrawupdate 事件
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: 827686870ee416d6f01739a48931618b61f4ce4e
---

{{APIRef("Pointer Events")}}{{secureContext_header}}

**`pointerrawupdate`** 事件会在指针的任何属性发生不激发 {{domxref('Element/pointerdown_event', 'pointerdown')}} 或 {{domxref('Element/pointerup_event', 'pointerup')}} 事件的变化时激发。参见 {{domxref('Element/pointermove_event', 'pointermove')}} 查看相关属性的列表。

如果事件循环中存在具有相同指针 ID 的其他未被派发的 `pointerrawupdate` 事件，`pointerrawupdate` 事件可能会被合并。如果事件被合并了，被派发的事件的 `target` 会与最后一个被合并的事件相同。关于被合并事件的信息，参见 {{domxref("PointerEvent.getCoalescedEvents()")}} 文档。

`pointerrawupdate` 与 {{domxref("Element/pointermove_event", "pointermove")}} 的区别在于它们的激发频率。浏览器可能会推迟 `pointermove` 事件以改善性能，而 `pointerrawupdate` 事件则是浏览器能多快频率产生就多快频率派发。两种事件类型都能合并，但 `pointerrawupdate` 更少合并，所以其监听器会更频繁地运行。任何单一事件在任何情况下都携带相同种类的属性，因此在空间与时间上，`pointerrawupdate` 并不比涵盖相同运动的 `pointermove` 事件更精细。

因此，`pointerrawupdate` 适用于需要比 `pointermove` 所提供的延迟更低的输入处理能力的应用程序，比如绘画与拖拽等不这么做就会明显滞后于指针的操作。由于事件发生得更频繁，与这些事件频率同步的应用程序感觉上也更加流畅。然而，因为监听 `pointerrawupdate` 事件会影响性能，你只应该在你的 JavaScript 需要高频事件且能够以跟它们被派发的速度一样快地处理它们时才添加这种监听器。跟不上频率的应用程序会让人感觉反应更慢，所以必须要在事件监听器内做重度优化。对于大多数使用场景，其他类型的指针事件应该已经足够应付了。

此事件会[冒泡](/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling)并且是[可穿透的](/zh-CN/docs/Web/API/Event/composed)，但是不[可取消](/zh-CN/docs/Web/API/Event/cancelable)并且没有默认行为。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用此事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("pointerrawupdate", (event) => { })

onpointerrawupdate = (event) => { }
```

## 事件类型

{{domxref("PointerEvent")}}，继承自 {{domxref("Event")}}。

{{InheritanceDiagram("PointerEvent")}}

## 示例

```js
canvas.addEventListener("pointerrawupdate", (event) => {
  const events = event.getCoalescedEvents();
  if (events.length > 1) {
    console.log("被合并事件：", events.length);
    for (const coalescedEvent of events) {
      // 用被合并事件做些什么。
    }
  } else {
    // 用事件做些什么。
    console.log("原始事件", event);
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件
  - {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - {{domxref('Element/pointerover_event', 'pointerover')}}
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
