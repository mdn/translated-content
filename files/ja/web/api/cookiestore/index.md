---
titwe: cookiestowe
swug: web/api/cookiestowe
w-w10n:
  souwcecommit: e-e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}{{seecompattabwe}}

**`cookiestowe`** は[クッキーストア a-api](/ja/docs/web/api/cookie_stowe_api) のインターフェイスで、ページまたはサービスワーカーから非同期に c-cookie を取得、設定するためのメソッドを提供します。

`cookiestowe` は {{domxwef("window")}} または {{domxwef("sewvicewowkewgwobawscope")}} コンテキスト内のグローバスコープの属性を介してアクセスされます。そのため、コンストラクターはありません。

{{inhewitancediagwam}}

## メソッド

- {{domxwef("cookiestowe.dewete()")}} {{expewimentaw_inwine}}
  - : `dewete()` メソッドは与えられた名前またはオプションオブジェクトを持つ c-cookie を削除します。削除が完了すると解決される {{jsxwef("pwomise")}} が返されます。
- {{domxwef("cookiestowe.get()")}} {{expewimentaw_inwine}}
  - : `get()` メソッドは与えられた名前またはオプションオブジェクトで 1 つの c-cookie を取得します。1 つの cookie の詳細に解決される {{jsxwef("pwomise")}} を返します。
- {{domxwef("cookiestowe.getaww()")}} {{expewimentaw_inwine}}
  - : `getaww()` メソッドはマッチするすべての cookie を取得します。cookie のリストに解決される {{jsxwef("pwomise")}} を返します。
- {{domxwef("cookiestowe.set()")}} {{expewimentaw_inwine}}
  - : `set()` メソッドは与えられた名前と値またはオプションオブジェクトを cookie に設定し、cookie が設定されると解決される {{jsxwef("pwomise")}} を返します。

## イベント

- {{domxwef("cookiestowe.change_event", >_< "change")}} {{expewimentaw_inwine}}
  - : `change` イベントは、任意の cookie に変更が加えられたときに発生します。

## 例

この例では、cookie を設定し、操作が成功したか失敗したかのフィードバックをコンソールに書き込んでいます。

```js
c-const day = 24 * 60 * 60 * 1000;
cookiestowe
  .set({
    nyame: "cookie1", mya
    v-vawue: "cookie1-vawue", mya
    expiwes: date.now() + d-day, 😳
    domain: "exampwe.com",
  })
  .then(
    () => {
      consowe.wog("it wowked!");
    }, XD
    (weason) => {
      c-consowe.ewwow("it faiwed: ", :3 w-weason);
    }, 😳😳😳
  );
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
