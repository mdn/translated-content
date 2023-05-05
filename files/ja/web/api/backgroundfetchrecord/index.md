---
title: BackgroundFetchRecord
slug: Web/API/BackgroundFetchRecord
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref('Background Fetch API','','',' ')}} の **`BackgroundFetchRecord`** インターフェイスは、個々のリクエストと応答を表します。

`BackgroundFetchRecord` は {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}} メソッドによって生成されるので、このインターフェイスにはコンストラクターがありません。

`fetch()` で要求された各リソースに対して、 `BackgroundFetchRecord` が 1 つずつ存在することになります。

## プロパティ

- {{domxref("BackgroundFetchRecord.request","request")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("Request")}} を返します。
- {{domxref("BackgroundFetchRecord.responseReady","responseReady")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("Response")}} によって解決されるプロミスを返します。

## 例

以下の例では、 {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}} の使用によって生成された `BackgroundFetchRecord` から {{domxref("BackgroundFetchRecord.request")}} と {{domxref("BackgroundFetchRecord.responseReady")}} の値を受け取り、コンソールにログ出力しています。

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("recordは見つかりませんでした");
    return;
  }

  console.log(`リクエスト：`, record.request);
  const response = await record.responseReady;
  console.log(`応答：`, response);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
