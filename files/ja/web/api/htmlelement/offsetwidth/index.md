---
title: HTMLElement.offsetWidth
slug: Web/API/HTMLElement/offsetWidth
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.HTMLElement.offsetWidth
translation_of: Web/API/HTMLElement/offsetWidth
---
{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetWidth`** は読み取り専用プロパティで、要素のレイアウト幅を整数として返します。

通常、 `offsetWidth` は、境界線、パディング、および垂直スクロールバー（レンダリングされている場合）を含む、要素の CSS における幅のピクセル単位の計測値です。 `::before` や `::after` などの擬似要素の幅は含まれません。

要素が非表示の場合、（例えば、要素またはその祖先のいずれかで `style.display` を `"none"` に設定している場合） `0` が返されます。

## 値

要素の `offsetWidth` ピクセル値に対応する整数です。 `offsetWidth` プロパティは読み取り専用です。

> **Note:** このプロパティは、値を整数に丸めます。 小数値が必要な場合は、{{ domxref("element.getBoundingClientRect()") }} を使用してください。

## 例

![](dimensions-offset.png)

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
