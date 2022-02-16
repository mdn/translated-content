---
title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
tags:
  - API
  - コンストラクター
  - DOM イベント
  - ProgressEvent
browser-compat: api.ProgressEvent.ProgressEvent
translation_of: Web/API/ProgressEvent/ProgressEvent
---
{{APIRef("DOM Events")}}

**`ProgressEvent()`** コンストラクターは、長いプロセスの現在の完了状況を表す {{domxref("ProgressEvent")}} を新しく生成して返します。

## 構文

```js
progressEvent = new ProgressEvent(type, {lengthComputable: aBooleanValue, loaded: aNumber, total: aNumber});
```

### 引数

_`ProgressEvent()` コンストラクターには {{domxref("Event.Event", "Event()")}} から継承した引数もあります。_

- _type_
  - : {{domxref("DOMString")}} で、 `ProgressEvent` の種別の名前を表します。大文字小文字を区別します。
- `lengthComputable` {{optional_inline}}
  - : 論理値のフラグで、基礎となるプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能であるかどうかを示します。言い換えれば、進捗が測定可能かどうかを示します。既定値は `false` です。
- `loaded` {{optional_inline}}
  - : `unsigned long long` で、基礎となるプロセスで既に実行された作業量を表します。行われた作業の割合は、このプロパティと `ProgressEvent.total` を用いて計算することができます。 HTTP を使用してリソースをダウンロードする場合、これはヘッダーやその他のオーバーヘッドではなく、コンテンツそのものの部分のみを表します。既定値は `0` です。
- `total` {{optional_inline}}
  - : 基礎となるプロセスが実行中の作業の総量を表す `unsigned long long` です。 HTTP を使用してリソースをダウンロードする場合、これはヘッダーやその他のオーバーヘッドではなく、コンテンツそのものを表します。既定値は `0` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("ProgressEvent")}} インターフェイス
