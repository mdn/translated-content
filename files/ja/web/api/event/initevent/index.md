---
title: "Event: initEvent() メソッド"
short-title: initEvent()
slug: Web/API/Event/initEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ ApiRef("DOM") }}{{deprecated_header}}

**`Event.initEvent()`** メソッドは、 {{domxref("Document.createEvent()")}} を使用して作成されたイベント ({{ domxref("event") }}) の値を初期化するために使用します。

この方法で初期化されたイベントは、 {{domxref("Document.createEvent()") }} メソッドで作成されている必要があります。
このメソッドは {{ domxref("EventTarget.dispatchEvent()") }} を使用してイベントが配信される前に、イベントを設定するために呼び出す必要があります。
配信されると、もう何もしません。

> **メモ:** **このメソッドは廃止されているため、使用しないでください。**
> 代わりに、 {{domxref("Event.Event", "Event()")}} のような特定のイベントのコンストラクターを使用してください。[イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)のページに、これらの使用方法の詳細が記載されています。

## 構文

```js-nolint
event.initEvent(type, bubbles, cancelable)
```

### 引数

- `type`
  - : 文字列で、イベントの種類を定義します。
- `bubbles`
  - : 論理値で、イベントがイベントチェーンを通じてバブルアップするかどうかを決定します。設定されると、読み取り専用のプロパティ {{ domxref("Event.bubbles") }} がその値を提供します。
- `cancelable`
  - : 論理値で、イベントをキャンセルできるかどうかを定義します。設定されると、読み取り専用のプロパティ {{ domxref("Event.cancelable") }} がその値を提供します。

### 返値

なし。

## 例

```js
// イベントを作成
const event = document.createEvent("Event");

// バブルアップしキャンセルできないクリックイベントを
// 作成
event.initEvent("click", true, false);

// イベントを待ち受けする
elem.addEventListener(
  "click",
  (e) => {
    // e.target が elem と一致
  },
  false,
);

elem.dispatchEvent(event);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- この非推奨のメソッドの代わりに使用するコンストラクター:
  {{domxref("Event.Event", "Event()")}}。より具体的なイベントインターフェイスを作成するには、目的のイベントインターフェイスに対して定義されたコンストラクターを使用します。
