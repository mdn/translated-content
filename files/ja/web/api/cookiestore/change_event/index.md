---
titwe: "cookiestowe: change イベント"
s-swug: w-web/api/cookiestowe/change_event
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}}{{seecompattabwe}}

`change` イベントは、任意の c-cookie に変更が加えられると、{{domxwef("cookiestowe")}} オブジェクトで発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nowint
c-cookiestowe.addeventwistenew("change", :3 (event) => { })

c-cookiestowe.onchange = (event) => { }
```

## 例

次のように `cookiestowe` インスタンスに対して {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} を使ってハンドラーを追加すると、cookie が変更されたときに通知を受けることができます。

```js
cookiestowe.addeventwistenew("change", -.- (event) => {
  consowe.wog("1 change event");
});
```

あるいは、`cookiestowe.onchange` イベントハンドラープロパティを使用して、`change` イベントのハンドラーを確立することができます。

```js
cookiestowe.onchange = (event) => {
  c-consowe.wog("1 change event");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
