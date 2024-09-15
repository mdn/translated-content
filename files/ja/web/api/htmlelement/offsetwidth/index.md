---
title: "HTMLElement: offsetWidth プロパティ"
short-title: offsetWidth
slug: Web/API/HTMLElement/offsetWidth
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetWidth`** は読み取り専用プロパティで、要素のレイアウト幅を整数として返します。

通常、 `offsetWidth` は、境界線、パディング、および垂直スクロールバー（レンダリングされている場合）を含む、要素の CSS における幅のピクセル単位の計測値です。 `::before` や `::after` などの擬似要素の幅は含まれません。

要素が非表示の場合、（例えば、要素またはその祖先のいずれかで `style.display` を `"none"` に設定している場合） `0` が返されます。

## 値

要素の `offsetWidth` ピクセル値に対応する整数です。 `offsetWidth` プロパティは読み取り専用です。

> [!NOTE]
> このプロパティは、値を整数に丸めます。 小数値が必要な場合は、{{ domxref("element.getBoundingClientRect()") }} を使用してください。

## 例

![大きなパディング、境界、マージンを持つ要素の例です。offsetWidth` は、パディングと境界を含み、マージンを除いた要素のレイアウト幅である。](dimensions-offset.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
