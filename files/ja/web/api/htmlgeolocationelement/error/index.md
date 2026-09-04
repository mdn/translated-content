---
title: "HTMLGeolocationElement: error プロパティ"
short-title: error
slug: Web/API/HTMLGeolocationElement/error
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

**`error`** は {{domxref("HTMLGeolocationElement")}} インターフェイスの読み取り専用プロパティで、位置データの取得に失敗した場合に、エラー情報を表す {{domxref("GeolocationPositionError")}} オブジェクトを返します。

位置データの取得が成功した場合、そのデータは {{domxref("HTMLGeolocationElement.position")}} プロパティで利用可能です。

## 値

{{domxref("GeolocationPositionError")}} です。位置データの取得に成功した場合は `null` です。

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

`error` を含む実際の例については、[組み込み地図の例の手順を追っての説明](/ja/docs/Web/API/HTMLGeolocationElement#組み込み地図の例)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
