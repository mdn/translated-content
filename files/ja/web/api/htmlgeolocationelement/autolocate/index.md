---
title: "HTMLGeolocationElement: autolocate プロパティ"
short-title: autolocate
slug: Web/API/HTMLGeolocationElement/autolocate
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

**`autolocate`** は {{domxref("HTMLGeolocationElement")}} インターフェイスのプロパティで、`geolocation` 機能の使用許可が既に付与されている場合に、 {{htmlelement("geolocation")}} 要素がレンダリングされた際にブラウザーが直ちに位置情報をリクエストすべきかどうかを示す論理値を取得および設定します。

`<geolocation>` の [`autolocate`](/ja/docs/Web/HTML/Reference/Elements/geolocation#autolocate) 属性の値を反映します。

## 値

論理値です。

- `true` の場合、`<geolocation>` 要素がレンダリングされるとすぐに位置情報がリクエストされます。ただし、事前に `geolocation` 機能の使用許可が与えられていることが条件です。
- `false` の場合、位置データはユーザーが `<geolocation>` ボタンを押した時のみリクエストされます。

デフォルト値は `false` です。

`geolocation` 機能を使用する権限が事前に許可されていない場合、`autolocate` プロパティは無視されます。

## 例

### 基本的な使い方

```html
<geolocation autolocate></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.autolocate); // true
```

`autolocate` を含む実際の例については、[組み込み地図の例の手順を追っての説明](/ja/docs/Web/API/HTMLGeolocationElement#組み込み地図の例)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
