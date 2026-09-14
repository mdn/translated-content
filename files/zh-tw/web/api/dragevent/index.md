---
title: DragEvent
slug: Web/API/DragEvent
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("HTML Drag and Drop API")}}

**`DragEvent`** 介面是用來表示拖曳與放置的互動行為的 [DOM 事件](/zh-TW/docs/Web/API/Event)。使用者透過在觸控表面上放置指標裝置（例如滑鼠），然後將指標拖曳至新位置（例如另一個 DOM 元素）來啟動拖曳動作。應用程式可以依照其特定需求自由詮釋拖曳與放置的互動。

此介面從 {{domxref("MouseEvent")}} 和 {{domxref("Event")}} 繼承屬性。

{{InheritanceDiagram}}

## 實例屬性

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : 在拖曳與放置互動期間所傳輸的資料。

## 建構子

雖然此介面有建構子，但無法透過腳本建立有用的 DataTransfer 物件，因為 {{domxref("DataTransfer")}} 物件具有在拖曳與放置操作期間由瀏覽器協調的處理和安全模型。

- {{domxref("DragEvent.DragEvent", "DragEvent()")}}
  - : 建立一個合成的、不可信任的 DragEvent。

## 事件型別

- {{domxref("HTMLElement/drag_event", "drag")}}
  - : 當某個元素或文字選取正在被拖曳時觸發此事件。
- {{domxref("HTMLElement/dragend_event", "dragend")}}
  - : 當拖曳操作結束（例如釋放滑鼠按鍵或按下 Esc 鍵）時觸發此事件。
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - : 當被拖曳的元素或文字選取進入有效的放置目標時觸發此事件。
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - : 當被拖曳的元素或文字選取離開有效的放置目標時觸發此事件。
- {{domxref("HTMLElement/dragover_event", "dragover")}}
  - : 當某個元素或文字選取正在被拖曳，且滑鼠指標位於有效的放置目標上時觸發（每 50 毫秒觸發一次此事件（若滑鼠未移動）；若滑鼠正在移動，觸發速度更快，約為每 5 毫秒（慢速移動）到 1 毫秒（快速移動）之間。這種觸發模式與 {{domxref("Element/mouseover_event", "mouseover")}} 不同）。
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - : 當使用者開始拖曳某個元素或文字選取時觸發此事件。
- {{domxref("HTMLElement/drop_event", "drop")}}
  - : 當元素或文字選取被放置在有效的放置目標上時觸發此事件。

## 範例

各屬性、建構子、事件型別與全域事件處理器的範例，請參見其各自的參考頁面。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [拖曳與放置](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖曳操作](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [建議的拖曳類型](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer 測試——貼上或拖曳](https://codepen.io/tech_query/pen/MqGgap)
