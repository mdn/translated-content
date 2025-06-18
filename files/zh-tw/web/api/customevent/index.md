---
title: CustomEvent
slug: Web/API/CustomEvent
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`CustomEvent`** 介面表示由應用程式為任何目的初始化的事件。

> [!NOTE]
> 如果嘗試在網頁擴充功能內容腳本與網頁腳本之間進行通訊，非字串的 `detail` 屬性會在 Firefox 中拋出「Permission denied to access property」的錯誤。為避免此問題，請複製該物件。詳情請參見[與頁面腳本共享物件](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)。

{{InheritanceDiagram}}

## 建構子

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : 建立一個新的 `CustomEvent`。

## 實例屬性

_此介面繼承自其父介面 {{domxref("Event")}} 的屬性。_

- {{domxref("CustomEvent.detail")}} {{ReadOnlyInline}}
  - : 回傳初始化事件時傳遞的任何資料。

## 實例方法

_此介面繼承自其父介面 {{domxref("Event")}} 的方法。_

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : 初始化一個 `CustomEvent` 物件。若事件已被觸發，此方法將不會執行任何操作。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Window.postMessage()")}}
- [建立與觸發事件](/zh-TW/docs/Web/Events/Creating_and_triggering_events)
