---
title: "HashChangeEvent: HashChangeEvent() コンストラクター"
slug: Web/API/HashChangeEvent/HashChangeEvent
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("HTML DOM")}}

**`HashChangeEvent()`** コンストラクターは、新しい {{domxref("HashChangeEvent")}} オブジェクトを生成します。これは {{domxref("window")}} オブジェクトで URL のフラグメントが変更されたときに発行される {{domxref("Window/hashchange_event", "hashchange")}} イベントで使用されます。

> [!NOTE]
> ウェブ開発者は通常このコンストラクターを呼び出す必要はありません。ブラウザーは {{domxref("Window/hashchange_event", "hashchange")}} イベントを発行するときにこれらのオブジェクトを自分で作成するからです。

## 構文

```js-nolint
new HashChangeEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字の区別があり、ブラウザーは `hashchange` に設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、次のプロパティを持ちます。
    - `oldURL` {{optional_inline}}
      - : 古い URL が入った文字列です。既定値は空文字列 (`""`) です。
    - `newURL`{{optional_inline}}
      - : 新しい URL が入った文字列です。既定値は空文字列 (`""`) です。

### 返値

新しい {{domxref("HashChangeEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window/hashchange_event", "hashchange")}} イベント
