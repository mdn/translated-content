---
title: HTMLElement.offsetHeight
slug: Web/API/HTMLElement/offsetHeight
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - NeedsNonDHMLImage
  - プロパティ
  - リファレンス
browser-compat: api.HTMLElement.offsetHeight
translation_of: Web/API/HTMLElement/offsetHeight
---
{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetHeight`** は読み取り専用プロパティで、垂直パディングや境界線を含む要素の高さを整数として返します。

通常、`offsetHeight` は、境界線、パディング、水平スクロールバー（レンダリングされている場合）を含む、要素の CSS における高さのピクセル単位の計測値です。 `::before` や `::after` などの擬似要素の高さは含まれません。 文書の body オブジェクトの場合、計測値には、要素の CSS における高さではなく、線形コンテンツの高さの合計が含まれます。 他の線形コンテンツの下に広がる浮動要素は無視されます。

（例えば、要素またはその祖先のいずれかで `style.display` を `"none"` に設定することにより）要素が非表示の場合は、`0` が返されます。

> **Note:** このプロパティは、値を整数に丸めます。 小数値が必要な場合は、{{ domxref("element.getBoundingClientRect()") }} を使用してください。

## 値

数値です。

## 例

![](dimensions-offset.png)

上のサンプル画像は、スクロールバーにより、ウィンドウに収まる場合の `offsetHeight` を示しています。 ただし、スクロールできない要素には、目に見えるコンテンツよりもはるかに大きい大きな `offsetHeight` 値が含まれる場合があります。 これらの要素は通常、スクロール可能な要素内に含まれています。 その結果、これらの非スクロール要素は、スクロール可能なコンテナの `scrollTop` の設定に応じて、完全にまたは部分的に非表示になる場合があります。

## 仕様書

{{Specifications}}

### メモ

`offsetHeight` は、MSIE によって最初に導入された DHTML オブジェクトモデルのプロパティです。 要素の物理的/グラフィカルな寸法、または要素の境界ボックスの高さ (border-box height) と呼ばれることもあります。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [MSDN 要素の寸法と位置の測定](https://docs.microsoft.com/previous-versions/hh781509(v=vs.85))（英語）
