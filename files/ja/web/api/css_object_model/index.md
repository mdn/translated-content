---
title: CSS オブジェクトモデル (CSSOM)
slug: Web/API/CSS_Object_Model
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

- [Determining the dimensions of elements](/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements) (これは DHTML/Ajax 時代に作られたのでいくらか更新が必要です)。
- [画面の向きの管理](/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

## 仕様書

| 仕様書                                           | 状態                                         | 備考                                                                                                                                                                                                                              |
| ------------------------------------------------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS Typed OM")}}             | {{Spec2("CSS Typed OM")}}             |                                                                                                                                                                                                                                   |
| {{SpecName("CSS Painting API")}}     | {{Spec2("CSS Painting API")}}     | {{DOMxRef("CSS")}} インターフェイスを {{DOMxRef("CSS.paintWorklet","paintWorklet")}} 静的プロパティで拡張。                                                                                                   |
| {{SpecName("CSSOM View")}}             | {{Spec2("CSSOM View")}}             | {{DOMxRef("Screen")}} および {{DOMxRef("MediaQueryList")}} インターフェイスと {{DOMxRef("MediaQueryListEvent")}} イベントと {{DOMxRef("MediaQueryListListener")}} イベントリスナーを定義。 |
| {{SpecName("CSSOM")}}                     | {{Spec2("CSSOM")}}                     | {{DOMxRef("CSS")}} インターフェイスを拡張し、最新の CSSOM 仕様書の基礎を提供。                                                                                                                                              |
| {{SpecName("Screen Orientation")}}     | {{Spec2("Screen Orientation")}}     |                                                                                                                                                                                                                                   |
| {{SpecName("CSS3 Fonts")}}             | {{Spec2("CSS3 Fonts")}}             |                                                                                                                                                                                                                                   |
| {{SpecName("CSS3 Animations")}}         | {{Spec2("CSS3 Animations")}}         |                                                                                                                                                                                                                                   |
| {{SpecName("CSS3 Transitions")}}     | {{Spec2("CSS3 Transitions")}}     |                                                                                                                                                                                                                                   |
| {{SpecName("CSS3 Variables")}}         | {{Spec2("CSS3 Variables")}}         |                                                                                                                                                                                                                                   |
| {{SpecName("CSS3 Conditional")}}     | {{Spec2("CSS3 Conditional")}}     | {{DOMxRef("CSS")}} インターフェイスを定義。                                                                                                                                                                                 |
| {{SpecName("CSS3 Device")}}             | {{Spec2("CSS3 Device")}}             |                                                                                                                                                                                                                                   |
| {{SpecName("CSS3 Counter Styles")}} | {{Spec2("CSS3 Counter Styles")}} |                                                                                                                                                                                                                                   |
| {{SpecName("DOM2 Style")}}             | {{Spec2("DOM2 Style")}}             | 初回定義                                                                                                                                                                                                                          |

## ブラウザーの互換性

この機能のすべてはさまざまなブラウザーで何年かけて少しずつ追加されてきました。これは簡単なページにまとめることができないとても複雑なプロセスでした。利用できるかについてはそれぞれのインターフェイスを参照してください。

## See also

- [Document Object Model (DOM)](/ja/docs/Web/API/Document_Object_Model)
- [Houdini](/ja/docs/Web/Houdini/)
