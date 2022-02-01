---
title: SVG 条件処理属性
slug: Web/SVG/Attribute/Conditional_Processing
tags:
  - 中級者
  - NeedsExample
  - プロパティ
  - リファレンス
  - SVG
browser-compat: svg.attributes.conditional_processing
translation_of: Web/SVG/Attribute/Conditional_Processing
---
SVG 条件処理属性は、ある SVG 要素に指定できる、その要素の外見をレンダリングするかどうかを制御するためのすべての属性です。

*   [requiredExtensions](#attr-requiredextensions)
*   [requiredFeatures](#attr-requiredfeatures)
*   [systemLanguage](#attr-systemlanguage)

## 属性

*   {{SVGAttr('requiredExtensions')}}
    *   : 関連する要素のレンダリングをするためにブラウザーが対応しなければならない、ブラウザー固有の機能をすべて列挙します。
        *値*: 空白区切りの URI のリスト、*アニメーション*: **不可**
*   {{SVGAttr('requiredFeatures')}} {{deprecated_inline}}
    *   : 関連する要素のレンダリングができるようにするためにブラウザー対応しなければならない、[SVG 1.1 仕様書で定義されている](https://www.w3.org/TR/SVG11/feature.html)機能をすべて列挙します。
        *値*: 空白区切りの URI のリスト、*アニメーション*: **不可**
*   {{SVGAttr('systemLanguage')}}
    *   : 関連する要素をレンダリングする際に、ユーザーがどの言語を選択しなければならないかを示す。
        *値*: [A list of comma-separated language ID](https://www.ietf.org/rfc/bcp/bcp47.txt)、*アニメーション*: **不可**

## ブラウザーの互換性

{{Compat}}
