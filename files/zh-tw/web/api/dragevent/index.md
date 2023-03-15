---
title: DragEvent
slug: Web/API/DragEvent
---

{{APIRef("HTML Drag and Drop API")}}

**`DragEvent`** 介面是一種 {{domxref("Event","DOM event")}}，定義了拖放操作時產生的事件物件。使用者藉由把指標裝置 (例如滑鼠) 放到有效區域並拖移到另一個新的位置 ( 如另外一個 DOM 元素 ) 來開始一個拖動的動作。 而應用程式可以自由地決定互動的方式來達到符合該應用程式的使用情境。

This interface inherits properties from {{domxref("MouseEvent")}} and {{domxref("Event")}}.

## 屬性

- {{domxref('DragEvent.dataTransfer')}} {{readonlyInline}}
  - : The data that is transferred during a drag and drop interaction.

## 建構式

Although this interface has a constructor, it is not possible to create a useful DataTransfer object from script, since {{domxref("DataTransfer")}} objects have a processing and security model that is coordinated by the browser during drag-and-drops.

- {{domxref("DragEvent.DragEvent", "DragEvent()")}}
  - : Creates a synthetic and untrusted DragEvent.

## 事件類型

- [`drag`](/zh-TW/docs/Web/API/HTMLElement/drag_event)
  - : 在『被選擇的物件』被拖曳時觸發。
- [`dragend`](/zh-TW/docs/Web/API/HTMLElement/dragend_event)
  - : 在『被選擇的物件』結束拖曳時觸發 (就是放開滑鼠鍵、或按下 Esc 鍵時)。
- [`dragenter`](/zh-TW/docs/Web/API/HTMLElement/dragenter_event)
  - : 當『被選擇的物件』被拖曳到『可以當目標的物件』時, 在『進入』該目標物件上方的瞬間觸發。注意, 不是『被選擇的物件』觸發此事件, 而是『可以當目標的物件』。
- [`dragleave`](/zh-TW/docs/Web/API/HTMLElement/dragleave_event)
  - : 當『被選擇的物件』被拖曳到『可以當目標的物件』時, 在『離開』該目標物件上方的瞬間觸發。注意, 不是『被選擇的物件』觸發此事件, 而是『可以當目標的物件』。
- [`dragover`](/zh-TW/docs/Web/API/HTMLElement/dragover_event)
  - : 當『被選擇的物件』被拖曳到『可以當目標的物件』的上方時觸發 (頻率大約每秒數次)。注意, 不是『被選擇的物件』觸發此事件, 而是『可以當目標的物件』 。
- [`dragstart`](/zh-TW/docs/Web/API/HTMLElement/dragstart_event)
  - : 在『被選擇的物件』開始拖曳時觸發。
- [`drop`](/zh-TW/docs/Web/API/HTMLElement/drop_event)
  - : 當『被選擇的物件』被拖曳、放到『目標物件』時觸發。注意, 不是『被選擇的物件』觸發此事件, 而是『目標物件』。

## 通用事件處理器

- {{domxref('GlobalEventHandlers.ondrag')}}
  - : A {{domxref('GlobalEventHandlers','global event handler')}} for the [`drag`](/zh-TW/docs/Web/API/HTMLElement/drag_event) event.
- {{domxref('GlobalEventHandlers.ondragend')}}
  - : A {{domxref('GlobalEventHandlers','global event handler')}} for the [`dragend`](/zh-TW/docs/Web/API/HTMLElement/dragend_event) event.
- {{domxref('GlobalEventHandlers.ondragenter')}}
  - : A {{domxref('GlobalEventHandlers','global event handler')}} for the [`dragenter`](/zh-TW/docs/Web/API/HTMLElement/dragenter_event) event.
- {{domxref('GlobalEventHandlers.ondragleave')}}
  - : A {{domxref('GlobalEventHandlers','global event handler')}} for the [`dragleave`](/zh-TW/docs/Web/API/HTMLElement/dragleave_event) event.
- {{domxref('GlobalEventHandlers.ondragover')}}
  - : A {{domxref('GlobalEventHandlers','global event handler')}} for the [`dragover`](/zh-TW/docs/Web/API/HTMLElement/dragover_event) event.
- {{domxref('GlobalEventHandlers.ondragstart')}}
  - : A {{domxref('GlobalEventHandlers','global event handler')}} for the [`dragstart`](/zh-TW/docs/Web/API/HTMLElement/dragstart_event) event.
- {{domxref('GlobalEventHandlers.ondrop')}}
  - : A {{domxref('GlobalEventHandlers','global event handler')}} for the [`drop`](/zh-TW/docs/Web/API/HTMLElement/drop_event) event.

## 範例

An Example of each property, constructor, event type and global event handlers is included in their respective reference page.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTML 拖放 API](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖曳操作](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推薦拖曳類型](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [拖拽和放置多個項目](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
