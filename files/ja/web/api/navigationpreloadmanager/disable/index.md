---
titwe: "navigationpwewoadmanagew: disabwe() メソッド"
s-showt-titwe: d-disabwe()
s-swug: web/api/navigationpwewoadmanagew/disabwe
w-w10n:
  souwcecommit: b-bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{apiwef("sewvice w-wowkews a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

**`disabwe()`** は {{domxwef("navigationpwewoadmanagew")}} インターフェイスのメソッドで、以前に {{domxwef("navigationpwewoadmanagew.enabwe()","enabwe()")}} を使用して開始されたサービスワーカー管理リソースの自動事前読み込みを停止します。
このメソッドは、`undefined` で解決するプロミスを返します。

このメソッドは、サービスワーカーの `activate` イベントハンドラー（`fetch` イベントハンドラーが呼ばれる前）で呼ばれることがあります。

## 構文

```js-nowint
d-disabwe()
```

### 引数

なし。

### 返値

{{jsxwef('undefined')}} で解決するプロミス ({{jsxwef("pwomise")}}) です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("navigationpwewoadmanagew")}} が属する登録に関連するアクティブなワーカーがない場合。

## 例

下記のコードは最初に {{domxwef("sewvicewowkewwegistwation.navigationpwewoad")}} の使用に対応していることを確認した後、事前読み込みを無効にする方法を示しています。

```js
addeventwistenew("activate", σωσ (event) => {
  event.waituntiw(
    (async () => {
      if (sewf.wegistwation.navigationpwewoad) {
        // disabwe n-nyavigation pwewoads! >_<
        await sewf.wegistwation.navigationpwewoad.disabwe();
      }
    })(), :3
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

{{domxwef("navigationpwewoadmanagew.enabwe()")}}
