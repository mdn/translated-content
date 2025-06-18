---
title: "SVGElement: dataset プロパティ"
short-title: dataset
slug: Web/API/SVGElement/dataset
l10n:
  sourceCommit: 335dda2e9a42f5e9257ee398437cd984f6cabb45
---

{{APIRef("SVG")}}

**`dataset`** は {{DOMxRef("SVGElement")}} インターフェイスの読み取り専用プロパティで、要素の[カスタムデータ属性](/ja/docs/Web/SVG/Reference/Attribute/data-*) (`data-*`) への読み書きアクセスを提供します。これは文字列のマップ ({{domxref("DOMStringMap")}}) を公開し、各 `data-*` 属性の項目を持つ文字列の地図（DOMStringMap）を公開します。

`dataset` の動作に関するより詳しい情報は {{domxref("HTMLElement.dataset")}} を参照して下さい。

## 値

{{domxref("DOMStringMap")}} です。

## 例

```html
<div>
  <svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
    <text x="20" y="20" id="user" data-id="1234567890" data-user="carinaanand">
      Carina Anand
    </text>
  </svg>
</div>
```

```js
const el = document.querySelector("#user");

console.log(el.dataset.id); // "1234567890"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の [`data-*`](/ja/docs/Web/SVG/Reference/Attribute/data-*) 属性
- [データ属性の使用](/ja/docs/Web/HTML/How_to/Use_data_attributes)
