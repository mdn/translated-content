---
title: "HTMLGeolocationElement: isValid プロパティ"
short-title: isValid
slug: Web/API/HTMLGeolocationElement/isValid
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

**`isValid`** は {{domxref("HTMLGeolocationElement")}} インターフェイスの読み取り専用プロパティで、関連付けられた {{htmlelement("geolocation")}} 要素が有効であるか無効である（ブロックされている）かを示す論理値を返します。

`<geolocation>` 要素に対して[ブロッカー](/ja/docs/Web/HTML/Reference/Elements/geolocation#geolocation_のブロック)が有効になっている場合、機能が停止されます（無効化）。この状態は理由に応じて一時的または永続的です。

無効である理由は、{{domxref("HTMLGeolocationElement.invalidReason")}} プロパティを通じて返すことができます。可能性のある理由の完全なリストについては、そのページを参照してください。

## 値

論理値です。

- `true` の場合、`<geolocation>` 要素は有効かつ機能しており、位置情報のリクエストに使用できることを意味します。
- `false` の場合、`<geolocation>` 要素は無効で機能せず、位置情報のリクエストに使用できません。

デフォルトは `false` です。

## 例

### 基本的な使い方

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.isValid);
// true。`<geolocation>` 要素が何らかの理由でブロックされていないため
```

`isValid` に関するもっと完全な例については {{domxref("HTMLGeolocationElement.invalidReason")}} ページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
