---
title: "HTMLElement: offsetWidth プロパティ"
short-title: offsetWidth
slug: Web/API/HTMLElement/offsetWidth
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{ APIRef("HTML DOM") }}

**`offsetWidth`** は {{domxref("HTMLElement")}} インターフェイスの読み取り専用プロパティで、要素のレイアウト幅を整数として返します。

通常、`offsetWidth` は、境界線、パディング、および垂直スクロールバー（レンダリングされている場合）を含む、要素の CSS における幅のピクセル単位の計測値です。`::before` や `::after` などの擬似要素の幅は含まれません。

要素が非表示の場合（例えば、要素またはその祖先のいずれかで `style.display` を `"none"` に設定している場合）、`0` が返されます。

## 値

整数です。

## 例

![大きなパディング、境界、マージンを持つ要素の例です。`offsetWidth` は、パディングと境界を含み、マージンを除いた要素のレイアウト幅である。](dimensions-offset.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("HTMLElement.offsetLeft")}}
- {{domxref("HTMLElement.offsetTop")}}
- {{domxref("Element.getBoundingClientRect()")}}
