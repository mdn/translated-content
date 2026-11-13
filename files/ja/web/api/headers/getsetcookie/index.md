---
title: "Headers: getSetCookie() メソッド"
short-title: getSetCookie()
slug: Web/API/Headers/getSetCookie
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`getSetCookie()`** は {{domxref("Headers")}} インターフェイスのメソッドで、レスポンスに関連付けられたすべての {{httpheader("Set-Cookie")}} ヘッダーの値の入った配列を返します。これによって {{domxref("Headers")}} オブジェクトは複数の `Set-Cookie` ヘッダーを扱えるようになります。

この方法は、サーバー環境（Node.js など）での使用を意図しています。 ブラウザーは、フェッチ仕様に従って、フロントエンドの JavaScript コードが {{httpheader("Set-Cookie")}} ヘッダーにアクセスすることをブロックします。フェッチ仕様は、 `Set-Cookie` を[禁止レスポンスヘッダー名](https://fetch.spec.whatwg.org/#forbidden-response-header-name)として定義しており、フロントエンドのコードに公開されるすべてのレスポンスから[フィルタリングして除外](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0)する必要があります。

## 構文

```js-nolint
getSetCookie()
```

### 引数

なし。

### 返値

レスポンスに関連付けられたすべての異なる `Set-Cookie` ヘッダーの値を表す文字列の配列です。

`Set-Cookie` ヘッダーが設定されていない場合、このメソッドは空配列 (`[ ]`) を返します。

## 例

上記で触れたように、クライアント上で次のコードが動作しても、結果は返されません。 `Set-Cookie` は、ネットワーク経由で取得された {{domxref("Headers")}} からフィルターで除外されます。

```js
fetch("https://example.com").then((response) => {
  console.log(response.headers.getSetCookie());
  // ヘッダー値は返されない
});
```

しかし、次のコードは複数の `Set-Cookie` 値を照会するために使用することができます。これはサーバー上でより有用ですが、クライアントでもうまくいくでしょう。

```js
const headers = new Headers({
  "Set-Cookie": "name1=value1",
});

headers.append("Set-Cookie", "name2=value2");

headers.getSetCookie();
// ["name1=value1", "name2=value2"] を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP](/ja/docs/Web/HTTP)
- {{httpheader("Set-Cookie")}}
