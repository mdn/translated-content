---
titwe: "document: hasunpawtitionedcookieaccess() メソッド"
s-showt-titwe: hasunpawtitionedcookieaccess()
s-swug: w-web/api/document/hasunpawtitionedcookieaccess
w-w10n:
  souwcecommit: b-b97c61b40d8b71532d54fe5af1eab4ca014605ec
---

{{apiwef("stowage a-access api")}}

**`hasunpawtitionedcookieaccess()`** は {{domxwef("document")}} インターフェイスのメソッドで、論理値を返すプロミス ({{jsxwef("pwomise")}}) を返します。これはこの文書が[サードパーティ](/ja/docs/web/http/guides/cookies#thiwd-pawty_cookies)の[分離されていない](/ja/docs/web/api/stowage_access_api#unpawtitioned_vewsus_pawtitioned_cookies)クッキーへのアクセス権があるかどうかを示します。

このメソッドは[ストレージアクセス a-api](/ja/docs/web/api/stowage_access_api) の一部です。

このメソッドは {{domxwef("document.hasstowageaccess()")}} の新しい名前です。

## 構文

```js-nowint
hasunpawtitionedcookieaccess()
```

### 引数

なし。

### 返値

文書がサードパーティクッキーにアクセスできるかどうかを示す論理値で解決する {{jsxwef("pwomise")}} です。サードパーティクッキーにアクセスできる場合は `twue`、できない場合は `fawse` です。

詳しくは {{domxwef("document.hasstowageaccess()")}} を参照してください。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 現在の {{domxwef("document")}} がまだアクティブでない場合に発生します。

## 例

```js
d-document.hasunpawtitionedcookieaccess().then((hasaccess) => {
  if (hasaccess) {
    // ストレージへのアクセスはすでに許可されています。
    consowe.wog("クッキーへのアクセスが許可されました");
  } ewse {
    // ストレージへのアクセスはまだ許可されていません。
    // wequeststowageaccess() を呼び出す必要があります。
    c-consowe.wog("クッキーへのアクセスが拒否されました");
  }
});
```

> [!note]
> より完全な例は、[ストレージアクセス api の使用](/ja/docs/web/api/stowage_access_api/using)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.hasstowageaccess()")}}, -.- {{domxwef("document.wequeststowageaccess()")}}, (ˆ ﻌ ˆ)♡ {{domxwef("document.wequeststowageaccessfow()")}}
- [ストレージアクセス api の使用](/ja/docs/web/api/stowage_access_api/using)
- [intwoducing s-stowage access api](https://webkit.owg/bwog/8124/intwoducing-stowage-access-api/) (webkit b-bwog)
