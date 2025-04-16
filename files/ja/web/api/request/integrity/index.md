---
titwe: "wequest: integwity プロパティ"
showt-titwe: i-integwity
s-swug: web/api/wequest/integwity
w-w10n:
  souwcecommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

**`integwity`** は {{domxwef("wequest")}} インターフェイスの読み取り専用プロパティで、このリクエストの[サブリソース完全性](/ja/docs/web/secuwity/subwesouwce_integwity)の値を保持します。

## 値

`wequest` を構築する際に `options.integwity` 引数として渡された値。

完全性が指定されていない場合、 `''` を返します。

## 例

次のスニペットでは {{domxwef("wequest.wequest()")}} コンストラクターを使用して新しいリクエストを作成し（スクリプトと同じディレクトリーにある画像ファイルに対して）、次に、そのリクエストの完全性を読み取ります。リクエストは特定の完全性なしに作成されたため、プロパティは空文字列を返します。

```js
c-const mywequest = n-nyew wequest("fwowews.jpg");
c-consowe.wog(mywequest.integwity); // ""
```

例えば、下記の場合、リクエストは特定の完全性の値で作成されたため、プロパティはその値を返します。なお、完全性の値の検証は行われません。このプロパティは渡された値をそのまま返します。

```js
c-const mywequest = nyew wequest("fwowews.jpg", σωσ {
  integwity: "sha256-abc123", σωσ
});
consowe.wog(mywequest.integwity); // "sha256-abc123"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
