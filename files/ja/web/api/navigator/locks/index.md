---
title: Navigator.locks
slug: Web/API/Navigator/locks
---

{{SeeCompatTable}}{{APIRef("Web Locks")}}

{{domxref("Navigator")}} インターフェイスの **`locks`** 読み取り専用プロパティは、新しい{{domxref('Lock')}} オブジェクトを要求するためのメソッドを提供する {{domxref("LockManager")}} オブジェクトを返します。既存の `Lock` オブジェクトを照会します。

## 構文

```
var lockManager = Navigator.locks
```

### 値

{{domxref("LockManager")}} オブジェクト。

## 仕様

| 仕様                                                                     | ステータス                   | 備考       |
| ------------------------------------------------------------------------ | ---------------------------- | ---------- |
| {{SpecName('Web Locks','#navigator-mixins','locks')}} | {{Spec2('Web Locks')}} | 初回定義。 |

## ブラウザー実装状況

{{Compat("api.Navigator.locks")}}
