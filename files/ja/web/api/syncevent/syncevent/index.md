---
title: SyncEvent.SyncEvent()
slug: Web/API/SyncEvent/SyncEvent
---

{{APIRef("Service Workers API")}}{{Non-standard_header}}

**`SyncEvent()`** コンストラクタは、新規の {{domxref("SyncEvent")}} オブジェクトを作成します。

## 構文

```
var mySyncEvent = new SyncEvent(type, init)
```

### パラメータ

- _type_
  - : イベントの型。
- _init_ {{optional_inline}}
  - : イベントオブジェクトに適用するカスタム設定を含むオプションオブジェクト。オプションは次の通りです:
    - `tag`: この `SyncEvent` の開発者が定義した一意の識別子。
    - `lastChance`: {{jsxref("Boolean")}} は、現在の試行後にユーザーエージェントが同期の試行をこれ以上行わないことを示しています。

## ブラウザーの互換性

{{Compat}}
