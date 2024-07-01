---
title: "HTMLElement: offsetWidth プロパティ"
slug: Web/API/HTMLElement/offsetWidth
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetWidth`** は読み取り専用プロパティで、要素のレイアウト幅を整数として返します。

通常、 `offsetWidth` は、境界線、パディング、および垂直スクロールバー（レンダリングされている場合）を含む、要素の CSS における幅のピクセル単位の計測値です。 `::before` や `::after` などの擬似要素の幅は含まれません。

要素が非表示の場合、（例えば、要素またはその祖先のいずれかで `style.display` を `"none"` に設定している場合） `0` が返されます。

## 値

要素の `offsetWidth` ピクセル値に対応する整数です。 `offsetWidth` プロパティは読み取り専用です。

> **メモ:** このプロパティは、値を整数に丸めます。 小数値が必要な場合は、{{ domxref("element.getBoundingClientRect()") }} を使用してください。

## 例

![大きなパディング、境界、マージンを持つ要素の例です。offsetWidth` は、パディングと境界を含み、マージンを除いた要素のレイアウト幅である。](dimensions-offset.png)

## 仕様書

{{Specifications}}

### メモ

`offsetWidth` は、MSIE によって最初に導入された DHTML オブジェクトモデルのプロパティです。 要素の物理的/グラフィカルな寸法、または要素の境界ボックスの幅 (border-box width) と呼ばれることもあります。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
