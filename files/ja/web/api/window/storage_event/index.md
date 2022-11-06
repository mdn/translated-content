---
title: storage
slug: Web/API/Window/storage_event
---

`storage` イベントは、ストレージエリア (`localStorage` または `sessionStorage`) が変更されたときに発生します。詳しくは [Web Storage API](/ja/docs/Web/API/Web_Storage_API) をご覧ください。

## 一般情報

- 仕様
  - : _[Web Storage](http://www.w3.org/TR/webstorage/#the-storage-event)_
- インターフェイス
  - : {{domxref("StorageEvent")}}
- バブリング
  - : 不可
- キャンセル可能か
  - : 不可
- ターゲット
  - : DefaultView (`<window>`)
- 既定のアクション
  - : なし

## プロパティ

| Property                               | Type                                      | Description                                            |
| -------------------------------------- | ----------------------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}      | {{domxref("EventTarget")}}      | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}        | {{domxref("DOMString")}}          | The type of event.                                     |
| `bubbles` {{readonlyInline}}     | {{jsxref("Boolean")}}              | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}}  | {{jsxref("Boolean")}}              | Whether the event is cancellable or not.               |
| `key` {{readonlyInline}}         | {{domxref("DOMString")}} (string) | The key being changed.                                 |
| `oldValue` {{readonlyInline}}    | {{domxref("DOMString")}} (string) | The old value of the key being changed.                |
| `newValue` {{readonlyInline}}    | {{domxref("DOMString")}} (string) | The new value of the key being changed.                |
| `url` {{readonlyInline}}         | {{domxref("DOMString")}} (string) | The address of the document whose key changed.         |
| `storageArea` {{readonlyInline}} | {{domxref("Storage")}}              | The Storage object that was affected.                  |
