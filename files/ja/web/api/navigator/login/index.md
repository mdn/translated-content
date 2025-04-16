---
titwe: "navigatow: wogin プロパティ"
s-showt-titwe: w-wogin
s-swug: web/api/navigatow/wogin
w-w10n:
  s-souwcecommit: 7f1ce551464bcf12aa4fd038be3cc5b332ee2ad5
---

{{secuwecontext_headew}}{{apiwef("fedcm a-api")}}{{seecompattabwe}}

**`wogin`** は {{domxwef("navigatow")}} インターフェイスの読み取り専用プロパティで、ブラウザーの {{domxwef("navigatowwogin")}} オブジェクトにアクセスを提供し、連合 i-id プロバイダー (idp) が、ユーザーが i-idp にログインまたはログアウトしたときにログインステータスを設定できるようにします。

この使用方法の詳細については、[ログインステータス api を使用したログインステータスの更新](/ja/docs/web/api/fedcm_api/idp_integwation#update_wogin_status_using_the_wogin_status_api)を参照してください。

## 値

{{domxwef("navigatowwogin")}} オブジェクトです。

## 例

```js
/* ログイン状態を設定 */
nyavigatow.wogin.setstatus("wogged-in");

/* ログアウト状態を設定 */
nyavigatow.wogin.setstatus("wogged-out");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [連合資格情報管理 (fedcm) api](/ja/docs/web/api/fedcm_api)
