---
title: MediaQueryList
slug: Web/API/MediaQueryList
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("CSSOM")}}

**`MediaQueryList`** 物件儲存了套用至文件的[媒體查詢](/zh-TW/docs/Web/CSS/Guides/Media_queries)資訊，並支援針對文件狀態進行立即和事件驅動的匹配。

你可以透過在 {{DOMxRef("window")}} 物件上呼叫 {{DOMxRef("Window.matchMedia", "matchMedia()")}} 來建立一個 `MediaQueryList`。產生的物件會處理在媒體查詢狀態改變時（也就是當媒體查詢測試開始或停止評估為 `true` 時）向監聽器發送通知。

這對於自適應設計非常有用，因為它讓觀察文件以偵測其媒體查詢何時改變成為可能，而不是定期輪詢其值，並且允許你根據媒體查詢的狀態，以程式化方式對文件進行變更。

{{InheritanceDiagram}}

## 實例屬性

_`MediaQueryList` 介面繼承其父介面 {{DOMxRef("EventTarget")}} 的屬性。_

- {{DOMxRef("MediaQueryList.matches", "matches")}} {{ReadOnlyInline}}
  - : 一個布林值，如果 {{DOMxRef("document")}} 目前符合媒體查詢列表，則回傳 `true`，否則回傳 `false`。
- {{DOMxRef("MediaQueryList.media", "media")}} {{ReadOnlyInline}}
  - : 一個代表序列化媒體查詢的字串。

## 實例方法

_`MediaQueryList` 介面繼承其父介面 {{DOMxRef("EventTarget")}} 的方法。_

- {{DOMxRef("MediaQueryList.addListener", "addListener()")}} {{deprecated_inline}}
  - : 新增一個回呼函式到 `MediaQueryList`，每當媒體查詢狀態——也就是文件是否符合列表中的媒體查詢——改變時，該回呼函式就會被調用。這個方法主要是為了向後相容而存在；如果可能，你應該改用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 來監聽 {{domxref("MediaQueryList.change_event", "change")}} 事件。
- {{DOMxRef("MediaQueryList.removeListener", "removeListener()")}} {{deprecated_inline}}
  - : 從 `MediaQueryList` 的媒體查詢狀態改變（狀態改變發生在文件在符合與不符合 `MediaQueryList` 中所列媒體查詢之間切換的任何時候）時要調用的回呼函式中，移除指定的監聽器回呼函式。這個方法是為了向後相容而保留的；如果可能，你通常應該使用 {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} 來移除變更通知的回呼函式（這些回呼函式應該是先前使用 `addEventListener()` 新增的）。

## 事件

_下列事件會傳遞至 `MediaQueryList` 物件：_

- {{DOMxRef("MediaQueryList.change_event", "change")}}
  - : 當對文件執行媒體查詢的結果改變時，會傳送至 `MediaQueryList`。例如，如果媒體查詢是 `(width >= 400px)`，那麼每當文件{{Glossary("viewport", "視區")}}的寬度改變，以致其寬度向任一方向跨越 400px 的邊界時，`change` 事件就會被觸發。

## 範例

這個範例建立了一個 `MediaQueryList`，然後設定一個監聽器來偵測媒體查詢狀態何時改變，並在改變時執行一個自訂函式來改變頁面的外觀。

```js
const para = document.querySelector("p");
const mql = window.matchMedia("(width <= 400px)");

function screenTest(e) {
  if (e.matches) {
    /* 視區寬度為 600 像素或更小 */
    para.textContent = "這是一個窄螢幕——寬度小於 600px。";
    document.body.style.backgroundColor = "red";
  } else {
    /* 視區寬度大於 600 像素 */
    para.textContent = "這是一個寬螢幕——寬度大於 600px。";
    document.body.style.backgroundColor = "blue";
  }
}

mql.addEventListener("change", screenTest);
```

> [!NOTE]
> 你可以在 GitHub 上找到這個範例（參見[原始碼](https://github.com/mdn/dom-examples/blob/main/mediaquerylist/index.html)，也可以看看[線上執行版本](https://mdn.github.io/dom-examples/mediaquerylist/index.html)）。

你可以在各個屬性和方法的頁面中找到其他範例。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [媒體查詢](/zh-TW/docs/Web/CSS/Guides/Media_queries/Using)
- [從程式碼使用媒體查詢](/zh-TW/docs/Web/CSS/Guides/Media_queries/Testing)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("Window.devicePixelRatio")}} 文章中也有一個有用的範例
