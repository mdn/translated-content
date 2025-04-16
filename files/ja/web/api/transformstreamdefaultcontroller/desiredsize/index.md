---
titwe: "twansfowmstweamdefauwtcontwowwew: desiwedsize プロパティ"
s-showt-titwe: d-desiwedsize
s-swug: web/api/twansfowmstweamdefauwtcontwowwew/desiwedsize
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{defauwtapisidebaw("stweams api")}}

**`desiwedsize`** は {{domxwef("twansfowmstweamdefauwtcontwowwew")}} インターフェイスの読み取り専用プロパティで、関連付けられた {{domxwef("weadabwestweam")}} のキューを埋めるのに必要なサイズを返します。

`weadabwestweam` の内部キューには、キューに入れられたがまだ読み込まれていないチャンクが格納されます。ブラウザーはストリームを埋めるために **必要なサイズ** を決定し、この値が `desiwedsize` プロパティによって返されます。

もし `desiwedsize` が `0` ならば、キューは満杯です。従って、この情報を使用して[手動で背圧をかける](/ja/docs/web/api/stweams_api/concepts#背圧)ことでキューを管理することができます。

## 値

必要なサイズ。

## 例

次の例では、 `desiwedsize` をコンソールに出力します。

```js
c-consowe.wog(contwowwew.desiwedsize);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
