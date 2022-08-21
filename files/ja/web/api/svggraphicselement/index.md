---
title: SVGGraphicsElement
slug: Web/API/SVGGraphicsElement
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG OM
translation_of: Web/API/SVGGraphicsElement
---
<div>{{APIRef("SVG")}}</div>

<p><strong><code>SVGGraphicsElement</code></strong> インターフェイスは、直接グループにグラフィックを描画することを主な目的とした SVG 要素を表します。</p>

<p>{{InheritanceDiagram(600, 120)}}</p>

<div class="note">
<p><strong>メモ:</strong> このインターフェイスは SVG 2 で導入され、 SVG 1.1 で導入された {{domxref("SVGLocatable")}} および {{domxref("SVGTransformable")}} インターフェイスを置き換えています。</p>
</div>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスは親である {{domxref("SVGElement")}} からプロパティを継承しています。</em></p>

<dl>
 <dt>{{domxref("SVGGraphicsElement.transform")}} {{ReadOnlyInline}}</dt>
 <dd>{{domxref("SVGAnimatedTransformList")}} で、指定された要素の {{cssxref("transform")}} プロパティおよび関連する {{SVGAttr("transform")}} 属性の計算値を反映します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスは親である {{domxref("SVGElement")}} からメソッドを継承しています。</em></p>

<dl>
 <dt>{{domxref("SVGGraphicsElement.getBBox()")}}</dt>
 <dd>{{domxref("DOMRect")}} で、現在の要素の計算上の囲みボックスを返します。</dd>
 <dt>{{domxref("SVGGraphicsElement.getCTM()")}}</dt>
 <dd>{{domxref("DOMMatrix")}} で、現在の要素の座標系をその SVG ビューポートの座標系に変換する行列を返します。</dd>
 <dt>{{domxref("SVGGraphicsElement.getScreenCTM()")}}</dt>
 <dd>{{domxref("DOMMatrix")}} で、現在の要素の座標系を SVG 文書フラグメントの SVG ビューポートの座標系に変換する行列を返します。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("SVG2", "types.html#InterfaceSVGGraphicsElement", "SVGGraphicsElement")}}</td>
   <td>{{Spec2("SVG2")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.SVGGraphicsElement")}}</p>
