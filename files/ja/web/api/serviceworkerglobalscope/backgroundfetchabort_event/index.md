---
title: "ServiceWorkerGlobalScope: backgroundfetchabort イベント"
short-title: backgroundfetchabort
slug: Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`backgroundfetchabort`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、ユーザーまたはアプリ自体が[バックグラウンドフェッチ操作](/ja/docs/Web/API/Background_Fetch_API)をキャンセルしたときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("backgroundfetchabort", (event) => {});

onbackgroundfetchabort = (event) => {};
```

## イベント型

{{domxref("BackgroundFetchEvent")}} です。

{{InheritanceDiagram("BackgroundFetchEvent")}}

## イベントプロパティ

_親である {{domxref("ExtendableEvent")}} から継承したプロパティがあります。_

- {{domxref("BackgroundFetchEvent.registration")}}
  - : 中止されたフェッチのための {{domxref("BackgroundFetchRegistration")}} を返します。

## 解説

バックグラウンドフェッチ API では、ブラウザーがユーザーに UI 要素を表示して操作の進行状況を示します。この要素により、ユーザーはフェッチをキャンセルすることもできます。アプリ自体も、{{domxref("BackgroundFetchRegistration.abort()")}} を呼び出すことでフェッチをキャンセルできます。

フェッチがキャンセルされた場合、ブラウザーはフェッチを中止し、必要に応じてサービスワーカーを起動し、そのサービスワーカーのグローバルスコープで `backgroundfetchabort` イベントを発生させます。

このイベントのハンドラー内で、サービスワーカーは操作に関連するデータをクリーンアップできます。また、成功したレスポンスをすべて取得して保存することもできます（例えば、{{domxref("Cache")}} API を使用して）。レスポンスデータにアクセスするために、サービスワーカーはイベントの {{domxref("BackgroundFetchEvent/registration", "registration")}} プロパティを使用します。

## 例

### クリーンアップ

このイベントハンドラーは、中止されたフェッチに関連するデータのクリーンアップを実行することができます。

```js
addEventListener("backgroundfetchabort", (event) => {
  // 関連するデータをクリーンアップ
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [バックグラウンドフェッチ API](/ja/docs/Web/API/Background_Fetch_API)
