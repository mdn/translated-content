---
title: "ExtendableEvent: ExtendableEvent() コンストラクター"
short-title: ExtendableEvent()
slug: Web/API/ExtendableEvent/ExtendableEvent
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

**`ExtendableEvent()`** コンストラクターは、新しい {{domxref("ExtendableEvent")}} オブジェクトを作成します。

## 構文

```js-nolint
new ExtendableEvent(type)
new ExtendableEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前を指定します。大文字小文字を区別します。
- `options` {{optional_inline}}
  - : _{{domxref("Event/Event", "Event()")}} で定義されるプロパティに加え_、イベントオブジェクトに適用したい任意のカスタム設定を含むことができるオブジェクトです。
    現在、使用可能なオプションは必須ではありませんが、これは異なる形の派生イベント間で前方互換性を保つために定義されています。

### 返値

新しい {{domxref("ExtendableEvent")}} オブジェクト。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
