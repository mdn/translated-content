---
title: SyncEvent.tag
slug: Web/API/SyncEvent/tag
---

{{SeeCompatTable}}{{APIRef("")}}

{{domxref("SyncEvent")}} インターフェイスの **`SyncEvent.tag`** 読み取り専用プロパティは、この `SyncEvent` の開発者定義の識別子を返します。これは、 {{domxref("SyncEvent.SyncEvent","SyncEvent()")}} コンストラクタの `tag` パラメータで渡される値です。

## 構文

```
var tag = SyncEvent.tag
```

### 値

この `SyncEvent` の開発者定義の識別子。

## 仕様

| 仕様                                                                 | ステータス                           | 備考       |
| -------------------------------------------------------------------- | ------------------------------------ | ---------- |
| {{SpecName('Background Sync','#sync-event', 'tag')}} | {{Spec2('Background Sync')}} | 初回定義。 |

## ブラウザー実装状況

{{Compat("api.SyncEvent.tag")}}
