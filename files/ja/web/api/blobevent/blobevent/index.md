---
title: "BlobEvent: BlobEvent() コンストラクター"
short-title: BlobEvent()
slug: Web/API/BlobEvent/BlobEvent
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("MediaStream Recording")}}

**`BlobEvent()`** コンストラクターは、新たに生成され {{domxref("Blob")}} に関連付けられた {{domxref("BlobEvent")}} オブジェクトを返します。

## 構文

```js-nolint
new BlobEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字の区別があり、ブラウザーは常に `dataavailable` と設定します。
- `options`
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加え_、以下のプロパティを持つことができます。
    - `data`
      - : イベントに関連付けられた {{domxref("Blob")}} です。
    - `timecode`
      - : blob イベントの初期化に使用される {{domxref("DOMHighResTimeStamp")}} です。

### 返値

新しい {{domxref("BlobEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドが属する {{domxref("BlobEvent")}} インターフェイス。
