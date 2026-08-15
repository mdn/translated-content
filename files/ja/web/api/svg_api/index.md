---
title: SVG API
slug: Web/API/SVG_API
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

{{DefaultAPISidebar("SVG")}}

SVG は円、矩形、単純曲線、複雑曲線の要素を提供します。要素の属性値は、これらをどのように描画しなければならないかを指定します。 **SVG API** は **DOM** のサブセットであり、これらの SVG 要素とその属性値をメモリー上に表現することで、スクリプトやプログラミング言語に接続します。こうして SVG API は SVG 要素とその属性値へのプログラムによるアクセスを可能にするメソッドを提供します。

SVG API は以下の大分類に分類されるインターフェイスの集合です。

1. [要素インターフェイス](#svg_要素インターフェイス)は、 SVG 要素のプロパティへのアクセスと、それらを操作するメソッドを提供します。
2. [静的データ型](#svg_データ型インターフェイス)インターフェイスは、要素の属性値へのアクセスと、それらを操作するメソッドを提供します。
3. アニメーション可能な属性については、[アニメーションデータ型インターフェイス](#svg_データ型インターフェイス)が属性の現在のアニメーション値への読み取り専用アクセスを提供します。
4. [同期マルチメディア統合言語 (SMIL) インターフェイス](#smil_関連インターフェイス)
5. [その他](#その他の_svg_インターフェイス)

## インターフェイス

### SVG 要素インターフェイス

- {{DOMxRef("SVGAElement")}}
- {{DOMxRef("SVGAnimationElement")}}
- {{DOMxRef("SVGAnimateElement")}}
- {{DOMxRef("SVGAnimateMotionElement")}}
- {{DOMxRef("SVGAnimateTransformElement")}}
- {{DOMxRef("SVGCircleElement")}}
- {{DOMxRef("SVGClipPathElement")}}
- {{DOMxRef("SVGComponentTransferFunctionElement")}}
- {{DOMxRef("SVGDefsElement")}}
- {{DOMxRef("SVGDescElement")}}
- {{DOMxRef("SVGDiscardElement")}}
- {{DOMxRef("SVGElement")}}
- {{DOMxRef("SVGEllipseElement")}}
- {{DOMxRef("SVGFEBlendElement")}}
- {{DOMxRef("SVGFEColorMatrixElement")}}
- {{DOMxRef("SVGFEComponentTransferElement")}}
- {{DOMxRef("SVGFECompositeElement")}}
- {{DOMxRef("SVGFEConvolveMatrixElement")}}
- {{DOMxRef("SVGFEDiffuseLightingElement")}}
- {{DOMxRef("SVGFEDisplacementMapElement")}}
- {{DOMxRef("SVGFEDistantLightElement")}}
- {{DOMxRef("SVGFEDropShadowElement")}}
- {{DOMxRef("SVGFEFloodElement")}}
- {{DOMxRef("SVGFEFuncAElement")}}
- {{DOMxRef("SVGFEFuncBElement")}}
- {{DOMxRef("SVGFEFuncGElement")}}
- {{DOMxRef("SVGFEFuncRElement")}}
- {{DOMxRef("SVGFEGaussianBlurElement")}}
- {{DOMxRef("SVGFEImageElement")}}
- {{DOMxRef("SVGFEMergeElement")}}
- {{DOMxRef("SVGFEMergeNodeElement")}}
- {{DOMxRef("SVGFEMorphologyElement")}}
- {{DOMxRef("SVGFEOffsetElement")}}
- {{DOMxRef("SVGFEPointLightElement")}}
- {{DOMxRef("SVGFESpecularLightingElement")}}
- {{DOMxRef("SVGFESpotLightElement")}}
- {{DOMxRef("SVGFETileElement")}}
- {{DOMxRef("SVGFETurbulenceElement")}}
- {{DOMxRef("SVGFilterElement")}}
- {{DOMxRef("SVGForeignObjectElement")}}
- {{DOMxRef("SVGGElement")}}
- {{DOMxRef("SVGGeometryElement")}}
- {{DOMxRef("SVGGradientElement")}}
- {{DOMxRef("SVGGraphicsElement")}}
- {{DOMxRef("SVGImageElement")}}
- {{DOMxRef("SVGLinearGradientElement")}}
- {{DOMxRef("SVGLineElement")}}
- {{DOMxRef("SVGMarkerElement")}} {{Experimental_Inline}}
- {{DOMxRef("SVGMaskElement")}}
- {{DOMxRef("SVGMetadataElement")}}
- {{DOMxRef("SVGMPathElement")}}
- {{DOMxRef("SVGPathElement")}}
- {{DOMxRef("SVGPatternElement")}}
- {{DOMxRef("SVGPolylineElement")}}
- {{DOMxRef("SVGPolygonElement")}}
- {{DOMxRef("SVGRadialGradientElement")}}
- {{DOMxRef("SVGRectElement")}}
- {{DOMxRef("SVGScriptElement")}}
- {{DOMxRef("SVGSetElement")}}
- {{DOMxRef("SVGStopElement")}}
- {{DOMxRef("SVGStyleElement")}}
- {{DOMxRef("SVGSVGElement")}}
- {{DOMxRef("SVGSwitchElement")}}
- {{DOMxRef("SVGSymbolElement")}}
- {{DOMxRef("SVGTextContentElement")}}
- {{DOMxRef("SVGTextElement")}}
- {{DOMxRef("SVGTextPathElement")}}
- {{DOMxRef("SVGTextPositioningElement")}}
- {{DOMxRef("SVGTitleElement")}}
- {{DOMxRef("SVGTSpanElement")}}
- {{DOMxRef("SVGUseElement")}}
- {{DOMxRef("SVGViewElement")}}

### SVG データ型インターフェイス

以下は SVG プロパティと属性の定義で使われるデータ型の DOM API である。

#### 静的型

- {{DOMxRef("SVGAngle")}}
- {{DOMxRef("SVGLength")}}
- {{DOMxRef("SVGLengthList")}}
- {{DOMxRef("SVGNumber")}}
- {{DOMxRef("SVGNumberList")}}
- {{DOMxRef("SVGPreserveAspectRatio")}}
- {{DOMxRef("SVGStringList")}}
- {{DOMxRef("SVGTransform")}}
- {{DOMxRef("SVGTransformList")}}

#### アニメーション型

- {{DOMxRef("SVGAnimatedAngle")}}
- {{DOMxRef("SVGAnimatedBoolean")}}
- {{DOMxRef("SVGAnimatedEnumeration")}}
- {{DOMxRef("SVGAnimatedInteger")}}
- {{DOMxRef("SVGAnimatedLength")}}
- {{DOMxRef("SVGAnimatedLengthList")}}
- {{DOMxRef("SVGAnimatedNumber")}}
- {{DOMxRef("SVGAnimatedNumberList")}}
- {{DOMxRef("SVGAnimatedPreserveAspectRatio")}}
- {{DOMxRef("SVGAnimatedRect")}}
- {{DOMxRef("SVGAnimatedString")}}
- {{DOMxRef("SVGAnimatedTransformList")}}

### SMIL 関連インターフェイス

- {{DOMxRef("TimeEvent")}}

### その他の SVG インターフェイス

- {{DOMxRef("ShadowAnimation")}}
- {{DOMxRef("SVGUnitTypes")}}
- {{DOMxRef("SVGUseElementShadowRoot")}}

## 仕様書

{{Specifications}}

## 関連情報

- [SVG を始めよう](/ja/docs/Web/SVG)
