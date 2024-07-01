---
title: BackgroundFetchManager.fetch()
slug: Web/API/BackgroundFetchManager/fetch
l10n:
  sourceCommit: 49c552151144b2e61fc34a12586d4d0c40abfbe6
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

    - `title`
      - : 文字列で、進捗ダイアログのタイトルとして使われます。
    - `icons`
      - : ブラウザーの進捗ダイアログに使用するアイコンを表すオブジェクトの配列です。各オブジェクトには、以下のプロパティがあります。
        - `src`
          - : アイコンファイルの URL を表す文字列。
        - `sizes`
          - : 画像の大きさを表す文字列で、 [`<link>`](/ja/docs/Web/HTML/Element/link) 要素の [`sizes`](/ja/docs/Web/HTML/Element/link#sizes) 属性と同じ構文を使用して表します。 {{optional_inline}}
        - `type`
          - : アイコンの {{Glossary("MIME")}} タイプを表す文字列です。 {{optional_inline}}
        - `label`
          - : アイコンのアクセシブル名を表す文字列です。 {{optional_inline}}
    - `downloadTotal`

      - : フェッチ操作の推定総ダウンロードサイズを表す数値（バイト単位）。これは、ダウンロードの大きさをユーザーに示すため、また、ユーザーのダウンロードの進捗状況を示すために使用されます。

        ダウンロードサイズの合計が `downloadTotal` を超えると、すぐに取得が中止されます。

### 返値

{{domxref("BackgroundFetchRegistration")}} オブジェクトで解決される {{jsxref("Promise")}} 。

### 例外

- {{jsxref("TypeError")}}
  - : 次のような場合に発生します。リクエストが与えられていない場合、リクエストのモードが 'no-cors' の場合、サービスワーカーが存在しない場合、リクエストされた `id` のリクエストが既に存在する場合、またはリクエストが失敗した場合。
- `AbortError` {{domxref("DOMException")}}
  - : fetch が失敗したことを示します。
- `NotAllowedError` {{domxref("DOMException")}}
  - : バックグラウンド fetch を作成するためのユーザー権限が与えられていないことを示します。

## 例

下記の例は `fetch()` を使用してバックグラウンドフェッチ操作を行う方法を方法を示しています。アクティブな {{domxref('ServiceWorker', 'サービスワーカー', "", "nocode")}} で、 {{domxref('ServiceWorkerRegistration.backgroundFetch')}} プロパティを使用して `BackgroundFetchManager` オブジェクトにアクセスし、その `fetch()` メソッドを呼び出しています。

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
