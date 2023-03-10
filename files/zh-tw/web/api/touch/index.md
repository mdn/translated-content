---
title: Touch
slug: Web/API/Touch
---

{{ APIRef("Touch Events") }}

**`Touch`** 介面表示了一個於觸控裝置上接觸的單一觸碰點。觸碰點通常是由手指或觸控筆所接觸，而裝置可能為觸控螢幕或觸控板。

{{ domxref("Touch.radiusX") }}、{{ domxref("Touch.radiusY") }} 及 {{ domxref("Touch.rotationAngle") }} 描述了使用者與螢幕之間接觸的區域—_觸碰區（touch area）_，這對處理不精確的指向設備（如手指）來說相當有幫助。這些數值被用來描述一個盡可能與整個接觸面積相匹配的橢圓（如使用者的指尖）。{{experimental_inline}}

> **備註：** Many of the properties' values are hardware-dependent; for example, if the device doesn't have a way to detect the amount of pressure placed on the surface, the `force` value will always be 0. This may also be the case for `radiusX` and `radiusY`; if the hardware reports only a single point, these values will be 1.

## 建構式

- {{domxref("Touch.Touch", "Touch()")}} {{experimental_inline}}
  - : Creates a Touch object.

## 屬性

_This interface has no parent, and doesn't inherits or implements any other property._

### 基本屬性

- {{ domxref("Touch.identifier") }} {{readonlyInline}}
  - : Returns a unique identifier for this `Touch` object. A given touch point (say, by a finger) will have the same identifier for the duration of its movement around the surface. This lets you ensure that you're tracking the same touch all the time.
- **{{ domxref("Touch.screenX") }}** {{readonlyInline}}
  - : Returns the X coordinate of the touch point relative to the left edge of the screen.
- **{{ domxref("Touch.screenY") }}** {{readonlyInline}}
  - : Returns the Y coordinate of the touch point relative to the top edge of the screen.
- **{{ domxref("Touch.clientX") }}** {{readonlyInline}}
  - : Returns the X coordinate of the touch point relative to the left edge of the browser viewport, not including any scroll offset.
- **{{ domxref("Touch.clientY") }}** {{readonlyInline}}
  - : Returns the Y coordinate of the touch point relative to the top edge of the browser viewport, not including any scroll offset.
- {{ domxref("Touch.pageX") }} {{readonlyInline}}
  - : Returns the X coordinate of the touch point relative to the left edge of the document. Unlike `clientX`, this value includes the horizontal scroll offset, if any.
- {{ domxref("Touch.pageY") }} {{readonlyInline}}
  - : Returns the Y coordinate of the touch point relative to the top of the document. Unlike `clientY,` this value includes the vertical scroll offset, if any.
- {{ domxref("Touch.target") }} {{readonlyInline}}
  - : Returns the {{ domxref("Element")}} on which the touch point started when it was first placed on the surface, even if the touch point has since moved outside the interactive area of that element or even been removed from the document.

### 觸碰區（Touch area）

{{SeeCompatTable}}

- {{ domxref("Touch.radiusX") }} {{readonlyInline}} {{experimental_inline}}
  - : Returns the X radius of the ellipse that most closely circumscribes the area of contact with the screen. The value is in pixels of the same scale as `screenX`.
- {{ domxref("Touch.radiusY") }} {{readonlyInline}} {{experimental_inline}}
  - : Returns the Y radius of the ellipse that most closely circumscribes the area of contact with the screen. The value is in pixels of the same scale as `screenY`.
- {{ domxref("Touch.rotationAngle") }} {{readonlyInline}} {{experimental_inline}}
  - : Returns the angle (in degrees) that the ellipse described by radiusX and radiusY must be rotated, clockwise, to most accurately cover the area of contact between the user and the surface.
- {{ domxref("Touch.force") }}{{readonlyInline}} {{experimental_inline}}
  - : Returns the amount of pressure being applied to the surface by the user, as a `float` between `0.0` (no pressure) and `1.0` (maximum pressure).

## 方法

_This interface has no method and no parent, and doesn't inherits or implements any method._

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Touch_events","Touch Events Overview")}}
- {{ domxref("Document.createTouch()") }}
