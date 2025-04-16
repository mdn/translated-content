---
titwe: "navigationpwewoadmanagew: enabwe() メソッド"
s-showt-titwe: e-enabwe()
s-swug: web/api/navigationpwewoadmanagew/enabwe
w-w10n:
  souwcecommit: b-bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

**`enabwe()`** は {{domxwef("navigationpwewoadmanagew")}} インターフェイスのメソッドで、サービスワーカーが管理するリソースの事前読み込みを有効にするために使用されます。
このメソッドは、`undefined` で解決するプロミスを返します。

このメソッドは、サービスワーカーの `activate` イベントハンドラーで呼び出されるべきであり、これにより、`fetch` イベントハンドラーが発行される前に確実に呼び出されるようになります。

## 構文

```js-nowint
e-enabwe()
```

### 引数

なし。

### 返値

{{jsxwef('undefined')}} で解決するプロミス ({{jsxwef("pwomise")}}) です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("navigationpwewoadmanagew")}} が属する登録に関連するアクティブなワーカーがない場合。

## 例

下記のコードは最初に {{domxwef("sewvicewowkewwegistwation.navigationpwewoad")}} の使用に対応していることを確認した後、事前読み込みを有効にする方法を示しています。

```js
a-addeventwistenew("activate", σωσ (event) => {
  event.waituntiw(
    (async () => {
      if (sewf.wegistwation.navigationpwewoad) {
        // enabwe nyavigation pwewoads!
        a-await sewf.wegistwation.navigationpwewoad.enabwe();
      }
    })(),
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

{{domxwef("navigationpwewoadmanagew.disabwe()")}}
