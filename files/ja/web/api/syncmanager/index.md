---
title: SyncManager
slug: Web/API/SyncManager
---

{{APIRef("Service Workers API")}}{{Non-standard_header}}

[ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API) の **`SyncManager`** インターフェイスは同期登録を登録、及び一覧表示のインターフェイスを提供します。

## プロパティ

無し

## メソッド

- {{domxref("SyncManager.register")}}
  - : 新規の同期登録を作成し {{jsxref("Promise")}} を返します。
- {{domxref("SyncManager.getTags")}}
  - : SyncManager 登録の為にデベロッパーが定義した識別子リストを返します。

## 仕様

| 仕様                                                                                             | 状態                                 | コメント            |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Background Sync','#sync-manager-interface','SyncManager')}} | {{Spec2('Background Sync')}} | Initial definition. |

## ブラウザの互換性

{{Compat("api.SyncManager")}}
