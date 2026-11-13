---
title: SVGAngle
slug: Web/API/SVGAngle
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

`SVGAngle` インターフェイスは、 {{cssxref("&lt;angle&gt;")}} または {{cssxref("&lt;number&gt;")}} である値を表すために使用することができます。

`SVGAngle` は、 {{domxref("SVGAnimatedAngle.animVal")}} および {{domxref("SVGAnimatedAngle.baseVal")}} から返された場合は読み取り専用ですが、 `SVGAngle` が {{domxref("SVGSVGElement.createSVGAngle()")}} から返された場合は書き込み可能です。読み取り専用として指定された場合、オブジェクトを変更しようとすると例外が発生します。

`SVGAngle` オブジェクトは、特定の要素に結び付けることができます。 関連付けられた要素は、オブジェクトが属性を反映する場合に、どの要素のコンテンツ属性を更新するかを決定するために使用されます。 特に指定のない限り、 `SVGAngle` オブジェクトはどの要素にも関連付けられていません。

すべての `SVGAngle` オブジェクトは、 2 つのモードのうちどちらかで操作します。

1. **ベース値の反映**、これはアニメーション可能な属性から反映されたものです（{{domxref("SVGAnimatedAngle")}} の {{domxref("SVGAnimatedAngle.baseVal", "baseVal")}} メンバーを通じて公開されます）。
2. **独立モード**、これは `SVGAngle` オブジェクトが {{domxref("SVGSVGElement.createSVGAngle()")}} で作成された場合です。

## インスタンスプロパティ

- {{domxref("SVGAngle.unitType")}}
  - : このインターフェイスで定義されている `SVG_ANGLETYPE_*` 定数のいずれかを指定します。
- {{domxref("SVGAngle.value")}}
  - : ユーザー単位における浮動小数点値としての値。この属性を設定すると、この属性を設定すると、この設定を反映して `valueInSpecifiedUnits` および `valueAsString` が自動的に更新されます。
- {{domxref("SVGAngle.valueInSpecifiedUnits")}}
  - : `unitType` で指定された単位で表される浮動小数点数としての値。この属性を設定すると、この設定を反映して `value` と `valueAsString` が自動的に更新されます。
- {{domxref("SVGAngle.valueAsString")}}
  - : 文字列値としての値を、`unitType` で表現された単位で表します。 この属性を設定すると、この設定を反映して `value`、`valueInSpecifiedUnits`、`unitType` が自動的に更新されます。

## インスタンスメソッド

- {{domxref("SVGAngle.convertToSpecifiedUnits()")}}
  - : 根底に保存されたのと同じ値を維持しますが、格納された単位識別子を指定された `unitType` にリセットします。 このメソッドの結果として、オブジェクトの属性 `unitType`、`valueInSpecifiedUnits`、`valueAsString` が変更される場合があります。
- {{domxref("SVGAngle.newValueSpecifiedUnits()")}}
  - : 値を関連付けられた unitType を持つ数値としてリセットし、それによってオブジェクト上の属性の値をすべて置き換えます。

## 定数

- `SVG_ANGLETYPE_UNKNOWN` (0)
  - : 未知の値の型です。
- `SVG_ANGLETYPE_UNSPECIFIED` (1)
  - : 単位なしの {{cssxref("&lt;number&gt;")}} で、度の値として解釈されます。
- `SVG_ANGLETYPE_DEG` (2)
  - : {{cssxref("&lt;angle&gt;")}} が度 (`deg`) 単位で表されたものです。
- `SVG_ANGLETYPE_RAD` (3)
  - : {{cssxref("&lt;angle&gt;")}} がラジアン (`rad`) で表されたものです。
- `SVG_ANGLETYPE_GRAD` (4)
  - : {{cssxref("&lt;angle&gt;")}} がグラード (`grad`) で表されたものです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
