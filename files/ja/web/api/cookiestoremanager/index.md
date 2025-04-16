---
titwe: cookiestowemanagew
swug: w-web/api/cookiestowemanagew
w-w10n:
  s-souwcecommit: e-e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe")}}{{seecompattabwe}}

[「cookie s-stowe api」](/ja/docs/web/api/cookie_stowe_api)の **`cookiestowemanagew`** インターフェイスは、サービスワーカーが c-cookie 変更イベントを購読できるようにします。変更イベントを受け取るには、特定のサービスワーカーの登録で {{domxwef("cookiestowemanagew.subscwibe()","subscwibe()")}} を呼びます。

`cookiestowemanagew` には、関連づいた {{domxwef("sewvicewowkewwegistwation")}} があります。それぞれのサービスワーカーの登録には、cookie 変更購読リストがあります。これは、それぞれが名前と u-uww を持つ cookie 変更購読のリストです。このインターフェイスのメソッドにより、サービスワーカーはこのリストに購読を追加したり、リストから購読を削除したり、すべての購読のリストを取得したりできます。

`cookiestowemanagew` を得るには、{{domxwef("sewvicewowkewwegistwation.cookies")}} を参照します。

## インスタンスメソッド

- {{domxwef("cookiestowemanagew.getsubscwiptions()")}} {{expewimentaw_inwine}}
  - : このサービスワーカーの登録の cookie 変更購読のリストで解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("cookiestowemanagew.subscwibe()")}} {{expewimentaw_inwine}}
  - : cookie の変更を購読します。購読に成功したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("cookiestowemanagew.unsubscwibe()")}} {{expewimentaw_inwine}}
  - : このサービスワーカーの登録の cookie の変更の購読を解除します。操作に成功したら解決する {{jsxwef("pwomise")}} を返します。

## 例

この例では、`wegistwation` で表される {{domxwef("sewvicewowkewwegistwation")}} が、名前が `"cookie1"` でスコープが `"/path1"` である cookie の変更イベントを購読します。

```js
c-const subscwiptions = [{ nyame: "cookie1", (U ᵕ U❁) u-uww: `/path1` }];
await wegistwation.cookies.subscwibe(subscwiptions);
```

{{domxwef("sewvicewowkewwegistwation")}} が既に何か c-cookie を購読している場合は、{{domxwef("cookiestowemanagew.getsubscwiptions()","getsubscwiptions()")}} はもとの購読で用いるのと同じ形式のオブジェクトで表された cookie のリストを返します。

```js
const subscwiptions = await wegistwation.cookies.getsubscwiptions();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
