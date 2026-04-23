---
title: "BackgroundFetchManager: fetch() メソッド"
short-title: fetch()
slug: Web/API/BackgroundFetchManager/fetch
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`fetch()`** は {{domxref("BackgroundFetchManager")}} インターフェイスのメソッドで、指定された 1 つ以上の URL または {{domxref("Request")}} オブジェクトを取り、バックグラウンドのフェッチ操作を開始します。

## 構文

```js-nolint
fetch(id, requests)
fetch(id, requests, options)
```

### 引数

- `id`
  - : この操作の {{domxref("BackgroundFetchRegistration")}} を取得するために、他のメソッドに渡すことができる、開発者定義の識別子です。
- `requests`
  - : `RequestInfo` オブジェクトまたは `RequestInfo` お武衛ジェクトの配列です。

    それぞれの `RequestInfo` オブジェクトは {{domxref("Request")}} オブジェクト、または {{domxref("Request.Request()", "Request()")}} コンストラクターの `input` 引数として与えられる文字列です。

- `options` {{optional_inline}}
  - : ブラウザーの表示するフェッチ進捗ダイアログをカスタマイズするために使用されるオブジェクトです。以下のプロパティがあります。
    - `title` {{optional_inline}}
      - : 文字列で、進捗ダイアログのタイトルとして使われます。
    - `icons` {{optional_inline}}
      - : ブラウザーの進捗ダイアログに使用するアイコンを表すオブジェクトの配列です。各オブジェクトには、以下のプロパティがあります。
        - `src`
          - : アイコンファイルの URL を表す文字列。
        - `sizes` {{optional_inline}}
          - : 画像の大きさを表す文字列で、{{HTMLElement("link")}} 要素の `sizes` 属性と同じ構文を使用して表します。
        - `type` {{optional_inline}}
          - : アイコンの {{Glossary("MIME")}} タイプを表す文字列です。
        - `label` {{optional_inline}}
          - : アイコンのアクセシブル名を表す文字列です。
    - `downloadTotal` {{optional_inline}}
      - : フェッチ操作の推定総ダウンロードサイズを表す数値（バイト単位）。これは、ダウンロードの大きさをユーザーに示すため、また、ユーザーのダウンロードの進捗状況を示すために使用されます。

        ダウンロードサイズの合計が `downloadTotal` を超えると、すぐに取得が中止されます。

### 返値

{{domxref("BackgroundFetchRegistration")}} オブジェクトで解決される {{jsxref("Promise")}} 。

### 例外

- {{jsxref("TypeError")}}
  - : 次のような場合に発生します。リクエストが与えられていない場合、リクエストのモードが `no-cors` の場合、サービスワーカーが存在しない場合、リクエストされた `id` のリクエストが既に存在する場合、またはリクエストが失敗した場合。
- `AbortError` {{domxref("DOMException")}}
  - : フェッチが失敗したことを示します。
- `NotAllowedError` {{domxref("DOMException")}}
  - : バックグラウンドフェッチを作成するためのユーザー権限が与えられていないことを示します。
- {{domxref("QuotaExceededError")}}
  - : 格納されているリクエストがブラウザーの[ストレージ割り当て](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)を越えたために失敗した場合に発生します。

## 例

下記の例は `fetch()` を使用してバックグラウンドフェッチ操作を行う方法を方法を示しています。アクティブな {{domxref('ServiceWorker', 'サービスワーカー', "", "nocode")}}で、 {{domxref('ServiceWorkerRegistration.backgroundFetch')}} プロパティを使用して `BackgroundFetchManager` オブジェクトにアクセスし、その `fetch()` メソッドを呼び出しています。

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
          label: "Downloading a show",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
