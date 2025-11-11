---
title: SVGRect
slug: Web/API/SVGRect
l10n:
  sourceCommit: 3ae7f380c04096191376ffc2b455471e5d5fd8a8
---

{{APIRef("SVG")}}

**`SVGRect`** は、 {{DOMXref("DOMRect")}} の別名であり、長方形を表します。長方形は、最小の `x` の値と最小の `y` の値を特定する `x` と `y` の座標の対と、 `width` と、 `height` から構成されており、これらは、非負であるものと考えられます。

`SVGRect` オブジェクトは、読み取り専用であることを指定することができます。これは、そのオブジェクトを変更しようとすると、例外が発生するようになるということです。

## インスタンスプロパティ

- {{domxref("SVGRect.x")}}
  - : この座標の厳密な結果は、各要素に依存します。もしこの属性が指定済みでなければ、結果は、あたかも `0` という値が指定されているかのようになります。
- {{domxref("SVGRect.y")}}
  - : この座標の厳密な結果は、各要素に依存します。もしこの属性が指定済みでなければ、結果は、あたかも `0` という値が指定されているかのようになります。
- {{domxref("SVGRect.width")}}
  - : これは長方形の幅を表します。負の値はエラーになります。 `0` の値は要素の描画を無効にします。
- {{domxref("SVGRect.height")}}
  - : これは長方形の高さを表します。負の値はエラーになります。 `0` の値は要素の描画を無効にします。

## インスタンスメソッド

なし。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXref("DOMRect")}}
- {{DOMXref("DOMPoint")}} の別名である {{DOMXref("SVGPoint")}}
- {{DOMXref("DOMMatrix")}} の別名である {{DOMXref("SVGMatrix")}}
