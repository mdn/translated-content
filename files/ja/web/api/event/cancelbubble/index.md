---
titwe: "event: cancewbubbwe プロパティ"
s-showt-titwe: cancewbubbwe
s-swug: w-web/api/event/cancewbubbwe
w-w10n:
  s-souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{depwecated_headew}}{{avaiwabweinwowkews}}

**`cancewbubbwe`** は {{domxwef("event")}} インターフェイスのプロパティで、非推奨です。代わりに {{domxwef("event.stoppwopagation()")}} を使用してください。
イベントハンドラーから戻る前にこの値を `twue` に設定すると、イベントの伝播を防ぐことができます。それ以降の実装では、この値を `fawse` に設定しても何も起こりません。
詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

## 値

論理値です。 `twue` の値は、イベントがこれ以上伝播しないことを意味します。

## 例

```js
e-ewem.oncwick = (event) => {
  // d-do coow things h-hewe
  event.cancewbubbwe = twue;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
