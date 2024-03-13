---
title: StorageManager
slug: Web/API/StorageManager
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Storage")}}

[Storage API](/ja/docs/Web/API/Storage_API) の **`StorageManager`** インターフェイスは、永続性のパーミッションの管理と、利用可能なストレージの見積もりのインターフェイスを提供します。{{domxref("navigator.storage")}} か {{domxref("WorkerNavigator.storage")}} のいずれかを使用して、このインターフェイスへの参照を取得できます。

## メソッド

- {{domxref("StorageManager.estimate()")}} {{securecontext_inline}}
  - : オリジンの使用量とクォータを含む {{domxref("StorageEstimate")}} オブジェクトを返します。
- {{domxref("StorageManager.persist()")}} {{securecontext_inline}}
  - : ユーザーエージェントがサイトのストレージを永続化できる場合に `true` に解決される {{jsxref('Promise')}} を返します。
- {{domxref("StorageManager.persisted()")}} {{securecontext_inline}}
  - : サイトのストレージに永続性がすでに付与されている場合に `true` に解決される {{jsxref('Promise')}} を返します。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
