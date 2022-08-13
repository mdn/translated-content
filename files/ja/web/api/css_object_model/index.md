---
title: CSS オブジェクトモデル (CSSOM)
slug: Web/API/CSS_Object_Model
tags:
  - API
  - CSSOM
  - Overview
  - Reference
  - 概要
translation_of: Web/API/CSS_Object_Model
---
<p>{{DefaultAPISidebar("CSSOM")}}</p>

<p class="summary"><strong>CSS オブジェクトモデル</strong>は CSS を JavaScript から操作するための API の集合です。これは DOM にとても良く似ていますが、 HTML ではなく CSS のためのものです。これにより CSS スタイルを動的に読んだり変更したりすることができます。</p>
<p>CSS の値は型を使わずに表現しますので、 {{JSxRef("String")}} オブジェクトを使用します。</p>

<h2 id="Reference">リファレンス</h2>

<div class="index">
<ul>
 <li>{{DOMxRef("AnimationEvent")}}</li>
 <li>{{DOMxRef("CaretPosition")}}</li>
 <li>{{DOMxRef("CSS")}}</li>
 <li>{{DOMxRef("CSSCharsetRule")}}</li>
 <li>{{DOMxRef("CSSConditionRule")}}</li>
 <li>{{DOMxRef("CSSCounterStyleRule")}}</li>
 <li>{{DOMxRef("CSSFontFaceRule")}}</li>
 <li>{{DOMxRef("CSSFontFeatureValuesMap")}}</li>
 <li>{{DOMxRef("CSSFontFeatureValuesRule")}}</li>
 <li>{{DOMxRef("CSSGroupingRule")}}</li>
 <li>{{DOMxRef("CSSImportRule")}}</li>
 <li>{{DOMxRef("CSSKeyframeRule")}}</li>
 <li>{{DOMxRef("CSSKeyframesRule")}}</li>
 <li>{{DOMxRef("CSSMarginRule")}}</li>
 <li>{{DOMxRef("CSSMediaRule")}}</li>
 <li>{{DOMxRef("CSSNamespaceRule")}}</li>
 <li>{{DOMxRef("CSSPageRule")}}</li>
 <li>{{DOMxRef("CSSRule")}}</li>
 <li>{{DOMxRef("CSSRuleList")}}</li>
 <li>{{DOMxRef("CSSStyleDeclaration")}}</li>
 <li>{{DOMxRef("CSSStyleSheet")}}</li>
 <li>{{DOMxRef("CSSStyleRule")}}</li>
 <li>{{DOMxRef("CSSSupportsRule")}}</li>
 <li>{{DOMxRef("CSSVariablesMap")}}</li>
 <li>{{DOMxRef("CSSViewportRule")}}</li>
 <li>{{DOMxRef("FontFace")}}</li>
 <li>{{DOMxRef("FontFaceSet")}}</li>
 <li>{{DOMxRef("FontFaceSetLoadEvent")}}</li>
 <li>{{DOMxRef("GetStyleUtils")}}</li>
 <li>{{DOMxRef("MediaList")}}</li>
 <li>{{DOMxRef("MediaQueryList")}}</li>
 <li>{{DOMxRef("MediaQueryListEvent")}}</li>
 <li>{{DOMxRef("Screen")}}</li>
 <li>{{DOMxRef("StyleSheet")}}</li>
 <li>{{DOMxRef("StyleSheetList")}}</li>
 <li>{{DOMxRef("TransitionEvent")}}</li>
</ul>
</div>

<p>他にも CSSOM に関する仕様書で拡張されているインターフェイスがあります。 {{DOMxRef("Document")}}, {{DOMxRef("Window")}}, {{DOMxRef("Element")}}, {{DOMxRef("HTMLElement")}}, {{DOMxRef("HTMLImageElement")}}, {{DOMxRef("Range")}}, {{DOMxRef("MouseEvent")}}, {{DOMxRef("SVGElement")}} です。</p>

<h3 id="CSS_Typed_Object_Model">CSS 型付きオブジェクトモデル {{Experimental_Inline}}</h3>

<p>{{SeeCompatTable}}</p>

<div class="index">
<ul>
 <li>{{DOMxRef("CSSImageValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSKeywordValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathInvert")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathMax")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathMin")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathNegate")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathProduct")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathSum")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMathValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSMatrixComponent")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSNumericArray")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSNumericValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSPerspective")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSPositionValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSRotate")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSScale")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSSkew")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSSkewX")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSSkewY")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSStyleValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSTransformComponent")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSTransformValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSTranslate")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSUnitValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSUnparsedValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("CSSVariableReferenceValue")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("StylePropertyMap")}} {{Experimental_Inline}}</li>
 <li>{{DOMxRef("StylePropertyMapReadOnly")}} {{Experimental_Inline}}</li>
</ul>
</div>

<h3 id="Obsolete_CSSOM_interfaces">廃止された CSSOM インターフェイス {{deprecated_inline}}</h3>

<p>{{deprecated_header}}</p>

<div class="index">
<ul>
 <li>{{DOMxRef("CSSPrimitiveValue")}} {{deprecated_inline}}</li>
 <li>{{DOMxRef("CSSValue")}} {{deprecated_inline}}</li>
 <li>{{DOMxRef("CSSValueList")}} {{deprecated_inline}}</li>
</ul>
</div>

<h2 id="Tutorials">チュートリアル</h2>

<ul>
 <li><a href="/ja/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements">Determining the dimensions of elements</a> (これは DHTML/Ajax 時代に作られたのでいくらか更新が必要です)。</li>
 <li><a href="/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">画面の向きの管理</a></li>
</ul>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("CSS Typed OM")}}</td>
   <td>{{Spec2("CSS Typed OM")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS Painting API")}}</td>
   <td>{{Spec2("CSS Painting API")}}</td>
   <td>{{DOMxRef("CSS")}} インターフェイスを {{DOMxRef("CSS.paintWorklet","paintWorklet")}} 静的プロパティで拡張。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSSOM View")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>{{DOMxRef("Screen")}} および {{DOMxRef("MediaQueryList")}} インターフェイスと {{DOMxRef("MediaQueryListEvent")}} イベントと {{DOMxRef("MediaQueryListListener")}} イベントリスナーを定義。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSSOM")}}</td>
   <td>{{Spec2("CSSOM")}}</td>
   <td>{{DOMxRef("CSS")}} インターフェイスを拡張し、最新の CSSOM 仕様書の基礎を提供。</td>
  </tr>
  <tr>
   <td>{{SpecName("Screen Orientation")}}</td>
   <td>{{Spec2("Screen Orientation")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Fonts")}}</td>
   <td>{{Spec2("CSS3 Fonts")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Animations")}}</td>
   <td>{{Spec2("CSS3 Animations")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Transitions")}}</td>
   <td>{{Spec2("CSS3 Transitions")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Variables")}}</td>
   <td>{{Spec2("CSS3 Variables")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Conditional")}}</td>
   <td>{{Spec2("CSS3 Conditional")}}</td>
   <td>{{DOMxRef("CSS")}} インターフェイスを定義。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Device")}}</td>
   <td>{{Spec2("CSS3 Device")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Counter Styles")}}</td>
   <td>{{Spec2("CSS3 Counter Styles")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Style")}}</td>
   <td>{{Spec2("DOM2 Style")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>この機能のすべてはさまざまなブラウザーで何年かけて少しずつ追加されてきました。これは簡単なページにまとめることができないとても複雑なプロセスでした。利用できるかについてはそれぞれのインターフェイスを参照してください。</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Document_Object_Model">Document Object Model (DOM)</a></li>
 <li><a href="/ja/docs/Web/Houdini/">Houdini</a></li>
</ul>
