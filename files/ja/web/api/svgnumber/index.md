---
title: SVGNumber
slug: Web/API/SVGNumber
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

**`SVGNumber`** インターフェイスは、{{cssxref("&lt;number&gt;")}} 基本データ型に対応します。

`SVGNumber` オブジェクトは読み取り専用として指定されていることがあり、その場合はオブジェクトを変更しようとすると例外が発生します。

## インスタンスプロパティ

- {{domxref("SVGNumber.value")}}
  - : 数値を表す浮動小数点数です。

    メモ: `SVGNumber` が読み取り専用である場合、この値を変更しようとすると {{domxref("DOMException")}} が NO_MODIFICATION_ALLOWED_ERR のコードで発生します。

## インスタンスメソッド

_このインターフェイスは固有のメソッドを提供していません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
