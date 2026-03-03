---
title: "HTMLGeolocationElement: location イベント"
short-title: location
slug: Web/API/HTMLGeolocationElement/location_event
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

**`location`** は {{domxref("HTMLGeolocationElement")}} インターフェイスのイベントで、ブラウザーが位置データを受信したとき、または位置データのリクエストが失敗した際のエラー情報を受信したときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("location", (event) => { })

onlocation = (event) => { }
```

## イベント型

{{domxref("Event")}} です。

## 例

### `location` を使用して位置データやエラーに応答

[埋め込み地図](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/)の例（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)）では、`location` イベントハンドラーを使用して、位置データやエラーを受信したときに応答しています。

```js
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `${geo.position.coords.latitude},${geo.position.coords.longitude}`,
    );
    drawMap(geo.position.coords.latitude, geo.position.coords.longitude, geo);
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

位置データが正常に返された場合、{{domxref("HTMLGeolocationElement.position")}} プロパティ経由でアクセスし、緯度と経度の値を取得します。これらの値をコンソールにログ出力した後、`drawMap()` 関数に `HTMLGeolocationElement` オブジェクトへの参照とともに渡して地図上にプロットします。データ取得に失敗した場合、{{domxref("HTMLGeolocationElement.error")}} プロパティ経由でエラーにアクセスし、エラーメッセージをコンソールにログ出力します。

この例の完全な手順を追った解説については、{{domxref("HTMLGeolocationElement")}} のメインページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
