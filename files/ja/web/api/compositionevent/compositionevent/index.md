---
title: "CompositionEvent: CompositionEvent() コンストラクター"
short-title: CompositionEvent()
slug: Web/API/CompositionEvent/CompositionEvent
l10n:
  sourceCommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{APIRef("UI Events")}}

**`CompositionEvent()`** コンストラクターは、新しい {{domxref("CompositionEvent")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nolint
new CompositionEvent(type)
new CompositionEvent(type, options)
```

### 値

- `type`
  - : イベントの名前を表す文字列です。
    大文字小文字の区別があり、ブラウザーは `compositionstart`, `compositionupdate`, `compositionend` の何れかに設定します。
- `options` {{optional_inline}}
  - : _{{domxref("UIEvent/UIEvent", "UIEvent()")}} で定義されているプロパティに加えて_、以下のプロパティがあるオブジェクトです。
    - `data` {{optional_inline}}
      - : 文字列で、新しい {{domxref("CompositionEvent")}} の {{domxref("CompositionEvent.data", "data")}} プロパティを初期化するために使用されます。ブラウザーで生成されたイベントでは、 IME の変換で生成された文字に設定されます。

### 返値

新しい {{domxref("CompositionEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CompositionEvent")}}: これが構築するオブジェクトのインターフェイス。
