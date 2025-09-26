---
title: "ServiceWorkerGlobalScope: backgroundfetchclick イベント"
short-title: backgroundfetchclick
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`backgroundfetchclick`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、[バックグラウンドフェッチ](/ja/docs/Web/API/Background_Fetch_API)操作の進捗状況をユーザーに表示するためにブラウザーが提供する UI をユーザーがクリックしたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("backgroundfetchclick", (event) => {});

onbackgroundfetchclick = (event) => {};
```

## イベント型

{{domxref("BackgroundFetchEvent")}} です。

{{InheritanceDiagram("BackgroundFetchEvent")}}

## イベントプロパティ

_親である {{domxref("ExtendableEvent")}} から継承したプロパティがあります。_

- {{domxref("BackgroundFetchEvent.registration")}}
  - : 中止されたフェッチのための {{domxref("BackgroundFetchRegistration")}} を返します。

## 解説

[バックグラウンドフェッチ](/ja/docs/Web/API/Background_Fetch_API)操作が開始されると、ブラウザーはユーザーに UI 要素を表示して操作の進行状況を示します。ユーザーがこの要素をクリックすると、ブラウザーは必要に応じてサービスワーカーを開始し、サービスワーカーのグローバルスコープで `backgroundfetchclick` イベントを発生させます。

このような状況下でハンドラーが実行する一般的なタスクは、ユーザーにフェッチ操作の詳細情報を提供するウィンドウを開くことです。

## 例

### 詳細を表示するウィンドウを開く

このイベントハンドラーは、グローバルな {{domxref("ServiceWorkerGlobalScope.clients", "clients")}} プロパティを使用して、フェッチに関する詳細情報をユーザーに提供するウィンドウを開きます。フェッチが完了しているか否かによって、異なるウィンドウが開きます。

```js
addEventListener("backgroundfetchclick", (event) => {
  const registration = event.registration;

  if (registration.result === "success") {
    clients.openWindow("/play-movie");
  } else {
    clients.openWindow("/movie-download-progress");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [バックグラウンドフェッチ API](/ja/docs/Web/API/Background_Fetch_API)
