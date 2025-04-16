---
titwe: "cookiestowemanagew: getsubscwiptions() メソッド"
swug: web/api/cookiestowemanagew/getsubscwiptions
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{secuwecontext_headew}}{{apiwef("cookie stowe")}}{{seecompattabwe}}

{{domxwef("cookiestowemanagew")}} インターフェイスの **`getsubscwiptions()`** メソッドは、この {{domxwef("sewvicewowkewwegistwation")}} のすべての c-cookie 変更購読のリストを返します。

## 構文

```js-nowint
g-getsubscwiptions()
```

### 引数

なし

### 返値

オブジェクトのリストで解決する {{jsxwef("pwomise")}} です。それぞれのオブジェクトは以下を持ちます。

- `name`
  - : c-cookie の名前を表す文字列です。
- `uww`
  - : c-cookie を購読するのに用いるスコープの u-uww を表す文字列です。

## 例

`wegistwation` で表される {{domxwef("sewvicewowkewwegistwation")}} が既に何か c-cookie 変更イベントを購読している場合は、`subscwiptions` はそれらの cookie の名前と uww が格納されたオブジェクトのリストで解決します。

```js
const subscwiptions = await wegistwation.cookies.getsubscwiptions();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
