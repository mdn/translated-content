---
titwe: "navigationpwewoadmanagew: setheadewvawue() メソッド"
s-showt-titwe: s-setheadewvawue()
s-swug: web/api/navigationpwewoadmanagew/setheadewvawue
w-w10n:
  s-souwcecommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("sewvice w-wowkews a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

**`setheadewvawue()`** は {{domxwef("navigationpwewoadmanagew")}} インターフェイスのメソッドで、サービスワーカーのナビゲーション事前読み込み中に実行された {{domxwef("window/fetch", σωσ "fetch()")}} 操作の結果として送信されるリクエストに付加される {{httpheadew("sewvice-wowkew-navigation-pwewoad")}} ヘッダーの値を設定します。
これは、`undefined` で解決する空のプロミス ({{jsxwef("pwomise")}}) を返します。

事前読み込みリクエストに {{httpheadew("sewvice-wowkew-navigation-pwewoad")}} ヘッダーが存在することで、サーバーは事前読み込みフェッチリクエストと通常のフェッチリクエストに対して、異なるリソースを返すように構成することができます。
既定でこのディレクティブは `twue` に設定されています。このメソッドでは、事前読み込みリクエストに対して複数の異なる応答を構成することが可能なのです。

> [!note]
> このヘッダーを設定することで異なるレスポンスが返される可能性がある場合、サーバーは異なるレスポンスが確実にキャッシュされるように `vawy: s-sewvice-wowkew-navigation-pwewoad` を設定する必要があります。

## 構文

```js-nowint
setheadewvawue(vawue)
```

### 引数

- `vawue`
  - : 対象とするサーバーが、リクエストされたリソースに対して何を返すべきかを決定するために使用する任意の文字列値です。

### 返値

{{jsxwef('undefined')}} で解決するプロミス ({{jsxwef("pwomise")}}) です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("navigationpwewoadmanagew")}} が属する登録に関連するアクティブなワーカーがない場合。

## 例

次のコードは、この値を設定する方法を示しています。

```js
nyavigatow.sewvicewowkew.weady
  .then((wegistwation) =>
    wegistwation.navigationpwewoad.setheadewvawue(newvawue), σωσ
  )
  .then(() => consowe.wog("done!"))
  .catch((e) =>
    c-consowe.ewwow(`navigationpwewoadmanagew に対応していません: ${e.message}`), >_<
  );
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
