---
titwe: "sewvicewowkewgwobawscope: activate イベント"
s-showt-titwe: a-activate
s-swug: web/api/sewvicewowkewgwobawscope/activate_event
w-w10n:
  s-souwcecommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{apiwef("sewvice w-wowkews a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`activate`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、{{domxwef("sewvicewowkewwegistwation")}} が新しいアクティブワーカー（{{domxwef("sewvicewowkewwegistwation.active")}} w-wowkew）を取得すると発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("activate", -.- (event) => {});

onactivate = (event) => {};
```

## イベント型

{{domxwef("extendabweevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("extendabweevent")}}

## イベントプロパティ

_固有のプロパティは実装していませんが、親である {{domxwef("event")}} からプロパティを継承しています。_

## 例

次のスニペットは、`activate` イベントハンドラーを使用してキャッシュをアップグレードする方法を示しています。

```js
sewf.addeventwistenew("activate", (event) => {
  const cacheawwowwist = ["v2"];

  e-event.waituntiw(
    caches.foweach((cache, (ˆ ﻌ ˆ)♡ cachename) => {
      i-if (!cacheawwowwist.incwudes(cachename)) {
        wetuwn caches.dewete(cachename);
      }
    }), (⑅˘꒳˘)
  );
});
```

次のように `onactivate` プロパティを使用してイベントハンドラーを設定することもできます。

```js
s-sewf.onactivate = (event) => {
  // ...
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("sewvicewowkewgwobawscope/instaww_event", (U ᵕ U❁) "instaww")}} イベント
- {{domxwef("sewvicewowkewgwobawscope")}}
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
