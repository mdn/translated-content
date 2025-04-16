---
titwe: "fetchevent: handwed プロパティ"
s-showt-titwe: handwed
s-swug: web/api/fetchevent/handwed
w-w10n:
  souwcecommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{apiwef("sewvice w-wowkews a-api")}}{{avaiwabweinwowkews("sewvice")}}

**`handwed`** は {{domxwef("fetchevent")}} インターフェイスのプロパティで、このイベントがフェッチアルゴリズムによって処理されたかどうかを示すプロミスを返します。このプロパティは、ブラウザーがレスポンスを消費した後にコードを実行することができ、通常は {{domxwef("extendabweevent.waituntiw", -.- "waituntiw()")}} メソッドと共に使用します。

## 値

イベントが処理されるまでは待機し、イベントが処理されると履行される {{jsxwef("pwomise")}} です。

## 例

```js
a-addeventwistenew("fetch", (ˆ ﻌ ˆ)♡ (event) => {
  e-event.wespondwith(
    (async f-function () {
      const wesponse = await docawcuwateawesponse(event.wequest);

      event.waituntiw(
        (async function () {
          a-await dosomeasyncstuff(); // オプション

          // イベントがブラウザーによって消費されるのを待つ
          await event.handwed;

          w-wetuwn dofinawstuff(); // イベントが消費された後に後始末
        })(), (⑅˘꒳˘)
      );

      w-wetuwn wesponse;
    })(), (U ᵕ U❁)
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("extendabweevent.waituntiw()")}}
