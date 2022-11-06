---
title: CSSUnparsedValue
slug: Web/API/CSSUnparsedValue
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

{{domxref('CSS Typed Object Model API','','',' ')}} の **`CSSUnparsedValue`** インターフェイスは、カスタムプロパティを参照するプロパティ値を表します。これは、文字列の断片と変数の参照のリストから成ります。

## コンストラクター

- {{domxref("CSSUnparsedValue.CSSUnparsedValue()")}}
  - : 新しい `CSSUnparsedValue` オブジェクトを生成します。

## プロパティ

- {{domxref('CSSUnparsedValue.length')}}
  - : `CSSUnparsedValue` オブジェクトの項目の数を返します。

## メソッド

- {{domxref('CSSUnparsedValue.entries()')}}
  - : 指定されたオブジェクトの列挙可能なプロパティ `[key, value]` の組の配列を、 {{jsxref("Statements/for...in", "for...in")}} ループで提供されるのと同じ順序で返します (違いは for-in ループがプロトタイプチェーン上のプロパティも列挙することです)。
- {{domxref('CSSUnparsedValue.forEach()')}}
  - : 指定された関数を、 `CSSUnparsedValue` オブジェクトのそれぞれの要素に対して実行します。
- {{domxref('CSSUnparsedValue.keys()')}}
  - : `CSSUnparsedValue` オブジェクト内のそれぞれのインデックスにおけるキーを持つ新しい **`Array Iterator`** オブジェクトを返します。
- {{domxref('CSSUnparsedValue.values()')}}
  - : `CSSUnparsedValue` オブジェクト内のそれぞれのインデックスにおける値を持つ新しい **`Array Iterator`** オブジェクトを返します。

## 仕様書

| 仕様書                                                                           | 状態                     | 備考     |
| -------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('CSSOM','#cssunparsedvalue','CSSUnparsedValue')}} | {{Spec2('CSSOM')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.CSSUnparsedValue")}}
