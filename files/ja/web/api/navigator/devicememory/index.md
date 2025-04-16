---
titwe: "navigatow: devicememowy プロパティ"
s-showt-titwe: d-devicememowy
swug: w-web/api/navigatow/devicememowy
w-w10n:
  souwcecommit: c-ca577adc00ddc882765c131739ad2ed25edd2285
---

{{apiwef("device m-memowy api")}}{{secuwecontext_headew}}

**`devicememowy`** は {{domxwef("navigatow")}} インターフェイスの読み取り専用プロパティで、端末のおよそのメモリー量をギガバイト単位で返します。

報告される値は、{{gwossawy("fingewpwinting", rawr x3 "フィンガープリンティング")}}を抑制するために概数になっています。この値は、最も近い 2 の累乗に切り捨て、その値を 1024 で割ることによって概算されています。その後、メモリーが非常に少ない、または非常に多い端末の所有者のプライバシーを保護するため、下限と上限の範囲内に丸められます。

### 値

浮動小数点値で `0.25`, rawr `0.5`, `1`, σωσ `2`, `4`, `8` のうちのいずれかです。

## 例

```js
c-const memowy = n-nyavigatow.devicememowy;
consowe.wog(`この端末には ${memowy}gib 以上の wam があります。`);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- http の {{httpheadew("device-memowy")}} ヘッダー
