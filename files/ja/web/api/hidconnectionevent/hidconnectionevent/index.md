---
title: HIDConnectionEvent()
slug: Web/API/HIDConnectionEvent/HIDConnectionEvent
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

**`HIDConnectionEvent()`** コンストラクターは、新しい {{domxref("HIDConnectionEvent")}} オブジェクトを生成します。通常は、イベントは Input レポートを受信した際に生成されるため、このコンストラクターは使用されません。

## 構文

```js-nolint
new HIDConnectionEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。
    大文字と小文字は区別され、ブラウザーは `connect` または `disconnect` に設定します。
- `options`
  - : オブジェクトです。_{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加えて_ 、以下のプロパティを持つことができます。
    - `device`
      - : Input レポートを送信したデバイスを表す {{domxref("HIDDevice")}} のインスタンスです。

### 返値

新しい {{domxref("HIDConnectionEvent")}} オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
