---
title: BackgroundFetchRegistration.match()
slug: Web/API/BackgroundFetchRegistration/match
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref("BackgroundFetchRegistration")}} インターフェイスの **`match()`** メソッドは、最初にマッチした {{domxref("BackgroundFetchRecord")}} を返します。

## 構文

```js-nolint
match(request)
match(request, options)
```

### 引数

- `request`
  - : 取得したい record の {{domxref("Request")}}。これは {{domxref("Request")}} オブジェクトまたは URL です。
- `options` {{optional_inline}}
  - : `match` 操作のオプションを指定するオブジェクトです。以下が利用可能です。
    - `ignoreSearch`
      - : URL 中のクエリー文字列を無視するかどうか指定するbool 値です。例えば `true` のとき、`http://foo.com/?value=bar` の `?value=bar` 部分はマッチ処理で無視されます。デフォルトは `false` です。
    - `ignoreMethod`
      - : bool 値です。`true` のとき、マッチ処理は {{domxref("Request")}} の `http` メソッドを検証しません。`false` (デフォルト値)の場合、`GET` と `HEAD` のみ許可されます。
    - `ignoreVary`
      - : bool 値です。`true` は [`VARY`](/ja/docs/Web/HTTP/Reference/Headers/Vary) ヘッダーを無視することを意味します。デフォルトは `false` です。

### 返値

最初に request にマッチした {{domxref("BackgroundFetchRecord")}} か、または何もマッチしなかった場合には {{jsxref("undefined")}} で解決される {{jsxref("Promise")}} を返します。

> [!NOTE]
> `BackgroundFetchRegistration.match()` は、基本的には {{domxref("BackgroundFetchRegistration.matchAll()")}} と同じですが、マッチする全ての record を配列で返すのではなく、最初にマッチした record のみで解決するという違いがあります。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 進行中の fetch がないときに `match()` を呼び出すと発生します。 この状態は、{{domxref("BackgroundFetchRegistration.recordsAvailable")}} が `false` に設定されることで反映されます。

## 例

以下の例では URL に "/ep-5.mp3" を含む record を検索しており、{{domxref("BackgroundFetchRecord")}} が見つかると、関連する情報を取得することができます。

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
