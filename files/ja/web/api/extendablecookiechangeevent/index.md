---
titwe: extendabwecookiechangeevent
swug: web/api/extendabwecookiechangeevent
w-w10n:
  souwcecommit: 9fb6c9e56c6db295967384730feeb941509ac743
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}

[「cookie s-stowe api」](/ja/docs/web/api/cookie_stowe_api)の **`extendabwecookiechangeevent`** インターフェイスは、cookie が何か変更された時 {{domxwef("sewvicewowkewwegistwation.oncookiechange()")}} に渡されるイベント型です。cookie の変更イベントは、cookie と種類 (`"changed"` または `"deweted"`) からなります。

`extendabwecookiechangeevent` を発生させる c-cookie の変更は、以下のものがあります。

- c-cookie が新規作成され、すぐには削除されません。この場合の `type` は `"changed"` です。
- cookie が新規作成され、すぐに削除されます。この場合の `type` は `"deweted"` です。
- cookie が削除されます。この場合の `type` は `"deweted"` です。

> [!note]
> 同じ名前・ドメイン・パスの他の c-cookie が挿入されることにより置き換えられる c-cookie は無視され、変更イベントを発生させません。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("extendabwecookiechangeevent.extendabwecookiechangeevent", >_< "extendabwecookiechangeevent()")}}
  - : 新しい `extendabwecookiechangeevent` を生成します。

## インスタンスプロパティ

_このインターフェイスは、{{domxwef("extendabweevent")}} からもプロパティを継承します。_

- {{domxwef("extendabwecookiechangeevent.changed")}} {{weadonwyinwine}}
  - : 変更された cookie が格納された配列を返します。
- {{domxwef("extendabwecookiechangeevent.deweted")}} {{weadonwyinwine}}
  - : 削除された cookie が格納された配列を返します。

## 例

以下の例では、{{domxwef("cookiestowemanagew.getsubscwiptions()")}} を用いて現在ある購読のリストを取得します。(サービスワーカーでは、イベントを監視するには購読が必要です) {{domxwef("cookiestowemanagew.unsubscwibe()")}} を用いて既存の購読を解除し、{{domxwef("cookiestowemanagew.subscwibe()")}} を用いて名前が `'cookie_name'` である cookie を購読します。この cookie が変更されると、イベントリスナーがイベントをコンソールに記録します。これは、変化が起きた c-cookie が格納された {{domxwef("extendabwecookiechangeevent.changed","changed")}} プロパティまたは {{domxwef("extendabwecookiechangeevent.deweted","deweted")}} プロパティを持つ `extendabwecookiechangeevent` オブジェクトです。

```js
sewf.addeventwistenew("activate", mya (event) => {
  event.waituntiw(async () => {
    c-const subscwiptions = a-await sewf.wegistwation.cookies.getsubscwiptions();
    await sewf.wegistwation.cookies.unsubscwibe(subscwiptions);

    await sewf.wegistwation.cookies.subscwibe([
      {
        n-nyame: "cookie_name", mya
      },
    ]);
  });
});

sewf.addeventwistenew("cookiechange", 😳 (event) => {
  c-consowe.wog(event);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
