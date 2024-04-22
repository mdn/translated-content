---
title: "BackgroundFetchRegistration: progress イベント"
slug: Web/API/BackgroundFetchRegistration/progress_event
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref("BackgroundFetchRegistration")}} インターフェイスの **`progress`** イベントは、関連するバックグラウンドフェッチに進捗があった際に投げられます。

実際には、このイベントは下記プロパティのいずれかが更新されるときに発火します。

- {{domxref("BackgroundFetchRegistration.uploaded", "uploaded")}}
- {{domxref("BackgroundFetchRegistration.downloaded", "downloaded")}}
- {{domxref("BackgroundFetchRegistration.result", "result")}}
- {{domxref("BackgroundFetchRegistration.failureReason", "failureReason")}}

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドでイベント名を使用するか、関連する {{domxref("BackgroundFetchRegistration")}} オブジェクトに `onprogress` というイベントプロパティを設定します。

```js-nolint
addEventListener("progress", (event) => { })
onprogress = (event) => { }
```

## イベント型

追加のプロパティを持たない汎用 {{domxref("Event")}}。

## 例

以下の例は、ダウンロードの進捗をログ出力する方法を示しています。このコードでは、バックグラウンドフェッチが登録された際に、まず `downloadTotal` が設定されていることを確認します。これは `downloaded` プロパティに基づいてダウンロードの進捗を計算するために使用されます。

```js
bgFetch.addEventListener("progress", () => {
  if (!bgFetch.downloadTotal) return;
  const percent = Math.round(
    (bgFetch.downloaded / bgFetch.downloadTotal) * 100,
  );
  console.log(`ダウンロードの進捗： ${percent}%`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
