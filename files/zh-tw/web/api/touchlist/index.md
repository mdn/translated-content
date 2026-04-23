---
title: TouchList
slug: Web/API/TouchList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("Touch Events")}}

**`TouchList`** 介面表示觸控表面上的接觸點清單。例如，當使用者以三根手指接觸觸控表面（如螢幕或觸控板）時，對應的 `TouchList` 物件中會包含三個 {{domxref("Touch")}} 物件，各代表一根手指。

這個介面最初是[為了建立一個不可修改的清單](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156)而設計，現在仍被支援僅是為了避免破壞既有程式碼。現代 API 使用以 JavaScript [陣列](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)為基礎的型別來表示清單結構，這讓許多陣列方法能夠使用，同時也為使用這些結構帶來更多語意（例如將項目設為唯讀）。

然而，這些歷史原因並不表示你身為開發者應該避免使用 `TouchList`。你無需自行建立 `TouchList` 物件，而是透過像是 {{domxref("TouchEvent.targetTouches")}} 這類 API 取得，且這些 API 並未被淘汰。但你仍需留意它與真正陣列之間的語意差異。

## 實例屬性

- {{domxref("TouchList.length")}} {{ReadOnlyInline}}
  - : `TouchList` 中的 {{domxref("Touch")}} 物件數量。

## 實例方法

- {{domxref("TouchList.item()")}}
  - : 回傳清單中指定索引位置的 {{domxref("Touch")}} 物件。

## 範例

請參見[主篇文章中的觸控事件範例](/zh-TW/docs/Web/API/Touch_events#範例)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [觸控事件](/zh-TW/docs/Web/API/Touch_events)
- {{domxref("Document.createTouchList()")}}
