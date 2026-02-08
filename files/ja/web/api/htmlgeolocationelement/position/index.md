---
title: "HTMLGeolocationElement: position プロパティ"
short-title: position
slug: Web/API/HTMLGeolocationElement/position
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

**`position`** は {{domxref("HTMLGeolocationElement")}} インターフェイスの読み取り専用プロパティで、位置データの取得に成功した場合、ユーザーの現在地を表す {{domxref("GeolocationPosition")}} オブジェクトを返します。

取得された位置情報は、最新である場合もあればそうでない場合もあります。`<geolocation>` 要素のボタンコントロールが押された際にのみ、ユーザーの位置情報が一度取得されます。ただし、[`watch`](/ja/docs/Web/HTML/Reference/Elements/geolocation#watch) 属性を `true` に設定した場合、ユーザー端末が移動するたびに新しい位置情報が取得されます。ユーザーの現在位置を読み取るには、{{domxref("HTMLGeolocationElement.location_event", "location")}} イベントが発生した際に `position` プロパティを参照する必要があります。

位置情報の取得に失敗した場合、関連付けられたエラー情報は {{domxref("HTMLGeolocationElement.error")}} プロパティで取得できます。

## 値

{{domxref("GeolocationPosition")}} オブジェクトです。位置データの取得に失敗した場合や、データがまだ取得されていない場合は `null` です。

## 例

### 基本的な使い方

```html
<geolocation autolocate></geolocation>
```

```js
const geo = document.querySelector("geolocation");
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `(${geo.position.coords.latitude},${geo.position.coords.longitude})`,
    );
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

`position` を含む実際の例については、[組み込み地図の例の手順を追っての説明](/ja/docs/Web/API/HTMLGeolocationElement#組み込み地図の例)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
