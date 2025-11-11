---
title: SyncEvent
slug: Web/API/SyncEvent
---

{{APIRef("Service Workers API")}} {{Non-standard_header}}

**`SyncEvent`** インターフェイスは、 ServiceWorker の {{domxref("ServiceWorkerGlobalScope")}} でディスパッチされる同期アクションを表します。

このインターフェイスは {{domxref("ExtendableEvent")}} インターフェイスを継承しています。

{{InheritanceDiagram(700, 60, 20)}}

## コンストラクタ

- {{domxref("SyncEvent.SyncEvent()")}}
  - : 新規の `SyncEvent` オブジェクトを作成します。

## プロパティ

_祖先である {{domxref("Event")}}_. からプロパティを継承します。

- {{domxref("SyncEvent.tag")}} {{readonlyinline}}
  - : この `SyncEvent` の開発者定義の識別子を返します。
- {{domxref("SyncEvent.lastChance")}} {{readonlyinline}}
  - : ユーザーエージェントが現在の試行の後に同期の試行をこれ以上行わない場合に `true` を返します。

## 関数

_親である_ _{{domxref("ExtendableEvent")}}_ から関数を継承します。

無し。

## ブラウザーの互換性

{{Compat}}
