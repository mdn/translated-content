---
title: click事件
slug: Web/API/Element/click_event
tags:
  - 待翻譯
  - API
  - DOM
  - Element
  - Event
  - Interface
  - MouseEvent
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Reference
  - UI
  - click
  - mouse
translation_of: Web/API/Element/click_event
---
**`click`** 事件通常會在設備的按鈕（通常是滑鼠按鍵）點擊元素時執行。

<table class="properties">
  <tbody>
    <tr>
      <th>冒泡傳遞</th>
      <td>是</td>
    </tr>
    <tr>
      <th>可取消</th>
      <td>是</td>
    </tr>
    <tr>
      <th>介面</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th>事件處理函式屬性</th>
      <td>
        {{domxref("GlobalEventHandlers.onclick", "onclick")}}
      </td>
    </tr>
  </tbody>
</table>

如果按下了一個元素內的按鈕，且在釋放按鈕之前將指正移到元素之外，則會在在包含這兩個元素的最具體的父級元素上觸發事件。

`click`事件會在{{domxref("Element/mousedown_event", "mousedown")}}和{{domxref("Element/mouseup_event", "mouseup")}}事件之後觸發。

## 使用說明

傳遞給`click`事件處理函式的{{domxref("MouseEvent")}}物件將其{{domxref("UIEvent/detail", "detail")}}屬性設置為點擊目標的次數。換句話說，`detail`在雙擊時為2，在三次點擊時為3，依此類推。該計數器在沒有任何點擊的情況下會在很短的時間間隔後重置；間隔時間的長短可能因瀏覽器和平台而異。間隔時間也很可能受到用戶偏好的影響；例如，無障礙選項可能會延長此間隔，以便更輕鬆地使用自適應介面執行多次點擊。

### Internet Explorer

Internet Explorer 8 & 9 suffer from a bug where elements with a computed {{cssxref("background-color")}} of [`transparent`](/zh-TW/docs/Web/CSS/color_value#transparent_keyword) that are overlaid on top of other element(s) won't receive `click` events. Any `click` events will be fired at the underlying element(s) instead. See [this live example](https://jsfiddle.net/YUKma/show/) for a demonstration.

Known workarounds for this bug:

- For IE9 only:

  - Set {{cssxref("background-color")}}`: rgba(0,0,0,0)`
  - Set {{cssxref("opacity")}}`: 0` and an explicit {{cssxref("background-color")}} other than [`transparent`](/zh-TW/docs/Web/CSS/color_value#transparent_keyword)

- For IE8 and IE9: Set `filter: alpha(opacity=0);` and an explicit {{cssxref("background-color")}} other than [`transparent`](/zh-TW/docs/Web/CSS/color_value#transparent_keyword)

### Safari Mobile

Safari Mobile 7.0+ (and likely earlier versions too) [suffers from a bug](https://bugs.webkit.org/show_bug.cgi?id=153887) where `click` events aren't fired on elements that aren't typically interactive (e.g. {{HTMLElement("div")}}) and which also don't have event listeners directly attached to the elements themselves (i.e. [event delegation](https://davidwalsh.name/event-delegate) is being used). See [this live example](https://jsfiddle.net/cvrhulu/k9t0sdnf/show/) for a demonstration. See also [Safari's docs on making elements clickable](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW6) and the [definition of "clickable element"](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#/apple_ref/doc/uid/TP40006511-SW7).

Known workarounds for this bug:

- Set {{cssxref("cursor")}}`: pointer;` on the element or any of its ancestors.
- Add a dummy `onclick="void(0)"` attribute to the element or any of its ancestors up to but not including {{HTMLElement("body")}}.
- Use a typically interactive element (e.g., {{HTMLElement("a")}}) instead of one that isn't typically interactive (e.g., {{HTMLElement("div")}}).
- Stop using `click` [event delegation](https://davidwalsh.name/event-delegate).

Safari Mobile considers the following elements to be typically interactive (and thus they aren't affected by this bug):

- {{HTMLElement("a")}} (but it must have an `href`)
- {{HTMLElement("area")}} (but it must have an `href`)
- {{HTMLElement("button")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("label")}} (but it must be associated with a form control)
- {{HTMLElement("textarea")}}
- _This list is incomplete; you can help MDN by doing further testing/research and expanding it._

## 範例

此範例顯示對{{HtmlElement("button")}}的連續點擊次數。

### HTML

```html
<button>Click</button>
```

### JavaScript

```js
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.textContent = `Click count: ${event.detail}`;
});
```

### 結果

嘗試快速、重複地點擊按鈕以增加點擊次數。如果您在兩次點擊之間暫停一下，計數將重置。

{{EmbedLiveSample("範例")}}

## 規範

{{Specifications}}

## 瀏覽器兼容性

{{Compat}}

## 參見

- [事件介紹](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
