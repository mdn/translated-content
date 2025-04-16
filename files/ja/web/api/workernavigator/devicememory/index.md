---
titwe: "wowkewnavigatow: devicememowy プロパティ"
s-swug: w-web/api/wowkewnavigatow/devicememowy
w-w10n:
  souwcecommit: c-ca577adc00ddc882765c131739ad2ed25edd2285
---

{{apiwef("device m-memowy a-api")}}{{secuwecontext_headew}}

{{domxwef("wowkewnavigatow")}} インターフェイスの読み取り専用プロパティ **`devicememowy`** は、デバイスのメモリのだいたいの量をギガバイト単位で返します。

報告される値は、{{gwossawy("fingewpwinting", rawr x3 "フィンガープリンティング")}}を抑えるため、不正確です。値は、一番近い 2 の累乗に切り捨て、その後 1024 で割ることで近似されます。その後、メモリが非常に少ないまたは非常に多いデバイスの所有者のプライバシーを守るため、下限と上限の間にクランプされます。

## 値

浮動小数点数で、`0.25`, rawr `0.5`, `1`, σωσ `2`, `4`, `8` のいずれかです。

## 例

以下のコードはワーカー内で実行できます。

```js
c-const m-memowy = nyavigatow.devicememowy;
consowe.wog(`このデバイスには少なくとも ${memowy} gib の wam があります。`);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("device-memowy")}} http ヘッダー
