---
title: "HTMLElement: offsetHeight プロパティ"
short-title: offsetHeight
slug: Web/API/HTMLElement/offsetHeight
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{ APIRef("HTML DOM") }}

**`offsetHeight`** は {{domxref("HTMLElement")}} インターフェイスの読み取り専用プロパティで、垂直方向のパディングや境界線を含む要素の高さを整数として返します。

通常、`offsetHeight` は、境界線、パディング、水平スクロールバー（レンダリングされている場合）を含む、要素の CSS における高さのピクセル単位の計測値です。 `::before` や `::after` などの擬似要素の高さは含まれません。 文書の body オブジェクトの場合、計測値には、要素の CSS における高さではなく、線形コンテンツの高さの合計が含まれます。 他の線形コンテンツの下に広がる浮動要素は無視されます。

（例えば、要素またはその祖先のいずれかで `style.display` を `"none"` に設定することにより）要素が非表示の場合は、`0` が返されます。

## 値

整数です。

## 例

![大きなパディング、境界線、マージンを持つ要素の例です。`offsetHeight` は、パディングと境界線を含み、マージンを除いた要素のレイアウト上の高さです。](dimensions-offset.png)

上のサンプル画像は、スクロールバーにより、ウィンドウに収まる場合の `offsetHeight` を示しています。 ただし、スクロールできない要素には、目に見えるコンテンツよりもはるかに大きな `offsetHeight` 値が含まれる場合があります。 これらの要素は通常、スクロール可能な要素内に含まれています。 その結果、これらの非スクロール要素は、スクロール可能なコンテナーの `scrollTop` の設定に応じて、完全にまたは部分的に非表示になる場合があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("HTMLElement.offsetLeft")}}
- {{domxref("HTMLElement.offsetTop")}}
- {{domxref("Element.getBoundingClientRect()")}}
