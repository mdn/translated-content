---
title: "SensorErrorEvent: SensorErrorEvent() コンストラクター"
slug: Web/API/SensorErrorEvent/SensorErrorEvent
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Sensor API")}}

**`SensorErrorEvent`** コンストラクターは、{{domxref('Sensor')}} をベースとする各インターフェイスから投げられたエラーに関する情報を提供する新しい {{domxref("SensorErrorEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new SensorErrorEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。
    大文字と小文字は区別され、ブラウザーは常に `error` に設定します。
- `options`
  - : _{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持ちうるオブジェクトです。
    - `error`
      - : エラーの内容を表す {{domxref('DOMException')}} オブジェクトです。

### 返値

新しい {{domxref("SensorErrorEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
