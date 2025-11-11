---
title: UIEvent
slug: Web/API/UIEvent
---

{{APIRef("UI Events")}}

**`UIEvent`** 介面是使用者介面的事件的基本型態。

`UIEvent` 是從 {{domxref("Event")}} 衍伸過來。 雖然為了相容性，仍留著 {{domxref("UIEvent.initUIEvent()")}} 方法，建立 `UIEvent` 物件最好是選擇以 {{domxref("UIEvent.UIEvent", "UIEvent()")}} constructor 建立。

許多介面直接或間接繼承此介面，例如：{{domxref("MouseEvent")}}、{{domxref("TouchEvent")}}、{{domxref("FocusEvent")}}、{{domxref("KeyboardEvent")}}、{{domxref("WheelEvent")}}、{{domxref("InputEvent")}} 和 {{domxref("CompositionEvent")}}。

## 建構式

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : 建立一個 `UIEvent` 物件 。

## 屬性

_此介面亦繼承其父－－ {{domxref("Event")}} 的屬性：_

- {{domxref("UIEvent.cancelBubble")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : Is a {{jsxref("Boolean")}} indicating whether the bubbling of the event has been canceled or not.
- {{domxref("UIEvent.detail")}}{{readonlyinline}}
  - : Returns a `long` with details about the event, depending on the event type.
- {{domxref("UIEvent.isChar")}} {{Deprecated_Inline}} {{readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} indicating whether the event produced a key character or not.
- {{domxref("UIEvent.layerX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the horizontal coordinate of the event relative to the current layer.
- {{domxref("UIEvent.layerY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the vertical coordinate of the event relative to the current layer.
- {{domxref("UIEvent.pageX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the horizontal coordinate of the event relative to the whole document.
- {{domxref("UIEvent.pageY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the vertical coordinate of the event relative to the whole document.
- {{domxref("UIEvent.sourceCapabilities")}} {{non-standard_inline}} {{readonlyinline}}
  - : Returns an instance of the InputDeviceCapabilities interface which provides information about the physical device responsible for generating a touch event.
- {{domxref("UIEvent.view")}}{{readonlyinline}}
  - : Returns a {{domxref("WindowProxy")}} that contains the view that generated the event.
- {{domxref("UIEvent.which")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the numeric `keyCode` of the key pressed, or the character code (`charCode`) for an alphanumeric key pressed.

## 方法

_此介面亦繼承其父－－ {{domxref("Event")}} 的方法：_

- {{domxref("UIEvent.initUIEvent()")}} {{deprecated_inline}}
  - : 初始化 `UIEvent` 物件。若該事件已經觸發的話，此方法就不會執行任何東西。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Introduction to events](/zh-TW/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Event")}}
