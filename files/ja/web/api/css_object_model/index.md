---
title: CSS オブジェクトモデル (CSSOM)
slug: Web/API/CSS_Object_Model
l10n:
  sourceCommit: 58792ac0cd1e3ab302683533862f821b666c5e3b
---

{{DefaultAPISidebar("CSSOM")}}

**CSS オブジェクトモデル**は CSS を JavaScript から操作するための API の集合です。これは DOM にとても良く似ていますが、 HTML ではなく CSS のためのものです。これにより CSS スタイルを動的に読んだり変更したりすることができます。

CSS の値は型を使わずに表現しますので、 {{JSxRef("String")}} オブジェクトを使用します。

## リファレンス

- {{DOMxRef("AnimationEvent")}}
- {{DOMxRef("CaretPosition")}}
- {{DOMxRef("CSS")}}
- {{DOMxRef("CSSCharsetRule")}}
- {{DOMxRef("CSSConditionRule")}}
- {{DOMxRef("CSSCounterStyleRule")}}
- {{DOMxRef("CSSFontFaceRule")}}
- {{DOMxRef("CSSFontFeatureValuesMap")}}
- {{DOMxRef("CSSFontFeatureValuesRule")}}
- {{DOMxRef("CSSGroupingRule")}}
- {{DOMxRef("CSSImportRule")}}
- {{DOMxRef("CSSKeyframeRule")}}
- {{DOMxRef("CSSKeyframesRule")}}
- {{DOMxRef("CSSMarginRule")}}
- {{DOMxRef("CSSMediaRule")}}
- {{DOMxRef("CSSNamespaceRule")}}
- {{DOMxRef("CSSPageRule")}}
- {{DOMxRef("CSSRule")}}
- {{DOMxRef("CSSRuleList")}}
- {{DOMxRef("CSSStyleDeclaration")}}
- {{DOMxRef("CSSStyleSheet")}}
- {{DOMxRef("CSSStyleRule")}}
- {{DOMxRef("CSSSupportsRule")}}
- {{DOMxRef("CSSVariablesMap")}}
- {{DOMxRef("CSSViewportRule")}}
- {{DOMxRef("FontFace")}}
- {{DOMxRef("FontFaceSet")}}
- {{DOMxRef("FontFaceSetLoadEvent")}}
- {{DOMxRef("GetStyleUtils")}}
- {{DOMxRef("MediaList")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("Screen")}}
- {{DOMxRef("StyleSheet")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("TransitionEvent")}}

他にも CSSOM に関する仕様書で拡張されているインターフェイスがあります。 {{DOMxRef("Document")}}, {{DOMxRef("Window")}}, {{DOMxRef("Element")}}, {{DOMxRef("HTMLElement")}}, {{DOMxRef("HTMLImageElement")}}, {{DOMxRef("Range")}}, {{DOMxRef("MouseEvent")}}, {{DOMxRef("SVGElement")}} です。

### CSS 型付きオブジェクトモデル {{Experimental_Inline}}

{{SeeCompatTable}}

- {{DOMxRef("CSSImageValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSKeywordValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathInvert")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathMax")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathMin")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathNegate")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathProduct")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathSum")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMatrixComponent")}} {{Experimental_Inline}}
- {{DOMxRef("CSSNumericArray")}} {{Experimental_Inline}}
- {{DOMxRef("CSSNumericValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSPerspective")}} {{Experimental_Inline}}
- {{DOMxRef("CSSPositionValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSRotate")}} {{Experimental_Inline}}
- {{DOMxRef("CSSScale")}} {{Experimental_Inline}}
- {{DOMxRef("CSSSkew")}} {{Experimental_Inline}}
- {{DOMxRef("CSSSkewX")}} {{Experimental_Inline}}
- {{DOMxRef("CSSSkewY")}} {{Experimental_Inline}}
- {{DOMxRef("CSSStyleValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSTransformComponent")}} {{Experimental_Inline}}
- {{DOMxRef("CSSTransformValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSTranslate")}} {{Experimental_Inline}}
- {{DOMxRef("CSSUnitValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSUnparsedValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSVariableReferenceValue")}} {{Experimental_Inline}}
- {{DOMxRef("StylePropertyMap")}} {{Experimental_Inline}}
- {{DOMxRef("StylePropertyMapReadOnly")}} {{Experimental_Inline}}

### 廃止された CSSOM インターフェイス {{deprecated_inline}}

{{deprecated_header}}

- {{DOMxRef("CSSPrimitiveValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValueList")}} {{deprecated_inline}}

## チュートリアル

- [要素の寸法の決定](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements) (これは DHTML/Ajax 時代に作られたのでいくらか更新が必要です)。
- [画面の向きの管理](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

この機能のすべてはさまざまなブラウザーで何年かけて少しずつ追加されてきました。これは簡単なページにまとめることができないとても複雑なプロセスでした。利用できるかについてはそれぞれのインターフェイスを参照してください。

## 関連情報

- [Document Object Model (DOM)](/ja/docs/Web/API/Document_Object_Model)
- [Houdini](/ja/docs/Web/API/Houdini_APIs)
