---
title: WheelEvent
slug: Web/API/WheelEvent
---

{{APIRef("UI Events")}}

WheelEvent DOM 事件會在用戶滚动滑鼠滚轮或操作其它類似滑鼠的設備時觸發。

> [!WARNING]
> 該事件爲標準規定的事件介面。早期的瀏覽器實現過 {{domxref("MouseWheelEvent")}} 和 {{domxref("MouseScrollEvent")}} 兩種滾輪事件介面，但這兩種介面皆非標準，加之各瀏覽器間對其相容性極差。因而開發者應用該標準事件介面取代這兩個非標準介面。

> [!NOTE]
> 請勿想當然依據滾輪方向（即該事件的各 delta 屬性值）來推斷文檔內容的滾動方向，因標準未定義滾輪事件具體會引發什麼樣的行爲，引發的行爲實際上是各瀏覽器自行定義的。即便滾輪事件引發了文檔內容的滾動行爲，也不表示滾輪方向和文檔內容的滾動方向一定相同。因而通過該滾輪事件獲知文檔內容滾動方向的方法並不可靠。要獲取文檔內容的滾動方向，可在文檔內容滾動事件（{{domxref("Element/scroll_event", "scroll")}}）中監視 {{domxref("Element.scrollLeft", "scrollLeft")}} 和 {{domxref("Element.scrollTop", "scrollTop")}} 二值變化情況，即可推斷出滾動方向了。

{{InheritanceDiagram}}

## 建構式

- {{domxref("WheelEvent.WheelEvent", "WheelEvent()")}}
  - : 建立一個 `WheelEvent` 物件。

## 屬性

_該介面繼承了父介面 {{domxref("MouseEvent")}}、{{domxref("UIEvent")}}、{{domxref("Event")}} 的屬性。_

- {{domxref("WheelEvent.deltaX")}} {{readonlyinline}}
  - : 返回 `double` 值，該值表示滾輪的橫向滾動量。
- {{domxref("WheelEvent.deltaY")}} {{readonlyinline}}
  - : 返回 `double` 值，該值表示滾輪的縱向滾動量。
- {{domxref("WheelEvent.deltaZ")}} {{readonlyinline}}
  - : 返回 `double` 值，該值表示滾輪的 z 軸方向上的滾動量。
- {{domxref("WheelEvent.deltaMode")}} {{readonlyinline}}
  - : 返回 `unsigned long` 值，該值表示上述各 delta 的值的單位。該值及所表示的單位如下：

    | 常數              | 值     | 描述               |
    | ----------------- | ------ | ------------------ |
    | `DOM_DELTA_PIXEL` | `0x00` | 滾動量單位爲像素。 |
    | `DOM_DELTA_LINE`  | `0x01` | 滾動量單位爲行。   |
    | `DOM_DELTA_PAGE`  | `0x02` | 滾動量單位爲頁。   |

## 方法

_該介面本身未定義方法，但繼承了父介面 {{domxref("MouseEvent")}}、{{domxref("UIEvent")}}、{{domxref("Event")}} 的方法。_

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`wheel`](/zh-TW/docs/Web/API/Element/wheel_event)
- 該介面取代的過時介面：
  - {{ domxref("MouseScrollEvent") }}（Gecko 內核瀏覽器）
  - {{ domxref("MouseWheelEvent") }}（非 Gecko 內核的瀏覽器）
