---
title: "Headers: Headers() コンストラクター"
short-title: Headers()
slug: Web/API/Headers/Headers
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`Headers()`** コンストラクターは、新しい {{domxref("Headers")}} オブジェクトを生成します。

## 構文

```js-nolint
new Headers()
new Headers(init)
```

### 引数

- `init` {{optional_inline}}
  - : `Headers` オブジェクトに事前に入力したい、任意の [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)を含むオブジェクトです。これは文字列の値を持つ単純なオブジェクトリテラル、名前と値の組の配列（各組は 2 つの要素を持つ文字列の配列）、あるいは既存の `Headers` オブジェクトになります。最後の場合は、新しい `Headers` オブジェクトは既存の `Headers` オブジェクトからそのデータをコピーします。

## 例

簡単に空の `Headers` オブジェクトを生成できます。

```js
const myHeaders = new Headers(); // Currently empty
```

{{domxref("Headers.append")}} を使用してヘッダーを追加できます。

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // 'image/jpeg' が返される
```

または、`Headers` オブジェクトの生成時に必要なヘッダーを追加することもできます。次のスニペットでは、新しい {{domxref("Headers")}} を作成し、コンストラクターに初期化オブジェクトを引数として渡してヘッダーを追加しています。

```js
const httpHeaders = {
  "Content-Type": "image/jpeg",
  "X-My-Custom-Header": "Zeke are cool",
};
const myHeaders = new Headers(httpHeaders);
```

最初の `Headers` を初期化オブジェクトとして渡して、別の `Headers` オブジェクトを生成できます。

```js
const secondHeadersObj = new Headers(myHeaders);
secondHeadersObj.get("Content-Type"); // 'image/jpeg' が返される。最初のヘッダーオブジェクトから継承している
```

また、`Headers` オブジェクトを作成する際に、二次元配列を使用して、同じ値を持つ複数のヘッダーを追加することができます。以下のスニペットでは、コンストラクターの引数に初期化配列を渡して、複数の `Set-Cookie` ヘッダーを持つ新しい {{domxref("Headers")}} オブジェクトを作成しています。

```js
const headers = [
  ["Set-Cookie", "greeting=hello"],
  ["Set-Cookie", "name=world"],
];
const myHeaders = new Headers(headers);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
