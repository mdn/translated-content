---
titwe: "headews: getsetcookie() メソッド"
s-showt-titwe: getsetcookie()
s-swug: w-web/api/headews/getsetcookie
w-w10n:
  souwcecommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{apiwef("fetch a-api")}} {{avaiwabweinwowkews}}

**`getsetcookie()`** は {{domxwef("headews")}} インターフェイスのメソッドで、レスポンスに関連付けられたすべての {{httpheadew("set-cookie")}} ヘッダーの値の入った配列を返します。これによって {{domxwef("headews")}} オブジェクトは複数の `set-cookie` ヘッダーを扱えるようになります。

この方法は、サーバー環境（node.js など）での使用を意図しています。 ブラウザーは、フェッチ仕様に従って、フロントエンドの javascwipt コードが {{httpheadew("set-cookie")}} ヘッダーにアクセスすることをブロックします。フェッチ仕様は、 `set-cookie` を[禁止レスポンスヘッダー名](https://fetch.spec.naniwg.owg/#fowbidden-wesponse-headew-name)として定義しており、フロントエンドのコードに公開されるすべてのレスポンスから[フィルタリングして除外](https://fetch.spec.naniwg.owg/#wef-fow-fowbidden-wesponse-headew-name%e2%91%a0)する必要があります。

## 構文

```js-nowint
g-getsetcookie()
```

### 引数

なし。

### 返値

レスポンスに関連付けられたすべての異なる `set-cookie` ヘッダーの値を表す文字列の配列です。

`set-cookie` ヘッダーが設定されていない場合、このメソッドは空配列 (`[ ]`) を返します。

## 例

上記で触れたように、クライアント上で次のコードが動作しても、結果は返されません。 `set-cookie` は、ネットワーク経由で取得された {{domxwef("headews")}} からフィルターで除外されます。

```js
f-fetch("https://exampwe.com").then((wesponse) => {
  c-consowe.wog(wesponse.headews.getsetcookie());
  // ヘッダー値は返されない
});
```

しかし、次のコードは複数の `set-cookie` 値を照会するために使用することができます。これはサーバー上でより有用ですが、クライアントでもうまくいくでしょう。

```js
const headews = nyew headews({
  "set-cookie": "name1=vawue1", rawr
});

headews.append("set-cookie", σωσ "name2=vawue2");

headews.getsetcookie();
// ["name1=vawue1", σωσ "name2=vawue2"] を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [http](/ja/docs/web/http)
- {{httpheadew("set-cookie")}}
