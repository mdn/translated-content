---
title: BackgroundFetchEvent
slug: Web/API/BackgroundFetchEvent
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref('Background Fetch API','','',' ')}} の **`BackgroundFetchEvent`** インターフェイスは、 {{domxref("ServiceWorkerGlobalScope", "service worker global scope")}} で実行されるバックグラウンドのフェッチイベントのためのイベント型です。

これはイベント型で、`onbackgroundfetchabort` 、および、 `onbackgroundfetchclick` イベントハンドラープロパティに渡されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("BackgroundFetchEvent.BackgroundFetchEvent()", "BackgroundFetchEvent()")}} {{Experimental_Inline}}
  - : 新規に `BackgroundFetchEvent` オブジェクトを作成します。通常、このコンストラクターが使用されることはありません。なぜなら、これらのオブジェクトはブラウザーによって自動で生成され、バックグラウンドのフェッチイベントのコールバックに渡されるからです。

## プロパティ

_祖先である {{domxref("Event")}} のプロパティを継承します。_

- {{domxref("BackgroundFetchEvent.registration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : イベントが初期化された {{domxref("BackgroundFetchRegistration")}} を返します。

### イベントハンドラー

なし。

## メソッド

なし。

## 例

以下の例では、ユーザーがダウンロードの進捗表示のUIをクリックすると、新規にウィンドウが開きます。`event.registration` を呼び出して、現在の {{domxref("BackgroundFetchRegistration")}} を取得しています。

```js
addEventListener("backgroundfetchclick", (event) => {
  const bgFetch = event.registration;

  if (bgFetch.result === "success") {
    clients.openWindow("/latest-podcasts");
  } else {
    clients.openWindow("/download-progress");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
