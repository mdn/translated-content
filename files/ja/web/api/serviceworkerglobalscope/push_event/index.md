---
title: "ServiceWorkerGlobalScope: push イベント"
slug: Web/API/ServiceWorkerGlobalScope/push_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Push API")}}

**`push`** イベントは、サービスワーカーがプッシュメッセージを受信したときにサービスワーカーのグローバルスコープ ({{domxref("ServiceWorkerGlobalScope")}} インターフェイスで表現されるもの) に送られます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("push", (event) => {});

onpush = (event) => {};
```

## イベント型

{{domxref("PushEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PushEvent")}}

## イベントプロパティ

_祖先である {{domxref("ExtendableEvent")}} からプロパティを継承しています_。

- {{domxref("PushEvent.data")}} {{ReadOnlyInline}}
  - : {{domxref("PushMessageData")}} オブジェクトへの参照を返します。これには {{domxref("PushSubscription")}} に送られたデータが含まれています。

## 例

この例では、{{Glossary("JSON")}} データを受け取り、解釈し、メッセージに含まれる情報に基づいて処理するためにメッセージを送出する `push` イベント用のハンドラーを設定します。

```js
self.addEventListener(
  "push",
  (event) => {
    let message = event.data.json();

    switch (message.type) {
      case "init":
        doInit();
        break;
      case "shutdown":
        doShutdown();
        break;
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プッシュ API の使用](/ja/docs/Web/API/Push_API)
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}} イベント
