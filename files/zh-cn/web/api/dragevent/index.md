---
title: DragEvent
slug: Web/API/DragEvent
l10n:
  sourceCommit: 3385bda58637833eedc9b8dc41a2804e653208a7
---

{{APIRef("HTML Drag and Drop API")}}

**`DragEvent`** 接口是表示拖放交互的 [DOM 事件](/zh-CN/docs/Web/API/Event)。用户将指针设备（如鼠标）放在触摸表面上，然后将指针拖到新位置（如另一个 DOM 元素），从而开始拖拽。应用程序可以按自身特定的方式解释拖放交互。

此接口继承 {{domxref("MouseEvent")}} 和 {{domxref("Event")}} 的属性。

{{InheritanceDiagram}}

## 实例属性

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : 拖放交互期间传输的数据。

## 构造函数

虽然此接口有构造函数，但无法通过脚本创建有用的 DataTransfer 对象，因为 {{domxref("DataTransfer")}} 对象的处理和安全模型由浏览器在拖放过程中协调。

- {{domxref("DragEvent.DragEvent", "DragEvent()")}}
  - : 创建合成的、不受信任的 DragEvent。

## 事件类型

- {{domxref("HTMLElement/drag_event", "drag")}}
  - : 该事件在元素或选中的文本被拖拽时反复触发。触发频率取决于浏览器、操作系统和指针移动；不要依赖固定间隔。
- {{domxref("HTMLElement/dragend_event", "dragend")}}
  - : 该事件在拖拽操作结束时触发（松开鼠标按钮或按下 Esc 键）。
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - : 该事件在被拖拽的元素或选中的文本进入有效放置目标时触发。
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - : 该事件在被拖拽的元素或选中的文本离开有效放置目标时触发。
- {{domxref("HTMLElement/dragover_event", "dragover")}}
  - : 该事件在元素或选中的文本被拖过潜在放置目标时反复触发。触发频率取决于浏览器、操作系统和指针移动；不要依赖固定间隔。
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - : 该事件在用户开始拖拽元素或选中的文本时触发。
- {{domxref("HTMLElement/drop_event", "drop")}}
  - : 该事件在元素或选中的文本被放到有效放置目标上时触发。

## 示例

各属性、构造函数、事件类型和全局事件处理器的示例见各自的参考页。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖放数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
