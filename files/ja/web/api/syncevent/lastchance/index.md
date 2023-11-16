---
title: SyncEvent.lastChance
slug: Web/API/SyncEvent/lastChance
---

{{SeeCompatTable}}{{APIRef("")}}

{{domxref("SyncEvent")}} インターフェイスの **`SyncEvent.lastChance`** 読み取り専用プロパティは、現在の試行後にユーザーエージェントが同期を試行しない場合に `true` を返します。 これは、 {{domxref("SyncEvent.SyncEvent","SyncEvent()")}} コンストラクタの `lastChance` パラメータに渡される値です。

## 構文

```
var lastChance = SyncEvent.lastChance
```

### 値

{{jsxref("Boolean")}} は、現在の試行の後にユーザーエージェントがこれ以上同期を試行しないかどうかを示します。

## 仕様

| 仕様                                                                                      |
| ----------------------------------------------------------------------------------------- |
| [Web Background Synchronization](https://wicg.github.io/background-sync/spec/#sync-event) |

## ブラウザー実装状況

{{Compat}}
