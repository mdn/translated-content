---
title: "ProgressEvent: ProgressEvent() コンストラクター"
short-title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`ProgressEvent()`** コンストラクターは、長いプロセスの現在の完了状況を表す {{domxref("ProgressEvent")}} を新しく生成して返します。

## 構文

```js-nolint
new ProgressEvent(type)
new ProgressEvent(type, options)
```

### 引数

- `type`
  - : このイベントの名前の文字列です。
    大文字小文字を区別し、ブラウザーは `loadstart`, `progress`, `abort`, `error`, `load`, `timeout`, `loadend` の何れかを設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `lengthComputable` {{optional_inline}}
      - : 論理値のフラグで、基礎となるプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能であるかどうかを示します。言い換えれば、進捗が測定可能かどうかを示します。既定値は `false` です。
    - `loaded` {{optional_inline}}
      - : 数値で、基礎となるプロセスで既に実行された作業量を表します。行われた作業の割合は、このプロパティと `ProgressEvent.total` を用いて計算することができます。 HTTP を使用してリソースをダウンロードする場合、これはヘッダーやその他のオーバーヘッドではなく、コンテンツそのものの部分のみを表します。既定値は `0` です。
    - `total` {{optional_inline}}
      - : 基礎となるプロセスが実行中の作業の総量を表す数値です。 HTTP を使用してリソースをダウンロードする場合、これはヘッダーやその他のオーバーヘッドではなく、コンテンツそのものを表します。既定値は `0` です。

### 返値

新しい {{domxref("ProgressEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("ProgressEvent")}} インターフェイス
