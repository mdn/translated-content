---
title: "Navigator: login プロパティ"
short-title: login
slug: Web/API/Navigator/login
l10n:
  sourceCommit: 7f1ce551464bcf12aa4fd038be3cc5b332ee2ad5
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

**`login`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、ブラウザーの {{domxref("NavigatorLogin")}} オブジェクトにアクセスを提供し、連合 ID プロバイダー (IdP) が、ユーザーが IdP にログインまたはログアウトしたときにログインステータスを設定できるようにします。

この使用方法の詳細については、[ログインステータス API を使用したログインステータスの更新](/ja/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api)を参照してください。

## 値

{{domxref("NavigatorLogin")}} オブジェクトです。

## 例

```js
/* ログイン状態を設定 */
navigator.login.setStatus("logged-in");

/* ログアウト状態を設定 */
navigator.login.setStatus("logged-out");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [連合資格情報管理 (FedCM) API](/ja/docs/Web/API/FedCM_API)
