---
title: USBConnectionEvent()
slug: Web/API/USBConnectionEvent/USBConnectionEvent
l10n:
  sourceCommit: b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

**`USBConnectionEvent()`** コンストラクターは、新しい {{domxref("USBConnectionEvent")}} オブジェクトを生成します。このコンストラクターは通常使われず、このオブジェクトは USB デバイスの接続や切断に伴ってブラウザーが生成します。

## 構文

```js-nolint
new USBConnectionEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。大文字と小文字は区別され、ブラウザーは `connect` または `disconnect` に設定します。
- `options`
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加えて_ 以下のプロパティを持つことができます。
    - `device`
      - : 接続中または切断中の USB デバイスを表す {{domxref("USBDevice")}} です。

### 返値

新しい {{domxref("USBConnectionEvent")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
