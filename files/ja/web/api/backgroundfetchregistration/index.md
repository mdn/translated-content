---
title: BackgroundFetchRegistration
slug: Web/API/BackgroundFetchRegistration
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref('Background Fetch API','','',' ')}} の **`BackgroundFetchRegistration`** インターフェイスは個々のバックグラウンドフェッチを表します。

`BackgroundFetchRegistration` インスタンスは、{{domxref("BackgroundFetchManager.fetch()")}} メソッド、または {{domxref("BackgroundFetchManager.get()")}} メソッドによって返されるため、コンストラクターは存在しません。

{{InheritanceDiagram}}

## プロパティ

以下のプロパティは、`BackgroundFetchRegistration` インスタンスからコピーされた便利なプロパティとして、同期的に利用できます。

- {{domxref("BackgroundFetchRegistration.id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : バックグラウンドフェッチのIDを示す文字列。
- {{domxref("BackgroundFetchRegistration.uploadTotal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : アップロードされる総バイト数を表す {{jsxref("number")}}。
- {{domxref("BackgroundFetchRegistration.uploaded")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 送信に成功したバイト数を表す {{jsxref("number")}}。初期値は `0`。
- {{domxref("BackgroundFetchRegistration.downloadTotal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ダウンロード全体のバイト数を表す {{jsxref("number")}}。これはバックグラウンドフェッチの登録時に設定される値です。設定されなかった場合は `0` となります。
- {{domxref("BackgroundFetchRegistration.downloaded")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 今までにダウンロードされたバイト数を表す {{jsxref("number")}}。初期値は `0`。
- {{domxref("BackgroundFetchRegistration.result")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 初期状態では空文字列。完了時には `"success"` または `"failure"` という文字列。
- {{domxref("BackgroundFetchRegistration.failureReason")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : 下記文字列のいずれかの値をとります。

    - `""`
      - : バックグラウンドフェッチが完了していない、もしくは成功したとき。
    - `"aborted"`
      - : ユーザーによって操作がキャンセルされたとき、または {{domxref("BackgroundFetchRegistration.abort()","abort()")}} が呼び出されたとき。
    - `"bad-status"`
      - : 応答ステータスが OK ではないとき ( 200 ~ 299 の範囲外のとき)
    - `"fetch-error"`
      - : その他の理由によりフェッチが失敗したとき。例えば、CORS 違反や、ネットワーク障害が理由の場合です。
    - `"quota-exceeded"`
      - : 途中でストレージ容量の上限に達したとき。
    - `"download-total-exceeded"`
      - : バックグラウンドフェッチの登録時に指定された `downloadTotal` を超過したとき。

- {{domxref("BackgroundFetchRegistration.recordsAvailable")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : `recordsAvailable` フラグが設定されているかどうかを表す {{jsxref("boolean")}}。

## メソッド

- {{domxref("BackgroundFetchRegistration.abort","BackgroundFetchRegistration.abort()")}} {{Experimental_Inline}}
  - : バックグラウンドフェッチを中止します。フェッチの中止が成功したときに `true` で解決される {{jsxref("Promise")}} を返します。
- {{domxref("BackgroundFetchRegistration.match","BackgroundFetchRegistration.match()")}} {{Experimental_Inline}}
  - : 引数に対して最初にマッチした {{domxref("BackgroundFetchRecord")}} オブジェクトを 1 つ返します。
- {{domxref("BackgroundFetchRegistration.matchAll","BackgroundFetchRegistration.matchAll()")}} {{Experimental_Inline}}
  - : リクエストと応答を含む {{domxref("BackgroundFetchRecord")}} オブジェクトの配列で解決される {{jsxref("Promise")}} を返します。

## イベント

[`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を用いて、または、このインターフェイスの `oneventname` プロパティにイベントリスナーを割り当てて、これらイベントの発生を待ち受けてください。

- [`progress`](/ja/docs/Web/API/BackgroundFetchRegistration/progress_event) {{Experimental_Inline}}

  - : 次のプロパティのいずれかに変化があったとき、発火されます。:
    {{domxref("BackgroundFetchRegistration.uploaded", "uploaded")}} 、
    {{domxref("BackgroundFetchRegistration.downloaded", "downloaded")}} 、
    {{domxref("BackgroundFetchRegistration.result", "result")}} または
    {{domxref("BackgroundFetchRegistration.failureReason", "failureReason")}} 。

## 例

以下のコードは、`"my-fetch"` という `id` を持つ `BackGroundFetchRegistration` を `bgFetch` として作成しています。

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
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

{{domxref("BackgroundFetchRegistration.id","id")}} をコンソールにログ出力すると、`"my-fetch"` が出力されます。

```js
console.log(bgFetch.id); // "my-fetch"
```

{{domxref("BackgroundFetchRegistration.match","match()")}} メソッドを使って、registration の要素である {{domxref("BackgroundFetchRecord")}} から特定の 1 つを探すことができます。

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("レコードは見つかりませんでした。");
    return;
  }

  console.log(`リクエスト： `, record.request);
  const response = await record.responseReady;
  console.log(`応答： `, response);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
