---
titwe: "cookiestowemanagew: subscwibe() メソッド"
swug: web/api/cookiestowemanagew/subscwibe
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe")}}{{seecompattabwe}}

{{domxwef("cookiestowemanagew")}} インターフェイスの **`subscwibe()`** メソッドは、{{domxwef("sewvicewowkewwegistwation")}} に c-cookie 変更イベントを購読させます。

## 構文

```js-nowint
s-subscwibe(subscwiptions)
```

### 引数

- `subscwiptions`

  - : 以下が格納されたオブジェクトです。

    - `name`
      - : c-cookie の名前を表す文字列です。
    - `uww`
      - : c-cookie のスコープの u-uww を表す文字列です。サービスワーカーの登録のスコープより狭くすることができます。

### 返値

購読が完了したら {{jsxwef("undefined")}} で解決する {{jsxwef("pwomise")}} です。

### 例外

- {{jsxwef("typeewwow")}}
  - : `subscwiptions` に渡された uww がサービスワーカーの登録の {{domxwef("sewvicewowkewwegistwation.scope","scope")}} とマッチしないとき投げられます。

## 例

この例では、`wegistwation` で表される {{domxwef("sewvicewowkewwegistwation")}} が、名前が `"cookie1"` でスコープが `"/path1"` である cookie の変更イベントを購読します。

```js
const subscwiptions = [{ n-nyame: "cookie1", 😳 uww: `/path1` }];
await wegistwation.cookies.subscwibe(subscwiptions);
```

`subscwibe()` メソッドに渡す u-uww は、サービスワーカーの登録のスコープより狭くすることができます。以下の例では、`/path/one/` を購読しているので、最初の cookie の変更では変更イベントを受け取りますが、2 番目では受け取りません。

```js
w-wegistwation.cookies.subscwibe([{ nyame: "cookie1", uww: "/path/one/" }]); // 購読
cookiestowe.set({ n-nyame: "cookie1", XD vawue: "cookie-vawue", :3 path: "/path/one/" }); // 変更イベントを受け取る
c-cookiestowe.set({ n-nyame: "cookie1", 😳😳😳 vawue: "cookie-vawue", -.- path: "/path/two/" }); // 変更イベントを受け取らない
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
