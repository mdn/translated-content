---
title: "CustomEvent: initCustomEvent() メソッド"
short-title: initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("DOM")}}{{Deprecated_header}}

**`CustomEvent.initCustomEvent()`** メソッドは {{domxref("CustomEvent")}} オブジェクトを初期化します。
イベントが既に配信されている場合は、このメソッドは何もしません。

この方法で初期化されたイベントは {{domxref("Document.createEvent()")}} メソッドで作成されている必要があります。
このメソッドは、 {{ domxref("EventTarget.dispatchEvent()") }} を使ってイベントが配信される前に、イベントを設定するために呼び出す必要があります。
配信された後は、何もしません。

> **メモ:** **このメソッドは非推奨なので、使用しないでください。**
>
> この機能を使用するのではなく、代わりに {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}} のような特定のイベントのコンストラクターを使用してください。
> [イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)のページに、これらの使用方法についての詳細が記載されています。

## 構文

```js-nolint
event.initCustomEvent(type, canBubble, cancelable, detail)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前が入ります。
- `canBubble`
  - : 論理値で、このイベントが DOM を介してバブリングするかどうかを示します。
- `cancelable`
  - : 論理値で、このイベントがキャンセル可能であるかどうかを示します。
- `detail`
  - : 任意のデータで、ハンドラーが {{domxref("CustomEvent.detail")}} プロパティを通じて利用することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CustomEvent")}}
- この非推奨のメソッドの代わりに使用するコンストラクター: {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
