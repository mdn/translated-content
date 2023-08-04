---
title: DragEvent
slug: Web/API/DragEvent
---

{{APIRef("HTML Drag and Drop API")}}

**`DragEvent`** 是一个表示拖、放交互的一个{{domxref("Event","DOM event")}} 接口。用户通过将指针设备（例如鼠标）放置在触摸表面上并且然后将指针拖动到新位置（诸如另一个 DOM 元素）来发起拖动。应用程序可以按应用程序特定的方式自由解释拖放交互。

这个接口继承 {{domxref("MouseEvent")}} 和{{domxref("Event")}}属性

## 属性

- {{domxref('DragEvent.dataTransfer')}} {{readonlyInline}}
  - : 在拖放交互期间传输的数据。

## 构造函数

虽然这个接口有一个构造函数，但不可能从脚本创建一个有用的 DataTransfer 对象，因为在拖放期间，有一个由浏览器分配的一个处理中和安全模式的{{domxref("DataTransfer")}}对象。

- {{domxref("DragEvent.DragEvent", "DragEvent()")}}
  - : 创建合成和不可信的 DragEvent.

## 事件类型

- [`drag`](/zh-CN/docs/Web/API/HTMLElement/drag_event)
  - : 拖动元素或选择文本时触发此事件。
- [`dragend`](/zh-CN/docs/Web/API/HTMLElement/dragend_event)
  - : 当拖动操作结束时（释放鼠标按钮或按下退出键），会触发此事件。
- [`dragenter`](/zh-CN/docs/Web/API/HTMLElement/dragenter_event)
  - : 当拖动的元素或选择文本输入有效的放置目标时，会触发此事件。
- [`dragleave`](/zh-CN/docs/Web/API/HTMLElement/dragleave_event)
  - : 当拖动的元素或文本选择离开有效的放置目标时，会触发此事件。
- [`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event)
  - : 当将元素或文本选择拖动到有效放置目标（每几百毫秒）上时，会触发此事件。
- [`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event)
  - : 当用户开始拖动元素或选择文本时触发此事件。
- [`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event)
  - : 当在有效放置目标上放置元素或选择文本时触发此事件。

## 全局事件处理

- {{domxref('GlobalEventHandlers.ondrag')}}
  - : [`drag`](/zh-CN/docs/Web/API/HTMLElement/drag_event) 事件的{{domxref('GlobalEventHandlers','全局事件处理')}}。
- {{domxref('GlobalEventHandlers.ondragend')}}
  - : [`dragend`](/zh-CN/docs/Web/API/HTMLElement/dragend_event) 事件的{{domxref('GlobalEventHandlers','全局事件处理')}}。
- {{domxref('GlobalEventHandlers.ondragenter')}}
  - : [`dragenter`](/zh-CN/docs/Web/API/HTMLElement/dragenter_event) 事件的{{domxref('GlobalEventHandlers','全局事件处理')}}。
- {{domxref('GlobalEventHandlers.ondragexit')}}
  - : [`dragleave`](/zh-CN/docs/Web/API/HTMLElement/dragleave_event) 事件的{{domxref('GlobalEventHandlers','全局事件处理')}}。
- {{domxref('GlobalEventHandlers.ondragover')}}
  - : [`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event) 事件的{{domxref('GlobalEventHandlers','全局事件处理')}}。
- {{domxref('GlobalEventHandlers.ondragstart')}}
  - : [`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event) 事件的{{domxref('GlobalEventHandlers','全局事件处理')}}。
- {{domxref('GlobalEventHandlers.ondrop')}}
  - : [`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event) 事件的{{domxref('GlobalEventHandlers','全局事件处理')}}。

## 示例

每个属性，构造函数，事件类型和全局事件处理程序的示例都包含在它们各自的参考页中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
