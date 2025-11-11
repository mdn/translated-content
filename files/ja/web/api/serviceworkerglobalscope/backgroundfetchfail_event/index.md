---
title: "ServiceWorkerGlobalScope: backgroundfetchfail イベント"
short-title: backgroundfetchfail
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`backgroundfetchfail`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、[バックグラウンドフェッチ](/ja/docs/Web/API/Background_Fetch_API)操作が失敗した場合、つまり、フェッチ内の少なくとも 1 つのネットワークリクエストが正常に完了しなかった場合に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("backgroundfetchfail", (event) => {});

onbackgroundfetchfail = (event) => {};
```

## イベント型

{{domxref("BackgroundFetchUpdateUIEvent")}} です。

{{InheritanceDiagram("BackgroundFetchUpdateUIEvent")}}

## イベントプロパティ

_親である {{domxref("BackgroundFetchEvent")}} から継承したプロパティがあります。_

- {{domxref("BackgroundFetchUpdateUIEvent.updateUI()")}}
  - : ブラウザーがフェッチ操作の進捗状況を表示するために表示する要素の UI を更新します。

## 解説

[バックグラウンドフェッチ](/ja/docs/Web/API/Background_Fetch_API)操作が失敗した場合（つまり、個々のネットワークリクエストの少なくとも 1 つが正常に完了していない場合）、ブラウザーは必要に応じてサービスワーカーを起動し、サービスワーカーのグローバルスコープで `backgroundfetchfail` イベントを発行します。

バックグラウンドフェッチ API では、ブラウザーはユーザーに操作の進行状況を示す UI 要素を表示します。`backgroundfetchfail` ハンドラーでは、サービスワーカーがその UI を更新して操作が失敗したことを示すことができます。これを行うには、ハンドラーがイベントの {{domxref("BackgroundFetchUpdateUIEvent/updateUI", "updateUI()")}} メソッドを呼び出し、新しいタイトルやアイコンを渡します。

この `backgroundfetchfail` のハンドラーでは、サービスワーカーは操作に関連するデータをクリーンアップすることもできます。また、成功したレスポンスをすべて取得して（{{domxref("Cache")}} APIを使用して）保存することもできます。レスポンスデータにアクセスするために、サービスワーカーはイベントの {{domxref("BackgroundFetchEvent/registration", "registration")}} プロパティを使用します。

## 例

### UI の更新

このイベントハンドラーは、操作が失敗したことをユーザーに知らせるために UI を更新します。

```js
addEventListener("backgroundfetchfail", (event) => {
  event.updateUI({ title: "Could not complete download" });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [バックグラウンドフェッチ API](/ja/docs/Web/API/Background_Fetch_API)
