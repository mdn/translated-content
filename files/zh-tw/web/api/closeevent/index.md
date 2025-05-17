---
title: CloseEvent
slug: Web/API/CloseEvent
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("Websockets API")}}{{AvailableInWorkers}}

當連線關閉時，{{Glossary("WebSockets", "WebSocket")}} 會傳送一個 `CloseEvent` 給用戶端。這個事件會傳遞給 `WebSocket` 物件的 `onclose` 屬性所指定的監聽器。

{{InheritanceDiagram}}

## 建構子

- {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}}
  - : 建立一個新的 `CloseEvent`。

## 實例屬性

_此介面也繼承自其父介面 {{domxref("Event")}} 的屬性。_

- {{domxref("CloseEvent.code")}} {{ReadOnlyInline}}
  - : 回傳一個包含關閉碼的 `unsigned short`。
- {{domxref("CloseEvent.reason")}} {{ReadOnlyInline}}
  - : 回傳一個字串，指出伺服器關閉連線的原因。這個原因依據特定伺服器與子協議而有所不同。
- {{domxref("CloseEvent.wasClean")}} {{ReadOnlyInline}}
  - : 回傳一個布林值，指出連線是否乾淨地關閉。

## 實例方法

_此介面也繼承自其父介面 {{domxref("Event")}} 的方法。_

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("WebSocket")}}
