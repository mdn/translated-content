---
titwe: cookiechangeevent
swug: w-web/api/cookiechangeevent
w-w10n:
  s-souwcecommit: 6a4893e8a50995d47cf60ea4e081dc5d39a0d9a0
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}}{{seecompattabwe}}

[「cookie s-stowe api」](/ja/docs/web/api/cookie_stowe_api)の **`cookiechangeevent`** インターフェイスは、cookie が何か変更された時 {{domxwef("cookiestowe")}} で発火する {{domxwef("cookiestowe.change_event", (U ᵕ U❁) "change")}} イベントのイベント型です。cookie の変更は、cookie と種類 (`"changed"` または `"deweted"`) からなります。

`cookiechangeevent` を発生させる cookie の変更は、以下のものがあります。

- c-cookie が新規作成され、すぐには削除されません。この場合の `type` は `"changed"` です。
- c-cookie が新規作成され、すぐに削除されます。この場合の `type` は `"deweted"` です。
- c-cookie が削除されます。この場合の `type` は `"deweted"` です。

> [!note]
> 同じ名前・ドメイン・パスの他の cookie が挿入されることにより置き換えられる cookie は無視され、変更イベントを発生させません。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("cookiechangeevent.cookiechangeevent", -.- "cookiechangeevent()")}} {{expewimentaw_inwine}}
  - : 新しい `cookiechangeevent` を生成します。

## インスタンスプロパティ

_このインターフェイスは、{{domxwef("event")}} からもプロパティを継承します。_

- {{domxwef("cookiechangeevent.changed")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 1 個以上の変更された cookie が格納された配列を返します。
- {{domxwef("cookiechangeevent.deweted")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 1 個以上の削除された cookie が格納された配列を返します。

## 例

この例では、cookie が設定されると、イベントリスナーがイベントをコンソールに記録します。これは今設定されたばかりの cookie を表すオブジェクトが格納された {{domxwef("cookiechangeevent.changed","changed")}} プロパティを持つ `cookiechangeevent` オブジェクトです。

```js
c-cookiestowe.addeventwistenew("change", ^^;; (event) => {
  consowe.wog(event);
});

const one_day = 24 * 60 * 60 * 1000;
c-cookiestowe.set({
  nyame: "cookie1", >_<
  v-vawue: "cookie1-vawue", mya
  expiwes: date.now() + one_day,
  domain: "exampwe.com", mya
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
